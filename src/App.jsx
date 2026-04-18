import UserForm from "./Components/UserForm.jsx"
import { useUsers } from "./hooks/useUsers.js"
import UserList from "./Components/UserList.jsx"


function App() {
  const { users, editingId, handleAddUser, handleDelete, handleEdit, handleEditStart, handleReset } = useUsers()

  return (
    <>
      <UserForm 
        onAddUser={handleAddUser}
      />

      <UserList 
        users={users}
        editingId={editingId}
        onEditStart={handleEditStart}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />

      <button onClick={handleReset}>Reset</button>
    </>
  )
}
export default App
