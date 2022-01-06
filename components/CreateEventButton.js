import GlobalContext from "../context/GlobalContext"
import { useContext } from "react"
import { GoPlus } from "react-icons/go"

function CreateEventButton() {
    const { setShowEventModal } = useContext(GlobalContext)

    return (
        <button onClick={() => setShowEventModal(true)}
        className="border px-4 py-2 rounded-full flex items-center shadow-md 
        hover:shadow-2xl">
            <GoPlus />
            <span className="pl-3 pr-7">Create</span>
        </button>
    )
}

export default CreateEventButton
