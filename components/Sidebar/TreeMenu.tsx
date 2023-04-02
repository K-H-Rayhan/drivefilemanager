import { FolderTree } from '@/types/TreeNodeType'
import { useRouter } from 'next/router'
import React from 'react'
import { useEffect, useState } from 'react'
import TreeMenuButton from './TreeMenuButton'

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
            <TreeMenuButton
                depthLevel={depthLevel}
                route={route}
                storedFolderData={storedFolderData}
                open={open} toggleOpen={() => {
                    setOpen(!open)
                }} />
            {open && storedFolderData?.children?.map((e: FolderTree) => <TreeMenu storedFolderData={e} key={e.id} depthLevel={depthLevel + 1} route={route + "/" + e.slug} />)}
        </div>
    )
}

export default TreeMenu