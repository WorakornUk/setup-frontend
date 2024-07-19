// EventDetail.jsx
import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

import showsApi from '../apis/show'
import Modal from "../components/Modal"
import SeatTypeItem from '../components/shows/SeatTypeItem'
import Button from '../components/Button'

export default function EventDetail() {
  const { id } = useParams()
  const navigate = useNavigate()

  const [ event, setEvent ] = useState(null)
  const [ openSeatPlan, setOpenSeatPlan ] = useState(false)
  const [ selectedTicketAmounts, setSelectedTicketAmounts ] = useState({})

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const fetchedEvent = (await showsApi.getShowById(id)).data
        setEvent(fetchedEvent)
        
      } catch (err) {
        console.error(err)
      }
    }
    fetchEvent()
  }, [id])

  const handleTicketAmountsChange = ( seatType, ticketAmount ) => {
    setSelectedTicketAmounts(prev => ({...prev, [seatType]: +ticketAmount}))
  }
  const handleBuyTickets = () => {
    const hasSelectedAmounts = Object.values(selectedTicketAmounts).some(amount => amount > 0)
    if( hasSelectedAmounts ) navigate('/checkout', { state: { selectedTicketAmounts, event}})
  }

  if (!event) return <div>Loading...</div>;

  return (
    <>
    <div className="relative h-[100vh] w-full overflow-hidden">
      <img className="BG blur-sm w-full " src={event.image_src} alt={event.name} />

      <div className='absolute gap-5 inset-0 flex items-start pt-5 justify-center'>
        <div className='LEFT flex flex-col gap-5'>
          <div className='BLOCK opacity-85 bg-black w-[500px] rounded-3xl p-5'>
            <div className='whitespace-pre-wrap'>{event.description}</div>
            <hr className='my-5' />
            <div className='whitespace-pre-wrap'>{event.stadium.description}</div>
          </div>
          <img src={event.stadium.image_src} onClick={()=>setOpenSeatPlan(true)} className='w-[500px] rounded-3xl cursor-pointer' alt="" />
        </div>

        <div className='RIGHT flex flex-col gap-5'>
          <div className='BLOCK bg-black w-[500px] rounded-3xl p-5 font-bold text-2xl text-setup-bright'>
            {event.name}
          </div>
          <div className='BLOCK bg-black w-[500px] rounded-3xl p-5 flex flex-col'>
            <div>{event.date}</div>
            <div>{event.stadium.location}</div>
            {event.restriction || "No age restriction"}
          </div>
          <div className='BLOCK bg-black font-extrabold w-[500px]  rounded-3xl p-5 flex flex-col '>
            <div className='grid grid-cols-4   '>
              {/* Header */}
              <div className='col-span-2  border-b-4 border-gray-300 pb-4' >Ticket Type</div>
              <div className='text-center border-b-4 border-gray-300 pb-4'>Price</div>
              <div className='text-center border-b-4 border-gray-300 pb-4'>Qty.</div>
              {event?.stadium.seat_types.map(type => 
                <SeatTypeItem key={type.id} seatType={type.name} price={type.price} quantity={type.capacity} onQuantityChange={handleTicketAmountsChange} />)}
              <div className='col-span-4 border-b-4 border-gray-300 '></div>
            </div>
            <div className='flex justify-center mt-4'>
              <Button width="40" onClick={handleBuyTickets}>
                Buy Tickets
              </Button>
            </div>
          </div>
        </div>

      </div>
    </div>

    <Modal open={openSeatPlan} title={event.stadium.name} onClose={() => setOpenSeatPlan(false)} width="full">
      <img src={event.stadium.image_src} onClick={()=>setOpenSeatPlan(false)} className='w-[1000px] rounded-3xl cursor-pointer' alt="" />
    </Modal>
    </>
  )
}
