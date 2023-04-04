import { File, FolderTree } from '@/types/TreeNodeType'
import React from 'react'
import { MdFolder, MdCheckBoxOutlineBlank, MdCheckBox } from 'react-icons/md'
import { FILETYPE, Selected } from '../Ui/Viewer'
import { ActionType } from '../Ui/CreateNewModal'
import { FcAddressBook, FcDataSheet, FcPicture, FcNews } from 'react-icons/fc'


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
                padding: "12px 16px",
                backgroundColor: "#F7F9FC",
                borderRadius: '0.75rem',
                display: 'flex',
                flexDirection: 'column',
                aspectRatio: type == FILETYPE.FILE ? 1 : "auto",
            }
            }>
            <div style={{
                display: 'flex',
                gap: 11,
                paddingBottom: type == FILETYPE.FILE ? "12px" : "0px",
            }}>
                {selecting || isSelected ?
                    <>
                        {
                            isSelected ? <MdCheckBox size={20} /> :
                                <MdCheckBoxOutlineBlank size={20} />
                        }

                    </>
                    : type == FILETYPE.FOLDER ? <MdFolder size={20} /> : <Icon size={20} />}
                <span style={{
                    fontSize: 15,
                }}>{file.name}</span>
            </div>


            {type == FILETYPE.FILE && <div style={{
                backgroundColor: '#fff',
                borderRadius: '0.3rem',
                width: '100%',
                flex: 1,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}>
                <Icon size={65} />
            </div>}
        </div >
    )
}

export default FilesCardButton