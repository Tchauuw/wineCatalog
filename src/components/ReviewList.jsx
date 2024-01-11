import { Link, Outlet, useNavigate, useParams } from "react-router-dom";
// import { useState } from "react";
import db from "../api/db.json";
const { reviews, categories } = db;

const getFilters = () => {
    const filters = categories.map((categorie) => (
      <option value={categorie.key}>{categorie.label}</option>
    ));
    return filters;
};

const ReviewList = props => {

    const params = useParams();
    
    const category = params.category || ''

    const navigate = useNavigate()

    const handleChange = (e) => {
        navigate(`/${e.target.value}`)
    }
    
    return <section data-name="review-list">
                        { props.children }
                <Outlet />
        <div className="">
            <h4>Categories</h4>
            <p>
                <select 
                    onChange={handleChange}
                    value={category}
                >
                    <option value="">All</option>
                    {getFilters()}
                </select>
            </p>
        </div>
        <grid>
            <div>{reviews.filter((dbReview) => category === '' || dbReview.category === category).map((wine) =>
                    <div col="1/2">
                        <card>
                            <Link to={`./view/${wine.slug}`}>
                                <h5>{wine.title}</h5>
                                <p>{wine.points} / 100</p>
                            </Link>
                        </card>
                    </div>
                )}</div>
            <div col="1/1" txt="c" className="">
                <card>
                    <Link to="/add"><h5>Add a review</h5></Link>
                </card>
            </div>
        </grid>
    </section>
}

export { getFilters };
export default ReviewList