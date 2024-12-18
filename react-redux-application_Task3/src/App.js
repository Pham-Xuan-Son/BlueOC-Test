import PostView from "./PostView";
import PostForm from "./PostForm";
import { Provider } from "react-redux";
import { store } from "./store";
function App() {
  return (
    <Provider store={store}>
      <div style={{ padding: "20px", display: "flex", gap: "20px" }}>
        <PostForm />
        <PostView />
      </div>
    </Provider>
  );
}

export default App;
