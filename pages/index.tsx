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
          handleAddFolder('child2child1child2', "2ebfd769-69c1-4883-bc7b-130767242e84")
        }

        }>Add</div>
    </div>
  )
}
