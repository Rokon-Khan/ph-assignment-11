import { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../authprovider/AuthProvider";
import MyPendingAssignmentCard from "../components/MyPendingAssignmentCard";

const MySubmittedAssignment = () => {
  const { user } = useContext(AuthContext); // Get the logged-in user
  const data = useLoaderData(); // Load data from the route loader
  const [assignment, setAssignment] = useState([]);

  useEffect(() => {
    if (data && user?.email) {
      // Filter assignments to show only those submitted by the logged-in user
      const userAssignments = data.filter(
        (assignmentItem) => assignmentItem.userEmail === user.email
      );
      setAssignment(userAssignments);
    }
  }, [data, user]);

  return (
    <div>
      {assignment.length === 0 ? (
        <p className="text-center text-lg font-semibold mt-10">
          No assignments found for the logged-in user.
        </p>
      ) : (
        <div className="grid lg:grid-cols-3 grid-cols-1 gap-10 max-w-[1140px] mx-auto">
          {assignment.map((assignmentItem) => (
            <MyPendingAssignmentCard
              key={assignmentItem._id}
              assignmentItem={assignmentItem}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default MySubmittedAssignment;
