import { GoArrowUpRight } from "react-icons/go";
import { Link } from "react-router-dom";

const AllAsignmentCard = ({ assignmentItem }) => {
  const { _id, assignmentTitle, photo } = assignmentItem || {};
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
            <button className="btn bg-red-500 text-lg font-semibold text-white">
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
