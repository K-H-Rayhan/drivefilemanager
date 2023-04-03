import { File } from '@/types/TreeNodeType'
import React from 'react'
import { MdFolder } from 'react-icons/md'
import { ActionType } from './CreateNewModal'
import { FcAddressBook, FcDataSheet, FcPicture, FcNews } from 'react-icons/fc'

type Props = {
    file: File
}

function FileButton({
    file
}: Props) {

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
    const Icon = getIcon(file.type)
    return (
        <div style={{
            padding: "12px 16px",
            backgroundColor: "#F7F9FC",
            borderRadius: '0.75rem',
            display: 'flex',
            flexDirection: 'column',
            aspectRatio: 1,
        }}>
            <div style={{
                display: 'flex',
                gap: 11,
                paddingBottom: "12px",
            }}>
                <Icon size={20} />
                <span style={{
                    fontSize: 15,
                }}>{file.name}</span>
            </div>
            <div style={{
                backgroundColor: '#fff',
                borderRadius: '0.3rem',
                width: '100%',
                flex: 1,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}>
                <Icon size={65} />
            </div>
        </div>
    )
}

export default FileButton