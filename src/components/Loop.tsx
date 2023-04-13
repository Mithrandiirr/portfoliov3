import Image from 'next/image';
import React from 'react'
import NextJs from '../assets/nextjs.png'
import Gatsby from '../assets/gg.png'
import Remix from '../assets/remix.png'
import Graphql from '../assets/gr.png'
import NodeJs from '../assets/nodejs.png'
import Sanity from '../assets/sss.png'
import Shopify from '../assets/shopify.png'
import Ts from '../assets/tys.png'
interface LoopProps {

}

export const Loop: React.FC<LoopProps> = ({}) => {
        return (
            <div>
 <div className='w-full overflow-hidden flex relative mt-3'>

                    <div className="loop-content scroll">
                        <Image src={NextJs}  alt='next'/>

                        <Image src={Gatsby}  alt='next'/>
                        <Image src={Remix}  alt='next'/>
                        <Image src={Graphql}  alt='next'/>
                        </div>
                        <div className="loop-content scroll">
                          <Image src={NextJs}  alt='next'/>

                        <Image src={Gatsby}  alt='next'/>
                        <Image src={Remix}  alt='next'/>
                        <Image src={Graphql}  alt='next'/>
                        </div>
                </div>
 <div className='w-full overflow-hidden flex relative mt-3'>

                    <div className="loop-content scrollr">
                        <Image src={Sanity}  alt='next'/>

                        <Image src={NodeJs}  alt='next'/>
                        <Image src={Ts}  alt='next'/>
                        <Image src={Shopify}  alt='next'/>
                        </div>
                        <div className="loop-content scrollr">
                          <Image src={Sanity}  alt='next'/>

                        <Image src={NodeJs}  alt='next'/>
                        <Image src={Ts}  alt='next'/>
                        <Image src={Shopify}  alt='next'/>
                        </div>
                </div>
            </div>


        );
}