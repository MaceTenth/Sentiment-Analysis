# Evaluate A News Article with Natural Language Processing

Project at [Udacity](https://www.udacity.com/course/front-end-web-developer-nanodegree) Front End Web Developer Nanodegree program.

This project aims to build a web tool that allows users to run Natural Language Processing (NLP) on articles or blogs found on other websites. When a user submits a URL of an article, the web page then dispalys sentiment analysis returned from [meaningcloud API](https://www.meaningcloud.com/products/sentiment-analysis), based on the contents of the article.

## Build Tools

- HTML
- CSS
- JavaScript
- Node
- Express
- Webpack
- meaningcloud API
- Jest
- Workbox

## Installation

1. Move to the project folder

```
cd <project directory>
```

2. Clone the repo

```
git clone <repo>
```

3. Install npm

```
npm install ֻ|| npm i
```

4. Install loaders and plugins

```
# Choose the necessary installation for your development mode
npm i -D @babel/core @babel/preset-env babel-loader
npm i -D style-loader node-sass css-loader sass-loader
npm i -D clean-webpack-plugin
npm i -D html-webpack-plugin
npm i -D mini-css-extract-plugin
npm i -D optimize-css-assets-webpack-plugin terser-webpack-plugin
```

5. Sign up for an API key at [meaningcloud.com](https://www.meaningcloud.com/developer/create-account)

6. Configure environment variables using dotenv package
   1. Install the dotenv package
   ```
   npm install dotenv
   ```
   2. Create a new `.env` file in the root of your project
   3. Fill the `.env` file with your API key like this:
   ```
   API_KEY=**************************
   ```
7. Start the project

| Command | Action |
| :-----: | :----: |

Open 2 terminals:

In the 1st run:
`npm run build-prod` | Build project

It runs the client side part and forwards the request to the server side.
The HTML and design rules in addition to service workers created here to provide a great user experience.

An page will automatically open at http://localhost:8080/

In the 2nd run:
`npm start` | Run project

It runs the part of the requests page to the meaning cloud API and getting responses from it.

Preview of the app

![Screenshot_1](https://user-images.githubusercontent.com/24371316/119221411-fa106900-baf7-11eb-88f0-a4c03349e103.png)

