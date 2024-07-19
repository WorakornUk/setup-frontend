import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Button from '../components/Button'

import ticketApi from '../apis/ticket'
import Modal from '../components/Modal'

export default function Checkout() {
  const { state } = useLocation()
  const navigate = useNavigate()

  const { selectedTicketAmounts, event } = state
  const [ showTicket, setShowTicket ] = useState(false)

  const calculateTotal = () => {
    let subtotal = 0
    for (const [type, quantity] of Object.entries(selectedTicketAmounts)) {
      const price = event.stadium.seat_types.find(seat => seat.name === type).price
      subtotal += price * quantity
    }
    const total = subtotal
    return { subtotal, total }
  }

  const { subtotal, total } = calculateTotal()

  const handlePaymentConfirm = () => {
    navigate('/ticket', { state: { selectedTicketAmounts, event, total}})
  }

  // const handleConfirmPurchase = async () => {
  //   console.log('Purchasing tickets:', selectedTicketAmounts)
  //   console.log('Event:', event.id)
  //   console.log('price:', total)

  //   // setShowTicket(true)

  //   // await ticketApi.createTicket({
  //   //   event_id: event.id,
  //   //   price: total
  //   // })
  // }

  return (
    <>
    <div className="min-h-screen flex justify-center items-center bg-black">
      <div className="flex w-full max-w-5xl">
        {/* Left Side */}
        <div className="w-1/2 flex flex-col justify-center items-center bg-slate-400 rounded-3xl p-5">
          <img src="./src/assets/QR.webp" className='w-1/2' alt="" />
          <p className='text-xl text-black font-semibold'>พร้อมเพย์: Pumi Suvannabuhmi</p>
        </div>

        {/* Right Side*/}
        <div className="w-1/2 bg-black p-5 shadow-md rounded-lg text-white">
          <h2 className="text-2xl font-bold mb-5 text-setup-bright">Order Summary</h2>
          <div className="mb-5 w-1/2">
            <img className="w-full rounded-lg" src={event.image_src} alt={event.name} />
          </div>
          <div className="mb-5">
            <h3 className="text-xl font-semibold">{event.name}</h3>
            <p>{event.date}</p>
            <p>{event.stadium.location}</p>
          </div>
          <div className="mb-5">
            <h3 className="text-xl font-semibold">Selected Tickets:</h3>
            <ul>
              {Object.entries(selectedTicketAmounts).map(([type, quantity]) => (
                <li key={type} className="flex justify-between items-center mb-2">
                  <span>{type} ({quantity} x {event.stadium.seat_types.find(seat => seat.name === type).price} THB):</span>
                  <span>{quantity * event.stadium.seat_types.find(seat => seat.name === type).price} THB</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="mb-5">
            <h3 className="text-xl font-semibold">Summary:</h3>
            <div className="flex justify-between items-center">
              <span>Subtotal:</span>
              <span>{subtotal.toFixed(2)} THB</span>
            </div>
            <div className="flex justify-between items-center font-bold text-xl mt-3 text-setup-bright">
              <span>Total:</span>
              <span>{total.toFixed(2)} THB</span>
            </div>
          </div>
          <div className="flex justify-center mt-4">
            <Button onClick={handlePaymentConfirm} bg="setup-bright" color="black" disabled={total === 0}>
              Pay Now
            </Button>
          </div>
        </div>
      </div>
    </div>

    <Modal title="Ticket" open={showTicket} onClose={()=>setShowTicket(false)}>
      qwerty
    </Modal>
    </>
  )
}
