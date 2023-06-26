import Image from 'next/image';

const Stack = () => {
    return (

        <section className='flex flex-col items-center w-8/12 h-72 snap-center stack'>
            
            <div><h1 className='text-center h1__gradient text-4xl'>My Tech Stack</h1></div>

            <section className="flex justify-around text-center items-center w-7/12 sm:flex-row sm:mt-10 flex-wrap ">

                <div>
                    <Image src='/assets/tailwind.svg' height={100} width={100} />
                    <p className='text__stack'>Tailwind CSS</p>
                    
                </div>
                <div>
                    <Image src='/assets/css.svg' height={100} width={100} />
                    <p className='text__stack'>CSS3</p>
                </div>
                <div>
                    <Image src='/assets/react.svg' height={100} width={100} />
                    <p className='text__stack'>React</p>
                </div>
                <div>   
                    <Image src='/assets/nextjs.svg' height={100} width={100} />
                    <p className='text__stack'>Next.js</p>
                </div>
            </section>
        </section>
    )
}

export default Stack;
