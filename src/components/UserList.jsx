import React, { useEffect, useState } from "react";
import UserRow from "./user-row";
import UserHead from "./user-head";

const UserList = () => {
  const [users, SetUsers] = useState();
  const getEmployeesData = async () => {
    const res = await fetch("http://localhost:8000/users");
    const { users } = await res.json();
    SetUsers(users);
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
            <UserRow user={user} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserList;
