'use client'

import { api } from '@/app/lib/api'
import { MediaPicker } from '@/components/MediaPicker'
import { Camera } from 'lucide-react'
import { FormEvent } from 'react'
import Cookie from 'js-cookie'
import { useRouter } from 'next/navigation'

export function NewFormMemory() {
  const router = useRouter()

  async function handleCreateMemory(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)

    const fileToUpload = formData.get('media')

    let coverUrl = ''

    if (fileToUpload) {
      const uploadFormData = new FormData()
      uploadFormData.set('file', fileToUpload)

      const responseUpload = await api.post('/upload', uploadFormData)
      coverUrl = responseUpload.data.fileUrl
    }

    api.post(
      '/memories',
      {
        coverUrl,
        isPublic: formData.get('isPublic'),
        content: formData.get('content'),
      },
      {
        headers: {
          Authorization: `Bearer ${Cookie.get('token')}`,
        },
      },
    )

    router.push('/')
  }

  return (
    <form onSubmit={handleCreateMemory} className="flex flex-1 flex-col gap-2">
      <div className="flex items-center gap-4">
        <label
          htmlFor="media"
          className="flex cursor-pointer items-center gap-1.5 text-sm text-gray-200 hover:text-gray-100"
        >
          <Camera className="h-4 w-4" />
          Anexar mídia
        </label>

        <label
          htmlFor="isPublic"
          className="flex items-center gap-1.5 text-sm text-gray-200 hover:text-gray-100"
        >
          <input
            type="checkbox"
            name="isPublic"
            id="isPublic"
            value="true"
            className="h-4 w-4 rounded border-gray-400 bg-gray-700 text-purple-500"
          />
          Tornar memoria publica
        </label>
      </div>
      <MediaPicker />
      <textarea
        name="content"
        spellCheck={false}
        className="w-full flex-1 resize-none rounded border-0 bg-transparent p-0 text-lg leading-relaxed text-gray-100 placeholder:text-gray-400 focus:ring-0"
        placeholder="Fique livre para adicionar fotos, vídeos e relatos sobre essa experiência que você quer lembrar para sempre."
      />

      <button
        type="submit"
        className="inline-block cursor-pointer self-end rounded-full bg-green-500 px-5 py-4 font-alt text-sm uppercase leading-none text-black transition-colors hover:bg-green-600"
      >
        Salvar
      </button>
    </form>
  )
}
