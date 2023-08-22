import { useEffect, useState } from "react";
import testimonials from "../../data/Review";

const testimonialLimit = window.innerWidth >= 768 ? 3 : 1;

const Reviews = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleTestimonials, setVisibleTestimonials] = useState(
    testimonials.slice(currentIndex, currentIndex + testimonialLimit)
  );

  useEffect(() => {
    // Function to update visible testimonials based on the current index
    const updateVisibleTestimonials = () => {
      const endIndex = currentIndex + testimonialLimit;
      const newTestimonials = testimonials.slice(currentIndex, endIndex);
      setVisibleTestimonials(newTestimonials);
    };

    // Add animation logic to transition testimonials
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
      updateVisibleTestimonials();
    }, 5000); // Change testimonial every 5 seconds

    // Initial setup of visible testimonials
    updateVisibleTestimonials();

    // Clean up the interval when the component unmounts
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <article className="w-full h-full mt-[100px] text-gray-600 ">
      <h1 className="w-full h-full font-bold text-center text-[22px] md:text-[35px]">
        Reviews from past and current students
      </h1>
      <div className="testimonial-container flex overflow-hidden transition-transform ease-in-out duration-500 mt-[50px] ">
        {visibleTestimonials.map((review) => {
          const { id, name, image, text } = review;
          return (
            <div
              key={id}
              className="testimonial flex-shrink-0 w-full md:w-1/3 px-4 text-center"
            >
              <img
                src={image}
                alt="person"
                className="h-[70px] w-[70px] md:h-[140px] md:w-[140px] mx-auto rounded-full"
              />
              <p className="text-lg font-bold mt-4">{name}</p>
              <p className=" text-[16px] leading-snug font-normal">{text}</p>
            </div>
          );
        })}
      </div>
    </article>
  );
};

export default Reviews;
