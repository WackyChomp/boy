import Link from 'next/link'
import Image from 'next/image'

type Props = {}

const Logo = (props: Props) => {
  const logoImage = `https://media.tenor.com/ZFoOuUSqPBEAAAAi/stalzone-meme.gif`

  return (
    <Link href='/' className='flex items-center space-x-1.5 text-dark'>
      <div className='w-12 rounded-full overflow-hidden border border-solid border-dark flex justify-center'>
        <Image src={logoImage} alt='Logo' className='rounded-full' width={40} height={40} />
      </div>
      <span className='font-bold text-xl'>B.O.Y</span>
    </Link>
  )
}

export default Logo