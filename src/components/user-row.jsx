import React from "react";

const UserRow = ({ user, deleteEmployeeByID, editEmployee }) => {
  return (
    <tr className="flex gap-40">
      <td>
        <div className="avatar">
          <div className="w-12 h-12 mask mask-squircle">
            <img
              className="rounded-full"
              src={user.profileImg}
              alt="Avatar Tailwind CSS Component"
            />
          </div>
        </div>
      </td>
      <td>
        <div className="flex items-center gap-3">
          <div>
            <div className="font-bold">{user.firstname}</div>
          </div>
        </div>
      </td>
      <td>
        <span className="badge badge-primary badge-outline badge-sm">
          {user.position}
        </span>
      </td>
      <td>{user.email}</td>
      <td>
        <button
          onClick={() => {
            console.log(user.eid);
            editEmployee(user.eid);
          }}
          className="btn btn-outline btn-info btn-xs"
        >
          Edit
        </button>
        <button
          onClick={() => {
            console.log(user.eid);
            deleteEmployeeByID(user.eid);
          }}
          className="btn btn-outline btn-error btn-xs"
        >
          delete
        </button>
      </td>
    </tr>
  );
};

export default UserRow;
