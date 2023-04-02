import { FolderTree } from '@/types/TreeNodeType'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

function TreeMenu({ storedFolderData, depthLevel, route }: any) {
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
                    // setOpen(!open)
                    router.push(route)
                }
                }>{storedFolderData.name}</div>
                {open && storedFolderData?.children?.map((e: FolderTree) => <TreeMenu storedFolderData={e} key={e.id} depthLevel={depthLevel + 1} route={route + "/" + e.slug} />)}
            </div>
        </div>
    )
}

export default TreeMenu