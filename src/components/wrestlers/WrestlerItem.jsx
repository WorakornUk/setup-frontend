import { useContext, useEffect } from 'react'
import { AuthContext } from '../../contexts/AuthContext'
import Button from '../Button'
import wrestlerApi from '../../apis/wrestler'
import { ReRenderContext } from '../../contexts/ReRenderContext'

export default function WrestlerItem({ src, setSelected, wrestler }) {
  const { user } = useContext(AuthContext)
  const { reRender } = useContext(ReRenderContext)

  const handleDelete = async () => {
    await wrestlerApi.deleteWrestler(wrestler.id)
    reRender()
  }

  return (

        <div onClick={()=>setSelected(wrestler)} className="character-border element w-20 h-20 border-2 m-1 overflow-hidden bg-gray-950 ">
          {user?.admin && (
            <div className='absolute flex justify-center items-center inset-0 z-20'>
              <Button onClick={handleDelete} bg='red' width="full">Delete</Button> 
            </div>)}
          <img src={src} className='scale-125 mt-1' />
        </div>
  )
}