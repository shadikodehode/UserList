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
    <div>
      <input
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input  
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button onClick={handleOnAddUser}>Add User</button>
    </div>
  )
}