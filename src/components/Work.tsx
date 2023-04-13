import React from 'react'
import Reel1 from '../assets/reel.png'
import Image from 'next/image';
import Link from 'next/link';
interface WorkProps {

}

export const Work: React.FC<WorkProps> = ({}) => {
        return (
            <div className='flex flex-col my-4 gap-8'>
                <Link href={'/'} className='flex flex-col gap-2 items-start'>
                    <Image src={Reel1} alt='Reel' />
                    <h1 className='text-lg'><span className='font-bold'>javaa</span> - Ecommerce website</h1>
                </Link>
             <Link href={'/'} className='flex flex-col gap-2 items-start'>
                    <Image src={Reel1} alt='Reel' />
                    <h1 className='text-lg'><span className='font-bold'>javaa</span> - Ecommerce website</h1>
                </Link>
 <Link href={'/'} className='flex flex-col gap-2 items-start'>
                    <Image src={Reel1} alt='Reel' />
                    <h1 className='text-lg'><span className='font-bold'>javaa</span> - Ecommerce website</h1>
                </Link>
            </div>
        );
}