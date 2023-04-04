import React, { useState } from 'react'
import {
    MdOutlineKeyboardArrowRight,
    MdPersonAddAlt,
    MdLink,
    MdDriveFileMoveOutline,
    MdAddToDrive,
    MdDriveFileRenameOutline,
    MdOutlineColorLens,
    MdOutlineSearch,
    MdInfoOutline,
    MdOutlineFileDownload,
    MdStarOutline
} from 'react-icons/md'
import { RxMove } from 'react-icons/rx'
import { HiOutlineTrash } from 'react-icons/hi'

type Props = {
    children: React.ReactNode
    openFolderOptions: boolean
    handleFolderOptions: () => void
    handleRemove: () => void
    handleRename: () => void
}

function FolderOptions({
    children,
    openFolderOptions,
    handleFolderOptions,
    handleRemove,
    handleRename
}: Props) {
    const modalPos = React.useRef<HTMLDivElement>(null)
    // get modalpos from screen
    const [openFromLeft, setOpenFromLeft] = useState(false);

    const folderOptionAction = (action: string) => {
        switch (action) {
            case 'RENAME':
                handleRename()
                break;
            case 'REMOVE':
                handleRemove()
                break;
        }
    }

    return (
        <div
            onClick={(e) => {
                e.stopPropagation()
                handleFolderOptions()
                const left = modalPos?.current?.getBoundingClientRect().left || 0;
                const right = modalPos?.current?.getBoundingClientRect().right || 0;
                const viewportWidth = window.innerWidth || document.documentElement.clientWidth;
                if (viewportWidth - right < left) {
                    setOpenFromLeft(true);
                } else {
                    setOpenFromLeft(false);
                }

            }}
            ref={modalPos}
            style={{
                position: 'relative',
            }}>
            {children}
            <>
                {openFolderOptions && <div
                >
                    <div onClick={() => {
                        handleFolderOptions()
                    }}
                        style={{
                            position: 'fixed',
                            top: '0',
                            left: '0',
                            width: '100%',
                            height: '100vh',
                            backgroundColor: 'transparent',
                            zIndex: 1,
                        }}></div>
                    <div
                        onClick={(e) => {
                            e.stopPropagation()
                        }}
                        style={{
                            paddingBlock: '8px',
                            position: 'absolute',
                            top: '100%',
                            right: openFromLeft ? '0' : 'auto',
                            left: openFromLeft ? 'auto' : '0',
                            zIndex: 1,
                            width: '320px',
                            backgroundColor: '#fff',
                            borderRadius: '6px',
                            boxShadow: '0 2px 2px 0 rgba(60,64,67,.2), 0 1px 6px 2px rgba(60,64,67,.1)',
                            fontWeight: 500,
                            fontSize: '14px',
                            color: '#000',
                            userSelect: 'none',
                            cursor: 'pointer',
                        }}>
                        {
                            options.map((e, i) => {
                                return (
                                    <div
                                        style={{
                                            display: 'flex',
                                            flexDirection: 'column',
                                            padding: '5px 20px',
                                            borderBottom: i != (options.length - 1) ? '1px solid #e8eaed' : "",
                                        }}
                                    >
                                        {e.map((item, index) => {
                                            return (
                                                <div
                                                    onClick={() => {
                                                        item.action && folderOptionAction(item.action)
                                                    }}
                                                    style={{
                                                        display: 'flex',
                                                        justifyContent: 'space-between',
                                                        alignItems: 'center',
                                                        width: '100%',
                                                        backgroundColor: '#fff',
                                                        borderRadius: '15px',
                                                        height: "32px"
                                                    }}>
                                                    <div style={{
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                    }}>
                                                        <div style={{
                                                            width: '20px',
                                                            height: '20px',
                                                            display: 'flex',
                                                            alignItems: 'center',
                                                        }}>
                                                            {item.icon && <item.icon size={20} />}
                                                        </div>
                                                        <div style={{
                                                            marginLeft: '12px',
                                                            fontSize: '13px',
                                                            fontWeight: 400,

                                                        }}>{item.name}</div>
                                                    </div>
                                                    {
                                                        item.arrow && <div style={{
                                                            display: "flex",
                                                            alignItems: 'center'
                                                        }}>
                                                            <MdOutlineKeyboardArrowRight size={20} color={"#1d1d1d9f"} />
                                                        </div>
                                                    }
                                                </div>
                                            )
                                        })}
                                    </div>
                                )
                            })}


                    </div>
                </div>}

            </>
        </div>
    )
}

export default FolderOptions






const options = [
    [
        {
            name: "Open with",
            arrow: true,
            icon: RxMove
        }
    ],
    [
        {
            name: "Share",
            arrow: false,
            icon: MdPersonAddAlt
        },
        {
            name: "Get a link",
            arrow: false,
            icon: MdLink
        },
        {
            name: "Add shortcut to drive",
            arrow: false,
            icon: MdStarOutline
        },
        {
            name: "Move to",
            arrow: false,
            icon: MdDriveFileMoveOutline
        },
        {
            name: "Add to starred",
            arrow: false,
            icon: MdAddToDrive
        },
        {
            name: "Rename",
            arrow: false,
            icon: MdDriveFileRenameOutline,
            action: "RENAME"
        },
        {
            name: "Change color",
            arrow: true,
            icon: MdOutlineColorLens
        },
        {
            name: "Search within All commands",
            arrow: false,
            icon: MdOutlineSearch
        },


    ],
    [
        {
            name: "View details",
            arrow: false,
            icon: MdInfoOutline
        },
        {
            name: "Download",
            arrow: false,
            icon: MdOutlineFileDownload
        },
    ],
    [
        {
            name: "Remove",
            arrow: false,
            icon: HiOutlineTrash,
            action: "REMOVE"
        },
    ]
]