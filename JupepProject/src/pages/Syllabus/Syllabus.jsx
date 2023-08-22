import img from "../../assets/Home Landing Image/college.jpeg";
import { IoIosCheckmarkCircle } from "react-icons/Io";

const sub = () => {
  return (
    <div className="w-full md:h-[550px]">
      {/* front page */}
      <div className="w-full bg-[#fff3d8] md:flex md:justify-evenly">
        <div className="md:text-none text-center pt-[60px]">
          <h2 className="md:text-5xl text-2xl font-bold">
            Browse Through Jubep Syllabus
          </h2>
          <p className="pt-[20px] md:text-xl">
            This is the official Jupeb Government syllabus which contain
            001/002/003/ & 004 <br></br>
            and which the Jupeb textbook follow the arrangement in the syllabus.
          </p>

          <img
            className="h-[350px] md:hidden block mx-auto my-auto md:mt-0 mt-[60px]"
            src={img}
            alt="book"
          />

          <div className="w-full sm:pl-[120px] pl-[20px] mt-[20px] text-xl">
            <p className="flex  items-center">
              <IoIosCheckmarkCircle size={20} className="mr-[10px] mt-[6px]" />{" "}
              Your Passport to Excellence
            </p>
            <p className="flex  items-center">
              <IoIosCheckmarkCircle size={20} className="mr-[10px] mt-[6px]" />{" "}
              Open Access & premium content
            </p>
            <p className="flex items-center">
              <IoIosCheckmarkCircle size={20} className="mr-[10px] mt-[6px]" />{" "}
              Your Roadmap to Success
            </p>
            <p className="underline mt-[30px] text-xl md:pb-0 pb-[80px] pl-[10px] cursor-pointer text-left"><a href="/"></a>Download government syllabus</p>
          </div>
        </div>
        

        <div className="my-[60px]">
          <img className="h-[500px] hidden md:block" src={img} alt="book" />
        </div>
      </div>

      <section>
        <div className=" w-full md:grid md:grid-cols-4 md:grid-rows-4 md:space-x-[10px] space-y-[30px] grid grid-cols-2 grid-rows-2  pt-[50px]">
          <img className="h-[350px]" src={img} alt="book" />
          <img className="h-[350px]" src={img} alt="book" />
          <img className="h-[350px]" src={img} alt="book" />
          <img className="h-[350px]" src={img} alt="book" />
          <img className="h-[350px]" src={img} alt="book" />
          <img className="h-[350px]" src={img} alt="book" />
          <img className="h-[350px]" src={img} alt="book" />
          <img className="h-[350px]" src={img} alt="book" />
          <img className="h-[350px]" src={img} alt="book" />
          <img className="h-[350px]" src={img} alt="book" />
          <img className="h-[350px]" src={img} alt="book" />
          <img className="h-[350px]" src={img} alt="book" />
        </div>
      </section>
    </div>
  );
};

export default sub;