import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import AssignmentCard from "../components/AssignmentCard";

const Home = () => {
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
          <AssignmentCard
            key={assignmentItem._id}
            assignmentItem={assignmentItem}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
