"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, EffectFade, FreeMode } from "swiper/modules";
import { useRef, useState } from "react";
function Page() {
  const img = [
    {
      img: "https://leonardo-cdn.b-cdn.net/wp-content/uploads/2024/01/conceptart_refresh-1024x640.jpg",
      text: "Concept Art",
    },
    {
      img: "https://leonardo-cdn.b-cdn.net/wp-content/uploads/2024/05/Graphic-Design-1024x640.jpg",
      text: "Graph Design",
    },
    {
      img: "https://leonardo-cdn.b-cdn.net/wp-content/uploads/2024/05/Fashion-1024x640.jpg",
      text: "Fashion",
    },
    {
      img: "https://leonardo-cdn.b-cdn.net/wp-content/uploads/2024/05/Inspiration-1024x640.jpg",
      text: "Inspiration",
    },
    {
      img: "https://leonardo-cdn.b-cdn.net/wp-content/uploads/2024/05/Game-Assets-1024x640.jpg",
      text: "Game Assets",
    },
    {
      img: "https://leonardo-cdn.b-cdn.net/wp-content/uploads/2024/01/marketing_refresh-1024x640.jpg",
      text: "Marketing",
    },
    {
      img: "https://leonardo-cdn.b-cdn.net/wp-content/uploads/2024/05/Character-Design-1024x640.jpg",
      text: "Character Design",
    },
    {
      img: "https://leonardo-cdn.b-cdn.net/wp-content/uploads/2024/01/Advertisting_refresh-1024x640.jpg",
      text: "Advertising",
    },
    {
      img: "https://leonardo-cdn.b-cdn.net/wp-content/uploads/2024/05/Product-Photography-1024x640.jpg",
      text: "Product Photography",
    },
    {
      img: "https://leonardo-cdn.b-cdn.net/wp-content/uploads/2024/05/Architecture-1024x640.jpg",
      text: "Architecture",
    },
    {
      img: "https://leonardo-cdn.b-cdn.net/wp-content/uploads/2024/05/Interior-Design-1024x640.jpg",
      text: "Interior Design",
    },
    {
      img: "https://leonardo-cdn.b-cdn.net/wp-content/uploads/2023/07/1-69-1024x641.png",
      text: "And much more",
    },
  ];

  console.log("img", img);

  const swiper1Ref = useRef(null);
  const swiper2Ref = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  // const handleSlideClick = (index) => {
  //   setCurrentIndex(index);
  //   if (swiper1Ref.current && swiper2Ref.current) {
  //     swiper1Ref.current.swiper.slideTo(index); // Move Swiper 1 to clicked slide
  //     swiper2Ref.current.swiper.slideTo(index); // Sync Swiper 2 to the same slide
  //   }
  // };

  // const syncSwipers = () => {
  //   const swiper1Index = swiper1Ref.current.swiper.activeIndex;
  //   if (
  //     swiper2Ref.current &&
  //     swiper2Ref.current.swiper.activeIndex !== swiper1Index
  //   ) {
  //     swiper2Ref.current.swiper.slideTo(swiper1Index);
  //   }
  // };

  const syncSwipersReverse = () => {
    const swiper2Index = swiper2Ref.current.swiper.activeIndex;
    if (
      swiper1Ref.current &&
      swiper1Ref.current.swiper.activeIndex !== swiper2Index
    ) {
      swiper1Ref.current.swiper.slideTo(swiper2Index);
    }
  };
  const handleSwiperSlideChange = (swiper) => {
    const index = swiper.activeIndex;
    setCurrentIndex(index);
    if (swiper2Ref.current) {
      swiper2Ref.current.swiper.slideTo(index);
    }
  };
  const handleSlideClick = (index) => {
    setCurrentIndex(index);
    if (swiper1Ref.current && swiper2Ref.current) {
      swiper1Ref.current.swiper.slideTo(index);
      swiper2Ref.current.swiper.slideTo(index);
    }
  };
  return (
    <div>
      <h1 className="heading">Use Leonardo today for</h1>
      <Swiper
        ref={swiper1Ref}
        onSlideChange={handleSwiperSlideChange}
        // onSlideChange={(swiper) => setCurrentIndex(swiper.activeIndex)}
        slidesPerView={3}
        spaceBetween={10}
        speed={1000}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        freeMode={true}
        modules={[Autoplay, FreeMode]}
        className="mySwiper custom-swiper"
      >
        {img.map((text, i) => (
          <SwiperSlide key={i}>
            <div className="text container" onClick={() => handleSlideClick(i)}>
              <h4>{text.text}</h4>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <Swiper
        ref={swiper2Ref}
        onSlideChange={syncSwipersReverse}
        spaceBetween={30}
        speed={1000}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        effect={"fade"}
        freeMode={true}
        modules={[EffectFade, Autoplay, FreeMode]}
        className="mySwiper"
      >
        {img?.map((num, i) => (
          <SwiperSlide key={i}>
            <div className="images">
              <Image
                height={400}
                width={800}
                src={num?.img}
                alt=""
                style={{
                  borderTop: "10px solid gray",
                  borderRight: "10px solid gray",
                  borderLeft: "10px solid gray",
                  borderRadius: "30px",
                }}
              />
            </div>
            {/* <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black border-l-purple-400 rounded-[15px]"></div> */}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Page;
