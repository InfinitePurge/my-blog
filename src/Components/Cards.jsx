import React, { useState } from 'react'
import Reveal from '../Animations/Reveal'
import Modal from './Modal'
import { FaArrowRight } from 'react-icons/fa';


const Cards = () => {

    const projects = [
        {
            id: 1,
            title: 'Offline Password Manager',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            image: [
                '/WyvernGuard.png',
                '/VW2.png',
                '/VW3.png',
                '/VW4.png',
            ],
            Github: 'https://github.com/InfinitePurge/Offline-Password-Manager',
            Languages: 'Python',

        },
        {
            id: 2,
            title: 'Project 2',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            image: ['/WyvernGuard.png', '/WyvernGuard.png', '/WyvernGuard.png'],
            Github: 'https://github.com/InfinitePurge/Offline-Password-Manager',
            Languages: 'Other',

        },
        {
            id: 3,
            title: 'Project 3',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            image: ['/WyvernGuard.png', '/WyvernGuard.png', '/WyvernGuard.png'],
            Github: 'https://github.com/InfinitePurge/Offline-Password-Manager',
            Languages: 'Other - Other',

        }
    ];

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null);

    const openModal = (project) => {
        setSelectedProject(project);
        setIsModalOpen(true);
    };
    const closeModal = () => setIsModalOpen(false);

    const [showFullDescription, setShowFullDescription] = useState(false);







    return (
        <>
            {projects.map((project) => {
                const truncatedDescription = showFullDescription
                    ? project.description
                    : project.description.substring(0, 300) + '...';

                return (
                    <section key={project.id} id='projects' className='bg-transparent border-b-2 border-orange-300 w-[80%] mx-auto py-20 mb-4'>
                        <div className='flex flex-col-reverse md:flex-row gap-8 mx-auto px-4 sm:px-6 lg:px-8'>
                            <div className='w-full md:w-2/3'>
                                <Reveal>
                                    <h1 className='text-white text-4xl font-bold'>
                                        {project.title}
                                    </h1>
                                </Reveal>
                                <Reveal>
                                    <p className='text-white text-xl flex items-center gap-2 my-4'>
                                        Used Languages: <p className='text-[#ffbd2f]'> {project.Languages} </p>
                                    </p>
                                </Reveal>
                                <Reveal>
                                    <p className='text-white text-xl my-4'>
                                        {truncatedDescription}
                                    </p>
                                </Reveal>
                                <Reveal>
                                <span onClick={() => openModal(project)}
                                    className="text-[#ffbd2f] pr-2 cursor-pointer text-xl hover:underline group inline-flex items-center gap-2"
                                >
                                    Read more
                                    <FaArrowRight className=' group-hover:translate-x-1 transition-transform duration-300 ease-in-out' />
                                </span>
                                </Reveal>                        
                            </div>
                            <div className='w-full md:w-1/3 transition-all duration-300 ease-in-out transform hover:scale-105 hover:rotate-1'>
                                <Reveal>
                                    <img
                                        onClick={() => openModal(project)}
                                        src={project.image[0]}
                                        alt="Error loading project Image"
                                        className='rounded-lg cursor-pointer shadow-lg w-full h-auto object-cover transition-opacity '
                                    />
                                </Reveal>
                            </div>
                        </div>
                    </section>
                );
            })}

            {isModalOpen && (
                <Modal
                    project={selectedProject}
                    onClose={closeModal}
                    isOpen={isModalOpen}
                />
            )}




        </>
    )

}

export default Cards