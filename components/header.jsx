import '@styles/global.css';
import Image from 'next/image';

const Header = () => {
    return (
        <section className="flex flex-col justify-center items-center w-screen h-screen sm:mt-10 pt-10 text-slate-500 snap-center ">
            
            <div className="h-2/4 w-3/4 sm:mt-0 fade-in-animation">
              <h1 className='font__manrope font-thin  md:text-8xl text-4xl text-center mt-36 text-white h1__gradient'>Ready to bring your business online?</h1>
            </div>

            <div className='flex sm:flex-row flex-col h-2/4 w-3/4 items-center justify-center'>
                <div className='text-right mr-2 h-full w-2/4'><button className='button__contact'>Contact me</button></div>
                <div className='text-left ml-2 h-full w-2/4'><button onclick="#contact" className='button__work'>See my work</button></div>
            </div>
        </section>
    )
}

export default Header;
