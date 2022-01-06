import React, { useContext } from "react"
import GlobalContext from "../context/GlobalContext"

function Labels() {
    const { labels, updateLabel } = useContext(GlobalContext)
    return (
        <React.Fragment>
            <p className="text-gray-500 font-bold mt-10">
                Label
            </p>
            <div className="hidden text-indigo-400"></div>
            <div className="hidden text-green-400"></div>
            <div className="hidden text-gray-400"></div>
            <div className="hidden text-blue-400"></div>
            <div className="hidden text-red-400"></div>
            <div className="hidden text-purple-400"></div>

            {labels.map(({ label: lbl, checked }, idx) => (
                <label key={idx} className="items-center mt-3 block">
                    <input type="checkbox" checked={checked} 
                    onChange={() => updateLabel({label: lbl, checked: !checked})}
                    className={`form-checkbox h-5 w-5 text-${lbl}-400 rounded focus:ring-0 cursor-pointer`}/>
                    <span className="ml-2 text-gray-700 capitalize">{lbl}</span>
                </label>
            ))}
        </React.Fragment>
    )
}

export default Labels
