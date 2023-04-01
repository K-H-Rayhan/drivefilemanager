import useHandleTree from '@/hooks/useHandleTree'
import useLocalStorage from '@/hooks/useLocalStorage'
import { Open_Sans } from 'next/font/google'

const inter = Open_Sans({ subsets: ['latin'] })

export default function Home() {
  const { storedFolderData, handleAddFolder } = useHandleTree()

  return (
    <div className={inter.className}

      onClick={() => {
        handleAddFolder('child1child2child', "a5afedd3-e981-40f2-92be-ee55b7608585")
      }

      }
    >
      {JSON.stringify(storedFolderData)}

    </div>
  )
}
