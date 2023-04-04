import { MenuContext } from '@/context/MenuContext'
import { ResultContext } from '@/context/ResultsContext'
import React, { useContext, useEffect } from 'react'

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
    id?: string
}

function CreateNewModal({
    action,
    handleClose,
    backdrop = true,
    edit = false,
    id = ""
}: Props) {
    const { handleAddFolder, handleAddFile, handleEditFolder } = useContext(MenuContext)
    const { results } = useContext(ResultContext)
    const [folderName, setFolderName] = React.useState<string>('')
    const inputRef = React.useRef<HTMLInputElement>(null) as React.MutableRefObject<HTMLInputElement>
    const eventEnter = React.useRef<HTMLDivElement>(null)



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
                return inputRef.current.value.length > 0 && handleAddFile(inputRef.current.value, ActionType.CREATE_FORM, results.id)
            case ActionType.EDIT_FOLDER:
                return inputRef.current.value.length > 0 && handleEditFolder(id, inputRef.current.value)
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
                onClick={() => {
                    handleClose()
                }}
                style={{
                    position: 'fixed',
                    zIndex: 1,
                    top: '0',
                    left: '0',
                    width: '100%',
                    height: '100%',
                    backgroundColor: backdrop ? 'rgba(0,0,0,.2)' : 'transparent',
                }}
            >
                <div
                    ref={eventEnter}
                    style={{
                        position: 'relative',
                        height: '100%',
                        width: '100%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}>

                    <div
                        onClick={(e) => {
                            e.stopPropagation()
                        }}
                        style={{
                            width: '343px',
                            height: '197px',
                            padding: "24px",
                            backgroundColor: '#fff',
                            borderRadius: '6px',
                            boxShadow: '0 2px 2px 0 rgba(60,64,67,.2), 0 1px 6px 2px rgba(60,64,67,.1)',
                            fontWeight: 500,
                            fontSize: '14px',
                            color: '#000',
                            userSelect: 'none',
                            overflow: 'hidden',
                            overflowY: 'auto',
                            cursor: 'pointer',
                        }}>
                        <div style={{
                            marginBottom: '12px',
                            fontSize: '24px',
                            fontWeight: 400,
                            color: '#1d1d1d',
                        }}>New {action.split("_")[1].toLowerCase()}</div>
                        <input
                            ref={inputRef}
                            type="text"
                            required
                            placeholder={`Untitled ${action.split("_")[1].toLowerCase()}`}
                            style={{
                                width: '100%',
                                padding: '10px',
                                border: '2px solid #0B57D0',
                                borderRadius: '4px',
                            }} />
                        <div style={{
                            display: 'flex',
                            justifyContent: 'flex-end',
                            marginTop: '30px',
                        }}>
                            <div
                                onClick={() => {
                                    handleClose()
                                }}
                                style={{
                                    padding: '8px',
                                    border: 'none',
                                    borderRadius: '4px',
                                    color: '#0B57D0',
                                    fontWeight: 500,
                                    fontSize: '14px',
                                    cursor: 'pointer',
                                }}>Cancel</div>
                            <div
                                onClick={handleMod}
                                style={{
                                    padding: '8px',
                                    border: 'none',
                                    borderRadius: '4px',
                                    color: '#0B57D0',
                                    fontWeight: 500,
                                    fontSize: '14px',
                                    cursor: 'pointer',
                                }}>Create</div>
                        </div>
                    </div>
                </div>

            </div >
        </>
    )
}

export default CreateNewModal