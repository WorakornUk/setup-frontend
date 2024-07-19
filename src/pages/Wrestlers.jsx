import { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../contexts/AuthContext'
import { ReRenderContext } from '../contexts/ReRenderContext'

import wrestlerApi from '../apis/wrestler'
import WrestlerList from '../components/wrestlers/WrestlerList'
import WrestlerSelect from '../components/wrestlers/WrestlerSelect'

export default function Wrestlers() {
  const { user } = useContext(AuthContext)
  const { resetData, reRender } = useContext(ReRenderContext)

  const [ wrestlers, setWrestlers ] = useState([])
  const [ selected, setSelected ] = useState({})

  useEffect(() => {
    const fetchWrestlers = async () => {
      try {
        const fetchedWrestlers = (await wrestlerApi.getWrestler()).data
        // console.log(fetchedWrestlers)
        if(fetchedWrestlers) setSelected(fetchedWrestlers[0])

        setWrestlers(fetchedWrestlers)
        

      } catch (err) {
        console.log(err)
      }
    }

    fetchWrestlers()
  }, [resetData])

  // console.log(list)

  return (
    <div className="relative w-full h-[753px] overflow-hidden">
        <img className="BG scale-x-[-1] w-full " src="./src/assets/Wrestlers/BG/Fire_Particles_1.gif" alt="" />

        <WrestlerSelect name={selected.name} alias={selected.alias} height={selected.height} weight={selected.weight} signature_move={selected.signature_move} image_src={selected.image_src} description={selected.description} />
        <WrestlerList wrestlers={wrestlers} setSelected={setSelected} />
    </div>
  )
}