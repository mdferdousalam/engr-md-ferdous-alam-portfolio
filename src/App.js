import './App.css';
import { Link } from 'react-scroll';
import image from './assets/image/full-pic.png'
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { toast } from 'react-hot-toast';



function App() {
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
    <div className="App max-w-[1440px] mx-auto">

      <header>
        <div className="navbar bg-base-200">
          <div className="flex-1">
            <a href='#home' className="btn btn-ghost normal-case text-xl">Engr. Md Ferdous Alam</a>
          </div>
          <div className="flex-none">
            <ul className="menu menu-horizontal px-1">
              <li>
                <a href='#home'>Home</a>
              </li>
              <li>
                <a href='#about'>About</a>
              </li>
              <li>
                <a href='#projects'>Projects</a>
              </li>
              <li>
                <a href='#service'>Service</a>
              </li>
              <li>
                <a href='#contact'>Contact Me</a>
              </li>
              <li>
                <a
                  href='https://drive.google.com/file/d/1evDKpWTXtfoDAVmJwQ6s3jZBTMv1N59o/view?usp=sharing'
                  target='_blank'
                  rel="noreferrer"
                >Download Resume
                </a>
              </li>
            </ul>
          </div>
        </div >
      </header>
      <main>
        {/* hero section  */}
        <section>
          <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
              <img src={image} className=" rounded-lg shadow-2xl bg-base-200" alt='' />
              <div>
                <h1 className="text-5xl font-bold">I am MERN Stack Developer</h1>
                <p className="py-6">Hire me for any type of web application you want to develop.I will develop and deploy web application you need.I will ensure the security of your site and develop search engine optimized site.</p>
                {/* <button className="btn btn-primary">Get Started</button> */}
              </div>
            </div>
          </div>
        </section>


        {/* contact me section  */}
        <section>
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
        </section>
        <section>

        </section>
        <section>

        </section>
        <section>

        </section>
        <section>

        </section>
      </main>

    </div>
  );
}

export default App;
