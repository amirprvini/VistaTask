// import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// import { productType } from "../../../types/product.type";

// const initialProducts: productType[] = Array.from({ length: 5 }, (_, index) => ({
//   id: index + 1,
//   image: "/images/vecteezy_beef-burger-cutout_23522925.png",
//   title: "Cheese Burger",
//   weight: "150",
//   price: "22.37",
//   calories: "",
//   ingredients: [
//     "Cheese Burger cheese",
//     "Lettuce",
//     "Tomato",
//     "Onion",
//     "Pickles",
//     "Burger Patty",
//   ],
//   vegan: false,
//   readOnly: false,
// }));

// export interface ProductsListState {
//   productsList: productType[];
// }

// export const productsSlice = createSlice({
//   name: "productsList",
//   initialState: {
//     productsList: initialProducts,
//   } as ProductsListState,

//   reducers: {
//     addProduct: (state, action: PayloadAction<productType>) => {
//       state.productsList.push(action.payload);
//     },
//   },
// });

// export const { addProduct } = productsSlice.actions;
// export default productsSlice.reducer;
 


// Import necessary functions and types
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { productType, productsListType } from "../../../types/product.type";

// Define the initial products list with the specified categories
const initialProductsList: productsListType[] = [
  {
    categoryName: "maincourses",
    filteredProductsList : [] ,
    originalProductsList: [
  {
    id: 1,
    image: "/images/vecteezy_beef-burger-cutout_23522925.png",
    title: "Cheese Burger",
    weight: "150g",
    price: "22.37",
    calories: "500",
    ingredients: ["Cheese", "Lettuce", "Tomato", "Onion", "Pickles", "Patty"],
    vegan: false,
    readOnly: false,
  },
  {
    id: 2,
    image: "/images/vecteezy_beef-burger-cutout_23522925.png",
    title: "Grilled Chicken",
    weight: "200g",
    price: "18.50",
    calories: "350",
    ingredients: ["Chicken", "Olive Oil", "Garlic", "Lemon", "Rosemary"],
    vegan: false,
    readOnly: false,
  },
  {
    id: 3,
    image: "/images/vecteezy_beef-burger-cutout_23522925.png",
    title: "Vegan Burger",
    weight: "180g",
    price: "19.99",
    calories: "400",
    ingredients: ["Vegan Patty", "Lettuce", "Tomato", "Onion", "Pickles"],
    vegan: true,
    readOnly: false,
  },
  {
    id: 4,
    image: "/images/vecteezy_beef-burger-cutout_23522925.png",
    title: "Sushi Platter",
    weight: "300g",
    price: "30.00",
    calories: "600",
    ingredients: ["Rice", "Fish", "Seaweed", "Avocado", "Soy Sauce"],
    vegan: false,
    readOnly: false,
  },
  {
    id: 5,
    image: "/images/vecteezy_beef-burger-cutout_23522925.png",
    title: "Pasta Alfredo",
    weight: "250g",
    price: "15.75",
    calories: "450",
    ingredients: ["Pasta", "Cream", "Parmesan", "Garlic", "Butter"],
    vegan: false,
    readOnly: false,
  },
],

  },
  {
    categoryName: "sidedishes",
    filteredProductsList : [] ,
    originalProductsList: [
  {
    id: 1,
    image: "/images/vecteezy_ai-generated-french-fries-with-no-background-clutter_39557853.png",
    title: "French Fries",
    weight: "200g",
    price: "5.99",
    calories: "300",
    ingredients: ["Potatoes", "Oil", "Salt"],
    vegan: true,
    readOnly: false,
  },
  {
    id: 2,
    image: "/images/vecteezy_ai-generated-french-fries-with-no-background-clutter_39557853.png",
    title: "Garlic Bread",
    weight: "150g",
    price: "4.50",
    calories: "250",
    ingredients: ["Bread", "Garlic", "Butter", "Parsley"],
    vegan: false,
    readOnly: false,
  },
  {
    id: 3,
    image: "/images/vecteezy_ai-generated-french-fries-with-no-background-clutter_39557853.png",
    title: "Onion Rings",
    weight: "180g",
    price: "6.20",
    calories: "350",
    ingredients: ["Onions", "Flour", "Oil", "Breadcrumbs"],
    vegan: true,
    readOnly: false,
  },
  {
    id: 4,
    image: "/images/vecteezy_ai-generated-french-fries-with-no-background-clutter_39557853.png",
    title: "Mozzarella Sticks",
    weight: "120g",
    price: "7.80",
    calories: "400",
    ingredients: ["Mozzarella", "Breadcrumbs", "Oil"],
    vegan: false,
    readOnly: false,
  },
  {
    id: 5,
    image: "/images/vecteezy_ai-generated-french-fries-with-no-background-clutter_39557853.png",
    title: "Side Salad",
    weight: "100g",
    price: "3.99",
    calories: "120",
    ingredients: ["Lettuce", "Tomatoes", "Cucumber", "Carrots", "Vinaigrette"],
    vegan: true,
    readOnly: false,
  },
],

  },
  {
    categoryName: "drinks",
    filteredProductsList : [] ,
    originalProductsList: [
  {
    id: 1,
    image: "/images/vecteezy_glass-of-fresh-juice-clipart-design-illustration_9383650.png",
    title: "Soft Drink",
    weight: "330ml",
    price: "2.50",
    calories: "150",
    ingredients: ["Water", "Sugar", "Flavoring", "Carbonation"],
    vegan: true,
    readOnly: false,
  },
  {
    id: 2,
    image: "/images/vecteezy_glass-of-fresh-juice-clipart-design-illustration_9383650.png",
    title: "Orange Juice",
    weight: "300ml",
    price: "3.00",
    calories: "120",
    ingredients: ["Oranges", "Water", "Sugar"],
    vegan: true,
    readOnly: false,
  },
  {
    id: 3,
    image: "/images/vecteezy_glass-of-fresh-juice-clipart-design-illustration_9383650.png",
    title: "Coffee",
    weight: "250ml",
    price: "4.00",
    calories: "10",
    ingredients: ["Water", "Coffee Beans"],
    vegan: true,
    readOnly: false,
  },
  {
    id: 4,
    image: "/images/vecteezy_glass-of-fresh-juice-clipart-design-illustration_9383650.png",
    title: "Iced Tea",
    weight: "350ml",
    price: "2.80",
    calories: "80",
    ingredients: ["Water", "Tea Leaves", "Sugar", "Lemon"],
    vegan: true,
    readOnly: false,
  },
  {
    id: 5,
    image: "/images/vecteezy_glass-of-fresh-juice-clipart-design-illustration_9383650.png",
    title: "Fruit Smoothie",
    weight: "400ml",
    price: "5.50",
    calories: "250",
    ingredients: ["Banana", "Strawberry", "Milk", "Honey"],
    vegan: false,
    readOnly: false,
  },
],

  },
  {
    categoryName: "other",
    filteredProductsList : [] ,
    originalProductsList: [
  {
    id: 1,
    image: "/images/vecteezy_ai-generated-tomato-sauce-isolated-on-transparent-background_37929115.png",
    title: "Ketchup",
    weight: "50ml",
    price: "1.20",
    calories: "40",
    ingredients: ["Tomatoes", "Vinegar", "Sugar", "Spices"],
    vegan: true,
    readOnly: false,
  },
  {
    id: 2,
    image: "/images/vecteezy_ai-generated-tomato-sauce-isolated-on-transparent-background_37929115.png",
    title: "Mustard",
    weight: "50ml",
    price: "1.00",
    calories: "10",
    ingredients: ["Mustard Seeds", "Vinegar", "Salt", "Turmeric"],
    vegan: true,
    readOnly: false,
  },
  {
    id: 3,
    image: "/images/vecteezy_ai-generated-tomato-sauce-isolated-on-transparent-background_37929115.png",
    title: "Mayonnaise",
    weight: "50ml",
    price: "1.50",
    calories: "100",
    ingredients: ["Eggs", "Oil", "Vinegar", "Lemon Juice"],
    vegan: false,
    readOnly: false,
  },
  {
    id: 4,
    image: "/images/vecteezy_ai-generated-tomato-sauce-isolated-on-transparent-background_37929115.png",
    title: "Barbecue Sauce",
    weight: "50ml",
    price: "1.75",
    calories: "60",
    ingredients: ["Tomato Paste", "Brown Sugar", "Vinegar", "Spices"],
    vegan: true,
    readOnly: false,
  },
  {
    id: 5,
    image: "/images/vecteezy_ai-generated-tomato-sauce-isolated-on-transparent-background_37929115.png",
    title: "Hot Sauce",
    weight: "50ml",
    price: "1.30",
    calories: "5",
    ingredients: ["Chili Peppers", "Vinegar", "Salt"],
    vegan: true,
    readOnly: false,
  },
],
  },
];

