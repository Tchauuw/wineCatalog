import db from "../api/db.json";

const ReviewList = props => {

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
            <div col="1/2">
                <card>
                    <a href="/">
                        <h5>{db.reviews[0].title}</h5>
                        <p>{db.reviews[0].points} / 100</p>
                    </a>
                </card>
            </div>
            <div col="1/2">
                <card>
                    <a href="/">
                        <h5>{db.reviews[1].title}</h5>
                        <p>{db.reviews[1].points} / 100</p>
                    </a>
                </card>
            </div>
            <div col="1/1" txt="c" className="hidden">
                <card>
                    <a href="/"><h5>Add a review</h5></a>
                </card>
            </div>
        </grid>
    </section>
}

export default ReviewList