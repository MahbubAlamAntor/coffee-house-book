import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import Card from "./Card";
import { useEffect, useState } from "react";

const CoffeeCards = () => {
    const [coffees, setCoffees] = useState([]);
    const navigate = useNavigate();
    const data = useLoaderData();
    const { category } = useParams();

    useEffect(() => {
        if (category) {
            const filteredByCategory = [...data].filter((coffee) => coffee.category === category);
            setCoffees(filteredByCategory)
        } else {
            setCoffees(data.slice(0, 6))
        }
    }, [data, category])

    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-12 gap-10">
                {
                    coffees.map(coffee => <Card key={coffee.id} coffee={coffee}></Card>)
                }
            </div>
            <button className="btn btn-warning" onClick={() => navigate('/coffees')}>View All</button>
        </div>
    );
};

export default CoffeeCards;