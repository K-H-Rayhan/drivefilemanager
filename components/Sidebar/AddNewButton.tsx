import React from 'react'
import { GrAdd } from 'react-icons/gr'

type Props = {}

function AddNewButton({ }: Props) {
    return (
        <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '100px',
            height: '56px',
            padding: '18px 20px 18px 16px',
            backgroundColor: '#fff',
            borderRadius: '15px',
            margin: '12px 6px 24px',
            boxShadow: '0 2px 2px 0 rgba(60,64,67,.2), 0 1px 6px 2px rgba(60,64,67,.1)',
            fontWeight: 500,
            fontSize: '14px',
            color: '#000',
            userSelect: 'none',
            cursor: 'pointer',
        }}>
            <GrAdd size={20} />
            New</div>
    )
}

export default AddNewButton