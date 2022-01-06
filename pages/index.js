import Head from 'next/head'
import { getMonth } from './util'
import CalendarHeader from '../components/CalendarHeader'
import Sidebar from '../components/Sidebar'
import Month from '../components/Month'
import React, { useState, useEffect, useContext } from "react"
import GlobalContext from '../context/GlobalContext'
import EventModal from '../components/EventModal'

export default function Home() {
  const [currentMonth, setCurrentMonth] = useState(getMonth());
  const { monthIndex, showEventModal } = useContext(GlobalContext);

  useEffect(() => {
    setCurrentMonth(getMonth(monthIndex))
  }, [monthIndex]);

  return (
    <>
      {showEventModal && <EventModal/>}
      <div className='h-screen flex flex-col flex-auto'>
        <CalendarHeader />
        <div className='flex flex-1'>
          <Sidebar/>
          <Month month={currentMonth}/>
        </div>
      </div>
    </>
    
  )
}
