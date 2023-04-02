import { FolderTree } from '@/types/TreeNodeType'
import React from 'react'
import FolderButton from './FolderButton'

type Props = {
    folders: FolderTree
}

function Folders({
    folders
}: Props) {
    return (
        <div style={{
        }}>
            <div style={{
                marginBlock: 10,
                fontSize: 14,
                color: '#1d1d1d',
            }}>
                Folders
            </div>

            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
                gap: 15,
            }}>
                {folders?.children.map(e => (

                    <div key={e.id}>
                        <FolderButton folder={e} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Folders