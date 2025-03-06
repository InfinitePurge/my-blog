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
              Apie save
            </h1>
          </Reveal>
          <Reveal>
            <p className='text-white text-xl my-4 flex'>
              Front-end programuotojas su tvirtu programų sistemų pagrindu iš Kauno Kolegijos. Specializuojuosi kuriant adaptyvias, vartotojui draugiškas internetines sąsajas, naudodamas React.js ir TailwindCSS technologijas. Nors kai kuriose pažangesnėse technikose dar kaupiu patirtį, mano stipriausia savybė yra gebėjimas greitai mokytis ir prisitaikyti prie naujų technologijų bei karkasų.
              <br />
              <br />
              Į įgūdžių spragas žvelgiu ne kaip į apribojimus, o kaip į įdomias galimybes tobulėti. Mano techninis išsilavinimas kartu su nuoširdžiu noru nuolat mokytis leidžia greitai įsisavinti naujas žinias ir efektyviai jas pritaikyti projektuose.
              <br />
              <br />
              Esu įsipareigojęs sąžiningai vertinti savo gebėjimus ir nuosekliai tobulinti programavimo įgūdžius. Siekiu užmegzti ryšius su mentoriais, kitais programuotojais ir ieškau galimybių, kur galėčiau kurti vertę, tuo pačiu plėsdamas savo techninių įgūdžių arsenalą.
              <br />
              <br />
              Mano tikslas - ne tik kurti funkcionalias aplikacijas, bet ir užtikrinti, kad jos būtų intuityvios, greitai veikiančios ir lengvai palaikomos. Nuolat sekdamas naujausias technologijų tendencijas ir geriausias programavimo praktikas, siekiu kurti sprendimus, kurie ne tik atitinka šiandienos poreikius, bet ir turi potencialo augti ateityje.
            </p>
          </Reveal>
        </div>
      </section>
    </>
  )
}

export default AboutHome