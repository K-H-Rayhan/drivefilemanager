import useHandleTree from '@/hooks/useHandleTree';
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'

type Props = {
}

function Index({ }: Props) {
    const [folders, setFolders] = React.useState([]);
    const [files, setFiles] = React.useState([]);
    const { storedFolderData } = useHandleTree()
    const router = useRouter()
    console.log();

    for (let i = 0; i < router.asPath.split('/').length; i++) {
        if (router.asPath.split('/')[i] == 'files') {
            return (
                <div>Index</div>
            )
        }
    }

    return (
        <div>Index</div>
    )
}

export default Index
