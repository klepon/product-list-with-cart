## About

This is demo product listing with cart on the sidebar by Angga - bugs1945@gmail.com

This App using FB create-react-app as the boilerplate with additional npm package as list below

* placeholder image - https://www.npmjs.com/package/react-placeholder-image

* bootstrap 4 style - https://getbootstrap.com/

* axios to get api end point data - https://github.com/axios/axios

Since this is simple apps, it did not use redux and only use react state with all function controller in main js file (App.js)

There are 3 modules which a dummy component and used for render the page:

1. card.jsx for the product panel

2. cart.jsx for the cart panel on side bar. This module containe logic to show no items message or items listing

3. cartItem.jsx for cart item

## How to use for development

The package manager design for use in Linux or Wac, Windows user may find issue using this app

* Download the source file

* Make sure to use node version 10.13

* With terminal/command line go to directory and run `yarn install`

* `yarn start` to run the app

## How to test

* With terminal/command line go to directory and run `yarn test`

Better to use 2 terminals, one for development and one more for testing

Unit test using jest and react testing library that include in the apps boilerplate

### Testing covered

* renders without crashing

* convert cent to dollars function

* render product card

* render sold out product card when qty equal 0

* render cart item

Other available scripts is listed bellow

## Original readme file from create-react-app

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
