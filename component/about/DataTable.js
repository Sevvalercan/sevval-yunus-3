import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

export default function DataTable() {
  const [data, setData] = useState(null);
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/todos").then((res) => {
      setData(res.data);
    });
  }, []);
  console.log(process.env.authAPIkey);

  return (
    <div className="d-flex justify-content-center" style={{ height: "80vh" }}>
      <table className="table table-dark">
        <thead>
          <tr>
            <th scope="col">userId</th>
            <th scope="col">title</th>
            <th scope="col">completed</th>
          </tr>
        </thead>
        <tbody>
          {/* ?-> typeeror hatasını engeller */}
          {data?.map((item) => (
            <tr key={item.id}>
              <th scope="row">{item.userId}</th>
              <td>{item.title}</td>
              <td>{item.completed}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
