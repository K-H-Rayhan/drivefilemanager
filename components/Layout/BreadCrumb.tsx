import { useRouter } from 'next/router'
import React from 'react'

type Props = {}

function capitalizeFirstLetter(string: string) {
    return (string.charAt(0).toUpperCase() + string.slice(1)).replace("-", " ");
}

function BreadCrumb({ }: Props) {
    const router = useRouter()
    const paths = [...router.asPath.split("/").map(e => capitalizeFirstLetter(e))]
    paths[0] = "/"
    return (
        <div>
            {paths.map(e => <span key={e}>
                &nbsp;/&nbsp; {e}
            </span>)}
        </div>
    )
}

export default BreadCrumb