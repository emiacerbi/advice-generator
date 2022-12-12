import Die from './components/Die'
import Divider from './components/Divider'
import Wrapper from './components/Wrapper'
import { getQuote } from './helpers/getQuote'
import { useQuery } from 'react-query'
import Spinner from './components/Spinner'
import { useEffect, useState } from 'react'

function App() {
  const { data, refetch, isFetching, error } = useQuery('quote', getQuote)

  if (error) console.error(error)

  return (
    <Wrapper>
      <main className="max-w-[540px] grid gap-8  text-center relative font-primary py-14 px-6 sm:px-12 sm bg-neutral-800 rounded-2xl">
        <p className="text-primary-400 tracking-[.25rem] text-sm">
          ADVICE #117
        </p>
        <div className="text-primary-200 text-quote grid place-content-center">
          {isFetching ? <Spinner /> : <p>{data?.slip.advice}</p>}
        </div>

        <Divider />
        <button
          onClick={() => refetch()}
          disabled={isFetching}
          className="absolute disabled:cursor-auto cursor-pointer hover:shadow-primary transition-shadow duration-200 -bottom-8 left-1/2 -translate-x-1/2 bg-primary-400 p-5 w-fit mx-auto rounded-full"
        >
          <Die />
        </button>
      </main>
    </Wrapper>
  )
}

export default App
