import { FaLinkedin, FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-[#26282a] w-full   h-full px-4 md:px-6 lg:px-10">
      <div className="w-full h-full">
        {/*Taria  */}
        <div className=" text-white text-center md:pt-[10px] pt-[10px] md:pl-[14px] sm:pl-[40px] w-full h-full">
          <h3 className="text-4xl">Grow your knowledge</h3>
          <p className="mt-[25px] text-[18px] ">
            Join thousands of fellow knowledge enthusiasts and subscribe to our{" "}
            <br></br> weekly newsletter for content alerts, research tips, and
            more.
          </p>
        </div>

        <div className="flex items-center justify-center mt-[30px]">
          <div className="relative mt-[10px] w-[650px]">
            <input
              className=" w-full h-[60px] rounded-[50px] pl-[30px]"
              placeholder="Enter your email address"
            />
            <button className="absolute top-1 right-1 h-[50px] border border-[#616367] rounded-[30px] sm:w-[90px] w-[75px] text-[#616367]">
              join
            </button>
          </div>
        </div>

        <div className="w-full h-full text-white mt-[90px] lg:grid lg:grid-cols-5 grid grid-cols-2">
          <div className="w-full space-y-[5px]">
            <h2 className="text-3xl">Zendy</h2>
            <div className="border border-[#f4b223] w-[100px] mt-[8px]"></div>
            <p>
              <button>About</button>
            </p>
            <p>
              <button>Careers</button>
            </p>
            <p>
              <button>Publisher Partners</button>
            </p>
            <p>
              <button>Contact Us</button>
            </p>
          </div>

          <div className="w-full space-y-[5px] sm:pl-[0] pl-[35px]">
            <h2 className="text-3xl">Learn</h2>
            <div className="border border-[#f4b223] w-[100px] mt-[8px]"></div>
            <p>
              <button>FAQS</button>
            </p>
            <p>
              <button>Blogs</button>
            </p>
            <p>
              <button>Terms of Use</button>
            </p>
            <p>
              <button>Privacy Policy</button>
            </p>
          </div>

          <div className="w-full space-y-[5px]">
            <h2 className="text-3xl lg:mt-0 mt-[20px]">Discover</h2>
            <div className="border border-[#f4b223] w-[130px] mt-[8px]"></div>
            <p>
              <button>Journals</button>
            </p>
            <p>
              <button>Proceedings</button>
            </p>
            <p>
              <button>Books</button>
            </p>
            <div className="lg:hidden block pt-[20px]">
              <h5 className="text-xl">Social Media</h5>
              <div className="border border-[#f4b223] w-[120px] mt-[8px]"></div>
            </div>
            <div className="lg:hidden  flex space-x-[15px] pt-[10px]">
              <FaLinkedin size={20} />
              <FaTwitter size={20} />
              <FaFacebook size={20} />
              <FaInstagram size={20} />
            </div>
          </div>

          <div className="lg:w-[400px] h-full sm:ml-0 ml-[35px]">
            <h2 className="text-3xl lg:mt-0 mt-[20px]">Explore</h2>
            <div className="border border-[#f4b223] md:w-[340px] sm:w-[200px] w-[110px] mt-[8px]"></div>
            <div className=" w-full h-full lg:flex lg:flex-col-2 sm:text-base text-xs">
              <div className="lg:w-[500px] space-y-[5px]">
                <p>
                  <button>Health & Medical</button>
                </p>
                <p>
                  <button>Physics & Mathematics</button>
                </p>
                <p>
                  <button>Publisher Partners</button>
                </p>
                <p>
                  <button>Chemical, & Earth Science</button>
                </p>
              </div>

              <div className="lg:w-[400px] space-y-[5px]">
                <p>
                  <button>Business And</button> <br></br>
                  <button>Economics</button>
                </p>
                <p>
                  <button> Social Sciences</button>
                </p>
                <p>
                  <button>Computer Science</button>
                </p>
                <p>
                  <button>Life Sciences</button>
                </p>
              </div>
            </div>
          </div>

          <div className="lg:mt-[50px] lg:ml-[180px] lg:space-y-[10px] hidden lg:block">
            <FaLinkedin size={25} />
            <FaTwitter size={25} />
            <FaFacebook size={25} />
            <FaInstagram size={25} />
          </div>
        </div>

        <div className="w-full text-white flex justify-center items-center flex-col md:mt-[130px] mt-[70px] pb-[20px]">
          <div className="border lg:w-[800px] md:w-[600px] sm:w-[450px] w-[200px] text-white mb-[10px] "></div>
          <p className="text-center">
            Copyright knowledge E 2023. All Right Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
