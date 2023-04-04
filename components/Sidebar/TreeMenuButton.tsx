import { FolderTree } from '@/types/TreeNodeType'
import React, { useContext } from 'react'
import { IoMdArrowDropright } from 'react-icons/io'
import { FiHardDrive } from 'react-icons/fi'
import { MdFolder } from 'react-icons/md'
import Link from 'next/link'
import { ResultContext } from '@/context/ResultsContext'
import { useRouter } from 'next/router'
import styles from '../../styles/Base.module.scss'

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
            className={styles.TreeMenuButton}
            style={{
                backgroundColor: ((results?.id == storedFolderData.id) && (router.asPath != "/")) || (router.asPath == "/" && storedFolderData.id == "root") ? '#C2E7FF' : 'unset',
                padding: depthLevel > 0 ? '7px 20px' : '10px 10px',
            }}
        >
            <div className={styles.TreeMenuButtonToggleIcon}>
                {open ? <IoMdArrowDropright
                    color={"#444746"}
                    style={{
                        transform: 'rotate(90deg)'
                    }} onClick={() => {
                        toggleOpen()
                    }} /> :
                    <IoMdArrowDropright
                        color={"#444746"}
                        onClick={() => {
                            toggleOpen()
                        }} />}
            </div>
            <Link href={route == "" ? "/" : route}
                className={styles.treeMenuButtonLink}
            >
                {depthLevel == 0 ? <FiHardDrive size={18} /> : <MdFolder size={20} color={"#444746"} />}
                {storedFolderData.name}
            </Link>
        </div>
    )
}

export default TreeMenuButton