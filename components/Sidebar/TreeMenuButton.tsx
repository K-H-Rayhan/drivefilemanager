import { FolderTree } from '@/types/TreeNodeType'
import React from 'react'
import { IoMdArrowDropright } from 'react-icons/io'
import { FiHardDrive } from 'react-icons/fi'
import { MdFolder } from 'react-icons/md'
import Link from 'next/link'

type Props = {
    open: boolean,
    toggleOpen: () => void,
    depthLevel: number,
    storedFolderData: FolderTree,
    route: string,
}

function TreeMenuButton({ open, toggleOpen, route, depthLevel, storedFolderData
}: Props) {
    return (
        <div
            style={{
                display: 'flex',
                alignItems: 'center',
            }}
        >
            {open ? <IoMdArrowDropright style={{
                transform: 'rotate(90deg)'
            }} onClick={() => {
                toggleOpen()
            }} /> :
                <IoMdArrowDropright onClick={() => {
                    toggleOpen()
                }} />}
            <div style={{
                paddingRight: "14px",
                display: 'flex',
                alignItems: 'center',
            }}>
                {depthLevel == 0 ? <FiHardDrive size={18} /> : <MdFolder />}
            </div>
            <Link href={route == "" ? "/" : route} style={{
                all: 'unset',
                cursor: 'pointer',
            }}>
                {storedFolderData.name}
            </Link>
        </div>
    )
}

export default TreeMenuButton