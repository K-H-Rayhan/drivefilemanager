import { MenuContext } from '@/context/MenuContext'
import { ResultContext } from '@/context/ResultsContext'
import React, { useContext } from 'react'

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
    action: ActionType | null
    handleClose: () => void
    backdrop?: boolean
}

function CreateNewModal({
    action = null,
    handleClose,
    backdrop = true,
}: Props) {
    const { handleAddFolder, handleDeleteFolder, handleEditFolder } = useContext(MenuContext)
    const { results } = useContext(ResultContext)
    const [folderName, setFolderName] = React.useState<string>('')
    const modAction = (actionName: ActionType) => {
        switch (actionName) {
            case ActionType.CREATE_FOLDER:
                folderName.length > 0 && handleAddFolder(folderName, results.id)
                return 'folder'
            case ActionType.CREATE_DOC:
                return 'document'
            case ActionType.CREATE_SHEET:
                return 'spreadsheet'
            case ActionType.CREATE_SLIDE:
                return 'presentation'
            case ActionType.CREATE_FORM:
                return 'form'
            default:
                return 'folder'
        }
    }

    return (
        <>{action && <div
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
            <div style={{
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
                    <input type="text"
                        required
                        value={folderName}
                        onChange={(e) => {
                            setFolderName(e.target.value)
                        }}
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
                            onClick={() => {
                                modAction(action)
                            }}
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

        </div >}</>
    )
}

export default CreateNewModal