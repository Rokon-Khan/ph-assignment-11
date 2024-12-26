// import { useContext, useEffect, useState } from "react";
// import "react-datepicker/dist/react-datepicker.css";
// import { useLoaderData, useParams } from "react-router-dom";
// import Swal from "sweetalert2";
// import { AuthContext } from "../authprovider/AuthProvider";
// const GiveMark = () => {
//   const { user } = useContext(AuthContext);
//   const [startDate, setStartDate] = useState(new Date());

//   const data = useLoaderData();
//   //   console.log(data);

//   const { id } = useParams();
//   const [campaigns, setCampaigns] = useState({});
//   console.log(campaigns);

//   useEffect(() => {
//     const singleCampaign = data.find((campaign) => campaign._id == id);
//     setCampaigns(singleCampaign);
//   }, [data, id]);
//   const {
//     assignmentTitle,
//     photo,
//     description,
//     date,
//     number,
//     email,
//     difficulty,
//   } = campaigns || {};

//   const handleAddNewAssignment = (e) => {
//     e.preventDefault();

//     const userName = e.target.userName.value;
//     const userEmail = e.target.userEmail.value;
//     const feedback = e.target.feedback.value;
//     const file = e.target.file.value;
//     const submissionDate = e.target.submissionDate.value;

//     const assignmentSubmission = {
//       feedback,
//       email,
//       file,
//       date,
//       submissionDate,
//       status: "Pending",
//       assignmentTitle,
//       photo,
//       description,
//       number,
//       difficulty,
//       userEmail,
//       userName,
//     };

//     console.log(assignmentSubmission);

//     // Send data to the server and database
//     fetch(`${import.meta.env.VITE_API_URL}/takeassignment`, {
//       method: "POST",
//       headers: {
//         "content-type": "application/json",
//       },
//       body: JSON.stringify(assignmentSubmission),
//     })
//       .then((res) => res.json())
//       .then((data) => {
//         if (data.insertedId) {
//           console.log("Successfully added");
//           Swal.fire({
//             title: "Success!",
//             text: " Assignment Submitted successfully",
//             icon: "success",
//             confirmButtonText: "Ok",
//           });
//           e.target.reset();
//         }
//       })
//       .catch((error) => {
//         console.error("Error adding campaign:", error);
//         Swal.fire({
//           title: "Error!",
//           text: "Failed to Create Assignment Please try again later.",
//           icon: "error",
//           confirmButtonText: "Ok",
//         });
//       });
//   };
//   return (
//     <div>
//       <div className="w-full h-[250px] bg-orange-600 text-center text-white space-y-3  py-6">
//         <h2 className="text-3xl font-bold">Give Your Assignment Marks</h2>
//         <p className=" max-w-[796px] mx-auto">
//           Ready to make a difference? Start your own Assignment today! Whether
//           its a personal cause, a community initiative, a creative project, or a
//           life-changing event, our platform empowers you to bring your vision to
//           life.
//         </p>
//       </div>
//       <div className="card bg-base-100 w-full lg:max-w-screen-md max-w-sm mx-auto my-10 shrink-0 shadow-2xl">
//         <form onSubmit={handleAddNewAssignment} className="card-body">
//           {/* Campaign Type & Description*/}
//           <div className="grid  grid-cols-1 gap-6">
//             <div className="form-control">
//               <label className="label">
//                 <span className="label-text">Give Your Marks</span>
//               </label>
//               <input
//                 type="number"
//                 name="marks"
//                 placeholder="Give Your Marks"
//                 className="input input-bordered"
//                 required
//               />
//             </div>

//             <div className="form-control">
//               <label className="form-control">
//                 <div className="label">
//                   <span className="label-text">Wite Your Feedback</span>
//                 </div>
//                 <textarea
//                   type="text"
//                   name="feedback"
//                   placeholder="Write Your Assignment Description"
//                   className="input input-bordered"
//                   required
//                 />
//               </label>
//             </div>
//           </div>

//           <div className="form-control mt-6">
//             <button className="btn bg-orange-600 text-xl font-bold text-white">
//               Give Assignemnt Mark
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default GiveMark;

import { useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const GiveMark = () => {
  const assignment = useLoaderData(); // Fetch data from the loader
  console.log(assignment);
  const [marks, setMarks] = useState(assignment.number || "");
  const [feedback, setFeedback] = useState(assignment.feedback || "");
  const navigate = useNavigate();

  const handleUpdate = async (e) => {
    e.preventDefault();
    const updatedData = { number: marks, feedback };

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/takeassignment/${assignment._id}`, // Update specific assignment
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedData),
        }
      );

      if (response.ok) {
        Swal.fire({
          icon: "success",
          title: "Assignment Updated",
          text: "The assignment has been successfully updated.",
        });
        navigate("/mysubmittedassinment");
      } else {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "Failed to update the assignment.",
        });
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "An error occurred while updating the assignment.",
      });
    }
  };

  return (
    <div className="max-w-[600px] mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Update Assignment</h2>
      <div className="mb-4">
        <h3 className="text-lg font-bold">Submitted File</h3>
        {assignment.file ? (
          <a
            href={assignment.file}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 underline"
          >
            Open Submitted File
          </a>
        ) : (
          <p className="text-red-500">No file submitted for this assignment.</p>
        )}
      </div>
      <form onSubmit={handleUpdate}>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Marks</label>
          <input
            type="number"
            value={marks}
            onChange={(e) => setMarks(e.target.value)}
            className="input input-bordered w-full"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Feedback</label>
          <textarea
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            className="textarea textarea-bordered w-full"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="btn btn-primary w-full text-lg font-bold"
        >
          Give Assignment Mark
        </button>
      </form>
    </div>
  );
};

export default GiveMark;
