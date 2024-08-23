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
          className="btn btn-outline btn-info btn-xs"
          onClick={() => document.getElementById("my_modal_1").showModal()}
        >
          Edit
        </button>
        <dialog id="my_modal_1" className="modal">
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
              <form method="dialog p-2">
                <button className="btn">Close</button>
                <button
                  onClick={() => {
                    editEmployee(user.eid);
                  }}
                  className="btn"
                >
                  Save change
                </button>
              </form>
            </div>
          </div>
        </dialog>
        {/* <button
          onClick={() => {
            console.log(user.eid);
            editEmployee(user.eid);
          }}
          className="btn btn-outline btn-info btn-xs"
        >
          Edit
        </button> */}
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
