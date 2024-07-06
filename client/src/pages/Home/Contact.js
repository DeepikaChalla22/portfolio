import React from 'react'
import SectionTitle from '../../components/SectionTitle'
import { useSelector } from 'react-redux';

function Contact() {
    const { portfolioData } = useSelector((state) => state.root);
    const { contact } = portfolioData;
    return (
        <div>
            <SectionTitle title="Say Hello" />

            <div className='flex sm:flex-col items-center justify-between'>
                <div className="flex flex-col gap-2">
                    <p className='text-tertiary'>{'{'}</p>
                    {Object.keys(contact).map((key) => key !== "_id" &&
                        (<p className='ml-5'>
                            <span className='text-tertiary'>{key} :{" "} </span> <span className='text-tertiary'>{contact[key]}</span>
                        </p>
                        ))}
                    <p className='text-tertiary'>{'}'}</p>
                </div>

                <div className='h-[300px]'>
                    <dotlottie-player src="https://lottie.host/127e875c-d55c-43c6-8ce2-d53249613c4d/owZ3yaSlEQ.json" background="transparent" speed="1" playMode="normal" autoplay></dotlottie-player>
                </div>
            </div>
        </div>
    )
}

export default Contact;
