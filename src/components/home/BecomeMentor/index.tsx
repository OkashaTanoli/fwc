import { LayoutWrapper } from '@/components/common';
import React from 'react';

function BecomeMentor() {
    return (
        <div className='py-28 bg-[url("/assets/grid-bg.svg")] bg-cover'>
            <LayoutWrapper>
                <div className='flex flex-col items-center gap-10'>
                    <h1 className='text-5xl font-semibold text-center'>Become a mentor with us</h1>
                    <p className='w-[500px] mx-auto text-center text-lg font-semibold text-zinc-700'>Ready to make a difference? Join GrowthSchool as a mentor and be a part of something great!</p>
                    <button className='py-4 px-7 text-xl rounded-xl font-semibold bg-primary border-2 border-black'>Get Started</button>
                </div>
            </LayoutWrapper>
        </div>
    );
}

export default BecomeMentor;