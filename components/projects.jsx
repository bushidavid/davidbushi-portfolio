import Image from 'next/image';

const Projects = () => {
    return (
        <section className='w-screen h-screen'>
            <h1 className='text-center mt-20 h1__gradient' >My Projects</h1>
            <section className="flex justify-around items-center w-full sm:flex-row sm:mt-10 flex-wrap px-5 " id='projects'>
                <div className='project__tile' >
                    <div>Title</div>
                    <div>Image</div>
                    <div>Description</div>

                </div>
                <div className='project__tile' >
                    <div>Title</div>
                    <div>Image</div>
                    <div>Description</div>

                </div>
                <div className='project__tile' >
                    <div>Title</div>
                    <div>Image</div>
                    <div>Description</div>

                </div>
            </section>
        </section>
    )
}

export default Projects
