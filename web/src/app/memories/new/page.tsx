'use client'

import { ChevronLeft } from 'lucide-react'
import Link from 'next/link'
import { NewMemoryForm } from 'src/components/NewMemoryForm'

export default function NewMemory() {
  return (
    <div className="flex flex-1 flex-col gap-4 p-16">
      <Link
        href="/"
        className="flex items-center gap-1 text-sm text-gray-200 hover:text-gray-100"
      >
        <ChevronLeft />
        Voltar a timeline
      </Link>

      <NewMemoryForm />
    </div>
  )
}
