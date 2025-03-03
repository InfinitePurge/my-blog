import React from 'react'
import { FaGithub } from 'react-icons/fa'

const Modal = ({ project, onClose }) => {
    const handleOverlayClick = (e) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    return (
        <div onClick={handleOverlayClick} className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-[999]">
            <div onClick={handleOverlayClick} className='cursor-pointer hover:text-[#ffbd2f] text-white text-2xl font-bold absolute top-4 right-4'>
                X
            </div>
            <div className='text-white bg-gradient-to-b from-black via-orange-500 to-black rounded border-2 border-black 
             w-[90%] sm:w-[85%] md:w-[80%] lg:w-[70%] xl:w-[60%]
             h-[80vh]      
             overflow-y-auto  
             scrollbar-hide 
    '>
                <div className='flex justify-center items-center p-4 sm:p-6'>
                    <img
                        src={project.image}
                        alt="Error loading project Image"
                        className="max-w-[99%] max-h-[40vh] sm:max-h-[50vh] object-contain"
                    />
                </div>

                <div>
                    <h1 className='text-white text-2xl sm:text-3xl md:text-4xl font-bold ml-4 mt-4'>
                        {project.title}
                    </h1>
                </div>

                <div className='flex justify-center items-center text-base sm:text-lg md:text-xl px-4 mt-4'>
                    <p>
                        {project.description}
                    </p>
                </div>
                <div>
                    <h1 className='text-white text-2xl sm:text-3xl md:text-4xl font-bold ml-4 mt-4'>
                        Project Links
                    </h1>
                </div>
                <div className='flex items-row justify-start ml-4 '>
                    <p className='text-white text-xl my-4 max-w-[100%] flex'>
                        <a
                            href={project.Github}
                            target='_blank'
                            rel='noopener noreferrer'
                            className="font-medium text-[#ffbd2f] mx-1 underline hover:text-[#ffa500] transition-colors hover:no-underline flex"
                        >
                            <FaGithub className='mr-1 mt-1' /> Github
                        </a>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Modal