import { ResultContext } from '@/context/ResultsContext'
import React, { useContext } from 'react'
import Folders from './Folders'
import Files from './Files'
import { MenuContext } from '@/context/MenuContext'
import BreadCrumb from '../Layout/BreadCrumb'
import { useRouter } from 'next/router'
import Error from 'next/error'
import EmptyDirectory from './EmptyDirectory'
type Props = {}

function Viewer({ }: Props) {
    const { storedFolderData } = useContext(MenuContext)
    const { results } = useContext(ResultContext);
    const router = useRouter();

    return (
        <div key={storedFolderData[0] as any} style={{
            height: '100%',
        }}>
            {results.id ? <>
                <BreadCrumb />
                {results?.children?.length > 0 && <Folders folders={results?.children} />}
                {results?.files && results?.files?.length > 0 && <Files data={results.files} />}
                {results?.children?.length < 1 && (!results?.files || results?.files?.length < 1) && <EmptyDirectory />}
            </> : <>
                {router.isReady && <Error statusCode={404} />}
            </>}
        </div>
    )
}

export default Viewer