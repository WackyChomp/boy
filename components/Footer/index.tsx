'use client'
import React from 'react'
import { useForm } from 'react-hook-form';

type Props = {}

const Footer = ({}: Props) => {

  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);

  return (
    <footer className='mt-20 rounded-lg bg-dark m-10 flex flex-col items-center text-light'>
      <h3 className='mt-5 font-medium text-center capitalize text-4xl px-4'>Inspiration | Community | Entertainment</h3>
      <p className='mt-5 px-4 text-center w-3/5 font-light text-base'>
        Subscribe below for upcoming events, stay updated 
        with all members, and obtain the latest news!
      </p>

      <form onSubmit={handleSubmit(onSubmit)} className='m-6 min-w-[400px] flex items-stretch bg-green-700 p-2 rounded mx-4'>
        <input 
          type="text" 
          placeholder="Enter your email" 
          {...register("Email", {required: true, maxLength:100, pattern: /^\S+@\S+$/i})} 
          className='w-full bg-transparent text-dark focus:border-dark focus:ring-0 border-0 border-b mr-2 pb-1'  
        />

        <input type="submit" className='bg-dark text-blue-400 cursor-pointer font-medium rounded px-5 py-1' />
      </form>
    </footer>
  )
}

export default Footer