import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { useContext } from "react";
import { Toaster } from "react-hot-toast";
import { AuthContext } from "../authprovider/AuthProvider";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const ForgetPassword = () => {
  const auth = getAuth();
  const { forgetEmail } = useContext(AuthContext);

  const handleForgetPassword = () => {
    sendPasswordResetEmail(auth, forgetEmail)
      .then(() => {
        alert("Password reset email sent! Check your inbox.");
        window.location.href = "https://mail.google.com/";
      })
      .catch((error) => {
        console.error("Error sending password reset email:", error);
        alert("Failed to send password reset email. Please try again.");
      });
  };

  return (
    <div>
      <Navbar />
      <div className="card bg-base-100 w-full max-w-sm mx-auto shrink-0 shadow-2xl my-6">
        <form className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              value={forgetEmail}
              type="email"
              placeholder="email"
              className="input input-bordered"
              required
              readOnly
            />
          </div>

          <div className="form-control mt-6">
            <button
              type="button"
              onClick={handleForgetPassword}
              className="btn btn-success text-xl text-white"
            >
              Reset Password
            </button>
          </div>
        </form>
      </div>
      <Toaster></Toaster>
      <Footer />
    </div>
  );
};

export default ForgetPassword;
