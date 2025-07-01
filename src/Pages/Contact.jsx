import React from 'react'

function Contact() {
    const contactdetails = [
        { label: 'Contact No.', value: '9465129793' },
        { label: 'E-mail:', value: 'omhanda246@gmail.com', type: 'email' },
        { label: 'GitHub:', value: 'https://github.com/Om-Handa', type: 'link' },
        { label: 'LinkedIn:', value: 'https://www.linkedin.com/in/om-handa-62451b301', type: 'link' }
    ];
    return (
        <div id='Contact' className='flexad w-full'>
            <div className=' flexad flex-col my-30 w-full'>
                <div className="border-6 h-16 w-52 flexad text-3xl font-bold">CONTACT ME</div>
                <div className='md: flexad flex-col mt-16 w-full'>
                    <div className=" w-[95%] md:w-3/5 text-center">
                        <p className="text-2xl">Have a project in mind or just want to say hello?
                            <br></br>
                            Feel free to reach out — I'm always open to new opportunities, collaborations, or tech talk!
                        </p>
                        <br />
                        {contactdetails.map(({ label, value, type }, index) => (
                            <p key={index} className="text-xl md:text-2xl flex justify-start">
                                <span className='font-bold px-1 '>{label}:</span>
                                {type === 'link' ? (
                                    <a href={value} target="_blank" rel="noopener noreferrer" className="underline">{value}</a>
                                ) : type === 'email' ? (
                                    <a href={`mailto:${value}`} className="underline">{value}</a>
                                ) : value}
                            </p>
                        ))}
                    </div>
                    <div className="h-[1px] w-full border flexad text-4xl font-bold my-16">Or</div>
                    <div className="right w-full md:w-1/2 flex flex-col">
                        <h1 className='text-red-700 font-bold text-center text-2xl mb-5 underline' >FORM NOT WORKING YET</h1>
                        <input type="text" className='contactad =' placeholder='Enter Your Name' />

                        <input type="email" className='contactad' placeholder='Enter your Email' />

                        <input type="number" className='contactad' placeholder='Enter your phone No.' />

                        <textarea name="Text" className='m-5 border-4 border-t-0 border-r-0 h-16 px-3' placeholder='Enter Your Message'></textarea>

                        <input type="submit" value="SUBMIT" className='m-5 border-x-2 w-28 px-5 text-xl font-bold self-center h-8' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
