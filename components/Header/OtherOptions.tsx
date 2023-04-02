import React from 'react'
import { MdOutlineSettings, MdOutlineOfflinePin } from 'react-icons/md'
import { IoApps } from 'react-icons/io5'
import { AiOutlineQuestionCircle } from 'react-icons/ai'
import { CgProfile } from 'react-icons/cg'
import IconButton from '../Ui/IconButton'

type Props = {}

function OtherOptions({ }: Props) {
    return (
        <div style={{
            marginLeft: 'auto',
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
        }}>
            <IconButton icon={MdOutlineOfflinePin} />
            <IconButton icon={AiOutlineQuestionCircle} size={23} />
            <IconButton icon={MdOutlineSettings} />
            <IconButton icon={IoApps} size={20} />
            <IconButton icon={CgProfile} />
        </div>
    )
}

export default OtherOptions