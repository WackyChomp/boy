import Link from 'next/link'
import Logo from './Logo'

type Props = {}

const Header = (props: Props) => {
  const underlineAnimation = `bg-gradient-to-r from-accent2 to-accent2 
  bg-[length:0px_6px] hover:bg-[length:100%_6px] bg-left-bottom bg-no-repeat 
  transition-[background-size] duration-500`


  return (
    <header className='bg-green-400 w-full p-4 px-10 flex items-center justify-between'>
      <Logo />
      <nav className='z-20 w-max py-3 px-8 border border-solid border-dark rounded-full font-medium capitalize flex items-center fixed top-6 right-1/2 translate-x-1/2 bg-light/80 backdrop-blur-sm'>
        <span className={underlineAnimation}>
          <Link href='/' className="mr-2">Home</Link>
        </span>
        <span className={underlineAnimation}>
          <Link href='/about' className="mr-2">About</Link>
        </span>
        <span className={underlineAnimation}>
          <Link href='/contact' className="mr-2">Contact</Link>
        </span>
      </nav>
      <button>Button Here</button>
      <div>Header Title</div>
    </header>
  )
}

export default Header