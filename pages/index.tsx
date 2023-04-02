import useHandleTree from '@/hooks/useHandleTree'
import useLocalStorage from '@/hooks/useLocalStorage'
import { Open_Sans } from 'next/font/google'
import { useRouter } from 'next/router'
import { MutableRefObject, useEffect, useRef, useState } from 'react'

const inter = Open_Sans({ subsets: ['latin'] })

export default function Home() {
    const { storedFolderData, handleAddFolder, handleDeleteFolder, handleEditFolder } = useHandleTree()
    const addRef = useRef(null);

    return (
        <div className={inter.className}


        >
            {/* {JSON.stringify(storedFolderData, null, 0)}
            <div
                ref={addRef}
                style={{
                    margin: 10
                }}
                onClick={() => {
                    handleAddFolder(`${Math.floor(Math.random() * 1000)}}`, "9887c13d-8d04-40da-8b0d-47b9225766db")
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
                }>Edit</div> */}

        </div>
    )
}
