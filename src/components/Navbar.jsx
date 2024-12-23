// import { useContext } from "react";
// import { Link } from "react-router-dom";
// // import logo from "../assets/logo3.png";
// import { AuthContext } from "../authprovider/AuthProvider";

// const Navbar = () => {
//   const { user, logOut } = useContext(AuthContext);

//   const handleLogOut = () => {
//     logOut().then().catch();
//   };

//   return (
//     <div>
//       <div className="navbar bg-base-100">
//         <div className="flex-1">
//           <Link className="btn btn-ghost text-xl">Assignment</Link>
//         </div>

//       </div>
//     </div>
//   );
// };

// export default Navbar;

import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
// import logo from "../assets/logo3.png";
import { AuthContext } from "../authprovider/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut().then().catch();
  };

  return (
    <div className=" lg:px-10 lg:py-5 bg-base-200">
      <div className="navbar z-20 ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <NavLink
                className={({ isActive }) =>
                  `font-bold ${
                    isActive
                      ? "text-green-500 bg-white px-3 py-2 rounded-xl"
                      : "hover:text-green-500"
                  }`
                }
                to="/"
              >
                Home
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  `font-bold ${
                    isActive
                      ? "text-green-500 bg-white px-3 py-2 rounded-xl"
                      : "hover:text-green-500"
                  }`
                }
                to="/allcampaign"
              >
                All Campaign
              </NavLink>

              <NavLink
                className={({ isActive }) =>
                  `font-bold ${
                    isActive
                      ? "text-green-500  bg-white px-3 py-2 rounded-xl"
                      : "hover:text-green-500"
                  }`
                }
                to="/mycampaign"
              >
                My Campaign
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  `font-bold ${
                    isActive
                      ? "text-green-500  bg-white px-3 py-2 rounded-xl"
                      : "hover:text-green-500"
                  }`
                }
                to="/mydonation"
              >
                My Donation
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  `font-bold ${
                    isActive
                      ? "text-green-500  bg-white px-3 py-2 rounded-xl"
                      : "hover:text-green-500"
                  }`
                }
                to="/addnewcampaign"
                // to={`/addcampaign/${user?.id}`}
              >
                Add New Campaign
              </NavLink>
            </ul>
          </div>
          <Link
            to="/"
            className="btn btn-ghost text-xl font-bold lg:flex hidden"
          >
            Fund_Raiser
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="space-x-6 text-xl px-1 gap-6">
            <NavLink
              className={({ isActive }) =>
                `font-bold ${
                  isActive
                    ? "text-green-500 bg-white px-3 py-2 rounded-xl"
                    : "hover:text-green-500"
                }`
              }
              to="/"
            >
              Home
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                `font-bold ${
                  isActive
                    ? "text-green-500 bg-white px-3 py-2 rounded-xl"
                    : "hover:text-green-500"
                }`
              }
              to="/allcampaign"
            >
              All Campaign
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                `font-bold ${
                  isActive
                    ? "text-green-500  bg-white px-3 py-2 rounded-xl"
                    : "hover:text-green-500"
                }`
              }
              to="/mycampaign"
            >
              My Campaign
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                `font-bold ${
                  isActive
                    ? "text-green-500  bg-white px-3 py-2 rounded-xl"
                    : "hover:text-green-500"
                }`
              }
              to="/mydonation"
            >
              My Donation
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                `font-bold ${
                  isActive
                    ? "text-green-500  bg-white px-3 py-2 rounded-xl"
                    : "hover:text-green-500"
                }`
              }
              to="/addnewcampaign"
              // to={`/addcampaign/${user?.id}`}
            >
              Add New Campaign
            </NavLink>
          </ul>
        </div>
        <div className="navbar-end gap-5">
          {/* <div>
            <Link
              to="/login"
              className="btn bg-green-400 text-xl text-white font-bold "
            >
              Login
            </Link>
          </div> */}
          {user ? (
            <div>
              <div className="flex-none gap-2">
                <div className="dropdown dropdown-end">
                  <div
                    tabIndex={0}
                    role="button"
                    className="btn btn-ghost btn-circle avatar"
                  >
                    <div className="w-10 rounded-full">
                      <img
                        className="w-[60px] h-[60px] border-4 border-zinc-300 rounded-full cursor-pointer"
                        src={user?.photoURL}
                        alt=""
                      />
                    </div>
                  </div>
                  <button
                    onClick={handleLogOut}
                    className="btn bg-green-400 text-lg text-white font-bold"
                  >
                    Log Out
                  </button>
                  <ul
                    tabIndex={0}
                    className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
                  >
                    <li>
                      <a className="justify-between">
                        <h3 className="text-xl font-bold text-center text-gray-700">
                          {user?.displayName}
                        </h3>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              {/* <img
                className="w-[60px] h-[60px] border-4 border-zinc-300 rounded-full cursor-pointer"
                src={user?.photoURL}
                alt=""
              /> */}

              {/* <button
                onClick={handleLogOut}
                className="btn bg-green-400 text-xl text-white font-bold "
              >
                Log Out
              </button> */}
              {/* <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 hidden group-hover:flex flex-col items-center bg-white p-4 rounded-lg shadow-lg w-[200px]">
                <h3 className="text-xl font-bold text-center text-gray-700">
                  {user?.displayName}
                </h3>
                <button
                  onClick={handleLogOut}
                  className="btn bg-green-400 text-lg text-white font-bold"
                >
                  Log Out
                </button>
              </div> */}
            </div>
          ) : (
            <Link to="/login">
              <button className="btn bg-green-400 text-xl text-white font-bold ">
                Login
              </button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
