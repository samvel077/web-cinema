import React, { useState } from "react";
import StarRatingComponent from "react-star-rating-component";
import { starColorChanger } from "../redux/action";
import { connect } from "react-redux";

const StarRating = ({
  starColorChanger,
  showName,
  showNameFromState,
}) => {
  const [rating, setRating] = useState(() => ({
    rating: 0,
  }));

  async function onStarClick() {
    if (rating.rating) {
      setRating({ rating: 0 });
      starColorChanger(showName, rating.rating);
    } else {
      setRating({ rating: 1 });
      starColorChanger(showName, rating.rating);
    }
  }

  if (!rating.rating && showNameFromState.includes(showName)) {
    setRating({ rating: 1 });
  } else if (rating.rating && !showNameFromState.includes(showName)) {
    setRating({ rating: 0 });
  }

  return (
    <h1>
      <StarRatingComponent
        name="rate1"
        editing={true}
        starCount={1}
        value={rating.rating}
        onStarClick={onStarClick}
      />
    </h1>
  );
};

const mapStateToProps = (state) => ({
  showNameFromState: state.showName,
});

const mapDispatchToProps = {
  starColorChanger,
};

export default connect(mapStateToProps, mapDispatchToProps)(StarRating);
