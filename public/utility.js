import toast from "react-hot-toast";

const getAllFavorite = () => {
    const all = localStorage.getItem('favorites');
    if(all) {
        const favorite = JSON.parse(all)
        return favorite
    }else {
        return []
    }
}


const addFavorite = (coffee) => {
    const favorites = getAllFavorite();
    const isExist = favorites.find((item) => item.id == coffee.id)
    if(isExist) return toast.error('You already add this item!');
    favorites.push(coffee);
    localStorage.setItem('favorites' , JSON.stringify(favorites))
    toast.success('Successfully add coffee item !');
};

const handleRemove = (id) => {
    const favorite = getAllFavorite();
    const remaining = favorite.filter((coffee) => coffee.id != id);
    localStorage.setItem('favorites' , JSON.stringify(remaining))
    toast.success('Successfully removed !!!!');
}

export {addFavorite,getAllFavorite ,handleRemove}