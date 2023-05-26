import Link from 'next/link';

const Navbar = () => {
    return (
        <section className="flex flex-row w-full justify-between items-start">
            <div className='w-40'><Link href='/' className="text-grey font-satoshi font-semibold">David Bushi</Link></div>
            <div><Link href='#about'>About</Link></div>
            <div><Link href='#project'>Projects</Link></div>
            <div><Link href='#contact'>Contact</Link></div>
        </section>
    )
}

export default Navbar
