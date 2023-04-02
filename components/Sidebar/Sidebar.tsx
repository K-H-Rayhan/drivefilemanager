import useHandleTree from '@/hooks/useHandleTree'
import React from 'react'
import TreeMenu from './TreeMenu'
import { FolderTree } from '@/types/TreeNodeType'

type Props = {}

function Sidebar({ }: Props) {
    const { storedFolderData, handleAddFolder, handleDeleteFolder, handleEditFolder } = useHandleTree()
    return (
        <div style={{
            minWidth: '257px',
        }}>
            {storedFolderData.map((e: FolderTree) => <TreeMenu storedFolderData={e} depthLevel={0} route={e.slug} key={e.id} />)}
            
        </div>
    )
}

export default Sidebar