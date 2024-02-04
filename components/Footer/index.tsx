'use client'
import React from 'react'
import { useForm } from 'react-hook-form';
import Image from 'next/image';
import Link from 'next/link';

type Props = {}

const Footer = ({}: Props) => {

  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);

  return (
    <footer className='mt-10 rounded-lg bg-dark m-10 flex flex-col items-center text-light'>
      <h3 className='mt-5 font-medium text-center capitalize text-4xl px-4'>Inspiration | Community | Entertainment</h3>
      <p className='mt-5 px-4 text-center w-3/5 font-light text-base'>
        Subscribe below for upcoming events, stay updated 
        with all members, and obtain the latest news!
      </p>

      {/* Email Form */}
      <form onSubmit={handleSubmit(onSubmit)} className='m-6 min-w-[400px] flex items-stretch bg-green-700 p-2 rounded mx-4'>
        <input 
          type="text" 
          placeholder="Enter your email" 
          {...register("Email", {required: true, maxLength:100, pattern: /^\S+@\S+$/i})} 
          className='w-full bg-transparent pl-0 text-dark focus:border-dark focus:ring-0 border-0 border-b mr-2 pb-1'  
        />

        <input type="submit" className='bg-dark text-blue-400 cursor-pointer font-medium rounded px-5 py-1' />
      </form>

      {/* Social Media Icons */}
      <div className="flex items-center m-3 bg-red-400">
        <a href="/" className='inline-block w-10 h-10 m-3 bg-yellow-400'>
        <Image
          src='https://img.icons8.com/ios/200/image--v1.png'
          alt='image here'
          width={50}
          height={50}
          className='hover:scale-150 transition-all ease duration-200'
        />
        </a>
        <a href="/" className='inline-block w-10 h-10 m-3 bg-yellow-400'>
        <Image
          src='https://img.icons8.com/wired/200/facebook--v1.png'
          alt='image here'
          width={50}
          height={50}
          className='hover:scale-150 transition-all ease duration-200'
        />
        </a>
        <a href="/" className='inline-block w-10 h-10 m-3 bg-yellow-400'>
        <Image
          src='https://img.icons8.com/wired/200/linkedin--v1.png'
          alt='image here'
          width={50}
          height={50}
          className='hover:scale-150 transition-all ease duration-200'
        />
        </a>
        <a href="/" className='inline-block w-10 h-10 m-3 bg-yellow-400'>
        <Image
          src='https://img.icons8.com/wired/200/github--v1.png'
          alt='image here'
          width={50}
          height={50}
          className='hover:scale-150 transition-all ease duration-200'
        />
        </a>
        <a href="/" className='inline-block w-10 h-10 m-3 bg-yellow-400'>
        <Image
          src='https://img.icons8.com/ios/200/meta.png'
          alt='image here'
          width={50}
          height={50}
          className='hover:scale-150 transition-all ease duration-200'
        />
        </a>
        <a href="/" className='inline-block w-10 h-10 m-3 bg-yellow-400'>
        <Image
          src='https://img.icons8.com/wired/200/mac-os--v1.png'
          alt='image here'
          width={50}
          height={50}
          className='hover:scale-150 transition-all ease duration-200'
        />
        </a>
        <a href="/" className='inline-block w-10 h-10 m-3 bg-yellow-400'>
        <Image
          src='https://img.icons8.com/ios/200/image--v1.png'
          alt='image here'
          width={50}
          height={50}
          className='hover:scale-150 transition-all ease duration-200'
        />
        </a>
      </div>

      <div className="flex flex-row items-center w-full  mt-3 relative border-t border-solid border-light py-6 px-8 justify-between">
        <span>&copy;2024 BOY, All rights reserved.</span>
        <Link href='/sitemap.xml' className='text-center underline'>
          sitemap.xml
        </Link>
        <div className="text-center">
          made with &hearts; by <a href='' className='underline'>BOY</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer