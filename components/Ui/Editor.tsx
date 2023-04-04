import React from 'react'
import { Selected } from './Viewer'
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

type Props = {
    selected: Selected[]
    toggleSelectAll: () => void
    allSelected: boolean
}

function Editor({
    selected,
    allSelected,
    toggleSelectAll
}: Props) {
    return (
        <div style={{
            minHeight: '40px',
            display: 'flex',
            alignItems: 'center',
            gap: '24px',
        }}>
            {!allSelected ?
                <MdOutlineIndeterminateCheckBox size={20} color={"#1d1d1d"} onClick={(e) => {
                    e.stopPropagation()
                    toggleSelectAll()
                }} />
                :
                <MdCheckBox size={20} color={"#1d1d1d"} />
            }
            <div style={{
                color: '#1d1d1d',
            }}>
                {selected.length} selected
            </div>
            {otherMenus.map((e, i) => {
                const Icon = e.icon
                return (
                    <div key={i}>
                        <Icon size={20} color={"#1d1d1d"} />
                    </div>
                )
            })}
        </div>
    )
}

export default Editor

// MdPersonAddAlt
// MdOutlineFileDownload
// MdDriveFileMoveOutline

// BsTrash
// MdLink
// BsThreeDotsVertical

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
    {
        icon: BsThreeDotsVertical,
        action: "OPEN_MENU"
    },
]
