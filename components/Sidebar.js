import CreateEventButton from './CreateEventButton'
import SmallCalendar from './SmallCalendar'
import Labels from './Labels'

function Sidebar() {
    return (
        <aside className="border p-4 w-60">
            <CreateEventButton/>
            <SmallCalendar/>
            <Labels/>
        </aside>
    )
}

export default Sidebar
