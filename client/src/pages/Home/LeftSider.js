import React from 'react'

function LeftSider() {
    return (
        <div className='fixed left-0 bottom-0 px-10  sm:static'>
            <div className='flex flex-col items-center'>
                <div className='flex flex-col gap-3 sm:flex-row'>
                    <a href="https://drive.google.com/file/d/1GO02vx4n1sb8sIRjbkWDtaNLfir5PCxw/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                        <i className="ri-file-user-line text-gray-600 text-xl "></i>
                    </a>
                    <a href="mailto:challadeepika2004@gmail.com" target="_blank" rel="noopener noreferrer">
                        <i className="ri-mail-line text-gray-600 text-xl"></i>
                    </a>

                    <a href="https://www.linkedin.com/in/challa-deepika-sai-88a9b2232/" target="_blank" rel="noopener noreferrer">
                        <i className="ri-instagram-line text-gray-600 text-xl"></i>
                    </a>

                    <a href="https://www.linkedin.com/in/challa-deepika-sai-88a9b2232/" target="_blank" rel="noopener noreferrer">
                        <i className="ri-linkedin-box-line text-gray-600 text-xl"></i>
                    </a>

                    <a href="https://github.com/DeepikaChalla22" target="_blank" rel="noopener noreferrer">
                        <i className="ri-github-line text-gray-600 text-xl"></i>
                    </a>
                </div>

                <div className='w-[1px] h-32 bg-[#135e4c82] sm:hidden'>
                </div>
            </div>
        </div>
    )
}

export default LeftSider
