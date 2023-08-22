import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { BsTwitter, BsTelephone } from "react-icons/bs";
import { RxPerson } from "react-icons/rx";
import { IoIosSchool } from "react-icons/io";
import { AiOutlineMail } from "react-icons/ai";
import { BiKey } from "react-icons/bi";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase_setup/firebase-config";

// import { auth } from "../../firebase_setup/firebase-config";
// import { database } from "../../firebase_setup/firebase-config";

const formSchema = yup.object().shape({
  firstName: yup.string().required("first name can't be empty"),
  lastName: yup.string().required("last name is required"),
  phoneNumber: yup
    .string()
    .required("phone number is required")
    .matches(/^\d{11}$/, "phone number must be exactly 11 digits"),
  email: yup
    .string()
    .required("email can't be empty")
    .matches(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      "Invalid email address"
    ),
  university: yup.string().required("select your institution"),
  password: yup
    .string()
    .required("Password is required")
    .matches(
      /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[A-Za-z0-9!@#$%^&*]{8,}$/,
      "Password must be at least 8 characters and must contain at least a capital letter, a number, and a special character (!@#$%^&*)"
    ),
  cpassword: yup
    .string()
    .required("Confirm Password is required")
    .oneOf([yup.ref("password")], "Passwords do not match"),
});

const SignUp = () => {
  const { Signup, error, setCurrentUser, currentUser } = useGlobalContext();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    university: "",
    password: "",
  });
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        alert("logged in");
        navigate("/home");
      }
    });
    return () => unsubscribe();
  }, [navigate]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const onSubmit = async (data) => {
    // e.preventDefault();
    Signup(
      data.firstName,
      data.lastName,
      data.phoneNumber,
      data.university,
      data.email,
      data.password,
      data.cpassword
    );
    setFormData(data);
    setCurrentUser({ firstName: data.firstName, lastName: data.lastName });
  };

  const [passwordVisibile, passwordNotVisible] = useState(false);
  const togglePassword = () => {
    passwordNotVisible((prevState) => !prevState);
  };

  const [cpasswordVisibile, passwordNotVisibleC] = useState(false);
  const toggleCPassword = () => {
    passwordNotVisibleC((prevState) => !prevState);
  };

  return (
    <main className="w-full h-full px-4 font-sans md:bg-[#A4C6FC] text-black">
      <div className="w-full h-full">
        <h1 className="text-2xl md:text-4xl text-blue-800 font-extrabold">
          Welcome to Booklandia
        </h1>
      </div>
      <div className="w-full h-full flex justify-center items-center mt-[60px] pb-[40px]">
        <div className="md:w-9/12 lg:w-8/12 xl:w-7/12 h-full mt-[40px] md:bg-white md:shadow-2xl md:rounded-[8px] flex flex-col justify-center items-center  ">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-full h-full flex flex-col justify-center items-center px-4"
          >
            <div className="w-full h-full text-center ">
              <h1 className="text-[#04050C] text-[24px] md:text-[48px] ">
                Create your Account
              </h1>
              <p className="text-[#04050C] mt-[5px]">
                sign in to have full access to all jupep textbooks, jupep past
                questions and answers, postutme questions and access to our
                telegram channel to get more update about our products.
              </p>
            </div>
            <div className="w-full h-full mt-[25px] flex flex-col md:flex-row items-center justify-evenly text-center ">
              <button className="w-full h-[60px]  flex items-center justify-center border border-[#B3B4BB] px-4 rounded-[8px] cursor-pointer">
                <FcGoogle size={24} className="mr-[10px]" />
                <p className="text-[#04050C] text-[16px] leading-[20.21px]">
                  Sign up with Google
                </p>
              </button>
              <button className="w-full h-[60px] mt-[15px] md:mt-0 flex items-center justify-center border border-[#B3B4BB] px-4 rounded-[8px] cursor-pointer">
                <FaFacebook size={24} className="mr-[10px] text-blue-700" />
                <p className="text-[#04050C] text-[16px] leading-[20.21px]">
                  Sign up with Facebook
                </p>
              </button>
              <button className="w-full h-[60px] mt-[15px] md:mt-0 flex items-center justify-center border border-[#B3B4BB] px-4 rounded-[8px] cursor-pointer">
                <BsTwitter size={24} className="mr-[10px] text-blue-700" />
                <p className="text-[#04050C] text-[16px] leading-[20.21px]">
                  Sign Up with Twitter
                </p>
              </button>
            </div>

            <div className="w-full flex items-center mt-[30px] ">
              <div className="flex-1 h-[1px] border-[1px] border-b-gray-800"></div>
              <p className="mx-4 text-gray-600">OR</p>
              <div className="flex-1 border-[1px] border-b-gray-800"></div>
            </div>

            <div className="w-full md:w-10/12 h-full mt-[40px]">
              <div className="w-full  md:flex justify-between">
                <div className="w-full h-full md:w-5/12 ">
                  <div className="relative w-full  flex flex-col-reverse ">
                    <label
                      className="absolute top-[4px] left-[50px] text-[#04050C] md:text-[12px] leading-[15.22px]"
                      htmlFor="firstname"
                    >
                      first Name
                    </label>
                    <RxPerson
                      size={24}
                      className="absolute top-[20px] left-[10px] text-[#85868D]"
                    />
                    <input
                      type="text"
                      id="firstname"
                      className="  h-[60px] border-2  border-[#B3B4BB] rounded-[5px]"
                      name="firstName"
                      {...register("firstName")}
                      placeholder="first name"
                      style={{ paddingLeft: "50px" }}
                    />
                  </div>
                  <small
                    className="text-red-900 text-[14px] font-light"
                    style={{
                      visibility: errors.firstName ? "visible" : "hidden",
                    }}
                  >
                    {errors.firstName?.message}
                  </small>
                </div>

                <div className="w-full h-full mt-[30px] md:mt-0 md:w-5/12 ">
                  <div className="relative w-full  flex flex-col-reverse ">
                    <label
                      className="absolute top-[4px] left-[50px] text-[#04050C] md:text-[12px] leading-[15.22px]"
                      htmlFor="lastname"
                    >
                      Last Name
                    </label>
                    <RxPerson
                      size={24}
                      className="absolute top-[20px] left-[10px] text-[#85868D]"
                    />
                    <input
                      type="text"
                      id="lastname"
                      className=" h-[60px] border-2  border-[#B3B4BB] rounded-[5px]"
                      name="lastName"
                      {...register("lastName")}
                      placeholder="last name"
                      style={{ paddingLeft: "50px" }}
                    />
                  </div>
                  <small
                    className="text-red-900 text-[14px] font-light"
                    style={{
                      visibility: errors.lastName ? "visible" : "hidden",
                    }}
                  >
                    {errors.lastName?.message}
                  </small>
                </div>
              </div>

              <div className="w-full md:flex justify-between md:mt-[30px]">
                <div className="w-full  md:w-5/12 h-full mt-[30px] md:mt-0">
                  <div className="relative w-full flex flex-col-reverse justify-center ">
                    <label
                      className="absolute top-[4px] left-[50px] text-[#04050C] md:text-[12px] leading-[15.22px]"
                      htmlFor="phonenumber"
                    >
                      phoneNumber
                    </label>
                    <BsTelephone
                      size={24}
                      className="absolute top-[20px] left-[10px] text-[#85868D]"
                    />
                    <input
                      type="text"
                      id="phonenumber"
                      name="phoneNumber"
                      {...register("phoneNumber")}
                      placeholder="phone number"
                      className="w-full h-[60px] border-2  border-[#B3B4BB] rounded-[5px]"
                      style={{ paddingLeft: "50px" }}
                    />
                  </div>
                  <small
                    className="text-red-900 text-[14px] font-light"
                    style={{
                      visibility: errors.phoneNumber ? "visible" : "hidden",
                    }}
                  >
                    {errors.phoneNumber?.message}
                  </small>
                </div>

                <div className="w-full md:w-5/12 h-full mt-[30px] md:mt-0">
                  <div className="relative   flex flex-col-reverse justify-center ">
                    <label
                      className="absolute top-[4px] left-[50px] text-[#04050C] md:text-[12px] leading-[15.22px]"
                      htmlFor="university"
                    >
                      University
                    </label>
                    <IoIosSchool
                      size={24}
                      className="absolute top-[20px] left-[10px] text-[#85868D]"
                    />
                    <input
                      type="text"
                      id="university"
                      name="university"
                      {...register("university")}
                      placeholder="eg UNILAG, UNIBEN, BUK"
                      className="w-full h-[60px] border-2  border-[#B3B4BB] rounded-[5px]"
                      style={{ paddingLeft: "50px" }}
                    />
                  </div>
                  <small
                    className="text-red-900 text-[14px] font-light"
                    style={{
                      visibility: errors.university ? "visible" : "hidden",
                    }}
                  >
                    {errors.university?.message}
                  </small>
                </div>
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

              <div className="w-full h-full mt-[30px]">
                <div className="relative w-full h-full flex flex-col-reverse">
                  <label
                    className="absolute top-[4px] left-[50px] text-[#04050C] md:text-[12px] leading-[15.22px]"
                    htmlFor="cpassword"
                  ></label>
                  <BiKey
                    size={24}
                    className="absolute top-[20px] left-[10px] text-[#85868D]"
                  />
                  <input
                    type={cpasswordVisibile ? "text" : "password"}
                    id="cpassword"
                    name="cpassword"
                    {...register("cpassword")}
                    placeholder="**********"
                    className="w-full h-[60px] border-2  border-[#B3B4BB] rounded-[5px]"
                    style={{ paddingLeft: "50px" }}
                  />
                  <button
                    type="button"
                    onClick={toggleCPassword}
                    className="absolute top-1/3 right-[20px] bg-transparent border-none text-red-900"
                  >
                    {cpasswordVisibile ? "Hide" : "show"}
                  </button>
                </div>
                <small
                  className="text-red-900 text-[14px] font-light"
                  style={{
                    visibility: errors.cpassword ? "visible" : "hidden",
                  }}
                >
                  {errors.cpassword?.message}
                </small>
              </div>
              <div className="w-full h-[60px] mt-[40px] flex justify-center bg-[#4D5DED] opacity-80 hover:opacity-100 text-[16px] md:text-[20px] rounded-[12px] text-white cursor-pointer">
                <button className="w-full h-full" type="submit">
                  Sign Up
                </button>
              </div>
            </div>
            <p className="text-[#54555B] text-[12px] mt-[15px] text-center">
              By siging up, you agree to the{" "}
              <span className="text-[#4D5DED] cursor-pointer">
                {" "}
                Terms of Service
              </span>{" "}
              and{" "}
              <span className="text-[#4D5DED] cursor-pointer">
                Privacy Policy
              </span>
              , including{" "}
              <span className="text-[#4D5DED] cursor-pointer">Cookie use</span>.
            </p>
            <p className="text-[#2F3035] text-[16px] md:text-[20px] mt-[10px]">
              Have an account?{" "}
              <Link to="/login">
                <button className="text-[#4D5DED] cursor-pointer">login</button>
              </Link>
            </p>
          </form>
        </div>
      </div>
    </main>
  );
};

export default SignUp;
