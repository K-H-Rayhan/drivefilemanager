import { useRouter } from 'next/router'
import React from 'react'
import { RiArrowRightSLine } from 'react-icons/ri'
import { FaListAlt } from 'react-icons/fa'
import { MdInfoOutline } from 'react-icons/md'
import IconButton from '../Ui/IconButton'

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
            display: 'flex',
            justifyContent: 'space-between',
        }}>
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
            <div style={{
                display: 'flex',
            }}>
                <IconButton icon={FaListAlt} size={15} />
                <IconButton icon={MdInfoOutline} size={22} />
            </div>
        </div>
    )
}

export default BreadCrumb