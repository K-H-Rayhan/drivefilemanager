import React from 'react'
import AddNewOptionsModal from './AddNewOptionsModal'


type Props = {
    children: React.ReactNode,
    backdrop?: boolean
}



function AddNewOptions({ children, backdrop = false }: Props) {
    const [show, setShow] = React.useState(false)




    return (
        <div
            onClick={() => {
                setShow(!show)
            }}
            style={{
                position: 'relative',
                width: 'fit-content',
            }}>
            <div>{children}</div>
            <AddNewOptionsModal open={show} backdrop={backdrop} handleClose={() => {
                setShow(false)
            }} />
        </div >
    )
}

export default AddNewOptions

