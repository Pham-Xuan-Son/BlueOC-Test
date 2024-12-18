import PlaceholderListView from "./PlaceholderListView";
import PostForm from "./PostForm";
import { Provider } from "react-redux";
import { store } from "./store";
function App() {
  return (
    <Provider store={store}>
      <div style={{ padding: "20px" }}>
        <PostForm />
        <PlaceholderListView />
      </div>
    </Provider>
  );
}

export default App;
