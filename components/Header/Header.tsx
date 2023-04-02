import React from 'react'
import SearchBar from './SearchBar'
import OtherOptions from './OtherOptions'

type Props = {}

function Header({ }: Props) {
    return (
        <div style={{
            display: 'flex',
            padding: '8px',
            height: '64px',
        }}>
            <div style={{
                padding: '16px',
                display: 'flex',
                alignItems: 'center',
                minWidth: '247px',
                marginBottom: '2px',
            }}>
                <img src={"https://ssl.gstatic.com/images/branding/product/1x/drive_2020q4_48dp.png"} alt="" width={40} />
                <div style={{
                    marginLeft: '8px',
                    fontSize: '21px',
                }}>Drive</div>
            </div>
            <SearchBar />
            <OtherOptions />
        </div>
    )
}

export default Header