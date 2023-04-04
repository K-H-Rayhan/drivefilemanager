import { File, FolderTree } from '@/types/TreeNodeType'
import React, { useContext } from 'react'
import { MdFolder, MdCheckBoxOutlineBlank, MdCheckBox } from 'react-icons/md'
import { FILETYPE, Selected } from '../Ui/Viewer'
import CreateNewModal, { ActionType } from '../Ui/CreateNewModal'
import { FcAddressBook, FcDataSheet, FcPicture, FcNews } from 'react-icons/fc'
import { BsThreeDotsVertical } from 'react-icons/bs'
import IconButton from '../Ui/IconButton'
import FolderOptions from '../Ui/FolderOptions'
import { MenuContext } from '@/context/MenuContext'
import { ResultContext } from '@/context/ResultsContext'


type Props = {
    file: File | FolderTree
    handleFileClick: (id: string, type: FILETYPE) => void
    handleFileSelect: (id: string, type: FILETYPE) => void
    selected: Selected[]
    type: FILETYPE
}

function FilesCardButton({
    file,
    handleFileClick,
    handleFileSelect,
    selected,
    type
}: Props) {
    const [selecting, setSelecting] = React.useState(false)
    const isSelected = selected.some((e) => e.id === file.id)
    const [openFolderOptions, setOpenFolderOptions] = React.useState(false)
    const { handleDeleteFolder, handleDeleteFile } = useContext(MenuContext)
    const { results } = useContext(ResultContext)
    const [actionType, setActionType] = React.useState<ActionType | null>(null)

    const getIcon = (type: ActionType) => {
        switch (type) {
            case ActionType.CREATE_DOC:
                return FcAddressBook
            case ActionType.CREATE_SHEET:
                return FcDataSheet
            case ActionType.CREATE_SLIDE:
                return FcPicture
            case ActionType.CREATE_FORM:
                return FcNews
            default:
                return MdFolder
        }
    }
    const Icon = getIcon((file as any).type)

    return (
        <div
            onMouseEnter={() => setSelecting(true)}
            onMouseLeave={() => setSelecting(false)}
            onClick={(e) => {
                e.stopPropagation()
                handleFileClick(file.id, type)
            }}
            style={{
                backgroundColor: isSelected ? "#C2E7FF" : selecting ? "#E1E5E9" : "#F7F9FC",
                borderRadius: '0.75rem',
                display: 'flex',
                flexDirection: 'column',
                aspectRatio: type == FILETYPE.FILE ? 1 : "auto",
            }
            }>
            <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: "space-between",
                padding: '4px 12px',
                gap: 8
            }}>
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                }}>
                    <div
                        style={{
                            paddingRight: '5px'
                        }}
                        onClick={(e) => {
                            e.stopPropagation()
                            handleFileSelect(file.id, type)
                        }}
                    >
                        {selecting || isSelected ?
                            <>
                                {
                                    isSelected ?
                                        <IconButton icon={MdCheckBox} size={20} />
                                        :
                                        <IconButton icon={MdCheckBoxOutlineBlank} size={20} />
                                }
                            </>
                            : type == FILETYPE.FOLDER ? <IconButton icon={MdFolder} size={20} /> : <IconButton icon={Icon} size={20} />}
                    </div>
                    <span style={{
                        fontSize: 15,
                        whiteSpace: 'nowrap',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        display: 'block',
                        width: '84px',
                        cursor: 'default'
                    }}>{file.name}</span>
                </div>
                <FolderOptions openFolderOptions={openFolderOptions}
                    handleRemove={() => {
                        if ((file as File).type) {
                            handleDeleteFile(file.id, results.id)
                        } else {
                            handleDeleteFolder(file.id)
                        }
                    }}
                    handleRename={() => {
                        if ((file as File).type) {
                            setActionType(ActionType.EDIT_FILE)
                        } else {
                            setActionType(ActionType.EDIT_FOLDER)
                        }
                    }}
                    handleFolderOptions={() => {
                        if (selected.length < 2) {
                            setSelecting(false)
                            setOpenFolderOptions(!openFolderOptions)
                        }
                    }}>
                    <IconButton icon={BsThreeDotsVertical} size={16} color={selected.length > 1 ? "#1d1d1d5f" : "#1d1d1d"} />
                </FolderOptions>
            </div>
            {type == FILETYPE.FILE && <div style={{
                flex: 1,
                padding: '0px 9px 9px 9px',
            }}>
                <div style={{
                    backgroundColor: '#fff',
                    borderRadius: '0.3rem',
                    display: 'flex',
                    alignItems: 'center',
                    height: '100%',
                    justifyContent: 'center',
                }}>
                    <Icon size={65} />
                </div>
            </div>}

            {actionType && <CreateNewModal
                edit={true}
                file={file}
                action={actionType} handleClose={() => {
                    setActionType(null);
                }} />}
        </div >
    )
}

export default FilesCardButton