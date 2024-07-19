import { useContext, useEffect, useState} from 'react'
import { AuthContext } from '../contexts/AuthContext'
import { ReRenderContext } from '../contexts/ReRenderContext'

import showsApi from '../apis/show'
import ShowsList from '../components/shows/ShowsList'


export default function Tickets() {
  const { user } = useContext(AuthContext)
  const { resetData, reRender } = useContext(ReRenderContext)

  const [shows, setShows] = useState([])

  useEffect(() => {
    const fetchShows = async() => {
      try {
        const fetchedShows = (await showsApi.getShows()).data
        setShows(fetchedShows)
      
      } catch (err) {
        console.log(err)
      }
    }
    fetchShows()
  }, [resetData])

  return (
      <div className="relative w-full overflow-hidden">
        <img className="BG scale-up w-full blur-sm " src="./src/assets/Poster/concert.webp" alt="" />
        <div className="absolute inset-0 pb-20 gap-48 flex justify-center items-center">
          {shows?.map(show => (
              <ShowsList key={show.id} id={show.id} image_src={show.image_src} name={show.name} />
          ))}
        </div>
      </div>
  )
}