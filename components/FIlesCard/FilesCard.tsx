import { File, FolderTree } from '@/types/TreeNodeType'
import React from 'react'
import { FILETYPE, Selected } from '../Ui/Viewer'
import FilesCardButton from './FilesCardButton'

type Props = {
    data: FolderTree[] | File[],
    handleFileClick: (
        id: string,
        type: FILETYPE
    ) => void,
    handleFileSelect: (
        id: string,
        type: FILETYPE
    ) => void,
    selected: Selected[]
    type: FILETYPE
}

function FilesCard({
    data,
    handleFileClick,
    handleFileSelect,
    selected,
    type
}: Props) {
    return (
        <div style={{
        }}>
            <div style={{
                marginBlock: "16px 16px",
                fontSize: 14,
                color: '#1d1d1d',
            }}>
                {type}
            </div>

            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
                gap: 15,
            }}>
                {data?.map((e) => (
                    <div key={e.id}>
                        <FilesCardButton
                            type={type}
                            selected={selected}
                            handleFileClick={handleFileClick}
                            handleFileSelect={handleFileSelect}
                            file={e} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default FilesCard