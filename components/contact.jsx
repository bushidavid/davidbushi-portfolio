
'use client'

const Contact = () => {
    
    const handleSubmit = () => {
        console.log("form submitted");
    }

    return (
        <>
            <section className="flex flex-row mt-10 items-center justify-around w-full">
                <div>
                    <p className="text-4xl" >You have a problem to solve? <br />
                    I'm here to help you!</p>
                </div>

                <form onSubmit={handleSubmit} className="w-1/2">
                    <div className="flex flex-col mt-10 items-center mx-10 w-full">
                        <div className="flex flex-col w-full">
                            <label htmlFor="name ">Name</label>
                            <input className="contact__input " type="text" name="name" />
                        </div>
                        <div className="flex flex-col w-1/2">
                            <label htmlFor="email">Email</label>
                            <input className="contact__input" type="email" name="Surname" />
                        </div>
                        <div className="flex flex-col w-1/2">
                            <label htmlFor="request">Description</label>
                            <input className="contact__input h-60" type="textarea" name="request" />
                        </div>
                        <div className="rounded-lg border-cyan-700 border-2 hover:bg-slate-400"><button type="submit" />Let's get to it!</div>
                    </div>
                </form>
                
            </section>
        </>
    )
}

export default Contact;
