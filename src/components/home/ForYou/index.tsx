import { LayoutWrapper } from '@/components/common';
import Image from 'next/image';
import React from 'react';

function ForYou() {
    let data = [
        {
            title: 'Grow your Personal Brand',
            text: 'Join our international network of mentors & gain global recognition',
            image: '/assets/foryou1.png'
        },
        {
            title: 'Generate a source of income',
            text: 'Leverage your experience to build wealth',
            image: '/assets/foryou2.png'
        },
        {
            title: 'Inspire learners globally',
            text: 'Share your knowledge & expertise with millions of learners across the world',
            image: '/assets/foryou3.png'
        },
    ]
    return (
        <div className='py-24 bg-[#050D2B]'>
            <LayoutWrapper>
                <h1 className='text-5xl font-bold text-white text-center'>What&apos;s in it for You?</h1>
                <div className='flex justify-center gap-20 mt-20'>
                    {
                        data.map((val, i) => {
                            return (
                                <div key={i} className='w-[250px] rounded-2xl border-2 border-gray-700 bg-[#1D253C] p-5'>
                                    <div className='h-[130px]'>
                                        <Image src={val.image} className='h-full w-auto' width={200} height={150} alt={val.title} />
                                    </div>
                                    <h2 className='text-xl font-bold text-white mt-3'>{val.title}</h2>
                                    <p className='text-zinc-400 font-light mt-4'>{val.text}</p>
                                </div>
                            )
                        })
                    }
                </div>
            </LayoutWrapper>
        </div>
    );
}

export default ForYou;