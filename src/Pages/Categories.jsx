import { NavLink } from "react-router-dom";

const Categories = ({categories}) => {
    return (
        <div>
            <div role="tablist" className="tabs tabs-lifted">
                {
                    categories?.map((category) => 
                    <NavLink key={category.id} to={`/category/${category.category}`} role="tab" className={({isActive}) => `tab ${isActive ? 'tab-active' : ''}`}>
                        {category.category}
                    </NavLink>)
                }
            </div>
        </div>
    );
};

export default Categories;