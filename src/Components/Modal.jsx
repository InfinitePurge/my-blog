import React, { useState, useEffect } from 'react'
import { FaGithub } from 'react-icons/fa'
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs'
import { RxDotFilled } from 'react-icons/rx'
import { div } from 'framer-motion/client'

// Modal event handler
const Modal = ({ project, onClose }) => {
    const handleOverlayClick = (e) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    // Carousel event handler
    const [currentIndex, setCurrentIndex] = useState(0);
    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? project.image.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    }
    const nextSlide = () => {
        const isLastSlide = currentIndex === project.image.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    }

    const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex);
    }

    return (
        <div onClick={handleOverlayClick} className="fixed inset-0 flex  items-center justify-center bg-black bg-opacity-50 z-[999]">
            <div onClick={handleOverlayClick} className='cursor-pointer hover:text-[#ffbd2f] text-white text-2xl font-bold absolute top-4 right-4'>
                X
            </div>
            <div className='text-white bg-[#121212] rounded-xl border-2 border-black 
             w-[90%] sm:w-[85%] md:w-[80%] lg:w-[70%] xl:w-[60%]
             h-[80vh]      
             overflow-y-auto  
             scrollbar-hide 
    '>
                <div className='flex justify-center items-center p-4 sm:p-6 m-auto relative'>
                    <div className="w-full h-[50vh] flex flex-col">
                        {/* Image Container */}
                        <div className="relative h-[40vh] sm:h-[45vh] flex items-center justify-center group overflow-hidden">
                            <div
                                className="flex transition-transform duration-500 ease-in-out w-full h-full"
                                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                            >
                                {project.image.map((img, index) => (
                                    <img
                                        key={index}
                                        src={img}
                                        alt={`Project Image ${index + 1}`}
                                        className="min-w-full h-full object-contain"
                                    />
                                ))}
                            </div>
                            {/* Arrows */}
                            <div className='hidden group-hover:block hover:cursor-pointer hover:text-[#ffbd2f] bg-black/20 rounded-full hover:bg-black/40 p-2 absolute top-1/2 left-5 -translate-y-1/2 z-10'>
                                <BsChevronLeft onClick={prevSlide} size={30} />
                            </div>
                            <div className='hidden group-hover:block hover:cursor-pointer hover:text-[#ffbd2f] bg-black/20 rounded-full hover:bg-black/40 p-2 absolute top-1/2 right-5 -translate-y-1/2 z-10'>
                                <BsChevronRight onClick={nextSlide} size={30} />
                            </div>
                        </div>
                        {/* Navigation Dots */}
                        <div className='flex justify-center gap-2 h-[5vh] items-center'>
                            {project.image.map((slide, slideIndex) => (
                                <div
                                    key={slideIndex}
                                    onClick={() => goToSlide(slideIndex)}
                                    className={`text-2xl cursor-pointer ${currentIndex === slideIndex ? 'text-[#ffbd2f]' : 'text-white'}`}
                                >
                                    <RxDotFilled />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div>
                    <h1 className='text-white text-2xl underline sm:text-3xl md:text-4xl font-bold ml-4 mt-4'>
                        {project.title}
                    </h1>
                </div>
                <div>
                    <p className='text-white text-xl flex items-center gap-2 ml-4 mt-4'>
                        Naudojamos kalbos: <p className='text-[#ffbd2f]'> {project.Languages} </p>
                    </p>
                </div>

                <div className='flex justify-center items-center text-base sm:text-lg md:text-xl px-4 mt-4'>
                    <p>
                        {project.description}
                    </p>
                </div>
                <div>
                    <h1 className='text-white text-2xl sm:text-3xl underline md:text-4xl font-bold ml-4 mt-4'>
                        Projekto nuorodos
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