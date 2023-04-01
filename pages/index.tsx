import useLocalStorage from '@/hooks/useLocalStorage'
import { Open_Sans } from 'next/font/google'

const inter = Open_Sans({ subsets: ['latin'] })

export default function Home() {
  const [storedValue, handleNewValue] = useLocalStorage('tree')
  return (
    <div className={inter.className}

      onClick={() => {
        // handleNewValue({
        //   name: 'test',
        //   id: "asd",
        //   slug: 'test',
        // })
        console.log(self.crypto.randomUUID());
      }

      }
    >
      asd
      {JSON.stringify(storedValue)}

    </div>
  )
}
