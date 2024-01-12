import React, { useState } from 'react'
import Socials from './Socials'
import toast from 'react-hot-toast';

const Contact = (): React.ReactElement => {

    const [name, setName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [message, setMessage] = useState<string>("");

    const accessKey = "5914c77c-09f6-4155-ab85-a2a9a8640c5d";

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await fetch('https://api.web3forms.com/submit', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json"
                },
                body: JSON.stringify({ name, email, message, access_key: accessKey })
            })
            toast.success("Message sent successfully!")
            setName("");
            setEmail("");
            setMessage("");
        } catch (error) {
            toast.error("Failed to send message");
        }
    }

    return (
        <div className='min-h-screen flex items-center justify-center flex-col gap-8'>
            <div className='font-bold text-lg underline'>
                Get in touch with me
            </div>
            <div className='flex items-center flex-col'>
                <form onSubmit={handleSubmit} className='w-[400px] bg-[#4c7273] p-8 mb-8 rounded-2xl flex items-center flex-col'>
                    <div className='mb-4'>
                        Send me a message
                    </div>
                    <div className='mb-4 w-full'>
                        <label htmlFor="name">Name: </label>
                        <input value={name} onChange={(e) => { setName(e.target.value) }} required type="text" name="name" id="name" className='rounded p-2 bg-[#041421] w-full' />
                    </div>
                    <div className='mb-4 w-full'>
                        <label htmlFor="email">Email: </label>
                        <input value={email} onChange={(e) => { setEmail(e.target.value) }} required type="email" name="email" id="email" className='rounded p-2 bg-[#041421] w-full' />
                    </div>
                    <div className='mb-4 w-full'>
                        <label htmlFor="message">Message: </label>
                        <textarea value={message} onChange={(e) => { setMessage(e.target.value) }} required rows={5} name="message" id="message" className='rounded p-2 bg-[#041421] w-full' />
                    </div>
                    <div className='w-full'>
                        <button type='submit' className='p-2 rounded bg-[#041421] float-right'>Send</button>
                    </div>
                </form>
                <a href="mailto:pateldivyesh1323@gmail.com">E-Mail: pateldivyesh1323@gmail.com</a>
                <Socials />
            </div>
        </div>
    )
}

export default Contact
