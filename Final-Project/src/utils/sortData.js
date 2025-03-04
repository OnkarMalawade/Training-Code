const sortData = (state, action) => {
  switch (action.type) {
    case "PRICE_LOW_TO_HIGH":
        return [...state].sort((a, b) => a.price - b.price);
    case "PRICE_HIGH_TO_LOW":
        return [...state].sort((a, b) => b.price - a.price);
    case "RATING_HIGH":
        return [...state].sort((a, b) => b.rating - a.rating);
    case "UPDATE_PRODUCTS": 
        return action.payload;
    default:
        return state;
  }
};
  
export default sortData;
  