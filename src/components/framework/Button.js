import React from 'react'

function Button({ children, onClick }) {
    return (
        <button onClick={onClick} className="focus:bg-white bg-indigo-400 focus:text-indigo-400 flex-1 mx-1  px-5 py-2 text-sm rounded-lg text-white">{children}</button>
    )
}
const btnStyle = {
    backgroundColor: '#01b4df'
}
export default Button
