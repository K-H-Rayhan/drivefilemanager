import useHandleTree from '@/hooks/useHandleTree'
import useLocalStorage from '@/hooks/useLocalStorage'
import { Open_Sans } from 'next/font/google'
import { useRouter } from 'next/router'
import { MutableRefObject, useEffect, useRef, useState } from 'react'

const inter = Open_Sans({ subsets: ['latin'] })

function TreeMenu({ storedFolderData, depthLevel }: any) {
    const router = useRouter();
    let paths = router.asPath.split('/');
    const [open, setOpen] = useState(false);

    useEffect(() => {
        if (paths[depthLevel] == storedFolderData.slug) {
            setOpen(true)
        }
    }, [router.asPath])

    return (
        <div
            style={{
                margin: 10
            }}
        >
            <div
                style={{
                    margin: 10
                }}
            >
                <div onClick={() => {
                    setOpen(!open)
                }
                }>{storedFolderData.name}</div>
                {open && storedFolderData?.children?.map(e => <TreeMenu storedFolderData={e} depthLevel={depthLevel + 1} />)}
            </div>
        </div>
    )
}

export default function Home() {
    const { storedFolderData, handleAddFolder, handleDeleteFolder, handleEditFolder } = useHandleTree()
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
                    handleAddFolder('test1child2', "62ce633a-425a-4400-92f0-c98d994a4a3a")
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
            {storedFolderData.map(e => <TreeMenu storedFolderData={e} depthLevel={0} />)}

        </div>
    )
}
