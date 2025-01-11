import "animate.css";
import { BsDatabaseAdd } from "react-icons/bs";
import { GrSecure } from "react-icons/gr";
import { MdManageHistory } from "react-icons/md";
import { RiFirebaseLine } from "react-icons/ri";
const AboutUs = () => {
  return (
    <div>
      <div className="hero bg-base-200 max-w-[1024px] mx-auto my-6 rounded-lg animate__animated animate__zoomIn">
        <div className="hero-content text-center">
          <div className="">
            <h1 className="lg:text-4xl text-3xl font-bold">About Us</h1>
            <p className="py-6 max-w-lg mx-auto">
              The Assignment Management System offers key features such as
              secure user authentication through Firebase, allowing seamless
              sign-ins with email or social media. Teachers can create, update,
              and manage assignments in real-time, while students can submit
              their work and track deadlines
            </p>
            <div className="card rounded-xl space-y-6">
              <h3 className="lg:text-2xl text-2xl font-bold text-center">
                The Outstnding Fetures
              </h3>
              <div className="grid lg:grid-cols-4 grid-cols-1 gap-6 ">
                <div className="card items-center bg-white p-4 rounded-xl space-y-2">
                  <RiFirebaseLine className="text-5xl  text-orange-500  rounded-full" />

                  <h3 className="text-xl font-bold text-center">
                    User Authentication with Firebase
                  </h3>
                  <p>
                    The system uses Firebase Authentication for secure user
                    registration and login, supporting email/password sign-ins
                    and social media login options (such as Google and
                    Facebook). This ensures only authorized users (teachers and
                    students) can access the platform, protecting sensitive
                    data.
                  </p>
                </div>
                <div className="card items-center bg-white p-4 rounded-xl space-y-2">
                  <MdManageHistory className="text-5xl bg-white text-orange-500 rounded-full" />

                  <h3 className="text-xl font-bold text-center">
                    Real-time Assignment Management
                  </h3>
                  <p>
                    Teachers can create, update, and manage assignments in real
                    time. Students can view and submit their assignments
                    directly through the platform, and both parties can track
                    progress and deadlines seamlessly. The system provides
                    instant updates whenever a new assignment is posted or
                    feedback is provided.
                  </p>
                </div>
                <div className="card items-center bg-white p-4 rounded-xl space-y-2">
                  <BsDatabaseAdd className="text-5xl bg-white text-orange-500  rounded-full" />

                  <h3 className="text-xl font-bold text-center">
                    CRUD Operations with MongoDB
                  </h3>
                  <p>
                    The platform allows users to create, read, update, and
                    delete assignment data using MongoDB. Teachers can update
                    grades, delete irrelevant assignments, and view student
                    progress, while students can track and modify their
                    assignment status as needed.
                  </p>
                </div>
                <div className="card items-center bg-white p-4 rounded-xl space-y-2">
                  <GrSecure className="text-5xl bg-white text-orange-500 rounded-full" />

                  <h3 className="text-xl font-bold text-center">
                    Secure Data Storage and Session Management with JWT
                  </h3>
                  <p>
                    Data, including assignment submissions and feedback, is
                    securely stored in MongoDB. JWT (JSON Web Tokens) are used
                    for session management, ensuring that users remain securely
                    logged in during their interactions with the platform and
                    preventing unauthorized access to sensitive information.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
