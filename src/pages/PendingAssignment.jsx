import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import MyPendingAssignmentCard from "../components/MyPendingAssignmentCard";

const PendingAssignment = () => {
  const data = useLoaderData();
  // const { category } = useParams();
  const [assignment, setAssignment] = useState([]);
  // console.log(campaign);

  useEffect(() => {
    setAssignment(data);
  }, [data]);
  return (
    <div>
      <div className="grid lg:grid-cols-3 grid-cols-1 gap-10 max-w-[1140px] mx-auto">
        {assignment.map((assignmentItem) => (
          <MyPendingAssignmentCard
            key={assignmentItem._id}
            assignmentItem={assignmentItem}
          />
        ))}
      </div>
    </div>
  );
};

export default PendingAssignment;
