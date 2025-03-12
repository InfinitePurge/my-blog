import React, { useState } from 'react'
import Reveal from '../Animations/Reveal'
import Modal from './Modal'
import { FaArrowRight } from 'react-icons/fa';


const Cards = () => {

    const projects = [
        {
            id: 1,
            title: 'Offline Password Manager',
            description: `Baigiamajame bakalauro darbe buvo sukurta pažangi ir saugi slaptažodžių valdymo sistema, skirta plačiam požiūriui į vartotojų duomenų apsaugą. Sistema pasižymėjo daugybe saugumo užduočių, įskaitant pažangią veido atpažinimo technologiją ir dviejų faktorių autentifikavimą, užtikrinantį aukščiausią saugumo lygį programoje.

            Saugių užrašų kūrimas projekte, vienkartinio užrašo funkcija, kuri automatiškai sunaikina informaciją perskaičius ir siūlo daugybę funkcijų, įskaitant pažangų slaptažodžių generatorių. Sistema kurta vartotojo patogumui – integruota automatinio atsijungimo sistemą, kelių kalbų palaikymą, individualius reikalavimus pagal individualius reikalavimus.

            Ypatingas dėmesys buvo skiriamas duomenų saugumui – sistemoje buvo naudojami pažangūs šifravimo algoritmai ir inovatyvūs steganografijos metodai, leidžiantys nuotraukoje paslėpti svarbią informaciją. Projektas parodė šiuolaikišką požiūrį į kibernetinę saugą ir pateikė praktinį sprendimą, kaip efektyviai ir saugiai valdyti asmens duomenis skaitmeniniame pasaulyje.`,

            image: [
                '/WyvernGuard.png',
                '/VW2.png',
                '/VW3.png',
                '/VW4.png',
            ],
            Github: 'https://github.com/InfinitePurge/Offline-Password-Manager',
            Languages: 'Python - tkinter - JSON',

        },
        {
            id: 2,
            title: 'Know Your Bird',
            description: `Šis projektas buvo sukurtas praktikos metu bendradarbiaujant su MB "Timitis". Mūsų trijų asmenų komanda turėjo tikslą sukurti edukacinę platformą, skirtą paukščių pažinimui ir ornitologijos mokslui populiarinti. Projekto esmė - sujungti modernias technologijas su gamtos pažinimu, suteikiant vartotojams interaktyvią ir patrauklią mokymosi aplinką.

            Kaip pagrindinis dizaino kūrėjas, turėjau galimybę pritaikyti įvairias šiuolaikines technologijas: Laravel framework'ą, Bootstrap, jQuery ir kitus pažangius įrankius. Nors tai buvo tik antrasis mano kurtas projektas, jis tapo puikia platforma tobulėjimui ir naujų įgūdžių įgijimui. Kiekvienas iššūkis ir techninė kliūtis tapo vertinga patirtimi, padėjusia geriau suprasti vartotojo sąsajos dizaino principus ir web aplikacijų architektūrą.

            Nors projektas buvo kuriamas mokymosi proceso metu ir turi tobulintinų aspektų, jis demonstruoja modernių web technologijų pritaikymą edukaciniais tikslais. Projektas ne tik patenkino praktikos reikalavimus, bet ir tapo vertinga patirtimi tolimesniam profesiniam tobulėjimui web development srityje.`,
            
            image: ['/k1.png', '/k2.png', '/k6.png', '/k4.png', '/k3.png', '/k5.png'],
            Github: 'https://github.com/InfinitePurge/Know-Your-Bird',
            Languages: 'PHP/Laravel - Bootstrap - jQuery - MySQL',

        },
        {
            id: 3,
            title: 'World of Mods',
            description: `Tai mano pirmasis savarankiškai sukurtas internetinis projektas, skirtas žaidimų modifikacijų (modų) valdymui ir dalinimui. Projektas buvo sukurtas naudojant Laravel karkasą, kuris padėjo įsisavinti pagrindinius web programavimo principus.

            Sistemos funkcionalumas apima vartotojų registraciją ir autentifikaciją, žaidimų ir modifikacijų įkėlimą, administravimo valdymo skydelį bei paveikslėlių tvarkymo sistemą. Projekto metu išmokau dirbti su duomenų bazėmis ir valdyti vartotojų autentifikaciją.

            Nors projektas turi tobulintinų aspektų, ypač vartotojo sąsajos dizaino srityje, jis tapo vertinga patirtimi mokantis savarankiškai.

            Šis projektas - tai buvo mano pirmieji žingsniai web programavimo srityje, parodantys gebėjimą savarankiškai mokytis ir įgyvendinti funkcionalų web projektą.`,
            
            image: ['/w1.png', '/w2.png', '/w3.png'],
            Github: 'https://github.com/InfinitePurge/World-of-Mods',
            Languages: 'PHP/Laravel - HTML - CSS - JavaScript - MySQL',

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
                                        Naudojamos kalbos: <p className='text-[#ffbd2f]'> {project.Languages} </p>
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
                                    Skaityti daugiau
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