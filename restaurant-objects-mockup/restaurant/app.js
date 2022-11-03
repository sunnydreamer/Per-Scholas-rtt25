// Create A Restaurant Site -[HTML,CSS,JS]
// Create the Following Objects:
// MENU [Brunch, Lunch, Dinner,Desert, Beverages Entrees,Appetizers]
// --> Each menu item must have MINIMUM 6items with at least 4attributes/properties..

const menu = {
  brunch: {
    pancake: {
      price: 10,
      calories: 500,
      glutenFree: true,
      discount: 0,
    },
    tart: {
      price: 10,
      calories: 800,
      glutenFree: false,
      discount: 2,
    },
    CoffeeCake: {
      price: 7,
      calories: 900,
      glutenFree: false,
      discount: 0,
    },
    eggsBenedict: {
      price: 12,
      calories: 1200,
      glutenFree: true,
      discount: 5,
    },
    kimchiFriedRice: {
      price: 15,
      calories: 1100,
      glutenFree: false,
      discount: 3,
    },
    frenchToastSticks: {
      price: 9,
      calories: 500,
      glutenFree: true,
      discount: 0,
    },
  },
  lunch: {
    casserole: {
      price: 18,
      calories: 1500,
      glutenFree: true,
      discount: 1,
    },
    veggieBakedRatatouille: {
      price: 17,
      calories: 900,
      glutenFree: true,
      discount: 0,
    },
    cheeseLasagna: {
      price: 16,
      calories: 1500,
      glutenFree: true,
      discount: 2,
    },
    barbecueRibs: {
      price: 23,
      calories: 1900,
      glutenFree: false,
      discount: 0,
    },
    veganQuesadilla: {
      price: 21,
      calories: 900,
      glutenFree: true,
      discount: 5,
    },
    grilledSausage: {
      price: 12,
      calories: 1200,
      glutenFree: false,
      discount: 0,
    },
  },
  dinner: {
    casserole: {
      price: 18,
      calories: 1500,
      glutenFree: true,
      discount: 1,
    },
    veggieBakedRatatouille: {
      price: 17,
      calories: 900,
      glutenFree: true,
      discount: 0,
    },
    cheeseLasagna: {
      price: 16,
      calories: 1500,
      glutenFree: true,
      discount: 2,
    },
    barbecueRibs: {
      price: 23,
      calories: 1900,
      glutenFree: false,
      discount: 0,
    },
    veganQuesadilla: {
      price: 21,
      calories: 900,
      glutenFree: true,
      discount: 5,
    },
    grilledSausage: {
      price: 12,
      calories: 1200,
      glutenFree: false,
      discount: 0,
    },
  },
  desert: {
    casserole: {
      price: 18,
      calories: 1500,
      glutenFree: true,
      discount: 1,
    },
    veggieBakedRatatouille: {
      price: 17,
      calories: 900,
      glutenFree: true,
      discount: 0,
    },
    cheeseLasagna: {
      price: 16,
      calories: 1500,
      glutenFree: true,
      discount: 2,
    },
    barbecueRibs: {
      price: 23,
      calories: 1900,
      glutenFree: false,
      discount: 0,
    },
    veganQuesadilla: {
      price: 21,
      calories: 900,
      glutenFree: true,
      discount: 5,
    },
    grilledSausage: {
      price: 12,
      calories: 1200,
      glutenFree: false,
      discount: 0,
    },
  },
  beverage: {
    casserole: {
      price: 18,
      calories: 1500,
      glutenFree: true,
      discount: 1,
    },
    veggieBakedRatatouille: {
      price: 17,
      calories: 900,
      glutenFree: true,
      discount: 0,
    },
    cheeseLasagna: {
      price: 16,
      calories: 1500,
      glutenFree: true,
      discount: 2,
    },
    barbecueRibs: {
      price: 23,
      calories: 1900,
      glutenFree: false,
      discount: 0,
    },
    veganQuesadilla: {
      price: 21,
      calories: 900,
      glutenFree: true,
      discount: 5,
    },
    grilledSausage: {
      price: 12,
      calories: 1200,
      glutenFree: false,
      discount: 0,
    },
  },
  entrees: {
    casserole: {
      price: 18,
      calories: 1500,
      glutenFree: true,
      discount: 1,
    },
    veggieBakedRatatouille: {
      price: 17,
      calories: 900,
      glutenFree: true,
      discount: 0,
    },
    cheeseLasagna: {
      price: 16,
      calories: 1500,
      glutenFree: true,
      discount: 2,
    },
    barbecueRibs: {
      price: 23,
      calories: 1900,
      glutenFree: false,
      discount: 0,
    },
    veganQuesadilla: {
      price: 21,
      calories: 900,
      glutenFree: true,
      discount: 5,
    },
    grilledSausage: {
      price: 12,
      calories: 1200,
      glutenFree: false,
      discount: 0,
    },
  },
  appetizers: {
    casserole: {
      price: 18,
      calories: 1500,
      glutenFree: true,
      discount: 1,
    },
    veggieBakedRatatouille: {
      price: 17,
      calories: 900,
      glutenFree: true,
      discount: 0,
    },
    cheeseLasagna: {
      price: 16,
      calories: 1500,
      glutenFree: true,
      discount: 2,
    },
    barbecueRibs: {
      price: 23,
      calories: 1900,
      glutenFree: false,
      discount: 0,
    },
    veganQuesadilla: {
      price: 21,
      calories: 900,
      glutenFree: true,
      discount: 5,
    },
    grilledSausage: {
      price: 12,
      calories: 1200,
      glutenFree: false,
      discount: 0,
    },
  },
};

const displaySpecials = () => {
  let mainTitle = document.querySelector(".rainbow");
  mainTitle.addEventListener("click", () => {
    mainTiltle.innerText = menu.salad.small;
  });
  //object select
};
