import { Link, useNavigate, useParams } from "react-router-dom";
// import { useState } from "react";
import db from "../api/db.json";
const { reviews, categories } = db;

const ReviewList = props => {

    const params = useParams();
    
    const category = params.category || ''

    const navigate = useNavigate()

    const filters = categories.map((categorie) =>
    <option value={categorie.key}>{categorie.label}</option>
    );

    const handleChange = (e) => {
        navigate(`/${e.target.value}`)
    }

    
    return <section data-name="review-list">
        <div className="">
            <h4>Categories</h4>
            <p>
                <select 
                    onChange={handleChange}
                    value={category}
                >
                    <option value="">All</option>
                    {filters}
                </select>
            </p>
        </div>
        <grid>
            <div>{reviews.filter((dbReview) => category === '' || dbReview.category === category).map((wine) =>
                    <div col="1/2">
                        <card>
                            <Link to={`/view/${wine.slug}`}>
                                <h5>{wine.title}</h5>
                                <p>{wine.points} / 100</p>
                            </Link>
                        </card>
                    </div>
                )}</div>
            <div col="1/1" txt="c" className="hidden">
                <card>
                    <a href="/"><h5>Add a review</h5></a>
                </card>
            </div>
        </grid>
    </section>
}

export default ReviewList