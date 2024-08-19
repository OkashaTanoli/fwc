'use client'

import { LayoutWrapper } from '@/components/common';
import React, { useState } from 'react';
import Tabs from './Tabs';
import Image from 'next/image';

function FlexibleMentorship() {

    const [active, setActive] = useState(0)
    let data = [
        {
            title: 'Build a Guide',
            text: 'Curate your favourite content on popular topics & questions',
            image:
                <>
                    <Image src={'/assets/hour2.webp'} className='h-full object-contain translate-y-[35%]' width={300} height={500} alt='Hour' />
                    <Image src={'/assets/hour1.webp'} className='h-full object-contain -translate-y-[35%] hidden md:flex' width={300} height={500} alt='Hour' />
                </>
        },
        {
            title: 'Build a Workshop',
            text: 'The Live workshop focused on fundamental or advanced topics',
            image:
                <>
                    <Image src={'/assets/week1.webp'} className='h-full object-contain translate-y-[35%]' width={300} height={500} alt='Week' />
                    <Image src={'/assets/week2.webp'} className='h-full object-contain -translate-y-[35%] hidden md:flex' width={300} height={500} alt='Week' />
                </>
        },
        {
            title: 'Build a Crash Course',
            text: 'Help people start their journey in your industry with a crash course',
            image:
                <Image src={'/assets/month.webp'} className='w-full object-contain translate-y-[20%] translate-x-[20%]' width={300} height={500} alt='Month' />

        },
        {
            title: 'Build an Extensive/ Accelerator Program',
            text: '8-12 week programs focused on mentorship & career outcomes',
            image:
                <Image src={'/assets/more-time.webp'} className='w-full object-contain translate-y-[20%] translate-x-[20%]' width={300} height={500} alt='More' />
        },
    ]
    return (
        <div className='py-20 bg-[#050D2B]'>
            <LayoutWrapper>
                <div className=''>
                    <h1 className='text-5xl font-bold text-white text-center'>Flexible mentorship, your way</h1>
                    <div className='mt-14'>
                        <Tabs setActive={setActive} active={active} />
                        <div className='block md:flex justify-between -mt-5 bg-[url("/assets/grid-bg.svg")] bg-cover bg-white rounded-lg overflow-hidden'>
                            <div className='w-full md:w-1/2 lg:w-[45%] py-14 flex items-center bg-gradient-to-tr from-white via-white to-white/0'>
                                <div className='pl-16'>
                                    <h1 className='text-5xl font-semibold'>{data[active].title}</h1>
                                    <p className='text-xl text-zinc-700 mt-3'>{data[active].text}</p>
                                </div>
                            </div>
                            <div className=' w-full md:w-[45%] h-[400px] flex justify-center'>
                                {data[active].image}
                            </div>
                        </div>
                    </div>
                </div>
            </LayoutWrapper>
        </div>
    );
}

export default FlexibleMentorship;