import { Link, useLocation } from "react-router-dom";
import { FaTrashCan } from "react-icons/fa6";

// eslint-disable-next-line react/prop-types
const Card = ({ coffee, handleDeleteBtn }) => {
    const { name, image, category, popularity, origin, type, rating, id } = coffee || {};
    const { pathname } = useLocation();
    return (
        <div className="flex relative">
            <Link to={`/coffees/${id}`}>
                <div className="card bg-base-100 w-full shadow-xl">
                    <figure className="h-60">
                        <img
                            src={image}
                            alt={name} />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">Name: {name}</h2>
                        <p>Category: {category}</p>
                        <p>Types: {type}</p>
                        <p>Origin: {origin}</p>
                        <p>Origin: {rating}</p>
                        <p>Popular: {popularity}</p>
                    </div>
                </div>
            </Link>
            {pathname === '/dashboard' &&
                <div onClick={() => handleDeleteBtn(id)} className="absolute cursor-pointer -top-5 -right-5 bg-warning p-4 rounded-full"><FaTrashCan size={20}></FaTrashCan>
                </div>}
        </div>
    );
};

export default Card;