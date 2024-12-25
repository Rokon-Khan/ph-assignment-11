import { GoArrowUpRight } from "react-icons/go";
import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const AssignmentCard = ({ assignmentItem }) => {
  //   console.log(campaignItem);

  const { _id, assignmentTitle, photo } = assignmentItem || {};
  return (
    <div>
      <div className="card card-compact bg-base-100 w-96 shadow-xl">
        <figure className="bg-white">
          <img src={photo} className="p-4" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{assignmentTitle}</h2>
          <p></p>
          <div className="card-actions justify-end">
            <Link
              to={`/detailassignment/${_id}`}
              className="btn bg-orange-500 text-xl font-bold text-white"
            >
              View Assignment
              <GoArrowUpRight className="text-3xl font-bold text-orange-500 rounded-full bg-white" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssignmentCard;
