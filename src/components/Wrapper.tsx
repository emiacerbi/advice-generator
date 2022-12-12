import { ReactNode } from 'react'

type Props = {
  children: ReactNode
}

function Wrapper({ children }: Props) {
  return (
    <div className="min-h-screen p-4 bg-neutral-900 grid place-content-center">
      {children}
    </div>
  )
}

export default Wrapper
