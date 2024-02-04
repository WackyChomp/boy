import React from 'react'
import Link from 'next/link'

type Props = {
  link: string;
  name: string;
}

const Tag = ( { link='#', name, ...props }: Props) => {
  return (
    <Link
      href={link} 
      className={`inline-block py-3 px-10 bg-green-500 text-light 
      rounded-full capitalize font-semibold border border-solid 
      border-light hover:scale-105 transition-all ease duration-200`}
    >
      {name}
    </Link>
  )
}

export default Tag