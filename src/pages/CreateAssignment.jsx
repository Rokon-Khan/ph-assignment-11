import React, { useContext, useState } from "react";
import DatePicker from "react-datepicker";
import Swal from "sweetalert2";
import { AuthContext } from "../authprovider/AuthProvider";

import "react-datepicker/dist/react-datepicker.css";
const CreateAssignment = () => {
  const { user } = useContext(AuthContext);
  const [startDate, setStartDate] = useState(new Date());
  const handleAddNewAssignment = (e) => {
    e.preventDefault();

    const assignmentTitle = e.target.assignmentTitle.value;
    const email = e.target.email.value;
    const userName = e.target.userName.value;
    const photo = e.target.photo.value;
    const number = e.target.number.value;
    const description = e.target.description.value;
    const difficulty = e.target.difficulty.value;
    const date = e.target.date.value;

    const addNewAsignment = {
      assignmentTitle,
      email,
      userName,
      photo,
      number,
      description,
      difficulty,
      date,
    };

    console.log(addNewAsignment);

    // Send data to the server and database
    fetch(`${import.meta.env.VITE_API_URL}/allassignmnets`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(addNewAsignment),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          console.log("Successfully added");
          Swal.fire({
            title: "Success!",
            text: "New Assignment added successfully",
            icon: "success",
            confirmButtonText: "Ok",
          });
          e.target.reset();
        }
      })
      .catch((error) => {
        console.error("Error adding campaign:", error);
        Swal.fire({
          title: "Error!",
          text: "Failed to Create Assignment Please try again later.",
          icon: "error",
          confirmButtonText: "Ok",
        });
      });
  };
  return (
    <div>
      <div className="w-full h-[250px] bg-orange-600 text-center text-white space-y-3  py-6">
        <h2 className="text-3xl font-bold">Create New Assignment</h2>
        <p className=" max-w-[796px] mx-auto">
          Ready to make a difference? Start your own Assignment today! Whether
          its a personal cause, a community initiative, a creative project, or a
          life-changing event, our platform empowers you to bring your vision to
          life.
        </p>
      </div>
      <div className="card bg-base-100 w-full lg:max-w-screen-lg max-w-sm mx-auto my-10 shrink-0 shadow-2xl">
        <form onSubmit={handleAddNewAssignment} className="card-body">
          {/* Title Row & Photo Row*/}
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-6">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Assignment Title</span>
              </label>
              <input
                type="text"
                name="assignmentTitle"
                placeholder="Write Your Campaign Title"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Assignment Photo URL</span>
              </label>
              <input
                type="text"
                required
                name="photo"
                placeholder="Input Campaign Photo URL"
                className="input input-bordered"
              />
            </div>
          </div>
          {/* Campaign Type & Description*/}
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-6">
            <div>
              <label className="form-control w-full ">
                <div className="label">
                  <span className="label-text">
                    Slect Assignment Difficulty Level
                  </span>
                </div>
                <select
                  className="select select-bordered"
                  name="difficulty"
                  defaultValue="default"
                  required
                >
                  <option value="default" disabled>
                    Select Assignment Difficulty Level
                  </option>
                  <option value="Easy">Easy</option>
                  <option value="Medium">Medium</option>
                  <option value="Hard">Hard</option>
                </select>
              </label>
            </div>

            <div className="form-control">
              <label className="form-control">
                <div className="label">
                  <span className="label-text">
                    Write Your Assignment Description
                  </span>
                </div>
                <input
                  type="text"
                  name="description"
                  placeholder="Write Your Assignment Description"
                  className="input input-bordered"
                  required
                />
              </label>
            </div>
          </div>
          {/* Campaign Date and Donation amount Row*/}
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-6">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Total Assignment Marks</span>
              </label>
              <input
                type="number"
                name="number"
                placeholder="Write your Total Assignment Marks"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Assignment Createtion Date</span>
              </label>
              {/* <input
                type="date"
                required
                name="date"
                placeholder="Photo URL"
                className="input input-bordered"
              /> */}
              <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                required
                name="date"
                placeholder="Photo URL"
                className="input input-bordered w-full"
              />
            </div>
          </div>
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-6">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Your Email</span>
              </label>
              <input
                type="Email"
                name="email"
                defaultValue={user?.email}
                readOnly
                placeholder="Your Email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">User Name</span>
              </label>
              <input
                type="text"
                required
                name="userName"
                readOnly
                defaultValue={user?.displayName}
                placeholder="Your Name"
                className="input input-bordered"
              />
            </div>
          </div>

          <div className="form-control mt-6">
            <button className="btn bg-orange-600 text-xl font-bold text-white">
              Create New Assignment
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateAssignment;
