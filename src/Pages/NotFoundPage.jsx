import React from 'react'
import { FaExclamationTriangle } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const NotFoundPage = () => {
  return   (
  <section className='text-center flex flex-col justify-center items-center h-96'>
  <FaExclamationTriangle className='text-red-400 text-6xl mb-4' />
  <h1 className='text-6xl font-bold mb-4'>404 Nerasta</h1>
  <p className='text-xl mb-5'>Šis puslapis nerastas</p>
  <Link
    to='/'
    className='text-white bg-black hover:bg-zinc-900 rounded-md px-3 py-2 mt-4'
  >
    Grįžti atgal
  </Link>
</section>
  )
}

export default NotFoundPage