import React, { useContext } from 'react'
import { FILETYPE, Selected } from './Viewer'
import {
    MdPersonAddAlt,
    MdOutlineFileDownload,
    MdDriveFileMoveOutline,
    MdLink,
    MdCheckBox,
    MdOutlineIndeterminateCheckBox
} from 'react-icons/md'
import {
    BsThreeDotsVertical,
} from 'react-icons/bs'
import { HiOutlineTrash } from 'react-icons/hi'
import IconButton from './IconButton'
import { MenuContext } from '@/context/MenuContext'
import { ResultContext } from '@/context/ResultsContext'

type Props = {
    selected: Selected[]
    toggleSelectAll: () => void
    allSelected: boolean
    clearSelected: () => void
}

function Editor({
    selected,
    allSelected,
    clearSelected,
    toggleSelectAll
}: Props) {
    const { handleDeleteFolder, handleDeleteFile } = useContext(MenuContext)
    const { results } = useContext(ResultContext)
    const editAction = (action: string) => {
        switch (action) {
            case "DELETE":
                selected.forEach((e) => {
                    if (e.type == FILETYPE.FOLDER) {
                        handleDeleteFolder(e.id)
                    } else {
                        handleDeleteFile(e.id, results.id)
                    }
                })
                clearSelected()
                break;
        }
    }

    return (
        <div style={{
            minHeight: '40px',
            display: 'flex',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '8px',
        }}>
            {!allSelected ?
                <IconButton icon={MdOutlineIndeterminateCheckBox} size={20} onClick={(e) => {
                    e.stopPropagation()
                    toggleSelectAll()
                }} color={"#1d1d1d"} />
                :
                <IconButton icon={MdCheckBox} size={20} color={"#1d1d1d"} />
            }
            <div style={{
                color: '#1d1d1d',
            }}>
                {selected.length} selected
            </div>
            {otherMenus.map((e, i) => {
                const Icon = e.icon

                if (i == 4 && selected.length > 1) {
                    return
                }
                return (
                    <span key={i} onClick={(element) => {
                        element.stopPropagation()
                        e.action && editAction(e.action)
                    }}>
                        <IconButton icon={Icon} size={20} color={"#1d1d1d"} />
                    </span>
                )
            })}
        </div >
    )
}

export default Editor

const otherMenus = [
    {
        icon: MdPersonAddAlt
    },
    {
        icon: MdOutlineFileDownload
    },
    {
        icon: MdDriveFileMoveOutline
    },
    {
        icon: HiOutlineTrash,
        action: "DELETE"
    },
    {
        icon: MdLink
    },
]
