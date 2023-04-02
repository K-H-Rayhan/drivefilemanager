import { FolderTree } from '@/types/TreeNodeType'
import React from 'react'
import { MdFolder } from 'react-icons/md'

type Props = {
    folder: FolderTree
}

function FolderButton({
    folder
}: Props) {
    return (
        <div style={{
            padding: "12px 16px",
            backgroundColor: "#F7F9FC",
            borderRadius: '0.75rem',
            display: 'flex',
            alignItems: 'center',
            gap: 11,
        }}>
            <MdFolder size={24} />
            <span style={{
                fontSize: 15,
            }}>{folder.name}</span>
        </div>
    )
}

export default FolderButton