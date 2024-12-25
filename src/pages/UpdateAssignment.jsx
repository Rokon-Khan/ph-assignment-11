import { useContext, useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useLoaderData, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../authprovider/AuthProvider";
const UpdateAssignment = () => {
  const data = useLoaderData();
  console.log(data);
  const { id: productId } = useParams();
  console.log(productId);
  const { user } = useContext(AuthContext);
  const [startDate, setStartDate] = useState(new Date());

  const [assignments, SetAssignments] = useState({});
  console.log(assignments);

  useEffect(() => {
    const singleAssignment = data.find(
      (assignment) => assignment._id == productId
    );
    SetAssignments(singleAssignment);
  }, [data, productId]);
  const { assignmentTitle, photo, description, date, number, difficulty } =
    assignments || {};

  const handleUpdateAssignment = (e) => {
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
    fetch(`${import.meta.env.VITE_API_URL}/allassignmnets/${productId}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(addNewAsignment),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          console.log("Successfully added");
          Swal.fire({
            title: "Success!",
            text: "Assignment Upadated successfully",
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
          text: "Failed to Update Assignment. Please try again later.",
          icon: "error",
          confirmButtonText: "Ok",
        });
      });
  };
  return (
    <div>
      <div className="w-full h-[250px] bg-orange-600 text-center text-white space-y-3  py-6">
        <h2 className="text-3xl font-bold">Update Your Assignment</h2>
        <p className=" max-w-[796px] mx-auto">
          Ready to make a difference? Start your own Assignment today! Whether
          its a personal cause, a community initiative, a creative project, or a
          life-changing event, our platform empowers you to bring your vision to
          life.
        </p>
      </div>
      <div className="card bg-base-100 w-full lg:max-w-screen-lg max-w-sm mx-auto my-10 shrink-0 shadow-2xl">
        <form onSubmit={handleUpdateAssignment} className="card-body">
          {/* Title Row & Photo Row*/}
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-6">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Assignment Title</span>
              </label>
              <input
                type="text"
                defaultValue={assignmentTitle}
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
                defaultValue={photo}
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
                  defaultValue={difficulty}
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
                  defaultValue={description}
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
                defaultValue={number}
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
                defaultValue={date}
                required
                name="date"
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
              Update Assignment
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateAssignment;
