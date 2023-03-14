import Image from 'next/image';
import Link from 'next/link';


function Header() {
  return (
    <header className='flex  items-center justify-between space-x-2 font-bold px-10 py-5'>
<div className='flex items-center space-x-2'>
    <Link href="/">
    <Image className="rounded-full object-cover"
        height={120}
        width={120}
        src="/634-Properties_Logo-File_Full-Color.png"
        alt="logo"/>
    </Link>
</div>
    <div className='flex items-center justify-between space-x-2 font-bold px-10 py-5'>
        <Link className='px-3 py-2 text-xs md:text-xl bg-yellow-500 text-[#000080] flex items-center rounded-full text-ce
        ' href='/'>
        Wisconsin
        </Link>
        <Link className='px-3 py-2 md:text-xl  text-xs  bg-yellow-500 text-[#000080] flex items-center rounded-full text-ce
        ' href='/'>
        Ohio
        </Link>
    </div>
    </header>
  )
}

export default Header