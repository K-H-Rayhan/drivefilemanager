import { ResultContext } from '@/context/ResultsContext'
import React, { useContext, useEffect, useState } from 'react'
import Folders from './Folders'
import Files from './Files'
import { MenuContext } from '@/context/MenuContext'
import BreadCrumb from '../Layout/BreadCrumb'
import { useRouter } from 'next/router'
import Error from 'next/error'
import EmptyDirectory from './EmptyDirectory'
import { FolderTree } from '@/types/TreeNodeType'
type Props = {}

function Viewer({ }: Props) {
    const [selected, setSelected] = useState<FolderTree[] & File[]>([])
    const [loading, setLoading] = useState<boolean>(true)
    const { storedFolderData } = useContext(MenuContext)
    const { results } = useContext(ResultContext);

    useEffect(() => {
        setLoading(false)
    }, [])


    const handleFolderClick = (id: string) => {

    }
    const handleFolderSelect = (id: string) => {

    }
    const handleFileClick = (id: string) => {

    }
    const handleFileSelect = (id: string) => {

    }

    return (
        <div key={storedFolderData[0] as any} style={{
            height: '100%',
        }}>
            {results.id ? <>
                <>{selected.length > 0 ? <></> : <BreadCrumb />}</>
                {results?.children?.length > 0 && <Folders folders={results?.children}
                    handleFolderClick={handleFolderClick}
                    handleFolderSelect={handleFolderSelect}
                />}
                {results?.files && results?.files?.length > 0 && <Files data={results.files}
                    handleFileClick={handleFileClick}
                    handleFileSelect={handleFileSelect}
                />}
                {results?.children?.length < 1 && (!results?.files || results?.files?.length < 1) && <EmptyDirectory />}
            </> : <>
                {/* To suppress suppressHydrationWarning */}
                {!loading && <Error statusCode={404} />}
            </>}
        </div>
    )
}

export default Viewer