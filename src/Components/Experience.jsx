import React from 'react'
import Reveal from '../Animations/Reveal'

const ExperienceCard1 = ({ company, role, location, date, description }) => {
    return (
        <section id='experience' className="bg-transparent border-b-2 border-orange-300 w-[80%] mx-auto py-20 mb-4">
            <div className="flex flex-col items-center gap-8">
                <Reveal>
                    <h1 className="text-white text-4xl font-bold">
                        Experience
                    </h1>
                </Reveal>
            </div>
            <div className="flex justify-between items-start mb-3">
                <div>
                    <Reveal>
                        <h3 className="text-white text-xl font-bold">{company}</h3>
                    </Reveal>
                    <Reveal>
                        <h4 className="text-[#ffbd2f] font-medium">{role}</h4>
                    </Reveal>
                </div>
                <Reveal>
                    <span className="text-gray-400">{date}</span>
                </Reveal>
            </div>
            <div className="flex justify-between items-start mb-2">
                <Reveal>
                    <span className="text-gray-400">{location}</span>
                </Reveal>
            </div>
            <Reveal>
                <p className="text-white mt-2">{description}</p>
            </Reveal>
        </section>
    )
}

const ExperienceCard2 = ({ company, role, location, date, description }) => {
    return (
        <section className="bg-transparent border-b-2 border-orange-300 w-[80%] mx-auto py-20 mb-4">
            <div className="flex justify-between items-start mb-3">
                <div>
                    <Reveal>
                        <h3 className="text-white text-xl font-bold">{company}</h3>
                    </Reveal>
                    <Reveal>
                        <h4 className="text-[#ffbd2f] font-medium">{role}</h4>
                    </Reveal>
                </div>
                <Reveal>
                    <span className="text-gray-400">{date}</span>
                </Reveal>
            </div>
            <div className="flex justify-between items-start mb-2">
                <Reveal>
                    <span className="text-gray-400">{location}</span>
                </Reveal>
            </div>
            <Reveal>
                <p className="text-white mt-2">{description}</p>
            </Reveal>
        </section>
    )
}

const ExperienceCard3 = ({ company, role, location, date, description }) => {
    return (
        <section className="bg-transparent border-b-2 border-orange-300 w-[80%] mx-auto py-20 mb-4">
            <div className="flex justify-between items-start mb-3">
                <div>
                    <Reveal>
                        <h3 className="text-white text-xl font-bold">{company}</h3>
                    </Reveal>
                    <Reveal>
                        <h4 className="text-[#ffbd2f] font-medium">{role}</h4>
                    </Reveal>
                </div>
                <Reveal>
                    <span className="text-gray-400">{date}</span>
                </Reveal>
            </div>
            <div className="flex justify-between items-start mb-2">
                <Reveal>
                    <span className="text-gray-400">{location}</span>
                </Reveal>
            </div>
            <Reveal>
                <p className="text-white mt-2">{description}</p>
            </Reveal>
        </section>
    )
}

const ExperienceCard4 = ({ company, role, location, date, description }) => {
    return (
        <section className="bg-transparent border-b-2 border-orange-300 w-[80%] mx-auto py-20 mb-4">
            <div className="flex justify-between items-start mb-3">
                <div>
                    <Reveal>
                        <h3 className="text-white text-xl font-bold">{company}</h3>
                    </Reveal>
                    <Reveal>
                        <h4 className="text-[#ffbd2f] font-medium">{role}</h4>
                    </Reveal>
                </div>
                <Reveal>
                    <span className="text-gray-400">{date}</span>
                </Reveal>
            </div>
            <div className="flex justify-between items-start mb-2">
                <Reveal>
                    <span className="text-gray-400">{location}</span>
                </Reveal>
            </div>
            <Reveal>
                <p className="text-white mt-2">{description}</p>
            </Reveal>
        </section>
    )
}

const ExperienceCard5 = ({ company, role, location, date, description }) => {
    return (
        <section className="bg-transparent border-b-2 border-orange-300 w-[80%] mx-auto py-20 mb-4">
            <div className="flex justify-between items-start mb-3">
                <div>
                    <Reveal>
                        <h3 className="text-white text-xl font-bold">{company}</h3>
                    </Reveal>
                    <Reveal>
                        <h4 className="text-[#ffbd2f] font-medium">{role}</h4>
                    </Reveal>
                </div>
                <Reveal>
                    <span className="text-gray-400">{date}</span>
                </Reveal>
            </div>
            <div className="flex justify-between items-start mb-2">
                <Reveal>
                    <span className="text-gray-400">{location}</span>
                </Reveal>
            </div>
            <Reveal>
                <p className="text-white mt-2">{description}</p>
            </Reveal>
        </section>
    )
}

