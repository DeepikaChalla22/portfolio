import React from 'react'
import SectionTitle from '../../components/SectionTitle'
import { useSelector } from 'react-redux';


function Projects() {
    const [selectedItemIndex, setSelectedItemIndex] = React.useState(0);
    const { portfolioData } = useSelector((state) => state.root);
    const { projects } = portfolioData;


    return (
        <div>
            <SectionTitle title="Projects" />
            <div className='flex py-10 gap-20 sm:flex-col'>
                <div className='flex flex-col gap-10 border-l-2 border-[#135e4c82] w-1/3 sm:flex-row sm:overflow-x-scroll sm:w-full'>
                    {projects.map((project, index) => (
                        <div

                            onClick={() => {
                                setSelectedItemIndex(index);
                            }} className='cursor-pointer'>
                            <h1 className={`text-xl px-5
                                ${selectedItemIndex === index ? 'text-tertiary border-tertiary border-l-4 -ml-[3px] bg-[#1a7f5a31] py-3 ' : 'text-white'} `}>{project.title}</h1>
                        </div>
                    ))}
                </div>

                <div className='flex items-center justify-center gap-10 sm:flex-col'>
                    <img src={projects[selectedItemIndex].image} alt="" className='h-60 w-72 rounded ' />


                    <div className='flex flex-col gap-5'>
                        <h1 className="text-secondary text-2xl">{projects[selectedItemIndex].title}</h1>
                        <p className="text-white" style={{ lineHeight: '1.6' }}>{projects[selectedItemIndex].description}</p>
                        <a href={projects[selectedItemIndex].link} className="text-blue-200 underline" target="_blank" rel="noopener noreferrer">
                            {projects[selectedItemIndex].link}
                        </a>




                        {/* <p className='text-white'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem repellat excepturi nesciunt vel illum temporibus libero necessitatibus rem animi esse!</p> */}
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Projects
