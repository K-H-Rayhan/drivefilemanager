import Head from 'next/head'
import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import { Open_Sans } from 'next/font/google'
import Header from '../Header/Header'
import BreadCrumb from './BreadCrumb'

const font = Open_Sans({ subsets: ['latin'] })

type Props = {
    children: React.ReactNode
}

function Layout({
    children
}: Props) {
    return (
        <div className={`${font.className}`}>
            <Head>
                <title>I Love Nextjs</title>
                <meta name="description" content="Nextjs is so good" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            <div style={{
                display: 'flex',
            }}>
                <Sidebar />
                <div className='' style={{
                    backgroundColor: '#fff',
                    minHeight: '100vh',
                    width: '100%',
                    borderTopLeftRadius: '15px',
                    padding: '20px',
                }}>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default Layout