import { FolderTree } from '@/types/TreeNodeType'
import React from 'react'
import FolderButton from './FolderButton'

type Props = {
    data: FolderTree
}

function Files({
    data
}: Props) {
    return (
        <div style={{
        }}>
            <div style={{
                marginBlock: 10,
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
                {data?.files?.map(e => (

                    <div key={e.id}>
                        {e.name}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Files