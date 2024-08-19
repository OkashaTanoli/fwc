import { LayoutWrapper } from '@/components/common';
import React from 'react';

function Vision() {
    return (
        <LayoutWrapper>
            <div className='py-20'>
                <h2 className='text-[64px] font-extrabold'>Our Vision</h2>
                <ul className='text-[22px] flex flex-col gap-3 mt-7'>
                    <li>Embark on a journey of growth and success with Whisperer&apos;s revolutionary SaaS application.</li>
                    <li>Connect with industry leaders, access personalized mentorship, and collaborate on community-driven projects.</li>
                    <li>Join us in fostering a community mindset that transcends individual achievements.</li>
                </ul>
            </div>
        </LayoutWrapper>
    );
}

export default Vision;