const Experience = () => {
    return (
        <>
        <ExperienceCard1
            company="UAB kompanija"
            role="Frontend Developer"
            location="Šiauliai"
            date="2022 - Present"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin non mi facilisis, suscipit lacus et, pharetra nulla. Nunc sit amet bibendum orci. Aliquam sit amet maximus arcu, eu dapibus lectus. Aenean fringilla, lorem id posuere sodales, dui neque vestibulum orci, id laoreet elit turpis eget tellus. Nam convallis, dolor in vehicula vulputate, diam sem commodo sem, nec dictum elit turpis in libero. Praesent rutrum erat sed lacus ultricies dapibus. Praesent tristique eros quis leo tristique pellentesque. Aenean sit amet aliquet dui, ac tempus mauris. Integer pellentesque ultricies molestie."
        />
        <ExperienceCard2
            company="UAB kompanija"
            role="Frontend Developer"
            location="Šiauliai"
            date="2022 - Present"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin non mi facilisis, suscipit lacus et, pharetra nulla. Nunc sit amet bibendum orci. Aliquam sit amet maximus arcu, eu dapibus lectus. Aenean fringilla, lorem id posuere sodales, dui neque vestibulum orci, id laoreet elit turpis eget tellus. Nam convallis, dolor in vehicula vulputate, diam sem commodo sem, nec dictum elit turpis in libero. Praesent rutrum erat sed lacus ultricies dapibus. Praesent tristique eros quis leo tristique pellentesque. Aenean sit amet aliquet dui, ac tempus mauris. Integer pellentesque ultricies molestie."
        />
        <ExperienceCard3
            company="UAB kompanija"
            role="Frontend Developer"
            location="Šiauliai"
            date="2022 - Present"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin non mi facilisis, suscipit lacus et, pharetra nulla. Nunc sit amet bibendum orci. Aliquam sit amet maximus arcu, eu dapibus lectus. Aenean fringilla, lorem id posuere sodales, dui neque vestibulum orci, id laoreet elit turpis eget tellus. Nam convallis, dolor in vehicula vulputate, diam sem commodo sem, nec dictum elit turpis in libero. Praesent rutrum erat sed lacus ultricies dapibus. Praesent tristique eros quis leo tristique pellentesque. Aenean sit amet aliquet dui, ac tempus mauris. Integer pellentesque ultricies molestie."
        />
        <ExperienceCard4
            company="UAB kompanija"
            role="Frontend Developer"
            location="Šiauliai"
            date="2022 - Present"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin non mi facilisis, suscipit lacus et, pharetra nulla. Nunc sit amet bibendum orci. Aliquam sit amet maximus arcu, eu dapibus lectus. Aenean fringilla, lorem id posuere sodales, dui neque vestibulum orci, id laoreet elit turpis eget tellus. Nam convallis, dolor in vehicula vulputate, diam sem commodo sem, nec dictum elit turpis in libero. Praesent rutrum erat sed lacus ultricies dapibus. Praesent tristique eros quis leo tristique pellentesque. Aenean sit amet aliquet dui, ac tempus mauris. Integer pellentesque ultricies molestie."
        />
        <ExperienceCard5
            company="UAB kompanija"
            role="Frontend Developer"
            location="Šiauliai"
            date="2022 - Present"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin non mi facilisis, suscipit lacus et, pharetra nulla. Nunc sit amet bibendum orci. Aliquam sit amet maximus arcu, eu dapibus lectus. Aenean fringilla, lorem id posuere sodales, dui neque vestibulum orci, id laoreet elit turpis eget tellus. Nam convallis, dolor in vehicula vulputate, diam sem commodo sem, nec dictum elit turpis in libero. Praesent rutrum erat sed lacus ultricies dapibus. Praesent tristique eros quis leo tristique pellentesque. Aenean sit amet aliquet dui, ac tempus mauris. Integer pellentesque ultricies molestie."
        />
                
        </>
    )
}

export default Experience