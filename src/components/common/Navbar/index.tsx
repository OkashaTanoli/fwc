import Image from 'next/image';
import React from 'react';
import LayoutWrapper from '../LayoutWrapper';
import Button from '../Button'

function Navbar() {
    return (
        <div className='absolute top-5 w-full'>
            <LayoutWrapper>
                <div className='rounded-full p-3 bg-white bg-opacity-75 flex justify-between items-center'>
                    <Image src={'/assets/logo.svg'} className='w-[180px]' width={300} height={100} alt='logo' />
                    <ul className='flex gap-10 font-semibold'>
                        <li>Home</li>
                        <li>Features</li>
                        <li>Community</li>
                    </ul>
                    <Button>Join Now</Button>
                </div>
            </LayoutWrapper>
        </div>

    );
}

export default Navbar;
