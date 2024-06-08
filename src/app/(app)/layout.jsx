import Navbar from '@/components/Navbar'
import React from 'react'

export default function RootLayout({ children }) {
    return (
        <>
            <Navbar />
            <div>{children}</div>
        </>
    )
}