import React, { useState } from "react";
import { getFilters } from "./ReviewList";

const AddReview = (props) => {

    const [author, setAuthor] = useState('');
    const [title, setTitle] = useState('');
    const [wine, setWine] = useState('');
    const [category, setCategory] = useState('');
    const [price, setPrice] = useState('');
    const [review, setReview] = useState('');

    const handleAuthor = event =>{
        setAuthor(event.target.value);
    }

    const handleTitle = event => {
        setTitle(event.target.value);
    }

    const handleWine = event => {
        setWine(event.target.value);
    }

    const handleCategory = event => {
        setCategory(event.target.value);
    }

    const handlePrice = event => {
        setPrice(event.target.value);
    }

    const handleReview = event => {
        setReview(event.target.value);
    }

    return<form>
        <section data-name="adding">
            <input 
                type="text" 
                placeholder="Author"
                value={author}
                onChange={handleAuthor}
            />
            <input 
                type="text" 
                placeholder="Title"
                value={title}
                onChange={handleTitle}
            />
            <input
                type="text" 
                placeholder="Wine"
                value={wine}
                onChange={handleWine}
            />
            <select
                value={category}
                onChange={handleCategory}
            >
	            <option>Select an option</option>
                { getFilters() }
            </select>
            <input 
                type="number" 
                placeholder="Price"
                value={price}
                onChange={handlePrice}
            />
            <input 
                type="text" 
                placeholder="Review"
                value={review}
                onChange={handleReview}
            />
            <input 
                type="submit"
                placeholder="Envoyer"
            />
        </section>  
    </form>
}

export default AddReview;