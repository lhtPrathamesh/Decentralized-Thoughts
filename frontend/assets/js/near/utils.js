import { connect, Contract, keyStores, WalletConnection } from "near-api-js";
import getConfig from "./config";

const nearConfig = getConfig(process.env.NODE_ENV || "development");

export async function initContract() {
  const near = await connect(
    Object.assign(
      { deps: { keyStore: new keyStores.BrowserLocalStorageKeyStore() } },
      nearConfig
    )
  );

  window.walletConnection = new WalletConnection(near);

  window.accountId = window.walletConnection.getAccountId();

  window.contract = await new Contract(
    window.walletConnection.account(),
    nearConfig.contractName,
    {
      viewMethods: ["get_articles"],
      changeMethods: ["create_article"],
    }
  );
}

export function logout() {
  window.walletConnection.signOut();
  window.location.replace(window.location.origin + window.location.pathname);
}

export function login() {
  window.walletConnection.requestSignIn(nearConfig.contractName);
}

export async function createArticle(name, heading, author, content, fileUrl) {
  let contract = await window.contract.create_article({
    artcleName: name,
    artcleHeading: heading,
    author: author,
    content: content,
    articleImage: fileUrl,
  });

  return contract;
}

export async function getArticles() {
  let response = await window.contract.get_articles({
    user: window.accountId,
  });

  return response;
}
