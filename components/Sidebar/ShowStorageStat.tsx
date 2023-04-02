import React from 'react'

type Props = {}

function ShowStorageStat({ }: Props) {
    return (
        <div style={{
            paddingLeft: '10px',
        }}>
            <div style={{
                width: '175px',
                height: '4px',
                backgroundColor: '#1d1d1d1f',
                borderRadius: '3rem',
            }}>
                <div style={{
                    width: '50%',
                    height: '100%',
                    backgroundColor: '#1a73e8',
                    borderRadius: '3rem',
                }}></div>
            </div>


            <div style={{
                display: 'flex',
                alignItems: 'center',
                paddingBlock: '10px',
                color: '#1d1d1daf',
                fontSize: '13px',
            }}>
                <div>
                    7.5 GB of 15 GB used
                </div>
            </div>
            <div style={{
                border: '1px solid #1d1d1d6f',
                width: 'fit-content',
                padding: '10px 24px',
                borderRadius: '1.5rem',
                color: 'rgb(26,115,232)',
                fontSize: '14px',

            }}>Buy storage</div>
        </div>
    )
}

export default ShowStorageStat