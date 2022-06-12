export const initialState = {
  basket: [
    {
      id: '1234',
      title: 'lean start up',
      image:
        'https://school.iqdoodle.com/wp-content/uploads/2018/09/how_to_doodle_book_05-255x300.jpg',
    },
  ],
  searching: {
    s_value: false,
  },
};

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case 'ADD_TO_BASKET':
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
    case 'no_search':
      return {
        ...state,
        searching: [...state.searching, action.item],
      };
    case 'REMOVE_FROM_BASKET':
      return { state };
    default:
      return state;
  }
};
export default reducer;
