import {
  PICK_RESTAURANT,
} from "../constants/constants";

const initState = {
  currentRestaurantId: null
}

export default (state = initState, action) => {
  const { type, id } = action;

  switch (type) {
    case PICK_RESTAURANT: {
      return {
        currentRestaurantId: id
      }
    }
    default: return state;
  }
}