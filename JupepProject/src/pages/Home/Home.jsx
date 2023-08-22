// import { useNavigate } from "react-router-dom";
// import { useGlobalContext } from "../../context/AuthContext";
// import { useEffect } from "react";
import { useState } from "react";
import ImageSlider from "../../components/ImageSlider/ImageSlider";
import Layout from "../../layout/Layout";
import { pdfjs } from "react-pdf";
import { Document, Page } from "react-pdf";
import { ImBook } from "react-icons/im";
import { TbDevices, TbBrandZoom } from "react-icons/tb";
import { BsTelegram } from "react-icons/bs";
import college from "../../assets/Home Landing Image/college.jpeg";
// import physcis from "../../assets/Home Landing Image/physcis.png";
import { GiAtom } from "react-icons/gi";
import { BiLogoTelegram } from "react-icons/bi";
import { Link } from "react-router-dom";

import styles from "./home.module.css";
import compare from "../../assets/Home Landing Image/comparePlan.jpeg";
import Reviews from "../Reviews/Reviews";
import FAQPage from "../FAQ/FAQPage";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.js",
  import.meta.url
).toString();

const Home = () => {
  // const { currentUser } = useGlobalContext();
  // const navigate = useNavigate();
  // useEffect(() => {
  //   if (!currentUser) {
  //     // Handle the case where the user is not signed in
  //     navigate("/login");
  //   }
  // }, [currentUser, navigate]);

  // if (!currentUser) {
  //   // Return null if currentUser is not available
  //   return null;
  // }

  /* <h1 className="px-4 md:px-8 ">
          Welcome, {currentUser.firstName} {currentUser.lastName}{" "}
        {currentUser.email}
        </h1> */

  // const url =
  //   "https://firebasestorage.googleapis.com/v0/b/login-practice-664be.appspot.com/o/samuel.resume.pdf?alt=media&token=5fa2cd30-0e77-4c08-869c-781e74809646";
  const [pdfData, setPdfData] = useState(null);
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const fetchPDF = async () => {
    try {
      const response = await fetch(url, { mode: "no-cors" });
      const arrayBuffer = await response.arrayBuffer();
      const uint8Array = new Uint8Array(arrayBuffer);
      setPdfData(uint8Array);
    } catch (error) {
      console.error("Error fetching PDF:", error);
    }
  };

  const onDocumentLoadSuccess = ({ numPages }) => {
    setPageNumber(numPages);
  };

  return (
    <Layout>
      <main className="w-full h-full pt-[90px] md:pt-0 text-2xl">
        <ImageSlider />

        {/* <div className="w-full h-full">
          <div>
            <Document file={fetchPDF} onLoadSuccess={onDocumentLoadSuccess}>
              <Page pageNumber={pageNumber} />
            </Document>
            <p>
              Page {pageNumber} of {numPages}
            </p>
          </div>
        </div> */}
        <div className="w-full h-full  ">
          <div className="w-full h-full  bg-[#275bd4] text-white flex flex-col items-center ">
            <h1 className=" text-2xl mt-[40px] text-center">
              How we solved Jupeb reading problem
            </h1>
            <p className="w-full md:w-[600px] px-4 md:px-0 h-full mt-[30px] pb-[40px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
              tenetur, voluptates distinctio optio deserunt deleniti dolorem et
              quasi quos vitae voluptate fuga ea adipisci eum, quibusdam
              reprehenderit. Dolor, fuga dolorum? Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Unde a est modi sunt nobis ullam
              illo inventore consequatur, commodi excepturi, soluta ab voluptate
              ea optio libero iusto fugiat ut doloremque.
            </p>
          </div>
          <div className="w-full h-full px-4 md:px-6 lg:px-10 ">
            <div className="w-full h-full flex flex-col items-center mt-[80px] ">
              <h1 className="text-4xl text-blue-900">
                {" "}
                <strong>What we offer </strong>{" "}
              </h1>
              <p className="w-full md:w-[500px] lg:w-[700px] text-center mt-[30px] h-full font-extralight text-[18px]">
                As a subscribed user, you will enjoy all the benefits listed
                below and more while free user tend to enjoy telegram channel
                benefit{" "}
              </p>
              <div className="w-full h-full md:grid grid-flow-col  gap-4 text-[16px] text-gray-700 text-center mt-[50px] leading-normal">
                <div className="w-full h-full flex flex-col items-center">
                  <ImBook size={40} className="text-blue-500" />
                  <p className="mt-[15px]">
                    Jupeb Textbooks that contain{" "}
                    <b>explanation of all topics </b>
                    in 001/002/003/004
                  </p>
                </div>
                <div className="w-full h-full flex flex-col items-center mt-[40px] md:mt-0">
                  <ImBook size={40} className="text-blue-900" />
                  <p className="mt-[15px]">Jupeb Past questions and Answers </p>
                </div>
                <div className="w-full h-full flex flex-col items-center mt-[40px] md:mt-0">
                  <BsTelegram size={40} className="text-blue-900" />
                  <p className="mt-[15px]">
                    Active Telegram channel to ask questions or find help on
                    topics you don&apos;t understand
                  </p>
                </div>
                <div className="w-full h-full flex flex-col items-center mt-[40px] md:mt-0">
                  <TbBrandZoom size={40} className="text-blue-900" />
                  <p className="mt-[15px]">
                    Weekly video call to explain a section details
                  </p>
                </div>
                <div className="w-full h-full flex flex-col items-center mt-[40px] md:mt-0">
                  <TbDevices size={40} className="text-blue-900 " />
                  <p className="mt-[15px]">
                    Oppurtunity to read any time, anywhere with your device
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full h-full flex flex-col items-center mt-[150px] text-gray-900">
              <h2 className="text-center text-[18px] md:text-[30px]">
                Browse Through All Available Subjects
              </h2>
              <div className="w-full h-full mt-[40px] grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 place-items-center">
                <div className="bg-white border-[1px] border-[#bfc0c4] hover:border-none flex flex-col items-center justify-center hover:bg-[#EEEFF2] w-[100px] h-[100px] sm:w-[150px]  sm:h-[150px] md:w-[170px] md:h-[170px] xl:w-[180px] xl:h-[180px] shadow-lg hover:scale-110 duration-500 rounded-[10px] cursor-pointer">
                  <GiAtom size={70} className="text-blue-900" />
                  <p className="mt-[10px] text-[16px] md:text-[25px]">
                    Physics
                  </p>
                </div>
                <div className="bg-white border-[1px] border-[#bfc0c4] hover:border-none flex flex-col items-center justify-center hover:bg-[#EEEFF2] w-[100px] h-[100px] sm:w-[150px]  sm:h-[150px] md:w-[170px] md:h-[170px] xl:w-[180px] xl:h-[180px] hover:scale-110 duration-500 shadow-lg rounded-[10px] cursor-pointer">
                  <GiAtom size={70} className="text-blue-900" />
                  <p className="mt-[10px] text-[16px] md:text-[25px]">
                    Physics
                  </p>
                </div>
                <div className="bg-white border-[1px] border-[#bfc0c4] hover:border-none flex flex-col items-center justify-center hover:bg-[#EEEFF2] w-[100px] h-[100px] sm:w-[150px]  sm:h-[150px] md:w-[170px] md:h-[170px] xl:w-[180px] xl:h-[180px] hover:scale-110 duration-500 shadow-lg rounded-[10px] cursor-pointer">
                  <GiAtom size={70} className="text-blue-900" />
                  <p className="mt-[10px] text-[16px] md:text-[25px]">
                    Physics
                  </p>
                </div>
                <div className="bg-white border-[1px] border-[#bfc0c4] hover:border-none flex flex-col items-center justify-center hover:bg-[#EEEFF2] w-[100px] h-[100px] sm:w-[150px]  sm:h-[150px] md:w-[170px] md:h-[170px] xl:w-[180px] xl:h-[180px] hover:scale-110 duration-500 shadow-lg rounded-[10px] cursor-pointer">
                  <GiAtom size={70} className="text-blue-900" />
                  <p className="mt-[10px] text-[16px] md:text-[25px]">
                    Physics
                  </p>
                </div>
                <div className="bg-white border-[1px] border-[#bfc0c4] hover:border-none flex flex-col items-center justify-center hover:bg-[#EEEFF2] w-[100px] h-[100px] sm:w-[150px]  sm:h-[150px] md:w-[170px] md:h-[170px] xl:w-[180px] xl:h-[180px] hover:scale-110 duration-500 shadow-lg rounded-[10px] cursor-pointer">
                  <GiAtom size={70} className="text-blue-900" />
                  <p className="mt-[20px] text-[16px] md:text-[25px]">
                    Physics
                  </p>
                </div>
                <div className="bg-white border-[1px] border-[#bfc0c4] hover:border-none flex flex-col items-center justify-center hover:bg-[#EEEFF2] w-[100px] h-[100px] sm:w-[150px]  sm:h-[150px] md:w-[170px] md:h-[170px] xl:w-[180px] xl:h-[180px] hover:scale-110 duration-500 shadow-lg rounded-[10px] cursor-pointer">
                  <GiAtom size={70} className="text-blue-900" />
                  <p className="mt-[10px] text-[16px] md:text-[25px]">
                    Physics
                  </p>
                </div>
                <div className="bg-white border-[1px] border-[#bfc0c4] hover:border-none flex flex-col items-center justify-center hover:bg-[#EEEFF2] w-[100px] h-[100px] sm:w-[150px]  sm:h-[150px] md:w-[170px] md:h-[170px] xl:w-[180px] xl:h-[180px] hover:scale-110 duration-500 shadow-lg rounded-[10px] cursor-pointer">
                  <GiAtom size={70} className="text-blue-900" />
                  <p className="mt-[10px] text-[16px] md:text-[25px]">
                    Physics
                  </p>
                </div>
                <div className="bg-white border-[1px] border-[#bfc0c4] hover:border-none flex flex-col items-center justify-center hover:bg-[#EEEFF2] w-[100px] h-[100px] sm:w-[150px]  sm:h-[150px] md:w-[170px] md:h-[170px] xl:w-[180px] xl:h-[180px] hover:scale-110 duration-500 shadow-lg rounded-[10px] cursor-pointer">
                  <GiAtom size={70} className="text-blue-900" />
                  <p className="mt-[10px] text-[16px] md:text-[25px]">
                    Physics
                  </p>
                </div>
                <div className="bg-white border-[1px] border-[#bfc0c4] hover:border-none flex flex-col items-center justify-center hover:bg-[#EEEFF2] w-[100px] h-[100px] sm:w-[150px]  sm:h-[150px] md:w-[170px] md:h-[170px] xl:w-[180px] xl:h-[180px] hover:scale-110 duration-500 shadow-lg rounded-[10px] cursor-pointer">
                  <GiAtom size={70} className="text-blue-900" />
                  <p className="mt-[10px] text-[16px] md:text-[25px]">
                    Physics
                  </p>
                </div>
                <div className="bg-white border-[1px] border-[#bfc0c4] hover:border-none flex flex-col items-center justify-center hover:bg-[#EEEFF2] w-[100px] h-[100px] sm:w-[150px]  sm:h-[150px] md:w-[170px] md:h-[170px] xl:w-[180px] xl:h-[180px] hover:scale-110 duration-500 shadow-lg rounded-[10px] cursor-pointer">
                  <GiAtom size={70} className="text-blue-900" />
                  <p className="mt-[10px] text-[16px] md:text-[25px]">
                    Physics
                  </p>
                </div>
                <div className="bg-white border-[1px] border-[#bfc0c4] hover:border-none flex flex-col items-center justify-center hover:bg-[#EEEFF2] w-[100px] h-[100px] sm:w-[150px]  sm:h-[150px] md:w-[170px] md:h-[170px] xl:w-[180px] xl:h-[180px] hover:scale-110 duration-500 shadow-lg rounded-[10px] cursor-pointer">
                  <GiAtom size={70} className="text-blue-900" />
                  <p className="mt-[10px] text-[16px] md:text-[25px]">
                    Physics
                  </p>
                </div>
                <div className="bg-white border-[1px] border-[#bfc0c4] hover:border-none flex flex-col items-center justify-center hover:bg-[#EEEFF2] w-[100px] h-[100px] sm:w-[150px]  sm:h-[150px] md:w-[170px] md:h-[170px] xl:w-[180px] xl:h-[180px] hover:scale-110 duration-500 shadow-lg rounded-[10px] cursor-pointer">
                  <GiAtom size={70} className="text-blue-900" />
                  <p className="mt-[10px] text-[16px] md:text-[25px]">
                    Physics
                  </p>
                </div>
              </div>
            </div>

            <div className="w-full h-full md:h-[470px] lg:h-[400px] flex flex-col md:flex-row items-center  md:justify-evenly pl-3 lg:pl-0  bg-blue-600  text-white rounded-[15px] mt-[90px]">
              <div className="md:w-[500px] h-full flex flex-col justify-center ">
                <BiLogoTelegram size={200} className="text-[#f2f3f5]" />
                {/* <div className="bg-red-800 h-[90px] w-[200px] text-center"> */}
                <a
                  className="text-black h-[60px] w-[200px] lg:w-[250px] mt-[20px] flex justify-center items-center bg-[#FFCB3E] hover:opacity-90 rounded-[10px]"
                  rel="noreferrer"
                  target="_blank"
                  href="https://t.me/+u5_EgioIoPM3Njk0"
                >
                  {" "}
                  Click to Join
                </a>
              </div>
              <div className="md:w-[440px] w-full h-full  px-4 py-4">
                {" "}
                <h3 className="font-bold text-center">
                  Join our telegram channel for free
                </h3>
                <h4 className="font-semibold text-center mt-[10px]">
                  Benefit of Joining{" "}
                </h4>
                <div className="text-[#f2f3f5] text-[18px] text-center md:text-left mt-[15px] leading-snug ">
                  <p className="mt-[15px]">
                    Opportunity to ask Jupep related questions from academial
                  </p>
                  <p className="mt-[15px]">
                    You get to interact with other students talking Jupeb in
                    other schools
                  </p>
                  <p className="mt-[15px]">
                    You get to interact with other students talking Jupeb in
                    other schools
                  </p>
                  <p className="mt-[15px]">
                    You get to interact with other students talking Jupeb in
                    other schools
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-[90px] ">
              <img src={college} alt="college" className="w-full h-[300px]" />
            </div>
            <div
              className={`w-full h-full md:h-[300px] flex items-center justify-between px-10 mt-[90px] border-[3px] border-[#f7b704] shadow-lg rounded-[10px] ${styles.comparePlan}`}
            >
              <div className="text-[16px] mb-[20px]">
                <h5 className="text-[30px] mt-[20px]">Start For free</h5>
                <div className="mt-[15px]">
                  <input
                    type="checkbox"
                    id="first"
                    checked
                    className={`${styles.checkbox}`}
                  />
                  <label htmlFor="first">acess to all textbooks</label>
                </div>
                <div className="mt-[7px]">
                  <input
                    type="checkbox"
                    id="second"
                    checked
                    className={`${styles.checkbox} text-yellow-500`}
                  />
                  <label htmlFor="second">
                    acess to past questions and answers
                  </label>
                </div>
                <div className="mt-[7px]">
                  <input
                    type="checkbox"
                    id="third"
                    checked
                    className={`${styles.checkbox}`}
                  />
                  <label htmlFor="third">
                    24/7 support to answer any question related to jupeb
                    syllabus
                  </label>
                </div>
                <Link to="/pricing">
                  <button
                    type="submit"
                    className="h-[40px] w-[180px]  bg-[#f7b704] text-white text-[22px] mt-[30px]  rounded-[10px] shadow-lg opacity-90 hover:opacity-100"
                  >
                    View Plans
                  </button>
                </Link>
              </div>
              <div className="w-[300px] h-[250px] ">
                <img src={compare} alt="devices" className="rounded-[10px]" />
              </div>
            </div>
          </div>
          {/* Testimonial  */}

          <div className="w-full h-full">
            <Reviews />
            <FAQPage />
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default Home;
