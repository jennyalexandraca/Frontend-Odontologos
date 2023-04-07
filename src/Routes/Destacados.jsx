import { useEffect, useState } from "react";

function Destacados () {
    const [favs, setFavs] = useState([]);

    useEffect(() => {
        const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
        setFavs(favorites);
    }, []);

    return (
        <div className="card-grid container">
            {favs.map((fav, index) => (
                <div key={index}>
                    <img src="/images/doctor.png" alt={fav.name} />
                    <h4>Dentista: {fav.name}</h4>
                    <p>Usuario: {fav.username}</p>
                </div>
            ))}
        </div>
    );
}

export default Destacados
