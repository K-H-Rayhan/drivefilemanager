import React from 'react'
import { MdOutlineKeyboardArrowRight } from 'react-icons/md'


type Props = {
  item: {
    name: string
    icon?: React.FC<{ size: number }>
  }
  i: number
  index: number
  handleClick?: () => void
}

function AddNewOptionsButton({
  index,
  item,
  i,
  handleClick
}: Props) {
  const Icon = item?.icon || null
  return (
    <div key={index}
      onClick={() => {
        handleClick && handleClick()
      }}
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        backgroundColor: '#fff',
        borderRadius: '15px',
        height: "32px"
      }}>
      <div style={{
        display: 'flex',
        alignItems: 'center',
      }}>

        <div style={{
          width: '20px',
          height: '20px',
          display: 'flex',
          alignItems: 'center',
        }}>
          {Icon && <Icon size={20} />}
        </div>
        <div style={{
          marginLeft: '12px',
          fontSize: '13px',
          fontWeight: 400,
        }}>{item.name}</div>
      </div>
      {
        i == 2 && <div style={{
          display: "flex",
          alignItems: 'center'
        }}>
          <MdOutlineKeyboardArrowRight size={20} color={"#1d1d1d9f"} />
        </div>
      }
    </div >
  )
}

export default AddNewOptionsButton