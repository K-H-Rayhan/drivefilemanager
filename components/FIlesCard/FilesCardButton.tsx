import { File, FolderTree } from '@/types/TreeNodeType'
import React from 'react'
import { MdFolder, MdCheckBoxOutlineBlank, MdCheckBox } from 'react-icons/md'
import { FILETYPE, Selected } from '../Ui/Viewer'
import { ActionType } from '../Ui/CreateNewModal'
import { FcAddressBook, FcDataSheet, FcPicture, FcNews } from 'react-icons/fc'
import { BsThreeDotsVertical } from 'react-icons/bs'
import IconButton from '../Ui/IconButton'


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
    const Icon = getIcon((file as File).type)

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
                    }}>{file.name}</span>
                </div>
                <IconButton icon={BsThreeDotsVertical} size={20} />
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
        </div >
    )
}

export default FilesCardButton