import { useState } from "react";

export default function UserCard ({ user, onDelete, onEdit, isEditing, onEditStart }) {
  const [draftUsername, setDraftUsername] = useState('')
  const [draftEmail, setDraftEmail] = useState('')

  const  handleEditStart = () => {
    setDraftUsername(user.username)
    setDraftEmail(user.email)
    onEditStart(user.id)
  }

  const handleSave = () => {
    onEdit(user.id, draftUsername,  draftEmail)
    onEditStart(null)
  }

  const handleCancel = () => {
    onEditStart(null)
  }

  if (isEditing) {
    return(
      <div>
        <input
          value={draftUsername}
          onChange={(e) => setDraftUsername(e.target.value)}
        />
        <input
          value={draftEmail}
          onChange={(e) =>  setDraftEmail(e.target.value)}  
        />
        <button onClick={handleSave}>Save</button>
        <button onClick={handleCancel}>Cancel</button>
      </div>
    )
  }
  
  return (
    <div>
      <span>{user.username}</span>
      <span>{user.email}</span>
      <button onClick={handleEditStart}>Edit</button>
      <button onClick={onDelete}>Delete</button>
    </div>
  )
}