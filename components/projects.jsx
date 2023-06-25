import Image from 'next/image';

const Projects = () => {
    return (
        <>
            <h1 className='text-center mt-20 h1__gradient' >My Projects</h1>
            <section className="flex justify-around items-center w-10/12 sm:flex-row sm:mt-10 flex-wrap px-5 " id='projects'>
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
        </>
    )
}

export default Projects
