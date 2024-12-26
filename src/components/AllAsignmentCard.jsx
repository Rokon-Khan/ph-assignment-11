import { useContext, useState } from "react";
import { GoArrowUpRight } from "react-icons/go";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../authprovider/AuthProvider";

const AllAsignmentCard = ({ assignmentItem }) => {
  const { user } = useContext(AuthContext);
  const [assignments, setAssignments] = useState([]);
  const { _id, email, assignmentTitle, photo } = assignmentItem || {};

  const handleDelte = (_id) => {
    if (user?.email !== email) {
      // Show the error message before returning
      Swal.fire({
        title: "Error",
        text: "You are not the creator of this assignment.",
        icon: "error",
      });
      return; // Stop further execution
    }
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`${import.meta.env.VITE_API_URL}/allassignmnets/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Done!!!",
                text: "Assignment Deleted Successfully!",
                icon: "success",
              });
              const remaining = assignments.filter(
                (assign) => assign._id !== _id
              );
              setAssignments(remaining);
            } else {
              Swal.fire({
                title: "Error",
                text: "Failed to delete the Assignment.",
                icon: "error",
              });
            }
          })
          .catch((error) => {
            console.error("Error deleting campaign:", error);
            Swal.fire({
              title: "Error",
              text: "Failed to delete the campaign.",
              icon: "error",
            });
          });
      }
    });
  };

  return (
    <div>
      <div className="card card-compact bg-base-100 w-96 shadow-xl">
        <figure className="bg-white">
          <img src={photo} className="p-4" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{assignmentTitle}</h2>
          <div className="flex justify-between items-center">
            <Link
              to={`/updateassignment/${_id}`}
              className="btn bg-blue-400 text-lg font-bold text-white"
            >
              Update
            </Link>
            <button
              onClick={() => handleDelte(_id)}
              className="btn bg-red-500 text-lg font-semibold text-white"
            >
              Delete
            </button>
          </div>
          <div>
            <Link
              to={`/detailassignment/${_id}`}
              className="btn btn-full flex bg-orange-500 text-lg font-bold text-white"
            >
              View Assignment
              <GoArrowUpRight className="text-xl font-bold text-orange-500 rounded-full bg-white" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllAsignmentCard;