export interface ProductsListState {
  categories: productsListType[]; 
}


export const productsSlice = createSlice({
  name: "productsList",
  initialState: {
    categories: initialProductsList, 
  } as ProductsListState,

  reducers: {

    addProductToCategory: (
      state,
      action: PayloadAction<{ categoryName: string; product: productType }>
    ) => {
      const category = state.categories.find(
        (category) => category.categoryName === action.payload.categoryName
      );
      if (category) {
        category.originalProductsList.push(action.payload.product);
      }
    },

    editProduct: (
      state,
      action: PayloadAction<{ categoryName: string; product: productType }>
    ) => {
      const category = state.categories.find(
        (category) => category.categoryName === action.payload.categoryName
      );
      if (category) {
        category.originalProductsList = category.originalProductsList.map((pro:productType)=>{
          if(pro.id === action.payload.product.id)
            return action.payload.product
          else 
          return pro
        })
      }
    },

    filterProducts: (state, action: PayloadAction<{ categoryName: string; searchInputVal: string }>) => {
      const { categoryName, searchInputVal } = action.payload;

      const category = state.categories.find(cat => cat.categoryName === categoryName);
      if (category) {
        if (searchInputVal.trim() === "") {
          category.filteredProductsList = [...category.originalProductsList];
        } else {
          category.filteredProductsList = category.originalProductsList.filter(product => 
            product.title.toLowerCase().includes(searchInputVal.toLowerCase()) ||
            product.ingredients.some(ingredient => 
              ingredient.toLowerCase().includes(searchInputVal.toLowerCase())
            )
          );
        }
      }
    },

  },
});

export const { addProductToCategory, editProduct, filterProducts} = productsSlice.actions;
export default productsSlice.reducer;
