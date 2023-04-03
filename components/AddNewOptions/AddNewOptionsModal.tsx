import React from 'react'
import { MdOutlineCreateNewFolder, MdUploadFile, MdOutlineKeyboardArrowRight, MdOutlineDriveFolderUpload } from 'react-icons/md'
import { FcAddressBook, FcDataSheet, FcPicture, FcNews } from 'react-icons/fc'
import AddNewOptionsButton from './AddNewOptionsButton'
import CreateNewModal, { ActionType } from '../Ui/CreateNewModal'

type Props = {
    open: boolean,
    handleClose: () => void,
    backdrop?: boolean
}
type OptionButtonProps = {
    name: string,
    icon?: React.FC<{ size: number }>
    action?: ActionType
}
function AddNewOptionsModal({
    open,
    handleClose,
    backdrop = false
}: Props) {
    const [actionType, setActionType] = React.useState<ActionType | null>(null)
    return (
        <>{open && <div
        >
            <div onClick={() => {
                handleClose()
            }}
                style={{
                    position: 'fixed',
                    top: '0',
                    left: '0',
                    width: '100%',
                    height: '100vh',
                    backgroundColor: backdrop ? 'rgba(0,0,0,.1)' : 'transparent',
                }}></div>
            <div
                onClick={(e) => {
                    e.stopPropagation()
                }}
                style={{
                    paddingBlock: '16px',
                    position: 'absolute',
                    top: '0',
                    left: '0',
                    zIndex: 1,
                    width: '320px',
                    height: '320px',
                    backgroundColor: '#fff',
                    borderRadius: '6px',
                    boxShadow: '0 2px 2px 0 rgba(60,64,67,.2), 0 1px 6px 2px rgba(60,64,67,.1)',
                    fontWeight: 500,
                    fontSize: '14px',
                    color: '#000',
                    userSelect: 'none',
                    overflow: 'hidden',
                    overflowY: 'auto',
                    cursor: 'pointer',
                }}>
                {
                    options.map((option, i) => {
                        return (
                            <div key={i} style={{
                                borderTop: i != 0 ? '1px solid #dadce0' : 'none',
                                paddingInline: '24px',
                                paddingBlock: '5px',
                            }}>
                                {
                                    option.map((item: OptionButtonProps, index) => {
                                        return (
                                            <AddNewOptionsButton
                                                index={index}
                                                item={item}
                                                i={i}
                                                handleClick={() => {
                                                    item.action && setActionType(item.action)
                                                }}
                                            />
                                        )
                                    })
                                }
                            </div>
                        )
                    })


                }
            </div>
        </div>}
            {actionType && <CreateNewModal action={actionType} handleClose={() => {
                setActionType(null);
                handleClose();
            }} />}
        </>
    )
}
export default AddNewOptionsModal

const options:
    {
        name: string,
        icon?: React.FC<{ size: number }>
        action?: ActionType
    }[][]
    = [
        [
            {
                name: "New folder",
                icon: MdOutlineCreateNewFolder,
                action: ActionType.CREATE_FOLDER
            }
        ],
        [
            {
                name: "File upload",
                icon: MdUploadFile
            },
            {
                name: "Folder upload",
                icon: MdOutlineDriveFolderUpload
            }
        ],
        [
            {
                name: "Gooogle Docs",
                icon: FcAddressBook,
                action: ActionType.CREATE_DOC
            },
            {
                name: "Gooogle Sheets",
                icon: FcDataSheet,
                action: ActionType.CREATE_SHEET
            },
            {
                name: "Gooogle Slides",
                icon: FcPicture,
                action: ActionType.CREATE_SLIDE
            },
            {
                name: "Gooogle Forms",
                icon: FcNews,
                action: ActionType.CREATE_FORM
            },
            {
                name: "More"
            },
        ],
    ]