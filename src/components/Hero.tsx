import Image from 'next/image'
import nlwLogo from '../assets/nlw-spacetime-logo.svg'
import Link from 'next/link'

export function Hero() {
  return (
    <div className="space-y-5">
      <Image src={nlwLogo} alt="nlw spacetime logo" />

      <div className="max-w-[420px] space-y-1">
        <h1 className=" text-5xl font-bold leading-tight text-gray-50">
          Sua cápsula do tempo
        </h1>
        <p className="text-xl leading-tight ">
          Colecione momentos marcantes da sua jornada e compartilhe (se quiser)
          com o mundo!
        </p>
      </div>

      <Link
        href="/memories/new"
        className="inline-block cursor-pointer rounded-full bg-green-500 px-5 py-4 font-alt text-sm uppercase leading-none text-black transition-colors hover:bg-green-600"
      >
        CADASTRAR LEMBRANÇA
      </Link>
    </div>
  )
}
