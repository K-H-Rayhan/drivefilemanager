import { ResultContext } from '@/context/ResultsContext'
import React, { useContext } from 'react'
import Folders from './Folders'
import Files from './Files'
import { MenuContext } from '@/context/MenuContext'

type Props = {}

function Viewer({ }: Props) {
    const { storedFolderData } = useContext(MenuContext)
    const { results } = useContext(ResultContext);

    return (
        <div key={storedFolderData[0] as any}>
            {results?.children?.length > 0 && <Folders folders={results?.children} />}
            {results?.files && results?.files?.length > 0 && <Files data={results.files} />}
        </div>
    )
}

export default Viewer