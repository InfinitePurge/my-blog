import React, { useState } from 'react'
import Reveal from '../Animations/Reveal'

const Cards = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            <section id='projects' className='bg-transparent border-b-2 border-orange-300 w-[80%] mx-auto py-20 mb-4'>
                <div className='flex flex-row justify-end gap-8 mx-auto  px-4 sm:px-6 lg:px-8'>
                    <div className='w-2/3'>
                        <Reveal>
                        <h1 className='text-white text-4xl font-bold'>
                            My Projects
                        </h1>
                        </Reveal>
                        <Reveal>
                        <p className='text-white text-xl my-4'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin non mi facilisis, 
                        suscipit lacus et, pharetra nulla. Nunc sit amet bibendum orci. Aliquam sit amet maximus arcu, 
                        eu dapibus lectus. Aenean fringilla, lorem id posuere sodales, dui neque vestibulum orci, id laoreet elit 
                        turpis eget tellus. Nam convallis, dolor in vehicula vulputate, diam sem commodo sem, nec dictum elit turpis in 
                        libero. Praesent rutrum erat sed lacus ultricies dapibus. Praesent tristique eros quis leo tristique pellentesque. 
                        Aenean sit amet aliquet dui, ac tempus mauris. Integer pellentesque ultricies molestie.
                        </p>
                        </Reveal>
                    </div>
                    <div className='w-1/3'>
                        <Reveal>
                        <img 
                            src="/WyvernGuard.png" 
                            alt="Project Image" 
                            className='rounded-lg shadow-lg w-full h-auto object-cover transition-opacity'
                        />
                        </Reveal>
                    </div>
                </div>
            </section>
            <section className='bg-transparent border-b-2 border-orange-300 w-[80%] mx-auto py-20 mb-4'>
                <div className='flex flex-row justify-end gap-8 mx-auto  px-4 sm:px-6 lg:px-8'>
                    <div className='w-2/3'>
                        <Reveal>
                        <h1 className='text-white text-4xl font-bold'>
                            My Projects
                        </h1>
                        </Reveal>
                        <Reveal>
                        <p className='text-white text-xl my-4'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin non mi facilisis, 
                        suscipit lacus et, pharetra nulla. Nunc sit amet bibendum orci. Aliquam sit amet maximus arcu, 
                        eu dapibus lectus. Aenean fringilla, lorem id posuere sodales, dui neque vestibulum orci, id laoreet elit 
                        turpis eget tellus. Nam convallis, dolor in vehicula vulputate, diam sem commodo sem, nec dictum elit turpis in 
                        libero. Praesent rutrum erat sed lacus ultricies dapibus. Praesent tristique eros quis leo tristique pellentesque. 
                        Aenean sit amet aliquet dui, ac tempus mauris. Integer pellentesque ultricies molestie.
                        </p>
                        </Reveal>
                    </div>
                    <div className='w-1/3'>
                        <Reveal>
                        <img 
                            src="/WyvernGuard.png" 
                            alt="Project Image" 
                            className='rounded-lg shadow-lg w-full h-auto object-cover transition-opacity'
                        />
                        </Reveal>
                    </div>
                </div>
            </section>
            <section className='bg-transparent border-b-2 border-orange-300 w-[80%] mx-auto py-20 mb-4'>
                <div className='flex flex-row justify-end gap-8 mx-auto  px-4 sm:px-6 lg:px-8'>
                    <div className='w-2/3'>
                        <Reveal>
                        <h1 className='text-white text-4xl font-bold'>
                            My Projects
                        </h1>
                        </Reveal>
                        <Reveal>
                        <p className='text-white text-xl my-4'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin non mi facilisis, 
                        suscipit lacus et, pharetra nulla. Nunc sit amet bibendum orci. Aliquam sit amet maximus arcu, 
                        eu dapibus lectus. Aenean fringilla, lorem id posuere sodales, dui neque vestibulum orci, id laoreet elit 
                        turpis eget tellus. Nam convallis, dolor in vehicula vulputate, diam sem commodo sem, nec dictum elit turpis in 
                        libero. Praesent rutrum erat sed lacus ultricies dapibus. Praesent tristique eros quis leo tristique pellentesque. 
                        Aenean sit amet aliquet dui, ac tempus mauris. Integer pellentesque ultricies molestie.
                        </p>
                        </Reveal>
                    </div>
                    <div className='w-1/3'>
                        <Reveal>
                        <img 
                            src="/WyvernGuard.png" 
                            alt="Project Image" 
                            className='rounded-lg shadow-lg w-full h-auto object-cover transition-opacity'
                        />
                        </Reveal>
                    </div>
                </div>
            </section>

           
        </>
    )
}

export default Cards