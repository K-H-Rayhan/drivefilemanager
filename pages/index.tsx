import useHandleTree from '@/hooks/useHandleTree'
import useLocalStorage from '@/hooks/useLocalStorage'
import { Open_Sans } from 'next/font/google'

const inter = Open_Sans({ subsets: ['latin'] })

export default function Home() {
  const { storedFolderData, handleAddFolder } = useHandleTree()

  return (
    <div className={inter.className}


    >
      {JSON.stringify(storedFolderData)}


      <div
        style={{
          margin: 10
        }}
        onClick={() => {
          handleAddFolder('child2child1child2', "a4e41341-cc47-447b-b659-e442df21566d")
        }

        }>Add</div>
    </div>
  )
}
