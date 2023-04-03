import { File, FolderTree } from '@/types/TreeNodeType'
import React from 'react'
import FolderButton from './FolderButton'
import FileButton from './FileButton'

type Props = {
    data: File[],
    handleFileClick: (
        id: string
    ) => void,
    handleFileSelect: (
        id: string
    ) => void,
}

function Files({
    data,
    handleFileClick,
    handleFileSelect
}: Props) {
    return (
        <div style={{
        }}>
            <div style={{
                marginBlock: "16px 16px",
                fontSize: 14,
                color: '#1d1d1d',
            }}>
                Files
            </div>

            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
                gap: 15,
            }}>
                {data?.map(e => (

                    <div key={e.id}>
                        <FileButton
                            handleFileClick={handleFileClick}
                            handleFileSelect={handleFileSelect}
                            file={e} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Files