import { MenuContext } from '@/context/MenuContext'
import { ResultContext } from '@/context/ResultsContext'
import { File } from '@/types/TreeNodeType'
import React, { useContext, useEffect } from 'react'
import styles from '../../styles/Base.module.scss'

export enum ActionType {
    CREATE_FOLDER = 'CREATE_FOLDER',
    CREATE_DOC = 'CREATE_DOC',
    CREATE_SHEET = 'CREATE_SHEET',
    CREATE_SLIDE = 'CREATE_SLIDE',
    CREATE_FORM = 'CREATE_FORM',
    EDIT_FILE = 'EDIT_DOC',
    EDIT_FOLDER = 'EDIT_FOLDER',
}


type Props = {
    action: ActionType
    handleClose: () => void
    backdrop?: boolean
    edit?: boolean
    file?: File
}

function CreateNewModal({
    action,
    handleClose,
    backdrop = true,
    edit = false,
    file
}: Props) {
    const { handleAddFolder, handleAddFile, handleEditFolder, handleEditFile } = useContext(MenuContext)
    const { results } = useContext(ResultContext)
    const [folderName, setFolderName] = React.useState<string>('')
    const inputRef = React.useRef<HTMLInputElement>(null) as React.MutableRefObject<HTMLInputElement>
    const eventEnter = React.useRef<HTMLDivElement>(null)
    console.log(file, 'boss');

    useEffect(() => {
        inputRef.current?.focus()

        const handleEnter = (e: KeyboardEvent) => {
            if (e.key === 'Enter') {
                e.preventDefault()
                handleMod()
            }
        }
        eventEnter.current?.addEventListener('keydown', handleEnter)
        return () => {
            eventEnter.current?.removeEventListener('keydown', handleEnter)
        }
    }, [])

    const modAction = (actionName: ActionType) => {
        switch (actionName) {
            case ActionType.CREATE_FOLDER:
                return inputRef.current.value.length > 0 && handleAddFolder(inputRef.current.value, results.id)
            case ActionType.CREATE_DOC:
                return inputRef.current.value.length > 0 && handleAddFile(inputRef.current.value, ActionType.CREATE_DOC, results.id)
            case ActionType.CREATE_SHEET:
                return inputRef.current.value.length > 0 && handleAddFile(inputRef.current.value, ActionType.CREATE_SHEET, results.id)
            case ActionType.CREATE_SLIDE:
                return inputRef.current.value.length > 0 && handleAddFile(inputRef.current.value, ActionType.CREATE_SLIDE, results.id)
            case ActionType.CREATE_FORM:
                return inputRef.current.value.length > 0 && handleAddFile(inputRef.current.value, ActionType.CREATE_FORM, results.id)
            case ActionType.EDIT_FILE:
                return inputRef.current.value.length > 0 && file && handleEditFile(file.id, inputRef.current.value, results.id)
            case ActionType.EDIT_FOLDER:
                return inputRef.current.value.length > 0 && file && handleEditFolder(inputRef.current.value, file.id)
            default:
                return 'folder'
        }
    }

    const handleMod = () => {
        modAction(action);
        handleClose();
    }

    return (
        <>
            <div
                className={styles.createNewModal}
                onClick={() => {
                    handleClose()
                }}
                style={{
                    backgroundColor: backdrop ? 'rgba(0,0,0,.2)' : 'transparent',
                }}
            >
                <div
                    className={styles.createNewModalPopup}
                    ref={eventEnter}>
                    <div
                        onClick={(e) => {
                            e.stopPropagation()
                        }}
                        className={styles.createNewModalBody}>
                        <div
                            className={styles.createNewModalTitle}>
                            {edit ? "Edit" : "New"} {action.split("_")[1].toLowerCase()}
                        </div>
                        <input
                            ref={inputRef}
                            defaultValue={file?.name}
                            type="text"
                            required
                            placeholder={`Untitled ${action.split("_")[1].toLowerCase()}`}
                            className={styles.createNewModalInput}
                        />
                        <div style={{
                            display: 'flex',
                            justifyContent: 'flex-end',
                            marginTop: '30px',
                        }}>
                            <div
                                className={styles.createNewModalButton}
                                onClick={() => {
                                    handleClose()
                                }}>
                                Cancel
                            </div>
                            <div onClick={handleMod}
                                className={styles.createNewModalButton}>
                                Create
                            </div>
                        </div>
                    </div>
                </div>

            </div >
        </>
    )
}

export default CreateNewModal