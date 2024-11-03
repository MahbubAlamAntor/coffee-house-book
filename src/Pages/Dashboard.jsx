import { useEffect, useState } from "react";
import Heading from "./Heading";
import { getAllFavorite, handleRemove } from "../../public/utility";
import Card from "./Card";

const Dashboard = () => {
    const [coffees, setCoffees] = useState([]);
    useEffect(() => {
        const favorites = getAllFavorite();
        setCoffees(favorites)
    }, []);

    const handleDeleteBtn = (id) => {
        handleRemove(id);
        const favorites = getAllFavorite();
        setCoffees(favorites);
    }

    return (
        <div>
            <Heading title={'Welcome to Dashboard'} subTitle={'Manage coffees that you have previously added as favorite. You can view or remove them from here.'}></Heading>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-12 gap-10">
                {
                    coffees.map(coffee => <Card handleDeleteBtn={handleDeleteBtn} key={coffee.id} coffee={coffee}></Card>)
                }
            </div>
        </div>
    );
};

export default Dashboard;