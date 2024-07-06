import React from 'react'
import SectionTitle from '../../components/SectionTitle'
import { useSelector } from 'react-redux';


function AnA() {
    const [selectedItemIndex, setSelectedItemIndex] = React.useState(0);
    const { portfolioData } = useSelector((state) => state.root);
    const { activities } = portfolioData;
    return (
        <div>
            <SectionTitle title="Activities & Achievements" />
            <div className='flex py-10 gap-20 sm:flex-col'>
                <div className='flex flex-col gap-10 border-l-2 border-[#135e4c82] w-1/3 sm:flex-row sm:overflow-x-scroll sm:w-full'>
                    {activities.map((activity, index) => (
                        <div
                            onClick={() => {
                                setSelectedItemIndex(index);
                            }} className='cursor-pointer'>
                            <h1 className={`text-xl px-5
                                ${selectedItemIndex === index ? 'text-tertiary border-tertiary border-l-4 -ml-[3px] bg-[#1a7f5a31] py-3 ' : 'text-white'} `}>{activity.title}</h1>
                        </div>
                    ))}
                </div>

                {/* <div className='flex items-center justify-center gap-10 sm:flex-col'>

                    <div className='flex flex-col gap-5'>
                        <h1 className="text-secondary text-2xl">{activities[selectedItemIndex].title}</h1>


                        <p className='text-white' style={{ lineHeight: '1.6' }}>{activities[selectedItemIndex].description}</p>
                    </div>


                    {/* <img src={activities[selectedItemIndex].image} alt="" className='h-52 w-80 rounded-xl' /> 

                 */}

                <div className='flex items-center justify-center gap-10 sm:flex-col'>

                    <div className='flex flex-col gap-5 w-full sm:w-auto'>
                        <h1 className="text-secondary text-2xl">{activities[selectedItemIndex].title}</h1>
                        <p className='text-white w-full' style={{ lineHeight: '1.6' }}>{activities[selectedItemIndex].description}</p>
                    </div>

                    {/* <div className='flex items-center justify-center w-full sm:w-auto'>
                        <div className="relative rounded-lg overflow-hidden h-52 sm:h-full w-80 sm:w-full">
                            <img src={activities[selectedItemIndex].image} alt="" className='h-full w-full object-cover' />
                        </div>
                    </div> */}

                    <div className='flex items-center justify-center gap-10 sm:flex-col'>
                        <div className="relative rounded-lg overflow-hidden h-52 w-80">
                            <img src={activities[selectedItemIndex].image} alt="" className='h-full w-full object-cover' />
                        </div>
                    </div>

                </div>


            </div>
        </div>
    )
}

export default AnA;
