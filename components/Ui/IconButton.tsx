import React, { HTMLAttributes } from 'react'
import styles from '../../styles/Base.module.scss'

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
        <div className={styles.iconButton} style={{
            // borderRadius: "50%",
            // height: "40px",
            // width: "40px",
            // display: "flex",
            // alignItems: "center",
            // justifyContent: "center",
        }}>
            <Icon size={size}  {
                ...otherProps
            } />
        </div>
    )
}

export default IconButton