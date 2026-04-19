import UserCard from "./UserCard.jsx"

export default function UserList ({ users, editingId, onEditStart, onEdit, onDelete }) {

  return(
    <div className="
      rounded-sm
      ">

      {users.map((user) => (
        <UserCard 
        key={user.id}
        user={user}
        isEditing={editingId === user.id}
        onEditStart={onEditStart}
        onEdit={onEdit}
        onDelete={() => onDelete(user.id)}
        />))}
    </div>
  )
}