import React from 'react'
import { useForm } from "react-hook-form";

function Contact() {
    const { register, handleSubmit, watch, formState: { errors, isSubmitting, isSubmitSuccessful } } = useForm();
    const onSubmit = async (data) => {
        console.log(data)
        const a = await fetch(`${import.meta.env.VITE_API_URL}/` , {
            method: "POST", headers: {
                "Content-Type": "application/json",
            }, body: JSON.stringify(data)
        })
        let res = await a.text()
    }
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
                    <form onSubmit={handleSubmit(onSubmit)} className="right w-full md:w-1/2 flex flex-col">

                        <input type="text" className='contactad' {...register("Name", { required: "Name is required" })} placeholder='Enter Your Name' />
                        {errors.Name && (<span className="text-red-500">{errors.Name.message}</span>)}

                        <input type="email" className='contactad'  {...register("Email", {
                            required: "Email is required", pattern: { value: /^\S+@\S+\.\S+$/, message: "Enter a valid email" }
                        })} placeholder='Enter your Email' />
                        {errors.Email && (<span className="text-red-500">{errors.Email.message}</span>)}

                        <input type="number" className='contactad' {...register("Phone_no", {
                            required: "Phone is required", minLength: { value: 10, message: "Enter at least 10 digits" }, maxLength: { value: 15, message: "Too many digits" }})} placeholder='Enter your phone No.' />
                        {errors.Phone_no && (<span className="text-red-500">{errors.Phone_no.message}</span>)}

                        <textarea rows="4" {...register("Message", {required: "Message is required",maxLength: {value: 500, message: "Message can't exceed 500 chars"}})} placeholder="Enter your message" className="m-5 border-4 border-t-0 border-r-0 px-3"/>
                        {errors.Message && (<span className="text-red-500">{errors.Message.message}</span>)}

                        <button type="submit" disabled={isSubmitting} className="m-5 border-x-2 w-28 px-5 text-xl font-bold self-center h-10">{isSubmitting ? "Sending…" : "SUBMIT"}</button>
                        {isSubmitSuccessful && (<span className="text-green-600 self-center">Message sent successfully!</span>)}
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact
