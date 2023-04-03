import Image from 'next/image'
import React from 'react'
import {
    FcAddressBook,
    FcDataSheet,
    FcPicture,
    FcNews,
    FcAudioFile,
    FcNook
} from 'react-icons/fc'
type Props = {}

function EmptyDirectory({ }: Props) {
    return (
        <div style={{
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            marginTop: "10%",
            gap: 13
        }}>

            <div style={{
                fontSize: 32,
                color: "#1F1F1F"
            }}>A place for all of your files</div>
            <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: 20,
                color: '#1F1F1F'
            }}>
                <div>
                    <div>Google Docs, Sheets, Slides, and more</div>
                    <div style={{
                        float: 'right',
                        display: 'flex',
                        gap: 10,
                        marginTop: 10
                    }}>{leftIcons.map((e, i) => {
                        const Icon = e.icon
                        return <Icon key={i} size={20} />
                    })}</div>
                </div>
                <img src="https://ssl.gstatic.com/docs/doclist/images/empty_state_my_drive.png" width={96} height={96} />
                <div>
                    <div>Microsoft Office files and hundreds more</div>

                    <div style={{
                        float: 'left',
                        display: 'flex',
                        gap: 10,
                        marginTop: 10
                    }}>{rightIcons.map((e, i) => {
                        const Icon = e.icon
                        return <Icon key={i} size={20} />
                    })}</div>
                </div>
            </div>
            <div style={{
                fontSize: 13,
            }}>Drag files and folders here to add them to Drive</div>
        </div>
    )
}

export default EmptyDirectory

const leftIcons = [
    {
        icon: FcAddressBook
    },
    {
        icon: FcDataSheet
    },
    {
        icon: FcPicture
    },
]
const rightIcons = [
    {
        icon: FcNews
    },
    {
        icon: FcAudioFile
    },
    {
        icon: FcNook
    },
]

