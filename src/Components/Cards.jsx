import React, { useState } from 'react'
import Reveal from '../Animations/Reveal'
import Modal from './Modal'

const Cards = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null);

    const openModal = (project) => {
        setSelectedProject(project);
        setIsModalOpen(true);
    };
    const closeModal = () => setIsModalOpen(false);

    const projects = [
        {
            id: 1,
            title: 'Project 1',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            image: '/WyvernGuard.png',
            Github:'https://github.com/InfinitePurge/Offline-Password-Manager',

        },
        {
            id: 2,
            title: 'Project 2',
            description: 'Description 2',
            image: '/WyvernGuard.png',

        },
        {
            id: 3,
            title: 'Project 3',
            description: 'Description 3',
            image: '/WyvernGuard.png',

        }
    ];

    return (
        <>
            {projects.map((project) => (
                <section key={project.id} id='projects' className='bg-transparent border-b-2 border-orange-300 w-[80%] mx-auto py-20 mb-4'>
                    <div className='flex flex-col-reverse md:flex-row gap-8 mx-auto px-4 sm:px-6 lg:px-8'>
                        <div className='w-full md:w-2/3'>
                            <Reveal>
                                <h1 className='text-white text-4xl font-bold'>
                                    {project.title}
                                </h1>
                            </Reveal>
                            <Reveal>
                                <p className='text-white text-xl my-4'>
                                    {project.description}
                                </p>
                            </Reveal>
                        </div>
                        <div className='w-full md:w-1/3'>
                            <Reveal>
                                <img
                                    onClick={() => openModal(project)}
                                    src={project.image}
                                    alt="Error loading project Image"
                                    className='rounded-lg cursor-pointer shadow-lg w-full h-auto object-cover transition-opacity'
                                />
                            </Reveal>
                        </div>
                    </div>
                </section>
            ))}

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