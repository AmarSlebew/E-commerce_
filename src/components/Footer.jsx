import { Github } from 'lucide-react'
import React from 'react'

export default function Footer() {
  return (
    <div className='bg-green-900 text-white font-family font-semibold text-sm md:text-lg w-full p-3 flex justify-center flex-col md:justify-around md:flex-row items-center mt-10 md:mt-3'>
        <p>
            Dibuat oleh King Yang Mulia Amar <br />
            untuk mengisi waktu libur <br />
        </p>

        <a href='https://github.com/AmarSlebew' className='flex gap-3 p-2 hover:text-gray-400 hover:cursor-pointer'>
            <Github />
            AmarSlebew
        </a>


    </div>
  )
}
