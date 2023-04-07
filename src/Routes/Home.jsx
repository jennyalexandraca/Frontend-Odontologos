import { useEffect, useState } from "react"
import Card from "../Components/Card"

const Home = () => {
    const [dentistas, setDentistas] = useState([])
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchDentistas = async () => {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/users');
                const data = await response.json()
                setDentistas(data)
            } catch (error) {
                setError("Ocurrió un error inesperado, lo sentimos.")
            }
        };
        fetchDentistas();
    }, []);

    const handleFavorito = (id) => {
        const favs = JSON.parse(localStorage.getItem("favorites")) || []
        const exists = favs.some((fav) => fav.id === id)
        if (exists) {
            localStorage.setItem(
                "favorites",
                JSON.stringify(favs.filter((fav) => fav.id !== id))
            )
        } else {
            const dentista = dentistas.find((dentista) => dentista.id === id);
            localStorage.setItem(
                "favorites",
                JSON.stringify([...favs, dentista])
            )
        }
    }

    return (
        <div className="card-grid container">
            {dentistas.map(({ id, name, username }) => (
                <Card
                    key={id}
                    id={id}
                    name={name}
                    username={username}
                    onFavorito={handleFavorito}
                />
            ))}
            {error && <p>{error}</p>}
        </div>
    )
}

export default Home
