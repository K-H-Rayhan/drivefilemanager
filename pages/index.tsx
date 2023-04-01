import useHandleTree from '@/hooks/useHandleTree'
import useLocalStorage from '@/hooks/useLocalStorage'
import { Open_Sans } from 'next/font/google'
import { MutableRefObject, useRef, useState } from 'react'

const inter = Open_Sans({ subsets: ['latin'] })

function TreeMenu({ storedFolderData }: any) {
  const [open, setOpen] = useState(false)
  console.log(storedFolderData);

  return (
    <div
      style={{
        margin: 10
      }}
    >
      {storedFolderData?.map(e => {
        return (
          <div
            style={{
              margin: 10
            }}
          >
            <div onClick={() => {
              setOpen(!open)
            }
            }>{e.name}</div>
            {open && <TreeMenu storedFolderData={e.children} />}
          </div>
        )
      }
      )}

    </div>
  )
}

export default function Home() {
  const { storedFolderData, handleAddFolder, handleDeleteFolder, handleEditFolder } = useHandleTree()
  const addRef = useRef(null);

  return (
    <div className={inter.className}


    >
      {JSON.stringify(storedFolderData, null, 0)}
      <div
        ref={addRef}
        style={{
          margin: 10
        }}
        onClick={() => {
          handleAddFolder('heda1', "b595a83f-b678-485d-9c16-7dc607376f98")
        }

        }>Add</div>
      <div
        style={{
          margin: 10
        }}
        onClick={() => {
          handleDeleteFolder("home")
        }
        }>Delete</div>
      <div
        style={{
          margin: 10,
        }}
        onClick={() => {
          handleEditFolder("child1", "f2ca856e-fca2-4e2a-b76a-db72b58e77ae")
        }
        }>Edit</div>
      <TreeMenu storedFolderData={storedFolderData} />
    </div>
  )
}
