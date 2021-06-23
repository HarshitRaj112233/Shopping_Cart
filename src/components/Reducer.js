export const reducer = (state, action) => {
  switch (action.type) {
    case "Clear_ALL_Item":
      return {
        ...state,
        item: [],
      };

    case "REMOVE_ITEM":
      return {
        ...state,
        item: state.item.filter((element) => {
          return element.id !== action.payload;
        }),
      };

    case "Increase":
      return {
        ...state,
        item: state.item.map((ele) => {
          if (ele.id === action.payload) {
            return {
              ...ele,
              quantity: ele.quantity + 1,
            };
          }
          return ele;
        }),
      };
    case "Decrease":
      return {
        ...state,
        item: state.item.map((ele) => {
          if (ele.id === action.payload) {
            if (ele.quantity <= 0) {
            } else {
              return {
                ...ele,
                quantity: ele.quantity - 1,
              };
            }
          }
          return ele;
        }),
      };
    // case "GET_TOTAL":
    //   return {
    //     ...state,
    //     totalItem: state.item.reduce(
    //       (acc, ele) => {
    //         let quantity = ele.quantity;
    //         acc.totalItem += quantity;
    //         // return acc;
    //         // console.log(quantity, ele);
    //         console.log(acc.totalItem);
    //         return acc.totalItem;
    //       },
    //       { totalItem: 0 }
    //     ),
    //   };
    default:
      break;
  }
  if ((action.type = "GET_TOTAL")) {
    let { totalItem, totalAmount } = state.item.reduce(
      (acc, ele) => {
        // console.log("acc", acc.totalItem, ele);
        let { quantity, price } = ele;
        acc.totalAmount += price * quantity;
        // console.log(quantity);
        acc.totalItem += quantity;
        return acc;
      },
      { totalItem: 0, totalAmount: 0 }
    );
    return { ...state, totalItem, totalAmount };
  }
  // if ((action.type = "GET_TOTAL_AMOUNT")) {
  //   let { totalAmount } = state.item.reduce(
  //     (acc, ele) => {
  //       console.log("j");
  //       let { price } = ele;
  //       acc.totalAmount += price;
  //       console.log(price);
  //       return acc;
  //     },

  //   );
  //   return { ...state, totalAmount };
  // }
  // if (action.type === "Increase") {
  //   let updatedcart = state.item.map((ele) => {
  //     if (ele.id === action.payload) {
  //       return { ...ele, quantity: ele.quantity + 1 };
  //     }
  //     return ele;
  //   });
  //   return { ...state, item: updatedcart };
  // }
  // if (action.type === "Decrease") {
  //   let updatedcart = state.item.map((ele) => {
  //     if (ele.id === action.payload) {
  //       return { ...ele, quantity: ele.quantity - 1 };
  //     }
  //     return ele;
  //   });
  //   return { ...state, item: updatedcart };
  // }

  return state;
};
