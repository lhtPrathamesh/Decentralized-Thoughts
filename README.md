# Decentralized-Thoughts

Decentralized-Thoughts is a NEAR blockchain based project
which includes creation of articles on NEAR blockchain.
User can store their thoughts or unique articles on blockchain
as decentralized data.
Also through this portal user can see their articles.
This project includes both read and write data on NEAR blockchain.

This project includes following features -

- Login with NEAR wallet
- Creation of article by filling form details
- View created articles under My Articles section
- Navigate to NEAR Explorer
- Logout

![Landing Page](https://firebasestorage.googleapis.com/v0/b/facebook-clone-8d47f.appspot.com/o/readme%20image.png?alt=media&token=e1a819a2-9039-4055-84a9-c5e9328f1621)
![Article Page](https://firebasestorage.googleapis.com/v0/b/facebook-clone-8d47f.appspot.com/o/readme%202.png?alt=media&token=6d765a28-a3ca-4631-8592-d26e70f35a6a)

### Script and Technologies Used

- Assembly Script for smart contract
- React JS for frontend
- CSS for styling
- TypeScript and JavaScript as scripting language

### Smart Contracts Used In Project

#### Change Method

`create_article`

#### View Method

`get_articles`

```bash
  export function create_article(articleName:string, articleHeading:string, author:string, content:string, articleImage:string): void {
   // Create article logic
  }

  export function get_articles(user:string):string[] {
   // View articles logic
  }

```

### Steps for local Setup

- Prerequisites: Make sure you've installed [Node.js] ≥ 12 and `yarn latest version`
- Clone the repository - `https://github.com/lhtPrathamesh/Decentralized-Thoughts.git`
- Install dependencies: `yarn install`
- Run the local development server: `yarn dev` (see `package.json` for a
  full list of `scripts` you can run with `yarn`)

Now you'll have a local development environment backed by the NEAR TestNet!

### Exploring The Code

- The "backend" code lives in the `/contract` folder. See the README there for
  more info.
- The frontend code lives in the `/frontend` folder. `/frontend/index.html` is a great
  place to start exploring. Note that it loads in `/frontend/assets/js/index.js`, where you
  can learn how the frontend connects to the NEAR blockchain.
- Tests: there are different kinds of tests for the frontend and the smart
  contract. See `contract/README` for info about how it's tested. The frontend
  code gets tested with [jest]. You can run both of these at once with `yarn run test`.
