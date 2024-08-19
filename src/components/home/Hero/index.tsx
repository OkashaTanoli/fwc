import { Button } from '@/components/common';
import React from 'react';

function Hero() {
    return (
        <div className='min-h-screen bg-[url("/assets/hero.jpeg")] bg-cover bg-center bg-fixed'>
            <div className='flex flex-col items-center text-white gap-12 absolute w-full bottom-20 px-5'>
                <h1 className='text-[80px] font-extrabold leading-none'>Empowerment Hub</h1>
                <p className='text-[22px]'>Unleash Your Potential with the Ultimate Mentorship, Marketplace, and Community Experience</p>
                <Button className='bg-transparent border-2 border-white'>Get Started</Button>
            </div>
        </div>
    );
}

export default Hero;