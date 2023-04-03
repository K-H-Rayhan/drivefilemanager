import { FolderTree } from '@/types/TreeNodeType'
import React from 'react'
import FolderButton from './FolderButton'

type Props = {
    folders: FolderTree[]
    handleFolderClick: (id: string) => void
    handleFolderSelect: (id: string) => void
}

function Folders({
    folders,
    handleFolderClick,
    handleFolderSelect
}: Props) {
    return (
        <div style={{
        }}>
            <div style={{
                marginBlock: "16px 16px",
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
                {folders?.map(e => (

                    <div key={e.id}>
                        <FolderButton folder={e}
                            handleFolderClick={handleFolderClick}
                            handleFolderSelect={handleFolderSelect}
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Folders