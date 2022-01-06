import dayjs from "dayjs";
import { useState, useEffect, useContext } from "react";
import GlobalContext from "../context/GlobalContext";

function Day({day, rowIdx}) {
    const [dayEvents, setDayEvents] = useState([])

    const { setDaySelected, setShowEventModal, filteredEvents, setSelectedEvent } = useContext(GlobalContext)

    useEffect(() => {
        const events = filteredEvents.filter(evt => 
            dayjs(evt.day).format("DD-MM-YY") === day.format("DD-MM-YY"));
        setDayEvents(events)
    }, [filteredEvents, day])

    function getCurrentDayClass() {
        return day.format("DD_MM_YY") === dayjs().format("DD_MM_YY") ? 
        'bg-blue-600 text-white rounded-full w-7' : "";
    }
    return (
        <div className="border border-black-200 flex flex-col">
            <header className="flex flex-col items-center">
                {rowIdx === 0 ? 
                <p className="text-sm mt-1">
                    {day.format('ddd').toUpperCase()}
                </p>:""}
                
                <p className={`text-sm p-1 my-1 text-center ${getCurrentDayClass()}`}>
                    {day.format('DD')}
                </p>
            </header>
            <div className="flex-1 cursor-pointer" onClick={()=> {
                setDaySelected(day)
                setShowEventModal(true)
            }}>
                <div className="hidden bg-indigo-200"></div>
                <div className="hidden bg-green-200"></div>
                <div className="hidden bg-gray-200"></div>
                <div className="hidden bg-blue-200"></div>
                <div className="hidden bg-red-200"></div>
                <div className="hidden bg-purple-200"></div>
                {dayEvents.map((evt, idx) => (
                    <div
                        key={idx}
                        onClick={() => setSelectedEvent(evt)}
                        className={`bg-${evt.label}-200 p-1 mr-3 text-black-400 text-sm rounded mb-1 truncate`}
                    >
                        {evt.title}
                    </div>
                ))}
            </div>
            
        </div>
    )
}

export default Day
