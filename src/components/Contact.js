import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { toast } from 'react-hot-toast';

const Contact = () => {
    const form = useRef();
    const contact = useRef()
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_8yhfyte', 'template_61ab8c4', form.current, 'H1JnAdfL177p_72-F')
            .then((result) => {
                console.log(result.text);
                toast.success('Successfully sent the message')

            }, (error) => {
                console.log(error.text);
            });
    };
    return (
        <div className='min-h-screen bg-base-200 text-xl' ref={contact}>
            <h2 className='pt-20 text-primary font-bold text-2xl'>Contact Me</h2>
            <h3>I want to hear from you</h3>
            <div >
                <form className='flex flex-col text-center text-primary mx-auto  w-1/3' ref={form} onSubmit={sendEmail}>
                    <label className='text-start'>Name</label>
                    <input required placeholder='Enter your name' className='border-2 p-4 text-primary rounded mb-6' type="text" name="user_name" />
                    <label className='text-start'>Email</label>
                    <input required placeholder='Enter your email' className='border-2 p-4 rounded text-primary  mb-6' type="email" name="user_email" />
                    <label className='text-start'>Message</label>
                    <textarea required placeholder='Enter your message' className='border-2 p-4 text-primary  rounded-lg mb-6' name="message" />
                    <input className='border-2 rounded btn btn-primary' type="submit" value="Send" />
                </form>
            </div>
        </div>
    );
};

export default Contact;