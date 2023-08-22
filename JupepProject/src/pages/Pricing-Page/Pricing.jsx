import Layout from "../../layout/Layout";
import compare from "../../assets/Home Landing Image/comparePlan.jpeg";
import { FaCrown } from "react-icons/fa";
import { TbCurrencyNaira } from "react-icons/tb";
import FAQPage from "../FAQ/FAQPage";

const Pricing = () => {
  return (
    <Layout>
      <main className="w-full h-full   text-gray-800">
        <div className="w-full h-full  px-4 md:px-6 lg:px-8 xl:px-12 bg-gradient-to-r from-[#fff7e5] to-white pt-[100px] md:pt-[150px] leading-snug">
          <div className="w-full h-full flex flex-col justify-center items-center md:items-stretch  md:flex-row md:justify-between">
            <div className="w-full h-full ">
              <h1 className="text-[20px] md:text-[32px] lg:text-[48px] text-center md:text-start font-semibold">
                Discover All Avaliable Plans
              </h1>
              <p className="text-center md:text-left mt-[30px] text-[16px] sm:text-[17px]">
                Gain access to <strong>JUPEB TEXTBOOKS</strong> that contain{" "}
                <br />
                explanations of all topics inside{" "}
                <strong>JUPEB SYLLABUS</strong>
              </p>
              <p className="mt-[20px] text-center md:text-left text-[16px] sm:text-[17px]">
                <a
                  href="https://wa.me/08129577490"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline text-[#EAAA00]"
                >
                  <strong>Contact us</strong>
                </a>{" "}
                for discounted pricing for a group or <br /> to sponsor
                individuals within your organisation
              </p>
            </div>
            <div className="w-[300px] h-[300px] md:w-[450px] md:h-[430px] lg:w-[630px] lg:h-[430px] mt-[30px] md:mt-0 ">
              <img src={compare} alt="devices" className="rounded-[10px]" />
            </div>
          </div>

          <div className="w-full hull  flex flex-col justify-center items-center mt-[30px] md:mt-0 lg:flex-row lg:justify-between ">
            <div className="w-[320px] lg:w-[300px] xl:w-[330px] h-[450px] bg-white rounded-[10px] flex justify-center items-center  lg:mt-0">
              <div className="relative w-[300px] lg:w-[280px] xl:w-[310px] h-[430px] border-[2px] rounded border-[#EAAA00] px-4">
                <h2 className="absolute w-[130px] top-0 right-1 text-[14px] bg-[#EAAA00] text-white font-semibold mt-[5px] text-center py-1 rounded-[10px] uppercase ">
                  Current Plan
                </h2>
                <h2 className="mt-[45px] text-center text-[30px]">
                  Booklandia Free
                </h2>
                <div className="text-[16px] mb-[20px]">
                  <div className="mt-[15px]">
                    <input type="checkbox" id="fourth" checked />
                    <label htmlFor="fourth" className="ml-[7px]">
                      acess to all textbooks
                    </label>
                  </div>
                  <div className="mt-[7px]">
                    <input type="checkbox" id="fifth" checked />
                    <label htmlFor="fifth" className="ml-[7px]">
                      acess to past questions and answers
                    </label>
                  </div>
                  <div className="mt-[7px]">
                    <input type="checkbox" id="sixth" checked />
                    <label htmlFor="sixth" className="ml-[7px]">
                      24/7 support to answer any question related to jupeb
                      syllabus
                    </label>
                  </div>
                </div>
                <div className="w-full h-[100px] mt-[80px] md:mt-[50px] lg:mt-[90px] flex flex-col  items-center font-semibold">
                  <div className="w-[230px] text-center text-[20px] flex justify-center">
                    <TbCurrencyNaira size={24} className="mt-[4px]" />{" "}
                    <p>
                      <span> 0</span>{" "}
                      <span className="text-[14px]">/ MONTH</span>{" "}
                    </p>
                  </div>
                  <p className="w-[230px] text-white bg-[#EAAA00] mt-[4px] text-[20px] py-2 text-center rounded-[20px] cursor-pointer shadow-md">
                    Current Plan
                  </p>
                </div>
              </div>
            </div>

            <div className="w-[320px] lg:w-[310px] xl:w-[330px] h-[450px] bg-[#EAAA00] rounded-[10px] flex flex-col justify-center items-center mt-[60px] lg:mt-0">
              <div className="relative w-[300px] text-white lg:w-[290px] xl:w-[310px] h-[430px]  border-[2px] rounded border-white px-4">
                <h2 className="absolute w-[130px] top-0 right-1 text-[14px] bg-white text-[#EAAA00] font-semibold mt-[5px] text-center py-1 rounded-[10px] uppercase">
                  Most Popular
                </h2>
                <h3 className="mt-[45px]  text-[30px] text-center">
                  Booklandia PLus
                </h3>
                <div className="text-[16px] mb-[20px]">
                  <div className="mt-[15px]">
                    <input type="checkbox" id="seven" checked />
                    <label htmlFor="seven" className="ml-[7px]">
                      acess to all textbooks
                    </label>
                  </div>
                  <div className="mt-[7px]">
                    <input type="checkbox" id="eight" checked />
                    <label htmlFor="eight" className="ml-[7px]">
                      acess to past questions and answers
                    </label>
                  </div>
                  <div className="mt-[7px]">
                    <input type="checkbox" id="nine" checked />
                    <label htmlFor="nine" className="ml-[7px]">
                      24/7 support to answer any question related to jupeb
                      syllabus
                    </label>
                  </div>
                </div>
                <div className="w-full h-[100px] mt-[80px] md:mt-[50px] lg:mt-[90px] flex flex-col  items-center font-semibold">
                  <div className="w-[230px] text-center text-[20px] flex justify-center">
                    <TbCurrencyNaira size={24} className="mt-[4px]" />{" "}
                    <p>
                      <span> 1,500</span>{" "}
                      <span className="text-[14px]">/ MONTH</span>{" "}
                    </p>
                  </div>
                  <p className="w-[230px] bg-white text-[#EAAA00] mt-[4px] text-[20px] py-2 text-center rounded-[20px] cursor-pointer shadow-md">
                    Activate Plan
                  </p>
                </div>
              </div>
            </div>

            <div className="relative w-[320px] lg:w-[300px] xl:w-[330px] h-[450px] bg-gradient-to-l from-[#fff7e5] to-white rounded-[10px] flex flex-col justify-center items-center mt-[90px] lg:mt-0">
              <h2 className="absolute w-[130px] flex justify-center -top-5 left-8 text-[14px] bg-[#EAAA00] text-white font-bold mt-[5px] text-center py-1 rounded-[10px] uppercase">
                <FaCrown size={18} className="mt-[2px] mr-[5px]" />
                BEST PLAN
              </h2>
              <div className="w-[300px] lg:w-[280px] xl:w-[310px] h-[430px] border-[2px] rounded border-[#EAAA00] px-4">
                <h2 className="mt-[45px] text-center text-[30px]">
                  Booklandia Pro
                </h2>
                <div className="text-[16px] mb-[20px]">
                  <div className="mt-[15px]">
                    <input type="checkbox" id="tenth" checked />
                    <label htmlFor="tenth" className="ml-[7px]">
                      acess to all textbooks
                    </label>
                  </div>
                  <div className="mt-[7px]">
                    <input type="checkbox" id="eleven" checked />
                    <label htmlFor="eleven" className="ml-[7px]">
                      acess to past questions and answers
                    </label>
                  </div>
                  <div className="mt-[7px]">
                    <input type="checkbox" id="twelve" checked />
                    <label htmlFor="twelve" className="ml-[7px]">
                      24/7 support to answer any question related to jupeb
                      syllabus
                    </label>
                  </div>
                </div>
                <div className="w-full h-[100px] mt-[80px] md:mt-[50px] lg:mt-[90px] flex flex-col  items-center font-semibold">
                  <div className="w-[230px] text-center text-[20px] flex justify-center">
                    <TbCurrencyNaira size={24} className="mt-[4px]" />{" "}
                    <p>
                      <span> 4,500</span>{" "}
                      <span className="text-[14px]">/ MONTH</span>{" "}
                    </p>
                  </div>

                  <p className="w-[230px] text-white bg-[#EAAA00] mt-[4px] text-[20px] py-2 text-center rounded-[20px] cursor-pointer shadow-md">
                    Activate Plan
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full h-full pb-[100px]">
            <FAQPage />
          </div>
        </div>
        {/* <div className="w-full h-full">
          <FAQPage />
        </div> */}
      </main>
    </Layout>
  );
};

export default Pricing;
