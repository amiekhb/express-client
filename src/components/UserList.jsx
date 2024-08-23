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
        email: "",
        position: "",
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
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstname: "Saraa",
        lastname: "Davaa",
        email: "saraa@gmail.com",
        position: "aaaa",
        profileImg: "https://img.daisyui.com/images/profile/demo/2@94.webp",
      }),
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
        {/* Open the modal using document.getElementById('ID').showModal() method */}
        <button
          className="btn  btn-outline btn-success"
          onClick={() => document.getElementById("my_modal_2").showModal()}
        >
          Create user
        </button>
        <dialog id="my_modal_2" className="modal">
          <div className="modal-box">
            <h3 className="font-bold text-lg">Hello!</h3>
            <input
              className="rounded-md p-2 m-3"
              type="name"
              placeholder="Name"
            />
            <input
              className="rounded-md p-2 m-3"
              type="job"
              placeholder="Position"
            />
            <input
              className="rounded-md p-2 m-3"
              type="mail"
              placeholder="E-mail"
            />
            <input
              className="rounded-md p-2 m-3"
              type="file"
              placeholder="Image"
            />
            <div className="modal-action">
              <form method="dialog">
                <button className="btn">Close</button>
                <button
                  onClick={() => {
                    createEmployee();
                  }}
                  className="btn btn-outline btn-success  "
                >
                  Create user
                </button>
              </form>
            </div>
          </div>
        </dialog>
      </div>
    </div>
  );
};

export default UserList;
