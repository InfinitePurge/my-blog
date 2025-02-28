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
            description: 'Description 1',
            image: '/WyvernGuard.png',

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