import { Link, useParams } from "react-router-dom";
import { useState } from "react";
import db from "../api/db.json";
const { reviews, categories } = db;

const ReviewList = props => {
    const [state, setState] = useState('')

    const filters = categories.map((categorie) =>
    <option value={categorie.key}>{categorie.label}</option>
    );
    
    return <section data-name="review-list">
        <div className="">
            <h4>Categories</h4>
            <p>
                <select onChange={(e) => setState(e.target.value)}>
                    <option value="">All</option>
                    {filters}
                </select>
            </p>
        </div>
        <grid>
            <div>{reviews.filter((dbReview) => state === '' || dbReview.category === state).map((wine) =>
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