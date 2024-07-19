import { useEffect, useState, useContext } from 'react'
import { ReRenderContext } from '../contexts/ReRenderContext'

import VideoList from '../components/videos/VideoList'
import videoApi from '../apis/video'


export default function HomePage() {
  const { resetData } = useContext(ReRenderContext)

  const [section, setSection] = useState([])
  // const [resetData, setResetData] = useState(false)

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const fetchedVideos = (await videoApi.getVideo()).data
        const preCategories = [...new Set(fetchedVideos.map(video => video.category))]
        const categorized = [...new Map(preCategories.map(cat => [cat.type, cat])).values()];
        // console.log(fetchedVideos)
        // console.log(preCategories)
        // console.log(categorized)

        const sections = categorized.map(category => {
            const videosData = fetchedVideos.filter(video => video.category.type === category.type)
            const enlarged = videosData.some(video => video.enlarged)
            const deleted = category.deleted

            return {
              category_id: category.id,
              category: category.type,
              enlarged,
              deleted,
              data: videosData
            }
        })

        setSection(sections)

      } catch (err) {
        console.log(err)
      }
    }

    fetchVideos();
  }, [resetData])
  // console.log(section)


  return (
    <>
      <img src="./src/assets/Cover/ep12_drunken_king_returns.jpg" alt="Cover" />

      {section.map(sec => !sec.deleted
        && <VideoList key={sec.category} category_id={sec.category_id} category={sec.category} list={sec.data} enlarged={sec.enlarged} />)}
    </>
  )
}
