import React, { useState } from "react";
import {
  useGetDataQuery,
  useAddDataMutation,
  serverApi,
} from "./services/serverApi";
import { useDispatch } from "react-redux";

const PostForm = () => {
  const [value, setValue] = useState({
    userId: 1,
    title: "",
    body: "",
  });
  const [addData, { isLoading }] = useAddDataMutation();
  const { data } = useGetDataQuery();
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const newData = await addData({ id: data.length + 1, ...value }).unwrap();
      dispatch(
        serverApi.util.updateQueryData("getData", undefined, (draft) => {
          draft.push(newData);
        })
      );
      setValue({ userId: 1, title: "", body: "" });
    } catch (err) {
      console.error("Failed to add post:", err);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
      <h2>Add New</h2>
      <table style={{ tableLayout: "fixed", width: "250px" }}>
        <tbody>
          <tr>
            <td style={{ width: "60px" }}>
              <label htmlFor="title">User ID</label>
            </td>
            <td>
              <input
                id="userId"
                type="number"
                value={value.userId}
                onChange={(e) =>
                  setValue((prev) => ({ ...prev, userId: e.target.value }))
                }
                required
              />
            </td>
          </tr>
          <tr>
            <td>
              <label htmlFor="title">Title</label>
            </td>
            <td>
              <input
                id="title"
                type="text"
                value={value.title}
                onChange={(e) =>
                  setValue((prev) => ({ ...prev, title: e.target.value }))
                }
                required
              />
            </td>
          </tr>
          <tr>
            <td>
              <label htmlFor="body">Body</label>
            </td>
            <td>
              <input
                id="body"
                type="text"
                value={value.body}
                onChange={(e) =>
                  setValue((prev) => ({ ...prev, body: e.target.value }))
                }
                required
              />
            </td>
          </tr>
        </tbody>
      </table>
      <button style={{ marginTop: "10px" }} type="submit" disabled={isLoading}>
        {isLoading ? "Adding..." : "Add New"}
      </button>
    </form>
  );
};

export default PostForm;
