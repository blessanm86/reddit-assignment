# reddit-assignment

An assignment that clones the reddit post and comments page.
[\*\*Click here to view the demo](https://adb-reddit-assignment.netlify.app/)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

## Notes

1. Uses [EmotionCSS](https://emotion.sh/docs/introduction) for styling.
2. The post id is hard coded. In the real world it would ideally come from the url.
3. The app is responsive but the UX is not fully optimized for mobile.
4. Uses [react-query](https://react-query.tanstack.com/) as a server state management library.
5. Uses [date-fns](https://date-fns.org/) to calculate the comment time difference.
