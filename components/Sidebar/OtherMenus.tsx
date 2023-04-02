import React from 'react'
import { IoMdArrowDropright } from 'react-icons/io'

type Props = {
    icon: React.FC<{ size: number }>,
    name: string,
    size?: number,
    showarrow?: boolean,
}

function OtherMenus({
    icon,
    name,
    size = 18,
    showarrow = true,
}: Props) {
    const Icon = icon

    return (
        <div
            style={{
                display: 'flex',
                alignItems: 'center',
                color: '#000',
            }}
        >
            {showarrow && <IoMdArrowDropright style={{
            }} />}
            <div style={{
                paddingRight: "14px",
                display: 'flex',
                alignItems: 'center',
                marginLeft: showarrow ? '0px' : '14px',
            }}>
                <Icon size={size} />
            </div>
            <span style={{
                fontSize: '13px',
            }}>
                {name}
            </span>
        </div>
    )
}

export default OtherMenus