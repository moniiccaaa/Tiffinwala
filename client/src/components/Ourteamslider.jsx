import React, { useRef, useState } from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules

import Navbar from './Navbar';
import Footer from './Footer';
import img1 from '../images/chooseus-1.jpg';
const Ourteamslider=()=>{
 return (
    <>
  
    <div className=" my-5">
     <h3 className="text-center text-3xl py-5" style={{fontFamily:"cursive"}}>Our Team</h3>
      
     <Swiper spaceBetween={30}
        loop={true}
        speed={900}
        autoplay={{
          delay: 3500,
        }}
        navigation={true}
        slidesPerView={1}
        modules={[Autoplay,Navigation]}
        className="mySwiper" >
        <SwiperSlide>
            <div className=" flex flex-col items-center text-center">
                <img src="https://media.licdn.com/dms/image/v2/D5603AQGHPzYxgnnMxg/profile-displayphoto-shrink_400_400/B56ZYcGE7zHQAg-/0/1744228077859?e=1756944000&v=beta&t=r1NR7SfrA0rhoYi-RJWzKCC8SfrrmrnNHChpFZkm3ao" alt="teammember img" style={{width:"11.4rem",borderRadius:"50%"}}/>
                <h4 className="mt-2 text-xl font-medium">Vaishnavi Sisodiya</h4>
                 <p >full Stack Developer</p>
                 {/* <p className="px-14">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur voluptatibus consequatur veritatis harum sunt sapiente! Ratione quae, officiis adipisci dolorem mollitia nihil at voluptatibus.</p> */}
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className=" flex flex-col items-center text-center">
                <img src="https://media.licdn.com/dms/image/v2/D4D03AQE8NyPsnu_xIg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1703960409239?e=1756944000&v=beta&t=UDKEifixQOMh82IPz1zKHNw1So3ERzQAIfAYhp7TkDM" alt="teammember img" style={{width:"11.4rem",borderRadius:"50%"}}/>
                <h4 className="mt-2 text-xl font-medium"> Komal Shrivastava</h4>
                 <p >full Stack Developer</p>
                 {/* <p className="px-14">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur voluptatibus consequatur veritatis harum sunt sapiente! Ratione quae, officiis adipisci dolorem mollitia nihil at voluptatibus.</p> */}
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className=" flex flex-col items-center text-center">
                <img src="https://media.licdn.com/dms/image/v2/D5603AQHjsE_Q_rcKXA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1723987184377?e=1756339200&v=beta&t=KTtCMxaJ912Zb71wuCgjap1aZ02KN-4f7Ouu35iAW34" alt="teammember img" style={{width:"11.4rem",borderRadius:"50%"}}/>
                <h4 className="mt-2 text-xl font-medium"> Mahima Pandey</h4>
                 <p >full Stack Developer</p>
                 {/* <p className="px-14">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur voluptatibus consequatur veritatis harum sunt sapiente! Ratione quae, officiis adipisci dolorem mollitia nihil at voluptatibus.</p> */}
            </div>
        </SwiperSlide>
       
      </Swiper>
      </div>
    </>
 );
};
export default Ourteamslider;