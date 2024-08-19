import { LayoutWrapper } from '@/components/common';
import Image from 'next/image';
import React from 'react';

function WhyMentorWithUs() {
    let data = [
        {
            title: 'Curriculum Design Assistance',
            text: 'Our Program Managers collaborate with you at every step of the way & help you build a high-impact course'
        },
        {
            title: 'Technical Help',
            text: "Don't know how to design ads? Edit content? No worries! Our in-house talent will take care of all the technical needs"
        },
        {
            title: 'Paid Promotion and Marketing',
            text: 'We will launch your program with ad campaigns and promotions — to build a sustainable profit model.'
        }
    ]
    return (
        <div className='py-24 bg-[#050D2B]'>
            <LayoutWrapper>
                <h1 className='text-5xl font-semibold text-white'>Why mentor with us?</h1>
                <div className='flex gap-10 items-center justify-between mt-20'>
                    <div className='flex justify-center flex-col gap-12'>
                        {
                            data.map((val, i) => {
                                return (
                                    <div key={i} className='w-[450px] rounded-xl border-2 border-gray-700 bg-[#1D253C] p-6'>
                                        <h2 className='text-2xl font-semibold text-white'>{val.title}</h2>
                                        <p className='text-zinc-400 font-light mt-2'>{val.text}</p>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <Image src={'/assets/mentorwithus.webp'} className='w-[50%]' width={700} height={700} alt='Mentor With Us' />
                </div>
            </LayoutWrapper>
        </div>
    );
}

export default WhyMentorWithUs;