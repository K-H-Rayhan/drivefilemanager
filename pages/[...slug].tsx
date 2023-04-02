import { MenuContext } from '@/context/MenuContext'
import { ResultContext } from '@/context/ResultsContext'
import useLocalStorage from '@/hooks/useLocalStorage'
import { FolderTree } from '@/types/TreeNodeType'
import { Open_Sans } from 'next/font/google'
import { useRouter } from 'next/router'
import { MutableRefObject, useContext, useEffect, useRef, useState } from 'react'

const inter = Open_Sans({ subsets: ['latin'] })

export default function Home() {
    const { results } = useContext(ResultContext)
    const addRef = useRef(null);


    return (
        <div className={inter.className}
        >
            {/* {JSON.stringify(results, null, 0)} */}

            {results?.children.map(e => (<div key={e.id}>
                {e.name}
            </div>))}
            {/* <div
                ref={addRef}
                style={{
                    margin: 10
                }}
                onClick={() => {
                    handleAddFolder('test2child2', "ffd12cba-b1ec-45b9-8148-a641159ba8d9")
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
