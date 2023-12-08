import { useParams } from "react-router-dom"
import db from "../api/db.json";

const Review = () => {

    const params = useParams()
    const review = params.slug === 'random' ? db.reviews[Math.floor(Math.random()*(db.reviews.length-1))] : db.reviews.find((review) => {
        return review.slug === params.slug
    })
    console.log();

    return<section data-name="review">
        <h2>{review?.title}</h2>
        <p>
            Price : <b>{review?.price} $</b>
        </p>
        <blockquote>
            <p>
                {review?.description}
            </p>
            <p txt="r">
                <i>- {review?.taster_name}</i>
            </p>
        </blockquote>
    </section>

}

export default Review