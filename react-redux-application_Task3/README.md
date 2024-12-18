1. Using Redux and RTK Query for State and API Calls.
- RTK Query makes it easy to communicate with server. It helps request data and store it.
- The "serverApi" get posts from the server (using getData) and add new posts (using addData).

2. Fetching and Displaying Posts.
- The PostView is a list that shows all the posts. The useGetDataQuery help get the posts from the server.
- RTK Query takes care of showing "loading…" while it waits for the server and saving the posts.

3. Adding New Posts with PostForm.
- The PostForm is a form where can write and add a new post. useAddDataMutation help send the new post to the server.
- When submit the form, the app sends the post to the server and waits for success message.
- On success the app adds the new post to the list.