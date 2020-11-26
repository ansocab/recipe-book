import React, { useState } from "react";
import "./StarRating.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as faStarSolid } from "@fortawesome/free-solid-svg-icons";

export default function StarRating() {
  const [rating, setRating] = useState(null)
  const [hover, setHover] = useState(null)
  return (
    <div className="starRating">
      {[ ...Array(5)].map((star, i) => {
        const ratingValue = i + 1;
      return (
        <>
      <label className="rating-label">
        <input type="radio" name="rating" value="ratingValue" onClick={()=>setRating(ratingValue)}/>
        <FontAwesomeIcon size="lg" icon={faStarSolid} color={ratingValue <= (hover || rating) ? "#723f5f" : "#555254"}
        onMouseEnter={()=>setHover(ratingValue)}
        onMouseLeave={()=>setHover(ratingValue)}/>
      </label> 
      </>
      )
    })}
    <p>The rating is {rating}</p>
   </div>
  )
}
