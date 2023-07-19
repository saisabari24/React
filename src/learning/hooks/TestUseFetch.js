import React from "react";
import useFetch from "./useFetch";

const TestUseFetch = () => {
  const url = "https://jsonplaceholder.typicode.com/users";
  const { loading, error, data = [] } = useFetch(url);

  if (error) return <h3 className="text-danger">Error.. try again</h3>;
  if (loading) {
    return <h3 className="text-primary">Loading .. pleae wait</h3>;
  }
  return (
    <div className="bg-info">
      <h2 className="bg-dark text-light">
        Data from rest api with custom hook
      </h2>
      <ul>
        {data?.map((el) => (
          <li key={el.id}>
            {el.username} - {el.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TestUseFetch;
