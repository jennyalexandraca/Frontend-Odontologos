import { useState, useEffect } from 'react'
import { Link, useParams } from "react-router-dom"

const DetailCard = () => {

  const [user, setUser] = useState()
  const { id } = useParams()

  useEffect(() => {
    async function fetchUser() {
      const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      const data = await response.json()
      // console.log(data, data.id, data.name, data.email)
      setUser(data)
    }
    fetchUser()
  }, [id])

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="card">
        <img src="/images/doctor.png" alt={user.name} />
        <h4>Nombre: {user.name}</h4>
        <p>Ciudad: {user.address.city}</p>
        <p>Calle: {user.address.street}</p>
        <p>Número: {user.address.suite}</p>
        <p>Email: {user.email}</p>
        <p>Teléfono: {user.phone}</p>
        <p>Sitio web: {user.website}</p>
    </div>
  )
}

export default DetailCard
