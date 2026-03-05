// app/page.tsx (update to include providers)
import { Providers } from './providers'
import HomePage from './home/page'

export default function Page() {
  return (
    <Providers>
      <HomePage />
    </Providers>
  )
}