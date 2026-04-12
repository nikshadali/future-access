"use client"

type TeamCardProps = {
  name: string
  role: string
  img: string
}

export function TeamCard({ name, role, img }: TeamCardProps) {
  return (
    <div className="bg-white rounded-2xl shadow hover:shadow-lg transition p-6 flex flex-col items-center text-center">
      <img
        src={img}
        alt={name}
        className="w-24 h-24 rounded-full object-cover mb-4"
      />
      <h3 className="text-lg font-semibold">{name}</h3>
      <p className="text-gray-500 text-sm">{role}</p>
    </div>
  )
}