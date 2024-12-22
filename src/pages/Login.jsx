import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useContext, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../authprovider/AuthProvider";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Login = () => {
  const auth = getAuth();
  const provider = new GoogleAuthProvider();
  const { signIn, setForgetEmail } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  console.log("location in the login page", location);

  const handleLogin = (e) => {
    e.preventDefault();
    console.log(e.currentTarget);
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");
    console.log(email, password);

    signIn(email, password)
      .then((result) => {
        console.log(result.user);

        // navigate after login
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        console.error(error);
        // Handle errors with if-else
        if (error.code === "auth/user-not-found") {
          setError("No user found with this email.");
          toast.error("An invalid Email or Password");
        } else {
          setError("An unexpected error occurred. Please try again.");
          toast.error("An invalid Email or Password, Please try again.");
        }
      });
  };

  const handleEmailChange = (e) => {
    setForgetEmail(e.target.value);
  };

  const handleSigWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        // IdP data available using getAdditionalUserInfo(result)
        // ...
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  };
  return (
    <div className="space-y-10">
      <Navbar></Navbar>
      <div className="flex flex-col md:w-3/4 lg:w-1/2 p-6 mx-auto">
        <h2 className="text-3xl my-10 text-center font-bold">
          Login to See Detail
        </h2>
        <form onSubmit={handleLogin}>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              onChange={handleEmailChange}
              type="email"
              required
              name="email"
              placeholder="Email"
              className="input input-bordered"
            />
          </div>
          <div className="form-control relative">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type={showPassword ? "text" : "password"}
              required
              name="password"
              placeholder="Password"
              className="input input-bordered"
            />

            <label className="label">
              <Link
                to="/forget-password"
                className="label-text-alt text-lg text-success link link-hover"
              >
                Forgot password?
              </Link>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-success text-xl text-white font-bold ">
              Login
            </button>
          </div>
        </form>
        <button
          onClick={handleSigWithGoogle}
          className="btn btn-full btn-success text-xl text-white font-bold my-4"
        >
          Login With Google
        </button>
        <p className="text-center mt-4">
          Do not have an account{" "}
          <Link className="text-green-600 font-bold" to="/register">
            Register
          </Link>
        </p>
      </div>
      <Toaster></Toaster>
      <Footer></Footer>
    </div>
  );
};

export default Login;
