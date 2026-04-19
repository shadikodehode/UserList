import { useState } from "react";

export default function UserForm ({ onAddUser }) {
  
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  
  const handleOnAddUser = () => {
    if (!username || !email) return
    onAddUser(username, email)
    setUsername('')
    setEmail('')
  }

  return (
    <div className="flex gap-2 font-display">
      <input
        className="
          bg-gray-300 
          rounded-sm 
          hover:bg-gray-200 
          focus:bg-gray-200 
          hover:cursor-pointer 
          focus:cursor-text 
          pl-2 pr-2 pt-1 pb-1
        "

        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Username..."

      />
      
      <input  
        className="
          bg-gray-300 
          rounded-sm 
          hover:bg-gray-200 
          focus:bg-gray-200 
          hover:cursor-pointer 
          focus:cursor-text 
          pl-2 pr-2 pt-1 pb-1
          "

        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email..."
      
      />
      
      <button
        className="
          bg-slate-500 
          rounded-sm 
          hover:bg-slate-400 
          hover:cursor-pointer 
          pl-2 pr-2 pt-1 pb-1
          font-semibold
          text-gray-100
        " 

        onClick={handleOnAddUser}>
          Add User

      </button>
    </div>
  )
}