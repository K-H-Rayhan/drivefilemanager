import React from 'react'

type Props = {
    icon: React.FC<{ size: number }>,
    size?: number,
}

function IconButton({ icon, size = 24 }: Props) {
    const Icon = icon
    return (
        <div style={{
            height: '40px',
            width: '40px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: '50%',
            // backgroundColor: '#adf2fc',
            cursor: 'pointer',
        }}><Icon size={size} /></div>
    )
}

export default IconButton