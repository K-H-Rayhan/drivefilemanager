import { ResultContext } from '@/context/ResultsContext'
import React, { useContext, useEffect, useState } from 'react'
import { MenuContext } from '@/context/MenuContext'
import BreadCrumb from '../Layout/BreadCrumb'
import { useRouter } from 'next/router'
import Error from 'next/error'
import EmptyDirectory from './EmptyDirectory'
import { FolderTree } from '@/types/TreeNodeType'
import FilesCard from '../FIlesCard/FilesCard'
type Props = {}
export enum FILETYPE {
    FOLDER = "Folder",
    FILE = "File"
}
export type Selected = {
    id: string,
    type: string
}
function Viewer({ }: Props) {
    const [selected, setSelected] = useState<Selected[]>([])
    const [loading, setLoading] = useState<boolean>(true)
    const { storedFolderData } = useContext(MenuContext)
    const { results } = useContext(ResultContext);

    useEffect(() => {
        setLoading(false)
    }, [])

    const clearSelected = () => {
        setSelected([])
    }

    // const handleFolderClick = (id: string) => {
    //     setSelected([id])
    // }
    // const handleFolderSelect = (id: string) => {
    //     setSelected(() => [...selected, id])
    // }
    const handleFileClick = (id: string, type: FILETYPE) => {
        setSelected([{
            id,
            type
        }])
        // setSelected([id])
    }
    const handleFileSelect = (id: string, type: FILETYPE) => {
        // setSelected(() => [...selected, id])
    }

    return (
        <div
            onClick={clearSelected}
            key={storedFolderData[0] as any} style={{
                height: '100%',
            }}>
            {results.id ? <>
                <>{selected.length > 0 ? <></> : <BreadCrumb />}</>
                {results?.children?.length > 0 && <FilesCard
                    type={FILETYPE.FOLDER}
                    selected={selected}
                    data={results?.children}
                    handleFileClick={handleFileClick}
                    handleFileSelect={handleFileSelect}
                />}
                {results?.files && results?.files?.length > 0 && <FilesCard
                    type={FILETYPE.FILE}
                    selected={selected}
                    data={results.files}
                    handleFileClick={handleFileClick}
                    handleFileSelect={handleFileSelect}
                />}
                {results?.children?.length < 1 && (!results?.files || results?.files?.length < 1) && <EmptyDirectory />}
            </> : <>
                {/* To suppress hydration warning */}
                {!loading && <Error statusCode={404} />}
            </>}
        </div>
    )
}

export default Viewer