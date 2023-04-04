import React from 'react'
import { MdOutlineKeyboardArrowRight } from 'react-icons/md'
import styles from '../../styles/Base.module.scss'


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
      className={styles.addNewOptionsButton}>
      <div>
        <div>
          {Icon && <Icon size={20} />}
        </div>
        <div>{item.name}</div>
      </div>
      {
        i == 2 && <div >
          <MdOutlineKeyboardArrowRight size={20} color={"#1d1d1d9f"} />
        </div>
      }
    </div >
  )
}

export default AddNewOptionsButton