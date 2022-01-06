import dayjs from 'dayjs';
import React, { useContext } from 'react';
import GlobalContext from '../context/GlobalContext';
import { GrNext, GrPrevious } from "react-icons/gr"

function CalendarHeader() {
    const {monthIndex, setMonthIndex} = useContext(GlobalContext)

    function handlePrevMonth(){
        setMonthIndex(monthIndex-1)
    }
    function handleNextMonth(){
        setMonthIndex(monthIndex+1);
    }
    function handleReset(){
        setMonthIndex(monthIndex === dayjs().month() ? 
        monthIndex + 0.1 : dayjs().month());
    }

    return (
        <header className="px-4 py-2 flex items-center">
            <img src="https://www.nicepng.com/png/full/177-1772487_cool-logo-png-triangle.png" 
            alt="calendar"
            className="mr-2 w-12 rounded-full"/>
            <h1 className='mr-10 text-xl text-gray-500 font-bold'>Calendar</h1>
            <button onClick={handleReset} className='border rounded py-2 px-4 mr-5'>
                Today
            </button>
            <button onClick={handlePrevMonth}>
                <GrPrevious/>
            </button>
            <button onClick={handleNextMonth}>
                <GrNext/>
            </button>
            <h2 className="ml-4 text-xl text-gray-500 font-bold">
                {dayjs(new Date(dayjs().year(), monthIndex)).format("MMMM YYYY")}
            </h2>
        </header>
    )
}

export default CalendarHeader
