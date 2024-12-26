import { GoArrowUpRight } from "react-icons/go";
import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const MyPendingAssignmentCard = ({ assignmentItem }) => {
  //   console.log(campaignItem);
  //   "_id": "676d5ac336baae901e683051",
  // "feedback": "This nice Assignment that I have taken from here Wow.",
  // "email": "rokonjustphy@gmail.com",
  // "file": "https://docs.google.com/document/d/16XKb4soywc2jB6srohCbdiN3lbCGVAPf3hR-sl03mQM/edit?usp=sharing",
  // "date": "12/25/2024",
  // "submissionDate": "12/26/2024",
  // "status": "Pending",
  // "assignmentTitle": "Smart Waste Management Solutions",
  // "photo": "https://i.ibb.co.com/VmBp4r1/assignment-3.png",
  // "description": "Propose an innovative idea to manage waste efficiently using technology. Explain its feasibility, potential impact, and implementation challenges.",
  // "number": "100",
  // "difficulty": "Easy",
  // "userEmail": "abrakhanphy@gmail.com"

  const {
    _id,
    assignmentTitle,
    photo,
    feedback,
    submissionDate,
    status,
    number,
    difficulty,
    userName,
  } = assignmentItem || {};
  return (
    <div>
      <div className="card card-compact bg-base-100 w-96 shadow-xl">
        <figure className="bg-white ">
          <img src={photo} className="p-6 rounded-xl h-[300px] w-[350px] " />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{assignmentTitle}</h2>
          <h2 className="text-xl font-bold">{userName}</h2>
          <p> {feedback}</p>
          <div className="flex justify-between">
            <p className="font-semibold text-base">
              Total Marks: <span className="text-blue-400">{number}</span>
            </p>
            <p className="font-semibold text-base">Level: {difficulty}</p>
          </div>
          <div className="flex justify-between">
            <p className="font-semibold text-base">
              Stautus: <span className="text-red-400">{status}</span>
            </p>
            <p className="font-semibold text-base">
              submission: {submissionDate}
            </p>
          </div>
          <div className="card-actions justify-end">
            <Link
              to={`/givemark/${_id}`}
              className="btn bg-orange-500 text-xl font-bold text-white"
            >
              Give Mark
              <GoArrowUpRight className="text-3xl font-bold text-orange-500 rounded-full bg-white" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyPendingAssignmentCard;
