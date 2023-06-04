import Link from 'next/link'
import { ChevronLeft } from 'lucide-react'
import { NewFormMemory } from '@/components/NewFormMemory'

export default function NewMemory() {
  return (
    <div className="flex flex-1 flex-col gap-4">
      <Link
        href="/"
        className="flex items-center gap-1 text-sm text-gray-200 hover:text-gray-100"
      >
        <ChevronLeft className="w- h-4" />
        voltar a timeline
      </Link>

      <NewFormMemory />
    </div>
  )
}
