import { Link, useParams } from "react-router-dom";
import db from "../api/db.json";

const ReviewList = props => {

    const dbReviews = db.reviews;
    
    const listWine = dbReviews.map((dbReview) => 
        <div col="1/2">
            <card>
                <Link to={`/view/${dbReview.slug}`}>
                    <h5>{dbReview.title}</h5>
                    <p>{dbReview.points} / 100</p>
                </Link>
            </card>
        </div>
    );

    return <section data-name="review-list">
        <div className="hidden">
            <h4>Categories</h4>
            <p>
                <select>
                    <option value="">All</option>
                    <option value="bordeaux">Bordeaux</option>
                    <option value="cotes-du-rhone">Côtes du Rhone</option>
                </select>
            </p>
        </div>
        <grid>
            <div>{listWine}</div>
            <div col="1/1" txt="c" className="hidden">
                <card>
                    <a href="/"><h5>Add a review</h5></a>
                </card>
            </div>
        </grid>
    </section>
}

export default ReviewList