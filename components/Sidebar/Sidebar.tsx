import useHandleTree from '@/hooks/useHandleTree'
import React from 'react'
import { BsTrash, BsPeople, BsStar } from 'react-icons/bs'
import { BiTimeFive } from 'react-icons/bi'
import { AiOutlineCloud } from 'react-icons/ai'
import { GrPersonalComputer } from 'react-icons/gr'
import TreeMenu from './TreeMenu'
import { FolderTree } from '@/types/TreeNodeType'
import AddNewButton from './AddNewButton'
import OtherMenus from './OtherMenus'
import ShowStorageStat from './ShowStorageStat'

type Props = {}

function Sidebar({ }: Props) {
    const { storedFolderData, handleAddFolder, handleDeleteFolder, handleEditFolder } = useHandleTree()
    return (
        <div style={{
            minWidth: '257px',
            height: '100vh',
            paddingLeft: '10px',
        }}>
            <AddNewButton />
            {storedFolderData.map((e: FolderTree) => <TreeMenu storedFolderData={e} depthLevel={0} route={e.slug} key={e.id} />)}
            <div style={{
                marginLeft: '10px',
                gap: '15px',
                display: 'flex',
                flexDirection: 'column',
            }}>
                {otherMenus.map((e, i) => <OtherMenus icon={e.icon} name={e.name} showarrow={i == 0 && true} key={e.name} />)}
                <ShowStorageStat />
            </div>
        </div>
    )
}

export default Sidebar

const otherMenus = [
    {
        name: "Computers",
        icon: GrPersonalComputer,
    },
    {
        name: "Shared with me",
        icon: BsPeople,
    },
    {
        name: "Recent",
        icon: BiTimeFive,
    },
    {
        name: "Starred",
        icon: BsStar,
    },
    {
        name: "Trash",
        icon: BsTrash,
    },
    {
        name: "Storage",
        icon: AiOutlineCloud,
    },
]