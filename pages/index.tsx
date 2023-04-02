import { MenuContext } from '@/context/MenuContext'
import useLocalStorage from '@/hooks/useLocalStorage'
import { Open_Sans } from 'next/font/google'
import { useRouter } from 'next/router'
import { MutableRefObject, useContext, useEffect, useRef, useState } from 'react'

const inter = Open_Sans({ subsets: ['latin'] })

export default function Home() {
    const { storedFolderData, handleAddFolder, handleDeleteFolder, handleEditFolder } = useContext(MenuContext)
    const addRef = useRef(null);
    
    return (
        <div className={inter.className}


        >
            {JSON.stringify(storedFolderData, null, 0)}
            <div
                ref={addRef}
                style={{
                    margin: 10
                }}
                onClick={() => {
                    handleAddFolder(`${Math.floor(Math.random() * 1000)}`, "8b1f30f2-398c-4529-9cc3-0fba29df8870")
                }

                }>Add</div>
            <div
                style={{
                    margin: 10
                }}
                onClick={() => {
                    handleDeleteFolder("home")
                }
                }>Delete</div>
            <div
                style={{
                    margin: 10,
                }}
                onClick={() => {
                    handleEditFolder("prothomBaccharprothomBaccha", "7f340d6a-2702-4843-b582-8668a3c7545c")
                }
                }>Edit</div>

        </div>
    )
}
