import React from 'react'
import Img from '../assets/d.png'
import Image from 'next/image';
import { Loop } from './Loop';
import Link from 'next/link';
import { Header } from './Header';
interface ContainerProps {

}

export const Container: React.FC<ContainerProps> = ({}) => {
        return (
            <div className='max-w-[1760px] main px-44'>
                <Header />
                <div className='mt-16 flex flex-row gap-8'>
  <div className='flex justify-center items-center text-center font-roslindale text-8xl text-black flex-col'>
                    <Image src={Img} alt='Profile' className='w-24 rounded-full' />
                    EL Yaakoubi Mohammed  
                </div>
                <div className='flex flex-row justify-center pt-4 pb-12 gap-8'>
                    <div className='flex flex-col flex-[.6] mt-4'>
                        <p className='font-sora font-extralight text-black text-2xl'>
                        Developer and designer based in Morocco.
                        </p>
                        <p className='font-sora font-extralight text-black text-2xl mt-2'>
                            I work as freelancer, in both Jam-stack and Full-stack roles.
                        </p>
                        <span className='text-black font-extralight font-sora text-xl mt-4'>Reply time: ~ 1 hour.</span>
                         <div className='flex flex-col'>
                        <h2 className='font-sora font-normal text-2xl mt-8'>Technologies</h2>
                        <Loop />
                        <Link href={'/'} className='mt-8 bg-black px-4 py-2 w-fit text-white text-xl rounded-full font-light flex flex-row gap-2 items-center'>Contact me<svg width="25"  viewBox="0 0 29 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M27.7256 8.70711C28.1161 8.31658 28.1161 7.68342 27.7256 7.29289L21.3617 0.928932C20.9711 0.538408 20.338 0.538408 19.9474 0.928932C19.5569 1.31946 19.5569 1.95262 19.9474 2.34315L25.6043 8L19.9474 13.6569C19.5569 14.0474 19.5569 14.6805 19.9474 15.0711C20.338 15.4616 20.9711 15.4616 21.3617 15.0711L27.7256 8.70711ZM0 9H27.0185V7H0V9Z" fill="white"/>
</svg>

</Link>
                    </div>
 <div className='flex flex-col'>
                        <h2 className='font-sora font-normal text-2xl mt-8'>Technologies</h2>
                        <Loop />
                        <Link href={'/'} className='mt-8 bg-black px-4 py-2 w-fit text-white text-xl rounded-full font-light flex flex-row gap-2 items-center'>Contact me<svg width="25"  viewBox="0 0 29 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M27.7256 8.70711C28.1161 8.31658 28.1161 7.68342 27.7256 7.29289L21.3617 0.928932C20.9711 0.538408 20.338 0.538408 19.9474 0.928932C19.5569 1.31946 19.5569 1.95262 19.9474 2.34315L25.6043 8L19.9474 13.6569C19.5569 14.0474 19.5569 14.6805 19.9474 15.0711C20.338 15.4616 20.9711 15.4616 21.3617 15.0711L27.7256 8.70711ZM0 9H27.0185V7H0V9Z" fill="white"/>
</svg>

</Link>
                    </div>
                    </div>
                </div>
                </div>
              

            </div>
        );
}