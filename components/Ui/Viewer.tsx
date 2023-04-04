import { ResultContext } from '@/context/ResultsContext'
import React, { useContext, useEffect, useState } from 'react'
import { MenuContext } from '@/context/MenuContext'
import BreadCrumb from '../Layout/BreadCrumb'
import { useRouter } from 'next/router'
import Error from 'next/error'
import EmptyDirectory from './EmptyDirectory'
import { FolderTree } from '@/types/TreeNodeType'
import { FaListAlt } from 'react-icons/fa'
import { MdInfoOutline } from 'react-icons/md'
import IconButton from '../Ui/IconButton'
import FilesCard from '../FIlesCard/FilesCard'
import Editor from './Editor'
import styles from '../../styles/Base.module.scss'
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
    const allSelected = selected.length == (results?.children?.length + (results?.files ? results?.files?.length : 0))
    useEffect(() => {
        setLoading(false)
    }, [])

    useEffect(() => {
        setSelected([])
    }, [results])
    const clearSelected = () => {
        setSelected([])
    }

    const handleFileClick = (id: string, type: FILETYPE) => {
        setSelected([{
            id,
            type
        }])
    }
    const handleFileSelect = (id: string, type: FILETYPE, selecting = false) => {
        if (!selected.some(e => e.id === id) || selecting) {
            setSelected((selected) => [...selected, {
                id,
                type
            }])
        } else {
            setSelected(() => selected.filter(e => e.id !== id))
        }
    }

    const toggleSelectAll = () => {
        if (allSelected) {
            return setSelected([])
        }
        results?.children?.length > 0 && results?.children?.forEach((element) => {
            !selected.some(e => e.id === element.id) && handleFileSelect(element.id, FILETYPE.FOLDER, true)
        })
        results?.files && results?.files?.length > 0 && results?.files?.forEach((element) => {
            !selected.some(e => e.id === element.id) && handleFileSelect(element.id, FILETYPE.FILE, true)
        })
    }
    return (
        <div
            className={styles.viewer}
            onClick={clearSelected}
            key={storedFolderData[0] as any} style={{
                flex: 1,
            }}>
            {results.id ? <>
                <>
                    <div className={styles.viewerAlign}>
                        {selected.length > 0 ? <>
                            <Editor
                                clearSelected={clearSelected}
                                selected={selected}
                                allSelected={allSelected}
                                toggleSelectAll={toggleSelectAll}
                            />
                        </> : <BreadCrumb />}
                        <div
                            className={styles.viewerBreadCrumbRightIcon}
                        >
                            <IconButton icon={FaListAlt} size={15} />
                            <IconButton icon={MdInfoOutline} size={22} />
                        </div>
                    </div>
                </>
                <div className={styles.viewerGrid}>
                    {results?.children?.length > 0 &&
                        <FilesCard
                            type={FILETYPE.FOLDER}
                            selected={selected}
                            data={results?.children}
                            handleFileClick={handleFileClick}
                            handleFileSelect={handleFileSelect}
                        />}
                    {results?.files && results?.files?.length > 0 &&
                        <FilesCard
                            type={FILETYPE.FILE}
                            selected={selected}
                            data={results.files}
                            handleFileClick={handleFileClick}
                            handleFileSelect={handleFileSelect}
                        />}
                    {results?.children?.length < 1 && (!results?.files || results?.files?.length < 1) && <EmptyDirectory />}
                </div>
            </>

                : <>
                    {/* To suppress hydration warning */}
                    {!loading && <Error statusCode={404} />}
                </>}
        </div>
    )
}

export default Viewer