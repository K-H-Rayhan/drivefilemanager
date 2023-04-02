import { FolderTree } from '@/types/TreeNodeType'
import React from 'react'
import { IoMdArrowDropright } from 'react-icons/io'
import { SiGoogledrive } from 'react-icons/si'
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
        <div>
            <div
                style={{
                    marginLeft: depthLevel * 0,
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
                    {depthLevel == 0 ? <SiGoogledrive /> : <MdFolder />}
                </div>
                <Link href={route} style={{
                    all: 'unset'
                }}>
                    {storedFolderData.name}
                </Link>
            </div>
        </div>
    )
}

export default TreeMenuButton