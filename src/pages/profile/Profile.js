import React, { useEffect, useState } from "react";
import { useUserContext } from "../../context/UserContext";

export const Profile = () => {
  const [data, setData] = useState([]);
  const [count, setCount] = useState(0);
  const { user, setUser } = useUserContext();
  const [userName, setUserName] = useState(user.name);
  const [userEmail, setUserEmail] = useState(user.email);

  const nameChange = (event) => {
    setUserName(event.target.value);
  };
  const emailChange = (event) => {
    setUserEmail(event.target.value);
  };

  const saveUser = () => {
    setUser({
      name: userName,
      email: userEmail,
    });

    localStorage.setItem(
      "user",
      JSON.stringify({ name: userName, email: userEmail })
    );
    console.log(user);
  };

  const increment = () => {
    setCount((prev) => prev + 1);
  };
  const decrement = () => {
    setCount((prev) => (prev > 0 ? prev - 1 : prev));
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/comments?postId=${count}`
        );
        const data = await response.json();
        setData(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [count]);

  return (
    <div>
      <div>
        <h1>Profile Page</h1>
        <h2>User Name: {user.name}</h2>
        <input type="text" value={userName} onChange={nameChange} />
        <h2>User Email: {user.email}</h2>
        <input type="text" value={userEmail} onChange={emailChange} />
        <button onClick={saveUser}>Update User Information</button>
      </div>

      <div style={{ display: "flex", flexDirection: "column" }}>
        <h1>Post Id: {count}</h1>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <button onClick={increment}>Increment</button>
          <button onClick={decrement}>Decrement</button>
          {data.length > 0 &&
            data.map((post, index) => {
              return (
                <div key={index}>
                  <h4>{post.email}</h4>
                  <p>{post.body}</p>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};
