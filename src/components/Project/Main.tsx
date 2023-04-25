import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import Img from '../../assets/img1.png'
import { Header } from '../Header';
interface MainProps {

}

export const Main: React.FC<MainProps> = ({}) => {
        return (
        <div className='overflow-y-scroll max-h-[786px] lg:max-h-full w-max 2xls:w-[1300px] project lg:w-[1200px] xlg:w-[1100px] base:w-full'>
            <Header />
        <div className='flex flex-col gap-4 px-40 pt-8 2xl:px-28 lg:px-12 my-8 small:px-8'>
                <Link href={'/'}>
                   <svg width="42" height="24" viewBox="0 0 42 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.939401 10.9393C0.353614 11.5251 0.353614 12.4749 0.939401 13.0607L10.4853 22.6066C11.0711 23.1924 12.0209 23.1924 12.6067 22.6066C13.1924 22.0208 13.1924 21.0711 12.6067 20.4853L4.12138 12L12.6067 3.51472C13.1924 2.92893 13.1924 1.97918 12.6067 1.3934C12.0209 0.807612 11.0711 0.807612 10.4853 1.3934L0.939401 10.9393ZM41.0074 10.5L2.00006 10.5V13.5L41.0074 13.5V10.5Z" fill="black"/>
                </svg>
                </Link>
                <div className='flex flex-row items-center my-4'>
                    <h1 className='text-6xl font-bold flex flex-1 lg:text-5xl sm:text-4xl small:text-3xl'>Javaa</h1>
                    <Link href={'/'} className='text-xl font-light lg:text-lg sm:text-base' >
                        Preview live site
                    </Link>
                </div> 
                <p className='text-2xl lg:text-xl sm:text-lg'>An e-commerce proof-of-concept headless project.</p>
                <p className='text-2xl lg:text-xl sm:text-lg'>Building both seo-friendly, interactive experience and amazingly fast end results.</p>
                <div className='my-4'>

                <Image src={Img} alt='Img'  />
                </div>
                <div className='flex flex-col gap-4 my-4'>
                    <h2 className='text-5xl lg:text-4xl sm:text-3xl'>Technologies:</h2>
                    <div className='flex flex-col gap-4 my-4'>
                        <div className='flex flex-row items-start gap-40 sm:gap-20 small:gap-10'>
                            <h3 className='text-2xl text-[#525252] lg:text-xl'>Frameworks:</h3>
                            <div className='flex flex-col gap-2 text-2xl lg:text-xl'>
                                <span>React</span>
                                <span>Next.js</span>
                            </div>
                        </div>

                    </div>
                </div>    
            </div>
        </div>
          
        );
}