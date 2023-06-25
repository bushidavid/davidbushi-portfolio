import '@styles/global.css';
import Image from 'next/image';

const Header = () => {
    return (
        <section className="flex flex-col justify-center items-center w-10/12 sm:flex-row sm:mt-10 pt-10 text-slate-500">
            <div className="flex flex-col justify-between items-center w-8/12">
                <div classname='min-w-96 min-h-96' >
                    <Image className="rounded-full" src='/assets/profile_photo.jpeg'
                        width={320}
                        height={320}
                    />
                </div>
            </div>
            <div className="min-w-96 min-h-96 w-6/12 content-center sm:mt-0 mt-10 sm:ml-10"><h1 className='font__arvo font-thin text-6xl'>Ready to bring your business online?</h1></div>

        </section>
    )
}

export default Header;
