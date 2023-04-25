import Link from 'next/link';
import React from 'react'

interface HeaderProps {

}

export const Header: React.FC<HeaderProps> = ({}) => {
        return (
            <header className='flex flex-row px-40 pt-8 2xl:px-28 lg:px-12 base:px-8 sm:justify-center  '>
                <Link href={'mailto:yaakoubi.m111@gmail.com'} className='rounded-full border-2 border-black text-  text-lg py-1 px-6 hover:bg-black hover:text-white hover:transition hover:duration-200 transition duration-100'>{"Contact me"}</Link>
                {/* <ul className='flex flex-row gap-8 justify-end flex-1 '>
                    <li>
                        <Link className='font-sora text-xl font-light text-black' href={'/'}>Home</Link>
                    </li>
  <li>
                        <Link className='font-sora text-xl font-light text-black' href={'/'}>Work</Link>
                    </li>
                </ul> */}
            </header>
        );
}