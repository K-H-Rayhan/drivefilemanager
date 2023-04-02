import { FolderTree } from '@/types/TreeNodeType'
import React, { useContext } from 'react'
import { IoMdArrowDropright } from 'react-icons/io'
import { FiHardDrive } from 'react-icons/fi'
import { MdFolder } from 'react-icons/md'
import Link from 'next/link'
import { ResultContext } from '@/context/ResultsContext'
import { useRouter } from 'next/router'

type Props = {
    open: boolean,
    toggleOpen: () => void,
    depthLevel: number,
    storedFolderData: FolderTree,
    route: string,
    router: any
}

function TreeMenuButton({ open, toggleOpen, route, router, depthLevel, storedFolderData
}: Props) {
    const { results } = useContext(ResultContext)

    return (
        <div
            style={{
                display: 'flex',
                alignItems: 'center',
                backgroundColor: ((results?.id == storedFolderData.id) && (router.asPath != "/")) || (router.asPath == "/" && storedFolderData.id == "root") ? '#C2E7FF' : 'unset',
                padding: depthLevel > 0 ? '7px 20px' : '10px 10px',
                borderRadius: '1.5rem',
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
            <Link href={route == "" ? "/" : route} style={{
                all: 'unset',
                cursor: 'pointer',
                fontSize: '13px',
                gap: "12px",
                display: 'flex',
                alignItems: 'center',
            }}>

                {depthLevel == 0 ? <FiHardDrive size={18} /> : <MdFolder size={20} />}
                {storedFolderData.name}
            </Link>
        </div>
    )
}

export default TreeMenuButton