
'use client'

const Contact = () => {
    
    const handleSubmit = () => {
        console.log("form submitted");
    }

    return (
        <section className="w-screen h-screen snap-center">
            
            <h1 className='text-center mt-10 h1__gradient text-4xl '>Contact me</h1>
            <section id="contact" className="flex flex-row mt-10 items-center justify-around w-full">
                <div className="w-1/2">
                    <p className="text-6xl h1__gradient " >You have a problem to solve? <br />
                    I'm here to help you!</p>
                </div>

                <form onSubmit={handleSubmit} className="w-2/4">
                    <div className="flex flex-col mt-10 items-center mx-10 w-full">
                        <div className="flex flex-col w-1/2">
                            <label htmlFor="name ">Your Name</label>
                            <input className="contact__input bg-slate-200" type="text" name="name" />
                        </div>
                        <div className="flex flex-col w-1/2">
                            <label htmlFor="email">Your Email</label>
                            <input className="contact__input bg-slate-200" type="email" name="Surname" />
                        </div>
                        <div className="flex flex-col w-1/2">
                            <label htmlFor="request">What can I help you with?</label>
                            <input className="contact__input h-60 bg-slate-200" type="textarea" name="request" />
                        </div>
                        <div className="button__work "><button type="submit" />Let's get to it!</div>
                    </div>
                </form>
                
            </section>
        </section>
    )
}

export default Contact;
