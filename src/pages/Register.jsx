import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import api from "../api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Register = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [image, setImage] = useState(null);

  console.log(image);

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      register();
    }
  };

  const register = () => {
    api
      .post("/auth/register", {
        name: name,
        email: email,
        password: password,
      })
      .then((res) => {
        if (res.status === 200) {
          navigate("/");
        }
      })
      .catch((err) => {
        console.log(err);
        toast.error(err.response.data?.message);
      });
  };

  const data = {
    image_data: image,
  };

  console.log(data);

  async function handleSend() {
    await fetch("http://localhost:8000/cars/upload/1", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(data),
    }).then((res) => {
      console.log(res);
    });
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-y-8">
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        rtl={false}
        draggable={true}
        pauseOnHover={false}
        theme="colored"
      />
      <div className="fixed top-8 flex items-center gap-x-4 lg:top-16">
        <img src="src/assets/car.png" alt="logo" className="w-12 h-12" />
        <p className="text-3xl font-bold text-xdark lg:text-5xl">
          Astarions Garage
        </p>
      </div>
      <div className="flex flex-col items-center gap-y-2">
        <p className="text-3xl font-black text-xgray lg:text-4xl">
          Create your account
        </p>
        <p className="lg:text-md text-sm text-xgray">
          The place where you can find the best cars
        </p>
      </div>
      <div className="flex w-[360px] flex-col gap-y-8 lg:w-[400px]">
        <div className="flex flex-col gap-y-6">
          <input
            type="text"
            placeholder="Name"
            className="w-full rounded-md border border-[#DED2D9] px-2 py-3 focus:border-transparent focus:outline-none focus:ring-1 focus:ring-xblue"
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full rounded-md border border-[#DED2D9] px-2 py-3 focus:border-transparent focus:outline-none focus:ring-1 focus:ring-xblue"
            onChange={(e) => setEmail(e.target.value)}
          />
          <div className="flex flex-col gap-y-2">
            <input
              type="password"
              placeholder="Password"
              className="w-full rounded-md border border-[#DED2D9] px-2 py-3 focus:border-transparent focus:outline-none focus:ring-1 focus:ring-xblue"
              onChange={(e) => setPassword(e.target.value)}
              onKeyDown={handleKeyPress}
            />
          </div>
        </div>
        <div>
          <button
            type="button"
            onClick={register}
            className="w-full rounded-md bg-xblue p-3 text-lg font-medium text-white transition-all duration-200 hover:bg-blue-600"
          >
            Register
          </button>
        </div>
        <div className="flex justify-between -my-6">
          <div className="text-xlightgray">Already have an account?</div>
          <button
            onClick={() => navigate("/login")}
            className="text-xblue transition-all duration-200 hover:underline hover:text-blue-600"
          >
            Login Here!
          </button>
        </div>
      </div>

      <div>
        <input type="file" onChange={(e) => setImage(e.target.files[0])} />
        <button onClick={handleSend}>Send</button>
      </div>
    </div>
  );
};

export default Register;
