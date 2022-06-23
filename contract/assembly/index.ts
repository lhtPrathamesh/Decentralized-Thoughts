import {Context, logging, PersistentMap,} from "near-sdk-as"

const articles = new PersistentMap<string, string[]>('articles');


// Change Method
export function create_article(artcleName:string, artcleHeading:string, author:string, content:string, articleImage:string): void {
  logging.log("Adding articles..." + Context.sender);
  
  if(articles.contains(Context.sender)) {
    let senderArticle = articles.getSome(Context.sender);
    senderArticle.push(`${artcleName}---${artcleHeading}---${author}---${content}---${articleImage}`);
    articles.set(Context.sender, senderArticle);
  } else{
    articles.set(Context.sender, [`${artcleName}---${artcleHeading}---${author}---${content}---${articleImage}`])
  }
}


// View Method
export function get_articles(user:string):string[] {
  if(articles.contains(user)) {
    return articles.getSome(user)
  } else {
    logging.log("No articles were found for this user");
    return [];
  }
}