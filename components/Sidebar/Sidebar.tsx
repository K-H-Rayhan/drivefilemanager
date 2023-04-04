import React, { useContext } from 'react'
import { BsTrash, BsPeople, BsStar } from 'react-icons/bs'
import { BiTimeFive } from 'react-icons/bi'
import { AiOutlineCloud } from 'react-icons/ai'
import { HiOutlineComputerDesktop } from 'react-icons/hi2'
import TreeMenu from './TreeMenu'
import { FolderTree } from '@/types/TreeNodeType'
import AddNewButton from './AddNewButton'
import OtherMenus from './OtherMenus'
import ShowStorageStat from './ShowStorageStat'
import { MenuContext } from '@/context/MenuContext'

type Props = {}

function Sidebar({ }: Props) {
    const { storedFolderData } = useContext(MenuContext)

    return (
        <div style={{
            width: '257px',
            height: '100vh',
            paddingInline: '10px',
            color: '#000',
        }}>
            <AddNewButton />
            {storedFolderData?.map((e: FolderTree) => <TreeMenu storedFolderData={e} depthLevel={0} route={e.slug} key={e.id} />)}
            <div style={{
                marginLeft: '10px',
                marginTop: '10px',
                gap: '15px',
                display: 'flex',
                flexDirection: 'column',
            }}>
                {otherMenus?.map((e, i) => <OtherMenus icon={e.icon} name={e.name} showarrow={i == 0 && true} key={e.name} />)}
                <ShowStorageStat />
            </div>
        </div>
    )
}

export default Sidebar

const otherMenus = [
    {
        name: "Computers",
        icon: HiOutlineComputerDesktop,
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