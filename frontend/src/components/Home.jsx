import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { DefaultSidebar } from './Sidenavigation';

import CTAButton from "./core/HomePage/Button";
import HighlightText from './core/HomePage/HighlightText';
import { fadeIn } from './common/motionFrameVarients';
import Footer from './footer';
import InstructorSection from './Instructor';
import TimelineSection from './TimelineSection';
import LearningLanguageSection from './LearningLanguagesSection';

// background random images
import backgroundImg1 from '../assets/Images/random bg img/coding bg1.jpg';
import backgroundImg2 from '../assets/Images/random bg img/coding bg2.jpg';
import backgroundImg3 from '../assets/Images/random bg img/coding bg3.jpg';
import backgroundImg4 from '../assets/Images/random bg img/coding bg4.jpg';
import backgroundImg5 from '../assets/Images/random bg img/coding bg5.jpg';
import backgroundImg6 from '../assets/Images/random bg img/coding bg6.jpeg';
import backgroundImg7 from '../assets/Images/random bg img/coding bg7.jpg';
import backgroundImg8 from '../assets/Images/random bg img/coding bg8.jpeg';
import backgroundImg9 from '../assets/Images/random bg img/coding bg9.jpg';
import backgroundImg10 from '../assets/Images/random bg img/coding bg10.jpg';
import backgroundImg11 from '../assets/Images/random bg img/coding bg11.jpg';
import CardDefault from './cards';


const randomImages = [
  backgroundImg1,
  backgroundImg2,
  backgroundImg3,
  backgroundImg4,
  backgroundImg5,
  backgroundImg6,
  backgroundImg7,
  backgroundImg8,
  backgroundImg9,
  backgroundImg10,
  backgroundImg11,
];

function Home() {
  const [backgroundImg, setBackgroundImg] = useState(null);

  useEffect(() => {
    const bg = randomImages[Math.floor(Math.random() * randomImages.length)];
    setBackgroundImg(bg);
  }, []);

  return (
    <div className="flex h-screen">
      <DefaultSidebar />
      <div className="flex-1 relative text-white p-6 bg-black overflow-auto ml-[5rem]">
        {backgroundImg && (
          <div className="absolute inset-0 opacity-30">
            <img
              src={backgroundImg}
              alt="Background"
              className="w-full h-full object-cover"
            />
          </div>
        )}
        <div className="relative z-10">
          <div className='relative h-[450px] md:h-[550px] justify-center mx-auto flex flex-col w-11/12 max-w-maxContent items-center text-white'>
            <Link to={"/signup"}>
              <div className='z-0 group p-1 mx-auto rounded-full bg-richblack-800 font-bold text-richblack-200 transition-all duration-200 hover:scale-95 w-fit'>
                <div className='flex flex-row items-center gap-2 rounded-full px-10 py-[5px] transition-all duration-200 group-hover:bg-richblack-900'>
                  <p>Become an Instructor</p>
                </div>
              </div>
            </Link>

            <motion.div
  variants={fadeIn('left', 0.1)}
  initial='hidden'
  whileInView={'show'}
  viewport={{ once: false, amount: 0.1 }}
  className='text-center text-3xl lg:text-4xl font-semibold mt-7'
>
  Excel in Your Engineering Interviews with
  <HighlightText text={"Our Courses"} />
</motion.div>

<motion.div
  variants={fadeIn('right', 0.1)}
  initial='hidden'
  whileInView={'show'}
  viewport={{ once: false, amount: 0.1 }}
  className='mt-4 w-[90%] text-center text-base lg:text-lg font-bold text-gray-400'
>
  Prepare thoroughly for your engineering interviews with our expert-led courses in DBMS, OOP, Computer Networks, Operating Systems, and System Design. Learn at your own pace, anywhere, anytime, with hands-on projects, quizzes, and personalized guidance from top industry professionals.
</motion.div>


            <div className='flex flex-row gap-7 mt-8 mb-12 md:mb-0'>
              <CTAButton active={true} linkto={"/signup"}>
                Learn More
              </CTAButton>
              <CTAButton active={false} linkto={"/login"}>
                Book a Demo
              </CTAButton>
            </div>
          </div>
          {/* Place the CardDefault component here */}
          <CardDefault />
          <div className='mx-auto w-11/12 max-w-maxContent flex flex-col items-center justify-between gap-7'>
                        <div className='flex flex-col lg:flex-row gap-5 mb-10 mt-[95px]'>
                            <div className='text-3xl lg:text-4xl font-semibold w-full lg:w-[45%]'>
                                Get the Skills you need for a
                                <HighlightText text={"Job that is in demand"} />
                            </div>

                            <div className='flex flex-col gap-10 w-full lg:w-[40%] items-start'>
                                <div className='text-[16px]'>
                                    The modern EduCore is the dictates its own terms. Today, to be a competitive specialist requires more than professional skills.
                                </div>
                                <CTAButton active={true} linkto={"/signup"}>
                                    <div>
                                        Learn more
                                    </div>
                                </CTAButton>
                            </div>
                        </div>


                        {/* leadership */}
                        <TimelineSection />

                        <LearningLanguageSection />

                    </div>
          <InstructorSection />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Home;
