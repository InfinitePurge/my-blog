import React from 'react'
import Reveal from '../Animations/Reveal'

const AboutHome = () => {
  return (
    <>
    <section id='about' className='bg-transparent border-b-2  border-orange-300 mx-auto py-20 mb-4
    w-[80%] md:w-[60%]'>
                <div className='flex flex-col items-center gap-8 mx-auto  px-4 sm:px-6 lg:px-8'>
                        <Reveal>
                        <h1 className='text-white text-4xl font-bold'>
                            About me
                        </h1>
                        </Reveal>
                        <Reveal>
                        <p className='text-white text-xl my-4 flex'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin non mi facilisis, 
                        suscipit lacus et, pharetra nulla. Nunc sit amet bibendum orci. Aliquam sit amet maximus arcu, 
                        eu dapibus lectus. Aenean fringilla, lorem id posuere sodales, dui neque vestibulum orci, id laoreet elit 
                        turpis eget tellus. Nam convallis, dolor in vehicula vulputate, diam sem commodo sem, nec dictum elit turpis in 
                        libero. Praesent rutrum erat sed lacus ultricies dapibus. Praesent tristique eros quis leo tristique pellentesque. 
                        Aenean sit amet aliquet dui, ac tempus mauris. Integer pellentesque ultricies molestie.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin non mi facilisis, 
                        suscipit lacus et, pharetra nulla. Nunc sit amet bibendum orci. Aliquam sit amet maximus arcu, 
                        eu dapibus lectus. Aenean fringilla, lorem id posuere sodales, dui neque vestibulum orci, id laoreet elit 
                        turpis eget tellus. Nam convallis, dolor in vehicula vulputate, diam sem commodo sem, nec dictum elit turpis in 
                        libero. Praesent rutrum erat sed lacus ultricies dapibus. Praesent tristique eros quis leo tristique pellentesque. 
                        Aenean sit amet aliquet dui, ac tempus mauris. Integer pellentesque ultricies molestie.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin non mi facilisis, 
                        suscipit lacus et, pharetra nulla. Nunc sit amet bibendum orci. Aliquam sit amet maximus arcu, 
                        eu dapibus lectus. Aenean fringilla, lorem id posuere sodales, dui neque vestibulum orci, id laoreet elit 
                        turpis eget tellus. Nam convallis, dolor in vehicula vulputate, diam sem commodo sem, nec dictum elit turpis in 
                        libero. Praesent rutrum erat sed lacus ultricies dapibus. Praesent tristique eros quis leo tristique pellentesque. 
                        Aenean sit amet aliquet dui, ac tempus mauris. Integer pellentesque ultricies molestie.
                        </p>
                        </Reveal>
                    </div>
            </section>
    </>
  )
}

export default AboutHome