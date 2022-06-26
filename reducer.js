import {
  ADD_DELETE_DATA,
  ADD_INCOME_SUCCESS,
  ADD_EXPENSES_SUCCESS,
  ADD_SEARCH_DATA,
} from "../type";

// const initialList = () => {
//   const list = localStorage.getItem("expList");
//   let expList = [];
//   if (list) {
//     expList = JSON.parse(list);
//   }
//   return expList;
// };
const initialState = {
  incomeList: [],
  expList: [],
  query: "",
};

export const expReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_EXPENSES_SUCCESS:
      return {
        ...state,
        expList: [...state.expList, payload],
      };

      
        case ADD_INCOME_SUCCESS:
          return {
            ...state,
            incomeList: [...state.incomeList, payload],
          };

        case ADD_DELETE_DATA:
          const List = state.expList.filter((id) => id.id !== payload);
          const List1 = state.incomeList.filter((id) => id.id !== payload);
          //localStorage.setItem("expList", JSON.stringify(List));

          return {
            ...state,
            expList: List,
            incomeList:List1
          };
        case ADD_SEARCH_DATA:
          return {
            ...state,
            query: payload,
          };
        default:
          return state;
      }
  
};
