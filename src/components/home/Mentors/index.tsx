import Image from 'next/image';
import React from 'react';
import Marquee from 'react-fast-marquee';

function Mentors() {
    let data = [
        {
            name: 'Okasha Aijaz',
            designation: 'Software Engineer',
            image: '/assets/mentor1.webp'
        },
        {
            name: 'Okasha Aijaz',
            designation: 'Software Engineer',
            image: '/assets/mentor1.webp'
        },
        {
            name: 'Okasha Aijaz',
            designation: 'Software Engineer',
            image: '/assets/mentor1.webp'
        },
        {
            name: 'Okasha Aijaz',
            designation: 'Software Engineer',
            image: '/assets/mentor1.webp'
        },
        {
            name: 'Okasha Aijaz',
            designation: 'Software Engineer',
            image: '/assets/mentor1.webp'
        },
        {
            name: 'Okasha Aijaz',
            designation: 'Software Engineer',
            image: '/assets/mentor1.webp'
        },
    ]

    return (
        <div className='py-28'>
            <h1 className='text-5xl font-bold text-center'>Be a part of mentor hall of fame</h1>
            <div className='mt-20'>
                <Marquee direction='right' speed={200}>
                    {
                        data.map((val, i) => {
                            return (
                                <div key={i} className='w-[250px] h-[340px] mx-7 border border-black rounded-2xl overflow-hidden relative'>
                                    <Image src={val.image} className='h-full w-full object-cover' width={400} height={500} alt='mentor' />
                                    <div className='absolute top-0 bottom-0 bg-gradient-to-t from-[#050D2B] to-transparent w-full h-full'>
                                        <div className='absolute bottom-0 w-full py-5 flex flex-col gap-1 items-center'>
                                            <h4 className='text-lg font-semibold text-white'>{val.name}</h4>
                                            <h4 className='text-sm font-semibold text-zinc-300'>{val.designation}</h4>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }

                </Marquee>
            </div>
        </div>
    );
}

export default Mentors;