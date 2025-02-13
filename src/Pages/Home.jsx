import { Outlet, useLoaderData } from "react-router-dom";
import Banner from "./Banner";
import Categories from "./Categories";
import Heading from "./Heading";

const Home = () => {
    const categories = useLoaderData();
    return (
        <div>
            <Banner></Banner>
            <Heading title={'Browse Coffees by Category'} subTitle={'Choose your desired coffee category to browse through specific coffees that fit in your taste.'}></Heading>
            <Categories categories={categories}></Categories>
            <Outlet></Outlet>
        </div>
    );
};

export default Home;