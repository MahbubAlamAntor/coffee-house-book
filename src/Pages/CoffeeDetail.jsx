import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { addFavorite, getAllFavorite } from "../../public/utility";

const CoffeeDetail = () => {
    const { id } = useParams();
    const data = useLoaderData();
    const [coffee, setCoffee] = useState({});
    const [isFavorite, setIsFavorite] = useState(false)


    const handleFavoriteBtn = (coffee) => {
        addFavorite(coffee);
        setIsFavorite(true);
    }

    useEffect(() => {
        const newData = data.find((data) => data.id == id);
        setCoffee(newData);
        const favorites= getAllFavorite();
        const isExist = favorites.find((coffee) => coffee.id == newData.id)
        if(isExist) {
            setIsFavorite(true)
        }
    }, [data, id])

    

    return (
        <div className="flex gap-4">
            <div >
                <img className="rounded-xl" src={coffee.image} alt="" />
            </div>
            <button disabled={isFavorite} onClick={() => handleFavoriteBtn(coffee)} className="bg-purple-100 text-purple-800 p-4 rounded-xl"> Add To Favorite </button>
        </div>
    );
};

export default CoffeeDetail;