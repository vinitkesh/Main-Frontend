"use client"
const StarRating = ({ rating, onRatingChange }) => {
  const handleStarClick = (value) => {
    onRatingChange(value);
  };

  return (
    <div className="flex">
      {[1, 2, 3, 4, 5].map((value) => (
        <span
          key={value}
          className={`star text-4xl cursor-pointer ${value <= rating ? 'text-yellow-500' : ''}`}
          onClick={() => handleStarClick(value)}
        >
          ★
        </span>
      ))}
      <input type="hidden"  name="rating" value={rating} />
    </div>
  );
};

export default StarRating;
