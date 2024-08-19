import { LayoutWrapper } from '@/components/common';
import Image from 'next/image';
import React from 'react';
import { FaLinkedin } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';

function Achievements() {
    let data = [
        {
            icon: <FaLinkedin className='text-5xl text-[#0C66C2]' />,
            title: 'LinkedIn',
            text: 'Top Startup India 2023'
        },
        {
            icon: <svg width="48" height="46" viewBox="0 0 48 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M48.0005 17.6214H29.6708L24.0091 0.17627L18.3297 17.6214L0 17.6037L14.8443 28.3963L9.16487 45.8237L24.0091 35.0488L38.8357 45.8237L33.174 28.3963L48.0005 17.6214Z" fill="#00B67A"></path>
                <path d="M34.4466 32.342L33.1727 28.3965L24.0078 35.049L34.4466 32.342Z" fill="#005128"></path>
            </svg>,
            title: 'Trustpilot',
            text: 'Rated 4.7/5 (4192)'
        },
        {
            icon: <FcGoogle className='text-6xl' />,
            title: 'Google Reviews',
            text: 'Rated 4.6/5 3500+)'
        },

    ]

    let data2 = [
        {
            icon: '/assets/learners.webp',
            count: '300k',
            count_suffix: '+',
            title: 'Total Learners'
        },
        {
            icon: '/assets/programs.webp',
            count: '60',
            count_suffix: '+',
            title: 'Programs'
        },
        {
            icon: '/assets/csat.webp',
            count: '4.2',
            count_suffix: '/5',
            title: 'CSAT'
        },
    ]
    return (
        <div className='bg-[url("/assets/grid-bg.svg")] bg-cover py-20'>
            <LayoutWrapper>
                <div>
                    <div className='grid grid-cols-3 gap-10 w-[85%] mx-auto'>
                        {
                            data.map((val, i) => {
                                return (
                                    <div key={i} className='flex items-center gap-3 px-5 py-5 border-2 border-black rounded-2xl bg-white'>
                                        <span>{val.icon}</span>
                                        <div>
                                            <h3 className='text-[#4E5363] text-base font-semibold'>{val.title}</h3>
                                            <h2 className='text-black text-2xl font-bold'>{val.text}</h2>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className='grid grid-cols-3 gap-10 w-[60%] mx-auto mt-10'>
                        {
                            data2.map((val, i) => {
                                return (
                                    <div key={i} className='flex flex-col items-center gap-2 px-5 py-4 border-2 border-black rounded-2xl bg-white'>
                                        <Image src={val.icon} width={100} height={70} className='' alt={val.title} />
                                        <span className='text-5xl font-bold'>{val.count}<span className='text-xl font-semibold'>{val.count_suffix}</span></span>
                                        <h3 className='text-[#4E5363] text-base font-semibold'>{val.title}</h3>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </LayoutWrapper>
        </div>
    );
}

export default Achievements;