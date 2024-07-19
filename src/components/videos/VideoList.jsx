import { useState, useContext } from "react"
import { AuthContext } from "../../contexts/AuthContext"

import Button from "../Button"
import VideoItem from "./VideoItem"
import Modal from "../Modal"
import AddVideoForm from "./AddVideoForm"

export default function VideoList({ category_id, category, list, enlarged = false }) {
  const { user } = useContext(AuthContext)

  const [ openAdd, setOpenAdd ] = useState(false)

  return (
    <>
    <div className="pl-20 mt-20">
        <header className="font-semibold text-xl">{category}</header>
        <section className={`${!enlarged && 'overflow-auto h-[228px]'}`}>
          <section className={`${enlarged && 'overflow-auto'} flex space-x-5 mt-8`}>
            {/* {console.log(user)} */} 
            {user?.admin 
            && <Button onClick={()=>setOpenAdd(true)} bg="black" height="none">
                <div className="text-4xl">+</div>
              </Button>}
            {[...list].reverse().map(el => (
              <VideoItem key={el.id} id={el.id} src={el.src} thumbnail={el.thumbnail} title={el.title} enlarged={enlarged} />
            ))}
          </section>
        </section>
      </div>

      {/* Modal */}
      <Modal title="Add Video" open={openAdd} onClose={()=>setOpenAdd(false)}>
        <AddVideoForm category_id={category_id} onSuccess={()=>setOpenAdd(false)} />
      </Modal>
    </>
  )
}

