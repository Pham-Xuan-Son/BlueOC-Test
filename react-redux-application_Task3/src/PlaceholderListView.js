import React from "react";
import { useGetDataQuery } from "./services/serverApi";

export default function PlaceholderListView() {
  const { data, isLoading, isFetching, isError, error } = useGetDataQuery();

  if (isLoading || isFetching) {
    return <div>loading...</div>;
  }

  if (isError) {
    console.log({ error });
    return <div>{error.status}</div>;
  }

  return (
    <>
      <h3>List</h3>
      <table
        style={{
          border: "1px solid black",
          width: "100%",
          borderCollapse: "collapse",
        }}
      >
        <thead>
          <tr>
            <th
              style={{
                border: "1px solid black",
                padding: "8px",
                textAlign: "left",
              }}
            >
              User ID
            </th>
            <th
              style={{
                border: "1px solid black",
                padding: "8px",
                textAlign: "left",
              }}
            >
              Title
            </th>
            <th
              style={{
                border: "1px solid black",
                padding: "8px",
                textAlign: "left",
              }}
            >
              Body
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((data) => (
            <tr key={data.id}>
              <td style={{ border: "1px solid black", padding: "8px" }}>
                {data.userId}
              </td>
              <td style={{ border: "1px solid black", padding: "8px" }}>
                {data.title}
              </td>
              <td style={{ border: "1px solid black", padding: "8px" }}>
                {data.body}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
