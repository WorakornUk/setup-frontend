import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../contexts/AuthContext'
import { ReRenderContext } from '../../contexts/ReRenderContext'

import videoApi from '../../apis/video'
import Button from '../Button'

export default function VideoItem({ id, src, thumbnail, title, enlarged }) {
  const { user } = useContext(AuthContext)
  const { reRender } = useContext(ReRenderContext)


  const handleDelete = async () => {
    await videoApi.deleteVideo(id)
    reRender()
  }

  return (
    <>
    <div>
      <div className='flex'>
        {user?.admin && <div className='text-center w-1/2'><Button onClick={""} bg='green' height="20" width="full">edit</Button></div>}
        {user?.admin && <div className='text-center w-1/2'><Button onClick={handleDelete} bg='red' height="20" width="full">delete</Button></div>}
      </div>
      <div className={`${!enlarged ? null : 'overflow-hidden'}`}>
        <div className={`${!enlarged ? 'w-[300px] hover:scale-110 transition duration-500' : 'w-[600px] h-[220px] hover:scale-125 transition duration-[3s]'}`}>
          <Link className='relative' to={src}>
            <img className='w-full' src={thumbnail} />
            <span className='video-title absolute bottom-4 left-4 text-sm font-bold bg-black bg-opacity-75 pt-1 w-[90%]'>{title}</span>
          </Link>
        </div>
      </div>
    </div>
    
    </>
  )
}