import React from 'react'
import { MdOutlineSearch, MdOutlineTune } from 'react-icons/md'
import IconButton from '../Ui/IconButton'

type Props = {}

function SearchBar({ }: Props) {
    return (
        <div style={{
            display: 'flex',
            width: '58%',
            backgroundColor: '#edf2fc',
            borderRadius: '1.5rem',
            alignItems: 'center',
        }}>
            <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                width: '100%',
                paddingInline: '4px',
            }}>
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                }}>
                    <IconButton icon={MdOutlineSearch} />
                    <div>
                        Search in Drive
                    </div>
                </div>
                <IconButton icon={MdOutlineTune} />
            </div>
        </div>
    )
}

export default SearchBar