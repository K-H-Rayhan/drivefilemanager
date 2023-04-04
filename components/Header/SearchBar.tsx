import React from 'react'
import { MdOutlineSearch, MdOutlineTune } from 'react-icons/md'
import IconButton from '../Ui/IconButton'
import styles from "../../styles/Base.module.scss"
type Props = {}

function SearchBar({ }: Props) {
    return (
        <div 
        className={styles.searchBar}>
            <div>
                <div>
                    <IconButton icon={MdOutlineSearch} />
                    <input type="text" placeholder='Search in Drive' />
                </div>
                <IconButton icon={MdOutlineTune} />
            </div>
        </div>
    )
}

export default SearchBar