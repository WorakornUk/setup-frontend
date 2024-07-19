import React from 'react'
import WrestlerItem from './WrestlerItem'
import { useContext, useEffect } from 'react'
import { AuthContext } from '../../contexts/AuthContext'
import Button from '../Button'

export default function WrestlerList({ wrestlers, setSelected }) {
  const { user } = useContext(AuthContext)
  console.log(wrestlers)

  return (
    <div className="absolute flex flex-wrap w-[500px] justify-center bottom-14 right-0 cursor-pointer">
      { wrestlers.map(wrestler => !wrestler.deleted
        && <WrestlerItem key={wrestler.id} src={wrestler.image_src} setSelected={setSelected} wrestler={wrestler} />
      ) }
      {user?.admin && (
      <div className="element flex justify-center items-center w-20 h-20 border-2 m-1 overflow-hidden bg-gray-950 cursor-pointer">
        <Button>Add</Button>
      </div>
      )}
      
    </div>
  )
}