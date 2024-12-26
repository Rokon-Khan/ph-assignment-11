import { useContext, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Swal from "sweetalert2";
import { AuthContext } from "../authprovider/AuthProvider";
const TakeAssignment = () => {
  const { user } = useContext(AuthContext);
  const [startDate, setStartDate] = useState(new Date());

  const handleAddNewAssignment = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const feedback = e.target.feedback.value;
    const file = e.target.file.value;
    const date = e.target.date.value;

    const assignmentSubmission = {
      feedback,
      email,
      file,
      date,
      status: "Pending",
    };

    console.log(assignmentSubmission);

    // Send data to the server and database
    fetch(`${import.meta.env.VITE_API_URL}/takeassignment`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(assignmentSubmission),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          console.log("Successfully added");
          Swal.fire({
            title: "Success!",
            text: "New Assignment Created successfully",
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
        <h2 className="text-3xl font-bold">Submit your Assignment</h2>
        <p className=" max-w-[796px] mx-auto">
          Ready to make a difference? Start your own Assignment today! Whether
          its a personal cause, a community initiative, a creative project, or a
          life-changing event, our platform empowers you to bring your vision to
          life.
        </p>
      </div>
      <div className="card bg-base-100 w-full lg:max-w-screen-md max-w-sm mx-auto my-10 shrink-0 shadow-2xl">
        <form onSubmit={handleAddNewAssignment} className="card-body">
          {/* Campaign Type & Description*/}
          <div className="grid  grid-cols-1 gap-6">
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
                <span className="label-text">Input Your Google Docs Link</span>
              </label>
              <input
                type="text"
                name="file"
                placeholder="Input Your Google docs Link"
                className="input input-bordered"
                required
              />
            </div>

            <div className="form-control">
              <label className="form-control">
                <div className="label">
                  <span className="label-text">Wite Your Feedback</span>
                </div>
                <textarea
                  type="text"
                  name="feedback"
                  placeholder="Write Your Assignment Description"
                  className="input input-bordered"
                  required
                />
              </label>
            </div>
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              required
              name="date"
              placeholder="Assignment Submission Date"
              className="input input-bordered w-full"
            />
          </div>

          <div className="form-control mt-6">
            <button className="btn bg-orange-600 text-xl font-bold text-white">
              Submit Your Assignemnt
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TakeAssignment;
