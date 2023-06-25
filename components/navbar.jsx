import Link from 'next/link';

const Navbar = () => {
    return (
        <section className="flex flex-row w-11/12 justify-between items-center">
            <div className=''><Link href='/' className="text-grey font-satoshi font-semibold">David Bushi</Link></div>
            <div><Link href='#about' className='navbar__links'>About</Link></div>
            <div><Link href='#projects' className='navbar__links'>Projects</Link></div>
            <div><Link href='#contact' className='navbar__links'>Contact</Link></div>
        </section>
    )
}

export default Navbar;