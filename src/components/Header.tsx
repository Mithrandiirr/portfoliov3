import Link from 'next/link';
import React from 'react'

interface HeaderProps {

}

export const Header: React.FC<HeaderProps> = ({}) => {
        return (
            <header className='flex flex-row p-12'>
                <Link href={'/'} className='rounded-full border-2 border-black text-black text-lg py-1 px-6'>{"Let's talk"}</Link>
                <ul className='flex flex-row gap-8 justify-end flex-1 '>
                    <li>
                        <Link className='font-sora text-xl font-light text-black' href={'/'}>Home</Link>
                    </li>
  <li>
                        <Link className='font-sora text-xl font-light text-black' href={'/'}>Work</Link>
                    </li>
                </ul>
            </header>
        );
}