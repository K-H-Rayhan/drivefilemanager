import useHandleTree from '@/hooks/useHandleTree'
import useLocalStorage from '@/hooks/useLocalStorage'
import { Open_Sans } from 'next/font/google'

const inter = Open_Sans({ subsets: ['latin'] })

export default function Home() {
  const { storedFolderData, handleAddFolder, handleDeleteFolder, handleEditFolder } = useHandleTree()

  return (
    <div className={inter.className}


    >
      {JSON.stringify(storedFolderData, null, 2)}
      <div
        style={{
          margin: 10
        }}
        onClick={() => {
          handleAddFolder('child2', "987d0ade-f2d1-488b-ac5c-924a70428fed")
        }

        }>Add</div>
      <div
        style={{
          margin: 10
        }}
        onClick={() => {
          handleDeleteFolder("eae6d8db-f645-4884-a8de-c870546d909b")
        }
        }>Delete</div>
      <div
        style={{
          margin: 10
        }}
        onClick={() => {
          handleEditFolder("child1Pusd", "f2ca856e-fca2-4e2a-b76a-db72b58e77ae")
        }
        }>Edit</div>
    </div>
  )
}
