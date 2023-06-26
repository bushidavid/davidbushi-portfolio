import Link from 'next/link';

const Navbar = () => {
    return (
        <section className="flex flex-row w-screen justify-center items-center font__manrope">
            
            <div className='pt-2 w-42'><Link href='/about' className="text-grey text-2xl mx-6 ">About</Link></div>
            <div className='pt-2'><Link href='/' className="text-grey text-6xl mx-6 h1__gradient">David Bushi</Link></div>
            <div className='pt-2 w-42'><Link href='/projects' className="text-grey text-2xl mx-6">My Work</Link></div>


        </section>
    )
}

export default Navbar;