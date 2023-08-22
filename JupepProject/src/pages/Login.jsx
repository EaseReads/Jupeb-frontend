import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { BiKey } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";
import { useGlobalContext } from "../context/AuthContext";

const formSchema = yup.object().shape({
  email: yup
    .string()
    .required("email can't be empty")
    .matches(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      "Invalid email address"
    ),
  password: yup
    .string()
    .required("Password is required")
    .matches(
      /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[A-Za-z0-9!@#$%^&*]{8,}$/,
      "invalid Password"
    ),
});

const Login = () => {
  const { Login } = useGlobalContext();
  const [passwordVisibile, passwordNotVisible] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const togglePassword = () => {
    passwordNotVisible((prevState) => !prevState);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const onSubmit = async (data) => {
    // e.preventDefault();
    setErrorMessage("");
    try {
      await Login(data.email, data.password);
      setFormData(data);
      navigate("/home");
    } catch (error) {
      setErrorMessage(error.message);
      console.log(error.message);
    }
  };

  return (
    <main className="-full h-full px-4 font-sans md:bg-[#A4C6FC] text-black">
      <div className="w-full h-full">
        <h1 className="text-2xl md:text-4xl text-blue-800 font-extrabold">
          Welcome to Booklandia
        </h1>
      </div>

      <div className="w-full h-full flex justify-center items-center mt-[60px] pb-[40px]">
        <div className="w-full h-full md:w-8/12 lg:w-7/12 xl:w-6/12 pb-[20px] md:bg-white md:shadow-2xl md:rounded-[8px] flex flex-col justify-center items-center">
          <form
            className="w-full h-full flex flex-col justify-center items-center px-4 "
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="w-full h-full text-center ">
              <h1 className="text-[#04050C] text-[24px] md:text-[48px] ">
                User Login
              </h1>
              <p className="text-[#04050C] mt-[5px]">
                Login in to read jupep textbooks, jupep past questions and
                answers, postutme questions and answers.
              </p>
            </div>

            <div className="w-full h-full mt-[25px] flex flex-col md:flex-row items-center justify-evenly text-center ">
              <button className="w-full h-[60px]  flex items-center justify-center border border-[#B3B4BB] px-4 rounded-[8px] cursor-pointer">
                <FcGoogle size={24} className="mr-[10px]" />
                <p className="text-[#04050C] text-[16px] leading-[20.21px]">
                  Log in with Google
                </p>
              </button>
              <button className="w-full h-[60px] mt-[15px] md:mt-0 flex items-center justify-center border border-[#B3B4BB] px-4 rounded-[8px] cursor-pointer">
                <FaFacebook size={24} className="mr-[10px] text-blue-700" />
                <p className="text-[#04050C] text-[16px] leading-[20.21px]">
                  Log in with Facebook
                </p>
              </button>
              <button className="w-full h-[60px] mt-[15px] md:mt-0 flex items-center justify-center border border-[#B3B4BB] px-4 rounded-[8px] cursor-pointer">
                <BsTwitter size={24} className="mr-[10px] text-blue-700" />
                <p className="text-[#04050C] text-[16px] leading-[20.21px]">
                  Log in with Twitter
                </p>
              </button>
            </div>

            <div className="w-full flex items-center mt-[30px] ">
              <div className="flex-1 h-[1px] border-[1px] border-b-gray-800"></div>
              <p className="mx-4 text-gray-600">OR</p>
              <div className="flex-1 border-[1px] border-b-gray-800"></div>
            </div>

            <div className="w-full h-full mt-[30px]">
              <div className="relative w-full h-full flex flex-col-reverse">
                <label
                  className="absolute top-[4px] left-[50px] text-[#04050C] md:text-[12px] leading-[15.22px]"
                  htmlFor="email"
                >
                  Email
                </label>
                <AiOutlineMail
                  size={24}
                  className="absolute top-[20px] left-[10px] text-[#85868D]"
                />
                <input
                  type="email"
                  id="email"
                  name="email"
                  {...register("email")}
                  placeholder="email address"
                  className="w-full h-[60px] border-2  border-[#B3B4BB] rounded-[5px]"
                  style={{ paddingLeft: "50px" }}
                />
              </div>
              <small
                className="text-red-900 text-[14px] font-light"
                style={{
                  visibility: errors.email ? "visible" : "hidden",
                }}
              >
                {errors.email?.message}
              </small>
            </div>

            <div className="w-full h-full mt-[30px]">
              <div className="relative w-full h-full flex flex-col-reverse">
                <label
                  className="absolute top-[4px] left-[50px] text-[#04050C] md:text-[12px] leading-[15.22px]"
                  htmlFor="password"
                ></label>
                <BiKey
                  size={24}
                  className="absolute top-[20px] left-[10px] text-[#85868D]"
                />
                <input
                  type={passwordVisibile ? "text" : "password"}
                  id="password"
                  name="password"
                  {...register("password")}
                  placeholder="********"
                  className="w-full h-[60px] border-2  border-[#B3B4BB] rounded-[5px]"
                  style={{ paddingLeft: "50px" }}
                />
                <button
                  type="button"
                  onClick={togglePassword}
                  className="absolute top-1/3 right-[20px] bg-transparent border-none text-red-900"
                >
                  {passwordVisibile ? "Hide" : "show"}
                </button>
              </div>

              <small
                className="text-red-900 text-[14px] font-light"
                style={{
                  visibility: errors.password ? "visible" : "hidden",
                }}
              >
                {errors.password?.message}
              </small>
            </div>
            <div className="w-full flex justify-between text-[16px] mt-[25px]">
              <p>
                <input type="checkbox" id="check" className="cursor-pointer" />{" "}
                Remember me
              </p>

              <p className="text-[#4D5DED] text-[16px] leading-[15.22px]  cursor-pointer">
                Forgot Password?
              </p>
            </div>
            <div className="w-full h-[60px] mt-[40px] flex justify-center bg-[#4D5DED] opacity-80 hover:opacity-100 text-[16px] md:text-[20px] rounded-[12px] text-white cursor-pointer">
              <button className="w-full h-full" type="submit">
                Sign Up
              </button>
            </div>
            <p className="text-[#2F3035] text-[16px] leading-[20.22px] font-normal mt-[30px] text-center">
              Don&apos;t have an account?{" "}
              <Link to="/">
                <button className="text-[#4D5DED]">Sign Up.</button>
              </Link>
            </p>
          </form>
        </div>
      </div>
    </main>
  );
};

export default Login;
