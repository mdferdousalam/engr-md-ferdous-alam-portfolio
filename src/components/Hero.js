import React from 'react';
import image from '../assets/image/full-pic.png'

const Hero = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={image} className=" rounded-lg shadow-2xl bg-base-200" alt='' />
                <div>
                    <h1 className="text-5xl font-bold">I am MERN Stack Developer</h1>
                    <p className="py-6">Hire me for any type of web application you have.I will develop and deploy any web application you need.I will ensure the security of your site and develop search engine optimized site.</p>
                    {/* <button className="btn btn-primary">Get Started</button> */}
                </div>
            </div>
        </div>
    );
};

export default Hero;