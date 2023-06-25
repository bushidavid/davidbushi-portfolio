import Image from 'next/image';

const Stack = () => {
    return (

        <>
            <h1 className='text-center mt-10 h1__gradient '>My Tech Stack</h1>

            <section className="flex justify-around items-center w-10/12 sm:flex-row sm:mt-10 flex-wrap bg-cyan-900 text-cyan-100">

                <div>
                    <Image src='/assets/tailwind.svg' height={50} width={50} />
                    <p>Tailwind CSS</p>
                    
                </div>
                <div>
                    <Image src='/assets/css.svg' height={50} width={50} />
                    <p>Css3</p>
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
        </>
    )
}

export default Stack;
