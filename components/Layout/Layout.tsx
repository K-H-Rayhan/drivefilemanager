import Head from 'next/head'
import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import { Open_Sans } from 'next/font/google'

const font = Open_Sans({ subsets: ['latin'] })

type Props = {
    children: React.ReactNode
}

function Layout({
    children
}: Props) {
    return (
        <div className={font.className}>
            <Head>
                <title>I Love Nextjs</title>
                <meta name="description" content="Nextjs is so good" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Sidebar />
            <div className=' flex justify-end  w-full'>
                <div className=' flex flex-col w-[calc(100%-65px)] md:w-full'>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default Layout