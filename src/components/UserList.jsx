import React, { useEffect, useState } from "react";
import UserRow from "./user-row";
import UserHead from "./user-head";

const UserList = () => {
  const [users, setUsers] = useState();
  const getEmployeesData = async () => {
    const res = await fetch("http://localhost:8000/users");
    const { users } = await res.json();
    setUsers(users);
  };

  const deleteEmployeeByID = async (id) => {
    const res = await fetch(`http://localhost:8000/users/${id}`, {
      method: "DELETE",
    });
    const { users } = await res.json();
    console.log("success", users);
    getEmployeesData();
  };

  const createEmployee = async () => {
    const res = await fetch("http://localhost:8000/users", {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({
        firstname: "Navchaa",
        lastname: "Davaa",
        email: "navchaa@gmail.com",
        position: "Developer",
        profileImg: "https://img.daisyui.com/images/profile/demo/2@94.webp",
      }),
    });
    const { user } = await res.json();
    console.log("AE", user);
    setUsers([...users, user]);
  };

  const editEmployee = async (id) => {
    const res = await fetch(`http://localhost:8000/users/${id}`, {
      method: "PUT",
    });
    const { users } = await res.json();
    getEmployeesData();
  };

  useEffect(() => {
    getEmployeesData();
  }, []);

  return (
    <div className="overflow-x-auto">
      <table className="table">
        <thead>
          <UserHead />
        </thead>
        <tbody>
          {users?.map((user) => (
            <UserRow
              user={user}
              deleteEmployeeByID={deleteEmployeeByID}
              editEmployee={editEmployee}
            />
          ))}
        </tbody>
      </table>
      <div>
        <button
          onClick={() => {
            createEmployee();
          }}
          className="btn btn-outline btn-success  "
        >
          Nemeh
        </button>
      </div>
    </div>
  );
};

export default UserList;
