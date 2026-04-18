import { useState } from "react";
import { mockData } from "../data/mockData";

export function useUsers() {
  const [users, setUsers] = useState(
    mockData.map((user) => ({...user, id: crypto.randomUUID() }))
  )

  const [editingId, setEditingId] = useState(null)

  const handleAddUser = (username, email)  => {
    const newUser = { id: crypto.randomUUID(), username, email}
    setUsers((prev) => [...prev, newUser])
  }

  const handleDelete = (id) => {
    setUsers((prev) => prev.filter((user) => user.id !== id))
  }

  const handleEdit = (id, username, email) => {
    setUsers((prev) => prev.map((user) => {
      if (user.id ===  id) return {...user, username, email}
      return user
    }))
  }

  const handleEditStart = (id) => {
    setEditingId(id)
  }

  const handleReset = () => {
    setUsers(mockData.map((user) => ({...user, id: crypto.randomUUID() })))
  }

  return { users, editingId, handleAddUser, handleDelete, handleEdit, handleEditStart, handleReset }
}