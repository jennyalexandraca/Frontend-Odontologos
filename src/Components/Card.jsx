import { useState } from "react";
import { Link } from "react-router-dom";

const Card = ({ id, name, username, onFavorito }) => {
    const [isFavorito, setIsFavorito] = useState(
        JSON.parse(localStorage.getItem("favorites"))?.some(
            (fav) => fav.id === id
        ) || false
    );

    const handleFavoritoClick = () => {
        setIsFavorito(!isFavorito);
        onFavorito(id);
    };

    return (
        <div>
            <img src="/images/doctor.png" alt={name} />
            <h4>Dentista: {name}</h4>
            <p>Usuario: {username}</p>
            <button className="favButton" onClick={handleFavoritoClick}>
                <span
                    className={`material-symbols-outlined ${isFavorito ? "fav" : ""}`}
                ></span>
                {isFavorito ? "Quitar de favoritos" : "Favorito"}
            </button>
            <hr/>
            <Link to={`/detalles/${id}`}>Ver detalle</Link>
        </div>
    );
};

export default Card;
