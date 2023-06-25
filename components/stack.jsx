import Image from 'next/image';

const Stack = () => {
    return (

        <section className='flex flex-col items-center w-screen h-48 snap-center stack'>
            
            <div><h1 className='text-center  h1__gradient '>My Tech Stack</h1></div>

            <section className="flex justify-around text-center items-center w-7/12 sm:flex-row sm:mt-10 flex-wrap text-cyan-100">

                <div>
                    <Image src='/assets/tailwind.svg' height={50} width={50} />
                    <p>Tailwind CSS</p>
                    
                </div>
                <div>
                    <Image src='/assets/css.svg' height={50} width={50} />
                    <p>CSS3</p>
                </div>
                <div>
                    <Image src='/assets/react.svg' height={50} width={50} />
                    <p>React</p>
                </div>
                <div>   
                    <Image src='/assets/nextjs.svg' height={50} width={50} />
                    <p>Next.js</p>
                </div>
            </section>
        </section>
    )
}

export default Stack;
