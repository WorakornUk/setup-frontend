// GenTicket.jsx
import React from 'react'
import { useLocation } from 'react-router-dom'


export default function GenTicket() {
  const { state } = useLocation()
  const { selectedTicketAmounts, event, total } = state

  return (
    <div className="min-h-screen flex justify-center items-center bg-black text-white">
      <div className="flex flex-col bg-gray-800 p-10 rounded-lg shadow-lg max-w-3xl w-full">
        <div className="flex justify-between items-center mb-5">
          <h1 className="text-3xl font-bold">{event.name}</h1>
          <p>{event.date}</p>
        </div>
        <div className="flex justify-between items-center mb-5">
          <p>Venue: {event.stadium.location}</p>
          <p className="bg-yellow-400 text-black px-3 py-1 rounded-full">PAID</p>
        </div>
        <div className="mb-5">
          <h2 className="text-xl font-semibold mb-3">Tickets</h2>
          <ul>
            {Object.entries(selectedTicketAmounts).map(([type, quantity]) => (
              <li key={type} className="flex justify-between items-center mb-2">
                <span>{type} ({quantity} x {event.stadium.seat_types.find(seat => seat.name === type).price} THB):</span>
                <span>{quantity * event.stadium.seat_types.find(seat => seat.name === type).price} THB</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="mb-5 flex justify-between items-center">
          <h2 className="text-xl font-semibold">Total:</h2>
          <span className="text-2xl font-bold">{total.toFixed(2)} THB</span>
        </div>
      </div>
    </div>
  )
}
