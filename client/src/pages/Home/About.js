import React from 'react'
import SectionTitle from '../../components/SectionTitle'
import { useSelector } from 'react-redux';

function About() {
    const { loading, portfolioData } = useSelector((state) => state.root);
    const { about } = portfolioData;
    const { skills, lottieURL, description1, description2 } = about;
    return (
        <div>
            <SectionTitle title="About Me" />
            <div className="flex w-full items-center sm:flex-col">
                <div className='h-[70vh] w-1/2 sm:w-full'>
                    <dotlottie-player src={lottieURL || ''} background="transparent" speed="1" autoplay></dotlottie-player>
                </div>
                <div className='flex flex-col gap-5 w-1/2 sm:w-full'>
                    <p className='text-white' style={{ lineHeight: '1.6' }}>
                        {description1 || ''}
                    </p>
                    <p className='text-white' style={{ lineHeight: '1.6' }}>
                        {description2 || ''}
                    </p>

                </div>
            </div>
            {/* technologies working on */}

            <div className='py-5'>
                <h1 className='text-tertiary text-xl'>
                    Here are some technologies in which I am proficient:
                </h1>
                <div className='flex flex-wrap gap-10 mt-5'>
                    {skills.map((skill, index) => (
                        <div className='border border-tertiary py-3 px-10'>
                            <h1 className='text-tertiary'>{skill}</h1>
                        </div>
                    ))

                    }
                </div>
            </div>
        </div>

    );
}

export default About
