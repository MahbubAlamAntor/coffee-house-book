import { useLoaderData } from "react-router-dom";
import Card from "./Card";
import { useState } from "react";

const Coffees = () => {
    const data = useLoaderData();
    const [coffees, setCoffees] = useState(data);

    const handleSortBy = (sortBy) => {
        if(sortBy == 'popularity'){
            const sortData = [...data].sort((a,b) => b.popularity - a.popularity);
            setCoffees(sortData)
        }else if (sortBy == 'ratings'){
            const sortData = [...data].sort((a,b) => b.ratings - a.ratings);
            setCoffees(sortData)
        }
    }

    return (
        <div>
            <div className="flex justify-between items-center">
                <div><h1 className="text-2xl font-thin">Sort Coffee's by Popularity & Rating --
                </h1></div>
                <div className="space-x-4">
                    <button onClick={() => handleSortBy('popularity')} className="btn btn-warning">Sort by Popularity</button>
                    <button onClick={() => handleSortBy('ratings')} className="btn btn-warning">Sort by rating</button>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-12 gap-10">
                {
                    coffees.map(coffee => <Card key={coffee.id} coffee={coffee}></Card>)
                }
            </div>
        </div>
    );
};

export default Coffees;