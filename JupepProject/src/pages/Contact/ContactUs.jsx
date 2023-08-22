import Layout from "../../layout/Layout";
import { BiLogoTelegram } from "react-icons/bi";
import { BsWhatsapp } from "react-icons/bs";

const ContactUs = () => {
  return (
    <Layout>
      <main className="w-full h-full bg-white px-4 md:px-6 lg:px-20 mb-[70px] ">
        <div className="w-full h-full pt-[100px] md:pt-[150px]">
          <h1 className="text-[24px] md:text-[48px]">Contact Us</h1>
          <p>
            Have questions or need support? We&apos;re here to help! <br />
            Contact us through any of our platform below to connect with a Staff
          </p>
          <div className="w-full h-full mt-[40px] flex flex-col md:flex-row">
            <p className="text-[20px] md:text-[24px] md:mr-[30px]">
              {" "}
              Call : 08129577490 <br />
              Email: Booklandia@gmail.com
            </p>
            <a
              className="text-white text-[16px] md:text-[20px] h-[60px] w-[200px] lg:w-[250px] mt-[20px] md:mt-0 flex justify-center items-center bg-[#28A219] hover:opacity-90 rounded-[10px] md:mr-[30px]"
              href="https://wa.me/08129577490"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsWhatsapp size={24} className="text-[#f2f3f5] mr-[20px]" />
              WhatsAPP
            </a>

            <a
              className="text-white text-[16px] md:text-[20px] h-[60px] w-[200px] lg:w-[250px] mt-[20px] md:mt-0 flex justify-center items-center bg-[#2AA2DC] hover:opacity-90 rounded-[10px]"
              rel="noreferrer"
              target="_blank"
              href="https://t.me/+u5_EgioIoPM3Njk0"
            >
              {" "}
              <BiLogoTelegram size={24} className="text-[#f2f3f5] mr-[20px]" />
              Telegram
            </a>
          </div>

          <div className="w-full h-full mt-[50px]">
            <form
              className="flex flex-col w-full h-full max-w-[600px]"
              // action="https://getform.io/f/4ad2067f-1328-47af-86e6-90c1a47749a5"
              method="POST"
            >
              <input
                className="mb-[20px] p-[15px] border-none md:w-[500px] sm:w-[90%] bg-[#dfe0e1] outline-none"
                type="text"
                placeholder="Full Name"
                name="name"
                required
              />
              <input
                className="mb-[20px] p-[15px] bg-gray-200 border-none md:w-[500px] sm:w-[90%] outline-none"
                type="email"
                name="email "
                placeholder="@emailaddress.com"
              />
              <input
                className="mb-[20px] p-[15px] bg-gray-200 border-none md:w-[500px] sm:w-[90%] outline-none"
                type="text"
                name="institution"
                id="institution"
                placeholder="Institution eg. OAU"
              />
              <textarea
                className="md:w-[500px] sm:w-[90%] bg-gray-200 pt-[15px] pl-[10px]  resize-none outline-none"
                name="message"
                placeholder="Message me"
                rows="10"
              ></textarea>
              <input
                className="mt-[15px] p-[12px] cursor-pointer text-2xl bg-blue-700 hover:bg-blue-900 text-white md:w-[500px] sm:w-[90%] outline-none"
                type="submit"
                value="Submit"
              />
            </form>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default ContactUs;
