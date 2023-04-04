import React, { HTMLAttributes } from 'react'

type Props = {
    icon: React.FC<{ size: number }>,
    size?: number,
    otherProps?: HTMLAttributes<HTMLDivElement>,
    color?: string,
    onClick?: (e: any) => void,
}

function IconButton({ icon, size = 24, ...otherProps }: Props) {
    const Icon = icon
    return (
        <div
            style={{
                height: '40px',
                width: '40px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: '50%',
                // backgroundColor: '#adf2fc',
                cursor: 'pointer',
            }}><Icon size={size}  {
                ...otherProps
            } /></div>
    )
}

export default IconButton