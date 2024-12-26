// import { GoArrowUpRight } from "react-icons/go";
// import { Link } from "react-router-dom";

// /* eslint-disable react/prop-types */
// const MyPendingAssignmentCard = ({ assignmentItem }) => {
//   const {
//     _id,
//     assignmentTitle,
//     photo,
//     feedback,
//     submissionDate,
//     status,
//     number,
//     difficulty,
//     userName,
//   } = assignmentItem || {};
//   return (
//     <div>
//       <div className="card card-compact bg-base-100 w-96 shadow-xl">
//         <figure className="bg-white ">
//           <img src={photo} className="p-6 rounded-xl h-[300px] w-[350px] " />
//         </figure>
//         <div className="card-body">
//           <h2 className="card-title">{assignmentTitle}</h2>
//           <h2 className="text-xl font-bold">{userName}</h2>
//           <p> {feedback}</p>
//           <div className="flex justify-between">
//             <p className="font-semibold text-base">
//               Total Marks: <span className="text-blue-400">{number}</span>
//             </p>
//             <p className="font-semibold text-base">Level: {difficulty}</p>
//           </div>
//           <div className="flex justify-between">
//             <p className="font-semibold text-base">
//               Stautus: <span className="text-red-400">{status}</span>
//             </p>
//             <p className="font-semibold text-base">
//               submission: {submissionDate}
//             </p>
//           </div>
//           <div className="card-actions justify-end">
//             <Link
//               to={`/givemark/${_id}`}
//               className="btn bg-orange-500 text-xl font-bold text-white"
//             >
//               Give Mark
//               <GoArrowUpRight className="text-3xl font-bold text-orange-500 rounded-full bg-white" />
//             </Link>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MyPendingAssignmentCard;

import { useContext } from "react";
import { GoArrowUpRight } from "react-icons/go";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../authprovider/AuthProvider";

/* eslint-disable react/prop-types */
const MyPendingAssignmentCard = ({ assignmentItem }) => {
  const {
    email,
    _id,
    assignmentTitle,
    photo,
    feedback,
    submissionDate,
    status,
    number,
    difficulty,
    userName,
    userEmail, // Email of the assignment creator
  } = assignmentItem || {};

  const { user } = useContext(AuthContext); // Get the logged-in user
  const navigate = useNavigate();

  const handleGiveMark = () => {
    if (user?.email === email) {
      // If the user is the creator, navigate to the "givemark" page
      navigate(`/givemark/${_id}`);
    } else {
      // If not the creator, show SweetAlert
      Swal.fire({
        icon: "warning",
        title: "Permission Denied",
        text: "You are not authorized to give marks for this assignment.",
        confirmButtonText: "OK",
      });
    }
  };

  return (
    <div>
      <div className="card card-compact bg-base-100 w-96 shadow-xl">
        <figure className="bg-white">
          <img
            src={photo}
            className="p-6 rounded-xl h-[300px] w-[350px]"
            alt="Assignment"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{assignmentTitle}</h2>
          <h2 className="text-xl font-bold">{userName}</h2>
          <p>{feedback}</p>
          <div className="flex justify-between">
            <p className="font-semibold text-base">
              Total Marks: <span className="text-blue-400">{number}</span>
            </p>
            <p className="font-semibold text-base">Level: {difficulty}</p>
          </div>
          <div className="flex justify-between">
            <p className="font-semibold text-base">
              Status: <span className="text-red-400">{status}</span>
            </p>
            <p className="font-semibold text-base">
              Submission: {submissionDate}
            </p>
          </div>
          <div className="card-actions justify-end">
            <button
              onClick={handleGiveMark}
              className="btn bg-orange-500 text-xl font-bold text-white"
            >
              Give Mark
              <GoArrowUpRight className="text-3xl font-bold text-orange-500 rounded-full bg-white" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyPendingAssignmentCard;
