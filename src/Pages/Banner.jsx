// Import Swiper React components
import img1 from "../assets/BannerImg/img-3.jpg";
import img2 from "../assets/BannerImg/img-4.jpg";
import img3 from "../assets/BannerImg/car-8.png";
import img4 from "../assets/BannerImg/car-9.png";
import img5 from "../assets/BannerImg/car-10.png";
import img6 from "../assets/BannerImg/car-15.png";
import img7 from "../assets/BannerImg/car-11.png";
import img8 from "../assets/BannerImg/car-12.png";
import img9 from "../assets/BannerImg/car-7.png";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { useRef, useEffect } from "react";

const Banner = () => {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);

  // Function to update progress circle and content
  const onAutoplayTimeLeft = (s, time, progress) => {
    if (progressCircle.current && progressContent.current) {
      progressCircle.current.style.setProperty("--progress", 1 - progress);
      progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    }
  };

  // Optional: Use useEffect to perform actions after the component mounts
  useEffect(() => {
    // Initialize or perform actions here if needed
  }, []);

  return (
    <div>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
        <SwiperSlide>
          <img className="h-[700px] w-[1600px]" src={img1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="h-[700px] w-[1600px]" src={img2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="h-[700px] w-[1600px]" src={img3} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="h-[700px] w-[1600px]" src={img4} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="h-[700px] w-[1600px]" src={img5} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="h-[700px] w-[1600px]" src={img6} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="h-[700px] w-[1600px]" src={img7} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="h-[700px] w-[1600px]" src={img8} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="h-[700px] w-[1600px]" src={img9} alt="" />
        </SwiperSlide>

        {/* <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide> */}
        {/* <SwiperSlide>Slide 9</SwiperSlide> */}
        {/* Uncomment and adjust as necessary */}
        {/* <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div> */}
      </Swiper>
    </div>
  );
};

export default Banner;

// // Import Swiper React components
// import { Swiper, SwiperSlide } from "swiper/react";

// // Import Swiper styles
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";

// // import required modules
// import { Autoplay, Pagination, Navigation } from "swiper/modules";
// import { useRef } from "react";

// const Banner = () => {
//   const progressCircle = useRef(null);
//   const progressContent = useRef(null);
//   const onAutoplayTimeLeft = (s, time, progress) => {
//     progressCircle.current.style.setProperty("--progress", 1 - progress);
//     progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
//   };
//   return (
//     <div>
//       <Swiper
//         spaceBetween={30}
//         centeredSlides={true}
//         autoplay={{
//           delay: 2500,
//           disableOnInteraction: false,
//         }}
//         pagination={{
//           clickable: true,
//         }}
//         navigation={true}
//         modules={[Autoplay, Pagination, Navigation]}
//         onAutoplayTimeLeft={onAutoplayTimeLeft}
//         className="mySwiper"
//       >
//         <SwiperSlide>Slide 1</SwiperSlide>
//         <SwiperSlide>Slide 2</SwiperSlide>
//         <SwiperSlide>Slide 3</SwiperSlide>
//         <SwiperSlide>Slide 4</SwiperSlide>
//         <SwiperSlide>Slide 5</SwiperSlide>
//         <SwiperSlide>Slide 6</SwiperSlide>
//         <SwiperSlide>Slide 7</SwiperSlide>
//         <SwiperSlide>Slide 8</SwiperSlide>
//         <SwiperSlide>Slide 9</SwiperSlide>
//         {/* <div className="autoplay-progress" slot="container-end">
//           <svg viewBox="0 0 48 48" ref={progressCircle}>
//             <circle cx="24" cy="24" r="20"></circle>
//           </svg>
//           <span ref={progressContent}></span>
//         </div> */}
//       </Swiper>
//     </div>
//   );
// };

// export default Banner;
