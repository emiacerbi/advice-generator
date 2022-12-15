import { useQuery } from 'react-query'
import { getQuote } from './helpers/getQuote'
import Die from './components/Die'
import Divider from './components/Divider'
import Wrapper from './components/Wrapper'
import Spinner from './components/Spinner'
import { useState } from 'react'

function App() {
  const [isRefetching, setIsRefetching] = useState(false)
  const { data, refetch, isLoading, error } = useQuery({
    queryKey: ['quote'],
    queryFn: getQuote,
    refetchOnWindowFocus: false,
  })

  const handleClick = () => {
    refetch()
    setIsRefetching(true)
    setTimeout(() => {
      setIsRefetching(false)
    }, 1000)
  }

  if (error) console.error(error)

  console.log(data)

  return (
    <Wrapper>
      <main className="max-w-[540px] shadow-lg grid gap-8  text-center relative font-primary py-14 px-6 sm:px-12 sm bg-neutral-800 rounded-2xl">
        <p className="text-primary-400 tracking-[.25rem] text-sm">
          ADVICE #{!isRefetching && data?.slip.id}
        </p>
        <div className="text-primary-200 text-quote grid place-content-center">
          {isLoading || isRefetching ? <Spinner /> : <p>{data?.slip.advice}</p>}
        </div>

        <Divider />
        <button
          onClick={handleClick}
          disabled={isLoading || isRefetching}
          className="absolute disabled:cursor-auto cursor-pointer hover:shadow-primary transition-shadow duration-200 -bottom-8 left-1/2 -translate-x-1/2 bg-primary-400 p-5 w-fit mx-auto rounded-full"
        >
          <Die />
        </button>
      </main>
    </Wrapper>
  )
}

export default App
