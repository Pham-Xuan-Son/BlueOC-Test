First, create a new React app using Yarn.

Next, install the necessary libraries for your project, including Redux.

Create a folder named 'services', then create file name 'serverApi' to defines an RTK Query API and do CRUD action.

Create a file name 'store' at root to configures the Redux store with the serverApi reducer and middleware.

In App.js file, wrap the app inside the Provider and connect it to the Redux store.

Create a file named PlaceholderListView to display the list and fetch data from the Redux store.

Create a file named PostForm.js to add a form where users can enter new data and submit it.



Use 'yarn start' to run app.