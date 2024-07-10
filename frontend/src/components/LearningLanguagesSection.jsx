import React from 'react'
import HighlightText from './core/HomePage/HighlightText'


import CTAButton from "./core/HomePage/Button";



const LearningLanguageSection = () => {
    return (
        <div className='mt-[130px] mb-10'>
            <div className='flex flex-col gap-5 items-center'>

            <div className='text-3xl lg:text-4xl font-semibold text-center'>
  Your Ultimate Tool for
  <HighlightText text={" mastering core engineering subjects"} />
</div>

<div className='lg:text-center text-richblack-600 mx-auto text-base font-medium lg:w-[70%]'>
  Prepare for your engineering interviews with our comprehensive courses. Gain in-depth knowledge in core subjects like DBMS, OOP, Computer Networks, Operating Systems, and System Design. With hands-on projects, quizzes, progress tracking, and personalized guidance, you'll be well-equipped for any technical interview.
</div>


               
                

                <div className='w-fit'>
                    <CTAButton active={true} linkto={"/signup"}>
                        <div>
                            Learn more
                        </div>
                    </CTAButton>
                </div>

            </div>
        </div>
    )
}

export default LearningLanguageSection
