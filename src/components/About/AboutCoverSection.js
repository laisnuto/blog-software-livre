import Image from 'next/image'
import React from 'react'
import profileCharacter from "../../../public/character.png"

const AboutCoverSection = () => {
  return (
    <section className='w-full  border-b-2 border-solid border-dark dark:border-light flex flex-col md:flex-row items-center justify-center text-dark dark:text-light'>
        <div className='w-full md:w-1/2 h-full border-r-2 border-solid border-dark dark:border-light flex justify-center'> 
            <Image src={profileCharacter} alt="CodeBucks" 
            className='w-3/5  xs:w-2/4 md:w-full h-full object-contain object-center'
            priority
            sizes="(max-width: 768px) 100vw,(max-width: 1180px) 50vw, 50vw"
            />
        </div>

        <div className='w-full md:w-2/3 flex flex-col text-left items-start justify-center px-5 xs:p-10 pb-10 lg:px-16'>
            <h2 className='font-bold capitalize text-4xl xs:text-5xl sxl:text-6xl  text-center lg:text-left'>
            Educação, Matemática e Tecnologia
            </h2>
            <p className='font-medium capitalize mt-4 text-base'>
            Essas são minhas maiores paixões. Desde pequena pude explorar o lado mais criativo da matemática através das Olimpíadas Científicas. Essas competições me abiram muitas portas, desde bolsas de estudo até representar o Brasil na Olimpíada Europeia de Meninas na Matemática (EGMO).

            Motivada por essas experiências, comecei  a ajudar jovens a terem oportunidades acadêmicas e aumentar a representatividade feminina nas áreas de STEM. Sou coordenadora do projeto Sem Parar, uma iniciativa voluntária para incentivar a participação feminina nas Olimpíadas Científicas e faço faz parte da comissão acadêmica do Torneio Meninas na Matemática, também fui voluntária em projetos educacionais como o NOIC e Impacta Jovem Brasil. 
            
            Ao ingressar no curso de computação, busquei combinar esses interesses em tecnologia e educação. No final de 2022, me juntei ao time fundador da Teachy, hoje a maior EdTech de IA na América Latina. 

            </p>
        </div>
    </section>
  )
}

export default AboutCoverSection