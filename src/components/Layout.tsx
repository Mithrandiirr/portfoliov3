import React from 'react'
import { Header } from './Header'

interface LayoutProps {
    children: React.ReactNode
}   

export const Layout: React.FC<LayoutProps> = ({children}) => {
        return (
            <div className='mx-auto'>
                <div className='gradients'>
                    <div className='gradients-wrapper'>
                        <div className='gradient-03'></div>
                        <div className='gradient-04'></div>
                        <div className='gradient-moving-01'></div>
                        <div className='gradient-moving-02'></div>

                        
                    </div><div className='gradient-noise'></div>
                </div>
                <main className='main'>
                    {children}
                </main>
            </div>
        );
}