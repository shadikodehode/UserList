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
      <div className="flex justify-between pt-1 pb-1 gap-2.5">
        <div className="flex flex-col bg-gray-400 p-2 rounded-sm flex-1 justify-center gap-2">
          <div>
            <input className=" 
              bg-gray-300 
              rounded-sm 
              hover:bg-gray-200 
              focus:bg-gray-200 
              hover:cursor-pointer 
              focus:cursor-text 
              pl-2 pr-2 pt-1 pb-1
            "
              value={draftUsername}
              onChange={(e) => setDraftUsername(e.target.value)}
            />
          </div>
          <div>
            <input className=" 
              bg-gray-300 
              rounded-sm 
              hover:bg-gray-200
              focus:bg-gray-200  
              hover:cursor-pointer 
              focus:cursor-text 
              pl-2 pr-2 pt-1 pb-1
            "
              value={draftEmail}
              onChange={(e) =>  setDraftEmail(e.target.value)}  
            />
          </div>
        </div>
        <div className="flex flex-col gap-1 font-medium text-gray-100 justify-center items-center">
          <div
          className="
            flex
            justify-center
            hover:cursor-pointer
            min-w-22
            bg-slate-700
            rounded-sm 
            hover:bg-sky-800 
            pl-2 pr-2 pt-2.5 pb-2.5
          ">
            <button
              className="hover:cursor-pointer"  
              onClick={handleSave}>Save</button>
          </div>
          <div
          className="
            flex
            justify-center
            hover:cursor-pointer
            min-w-22
            bg-rose-900 
            rounded-sm 
            hover:bg-pink-800
            pl-2 pr-2 pt-2.5 pb-2.5
          ">
            <button
              className="hover:cursor-pointer" 
              onClick={handleCancel}>Cancel</button>
          </div>
        </div>
      </div>
    )
  } 
  
  return (
    <div className="flex justify-between pt-1 pb-1 gap-2.5">
      <div className="flex flex-col bg-gray-400 p-2 rounded-sm flex-1 justify-center item">
        <span className="font-extrabold text-slate-900">{user.username}</span>
        <span className="font-medium text-slate-700">{user.email}</span>
      </div>
      <div className="flex flex-col gap-1 font-medium text-gray-100 justify-center items-center">
        <div 
          className="
            flex
            justify-center
            hover:cursor-pointer
            min-w-22
            bg-slate-700
            rounded-sm 
            hover:bg-sky-800 
            pl-2 pr-2 pt-1 pb-1
          ">
          <button 
            className="hover:cursor-pointer" 
            onClick={handleEditStart}>Edit</button>
        </div>   
        <div 
          className="
            flex
            justify-center
            hover:cursor-pointer
            min-w-22
            bg-rose-900 
            rounded-sm 
            hover:bg-pink-800
            pl-2 pr-2 pt-1 pb-1
          ">
          <button 
            className="hover:cursor-pointer"
            onClick={onDelete}>Delete</button>
        </div>
      </div>     
    </div>
  )
}