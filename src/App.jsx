import UserForm from "./Components/UserForm.jsx"
import { useUsers } from "./hooks/useUsers.js"
import UserList from "./Components/UserList.jsx"


function App() {
  const { users, editingId, handleAddUser, handleDelete, handleEdit, handleEditStart, handleReset } = useUsers()

  return (
    <>
      <div className="flex items-center justify-center bg-gray-800 min-h-screen font-inter ">
        <div className="flex flex-col gap-6">
            <div>

              <UserForm 
                onAddUser={handleAddUser}

              />
            </div>
          <div>
            <div>
              
              <UserList 
                users={users}
                editingId={editingId}
                onEditStart={handleEditStart}
                onEdit={handleEdit}
                onDelete={handleDelete}
                
              />
            </div>
            <div className="flex justify-end mt-2">

              <button 
                className="
                  flex
                  justify-center
                  hover:cursor-pointer
                  min-w-22
                  bg-slate-500
                  rounded-sm 
                  hover:bg-slate-400 
                  pl-2 pr-2 pt-2 pb-2
                  text-gray-100
                  font-semibold
                "
                onClick={handleReset}>Reset</button>
              
            </div>

          </div>
        </div>
      </div>
    </>
  )
}
export default App
