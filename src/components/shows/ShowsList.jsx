import { Link } from 'react-router-dom'

export default function ShowsList({ id, image_src, name }) {
  return (
    <Link to={`/events/${id}`}>
      <div className="POSTER transition duration-300 hover:saturate-150 hover:brightness-105  w-[25em] h-[492px]">
        <img className="h-full w-full border-setup-normal border-[1em]" src={image_src} alt="" />
        <div className="text-2xl px-4 font-semibold">{name}</div>
      </div>
    </Link>
  )
}
