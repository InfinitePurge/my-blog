import React from 'react'
import Reveal from '../Animations/Reveal'

const Experience = () => {

    const experience = [
        {
            id: 1,
            company: 'Kauno Kolegija',
            role: 'Programų sistemų studentas',
            location: 'Kaunas',
            date: '2021 - 2025',
            description: 'Sėkmingai baigiau Programų sistemų studijas Kauno Kolegijoje ir įgijau aukštąjį neuniversitetinį (profesinį bakalaurą) išsilavinimą. Studijų metu įgijau platų spektrą programavimo ir sistemų kūrimo įgūdžių. Dirbau su įvairiomis programavimo kalbomis ir technologijomis: Python (objektinis programavimas, algoritmų kūrimas), C# (desktop aplikacijų kūrimas, .NET framework), Java. Aktyviai kūriau ir tobulinau web aplikacijas naudodamas HTML, CSS ir JavaScript. Įgijau patirties su duomenų bazių projektavimu ir valdymu (SQL), sistemų projektavimu ir dokumentavimu (UML diagramų braižymas, reikalavimų specifikavimas). Studijų metu įgyvendinau įvairius praktinius projektus, kurie apėmė pilną programinės įrangos kūrimo ciklą - nuo planavimo iki galutinio produkto realizacijos.'
        },
        {
            id: 2,
            company: 'SALDA, UAB',
            role: 'Sandėlio operatorius',
            location: 'Šiauliai',
            date: '2023.06 - 2023.08',
            description: 'Veždavau didesnio gabarito prekias su elektriniu karuku iš priskirtų prekių zonų į rekuperatorių gamybą. Darbas reikalavo didelio atidumo ir logistinio mąstymo, užtikrinant, kad reikiamos detalės būtų pristatytos laiku ir tinkama tvarka. Kasdien koordinavau prekių judėjimą tarp skirtingų sandėlio zonų, bendradarbiavau su gamybos skyriaus darbuotojais optimizuojant tiekimo procesus. Darbas apėmė ne tik fizinį prekių transportavimą, bet ir tikslų dokumentacijos vedimą, kokybės kontrolę bei saugaus krovinių gabenimo užtikrinimą.'
        },
        {
            id: 3,
            company: 'SALDA, UAB',
            role: 'Sandėlio operatorius',
            location: 'Šiauliai',
            date: '2022.06 - 2022.08',
            description: 'Mano pagrindinės užduotys buvo gautų prekių priėmimas, skenavimas kaupikliu ir jų išdėstymas sunumeruotuose stelažuose tiek fiziškai, tiek sistemoje. Dirbau su modernia sandėlio valdymo sistema, kuri reikalavo tikslaus duomenų įvedimo ir nuolatinio inventoriaus sekimo. Buvau atsakingas už prekių kokybės patikrą priėmimo metu, tinkamą jų sandėliavimą pagal nustatytus standartus. Aktyviai bendradarbiavau su tiekėjais ir kitais sandėlio darbuotojais, sprendžiant iškilusius logistinius iššūkius. Šis darbas išugdė gebėjimą efektyviai organizuoti darbo procesus ir užtikrinti sklandų prekių judėjimą sandėlyje.'
        },
        {
            id: 4,
            company: 'Trivilita, UAB',
            role: 'Pakuotojas',
            location: 'Šiauliai',
            date: '2020.06 - 2020.08',
            description: 'Mano pagrindinė kaip pakuotojo atsakomybė buvo lovos pakavimas ir paruošimas pristatymui. Darbas reikalavo ypatingo dėmesio detalėms, užtikrinant, kad kiekvienas produktas būtų supakuotas pagal griežtus kokybės standartus. Kasdien dirbau su įvairių dydžių ir modelių lovomis, pritaikydamas specifines pakavimo technikas kiekvienam gaminiui. Buvau atsakingas už pakavimo medžiagų kokybės kontrolę, efektyvų jų panaudojimą ir atliekų mažinimą. Aktyviai bendradarbiavau su gamybos ir logistikos skyriais, užtikrindamas sklandų produkcijos judėjimą. Šis darbas išugdė kruopštumą, atidumą detalėms ir gebėjimą dirbti sparčiu tempu, išlaikant aukštą kokybės lygį.'
        },
        {
            id: 5,
            company: 'Artilux NMF, UAB',
            role: 'Pakuotojas',
            location: 'Šiauliai',
            date: '2019.06 - 2019.08',
            description: 'Mano darbo vieta reikalavo fizinio pasirušimo kelnoti dėžę ant dėžės, jas supakuoti ir priduoti karistui išvežimui. Dirbau su įvairaus dydžio ir svorio pakuotėmis, taikydamas saugaus kėlimo ir pakavimo technikas. Buvau atsakingas už produktų apsaugą transportavimo metu, naudojant tinkamas pakavimo medžiagas ir metodus. Kasdien bendradarbiavau su sandėlio ir logistikos komandomis, užtikrindamas efektyvų užsakymų įvykdymą. Darbas reikalavo ne tik fizinės ištvermės, bet ir organizacinių gebėjimų, planavimo įgūdžių bei komandinio darbo. Išmokau efektyviai valdyti darbo krūvį, prisitaikyti prie besikeičiančių situacijų ir išlaikyti aukštus kokybės standartus net ir įtemptomis darbo sąlygomis.'
        }
    ];

    return (
        <>
            <div className="flex flex-col items-center gap-8 w-[80%] mx-auto mt-16">
                <Reveal>
                    <h1 className="text-white text-4xl font-bold">
                        Patirtis
                    </h1>
                </Reveal>
            </div>

            {experience.map((exp) => (
                <section key={exp.id} id='experience' className="bg-transparent border-b-2 border-orange-300 w-[80%] mx-auto py-20 mb-4">
                    <div className="flex justify-between items-start mb-3">
                        <div>
                            <Reveal>
                                <h3 className="text-white text-xl font-bold">{exp.company}</h3>
                            </Reveal>
                            <Reveal>
                                <h4 className="text-[#ffbd2f] font-medium">{exp.role}</h4>
                            </Reveal>
                        </div>
                        <Reveal>
                            <span className="text-gray-400">{exp.date}</span>
                        </Reveal>
                    </div>
                    <div className="flex justify-between items-start mb-2">
                        <Reveal>
                            <span className="text-gray-400">{exp.location}</span>
                        </Reveal>
                    </div>
                    <Reveal>
                        <p className="text-white mt-2">{exp.description}</p>
                    </Reveal>
                </section>
            ))}

        </>
    )
}

export default Experience