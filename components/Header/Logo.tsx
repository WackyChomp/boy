import Link from 'next/link'
import Image from 'next/image'

type Props = {}

const Logo = (props: Props) => {
  const logoImage = `https://media.tenor.com/ZFoOuUSqPBEAAAAi/stalzone-meme.gif`

  return (
    <Link href='/' className='flex items-center text-dark'>
      <div className='w-16 rounded-full overflow-hidden border border-solid border-dark'>
        <Image src={logoImage} alt='Logo' className='rounded-full' width={20} height={20} />
      </div>
      <span className='font-bold text-xl'>Logo</span>
    </Link>
  )
}

export default Logo