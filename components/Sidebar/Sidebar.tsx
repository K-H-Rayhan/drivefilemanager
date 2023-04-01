import useHandleTree from '@/hooks/useHandleTree'
import React from 'react'
import TreeMenu from './TreeMenu'

type Props = {}

function Sidebar({ }: Props) {
    const { storedFolderData, handleAddFolder, handleDeleteFolder, handleEditFolder } = useHandleTree()
    return (
        <div>
            {storedFolderData.map(e => <TreeMenu storedFolderData={e} depthLevel={0} route={e.slug} />)}


        </div>
    )
}

export default Sidebar