import Image from 'next/image';
import React from 'react';
import Marquee from 'react-fast-marquee';

function MentorsCompany() {
    let row1 = [
        '/assets/mentor-company1.svg',
        '/assets/mentor-company2.svg',
        '/assets/mentor-company1.svg',
        '/assets/mentor-company2.svg',
        '/assets/mentor-company1.svg',
        '/assets/mentor-company2.svg',
        '/assets/mentor-company1.svg',
        '/assets/mentor-company2.svg',
        '/assets/mentor-company1.svg',
        '/assets/mentor-company2.svg',
        '/assets/mentor-company1.svg',
        '/assets/mentor-company2.svg',
        '/assets/mentor-company1.svg',
        '/assets/mentor-company2.svg',
        '/assets/mentor-company1.svg',
    ]
    return (
        <div className='py-28'>
            <h1 className='text-3xl font-semibold text-zinc-800 text-center'>Our Mentors Come from</h1>
            <div className='mt-20'>
                <Marquee className='' speed={80} direction='right'>
                    {
                        row1.map((image, i) => {
                            return (
                                <Image key={i} src={image} className='w-[80px] invert mx-5' width={200} height={80} alt='company' />
                            )
                        })
                    }
                </Marquee>
                <Marquee className='mt-10' speed={50}>
                    {
                        row1.map((image, i) => {
                            return (
                                <Image key={i} src={image} className='w-[80px] invert mx-5' width={200} height={80} alt='company' />
                            )
                        })
                    }
                </Marquee>
            </div>
        </div>
    );
}

export default MentorsCompany;