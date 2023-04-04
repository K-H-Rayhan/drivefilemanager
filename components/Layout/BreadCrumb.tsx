import { useRouter } from 'next/router'
import React from 'react'
import { RiArrowRightSLine } from 'react-icons/ri'

type Props = {}

function capitalizeFirstLetter(string: string) {
    return (string.charAt(0).toUpperCase() + string.slice(1)).replace("-", " ");
}

function BreadCrumb({ }: Props) {
    const router = useRouter()
    const paths = [...router.asPath.split("/").map(e => capitalizeFirstLetter(e))]
    paths[0] = "My Drive"
    return (
        <div style={{
            fontSize: '18px',
            display: 'flex',
            alignItems: 'center',
            flexWrap: 'wrap',
        }}>
            {paths.map((e, i) => <span style={{
                display: 'flex',
                alignItems: 'center',
                fontSize: '20px',
            }} key={Math.random()}>
                {i != 0 && <RiArrowRightSLine
                    size={22}
                    style={{
                        marginInline: '8px',
                    }} />}  {e}
            </span>)}
        </div>
    )
}

export default BreadCrumb