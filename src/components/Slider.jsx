import { GoArrowUpRight } from "react-icons/go";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
// import "swiper/css/autoplay";
import { Link } from "react-router-dom";
import "swiper/css/navigation";

const Slider = () => {
  return (
    <div className="mb-10">
      <Swiper
        // install Swiper modules
        modules={[Navigation, Autoplay]}
        spaceBetween={500}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ autoplay: true }}
      >
        <SwiperSlide>
          <div className="hero min-h-[600px] bg-cover bg-no-repeat bg-banner">
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-neutral-content text-center">
              <div className="max-w-lg">
                <h1 className="mb-5 text-4xl font-bold">
                  Streamlined Assignment Management
                </h1>
                <p className="mb-5 ">
                  This Assignment Management System allows educators to create,
                  assign, and track assignments effortlessly. With secure
                  Firebase authentication and dynamic CRUD operations powered by
                  MongoDB, teachers and students can easily manage tasks,
                  monitor progress, and collaborate effectively in real time.
                </p>

                <Link
                  to="/allassignmnets"
                  className="btn bg-orange-500 text-xl font-bold text-white"
                >
                  Visit All Assignment
                  <GoArrowUpRight className="text-3xl font-bold text-green-500 rounded-full bg-white" />
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="hero min-h-[600px] bg-banner_1 bg-cover bg-no-repeat ">
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-neutral-content text-center">
              <div className="max-w-lg">
                <h1 className="mb-5 text-4xl font-bold">
                  Simplified User Experience for Students and Teachers
                </h1>
                <p className="mb-5">
                  Designed with both teachers and students in mind, this
                  platform offers secure access, real-time updates, and seamless
                  assignment submission. Teachers can review, grade, and provide
                  feedback, while students can track their tasks and receive
                  instant updates on their assignments.
                </p>

                <Link
                  to="/allassignmnets"
                  className="btn bg-orange-500 text-xl font-bold text-white"
                >
                  Visit All Campaign
                  <GoArrowUpRight className="text-3xl font-bold text-green-500 rounded-full bg-white" />
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="hero min-h-[600px] bg-banner_2 bg-cover bg-no-repeat ">
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-neutral-content text-center">
              <div className="max-w-lg">
                <h1 className="mb-5 text-4xl font-bold">
                  Secure and Scalable Platform
                </h1>
                <p className="mb-5">
                  Featuring Firebase Authentication for secure logins and JWT
                  for smooth user sessions, this system ensures the privacy and
                  integrity of user data. Built on MongoDB, it offers a scalable
                  solution for managing assignments and student performance,
                  making it ideal for classrooms of any size.
                </p>

                <Link
                  to="/allassignmnets"
                  className="btn bg-orange-500 text-xl font-bold text-white"
                >
                  Visit All Campaign
                  <GoArrowUpRight className="text-3xl font-bold text-green-500 rounded-full bg-white" />
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
