// menuList.js
import pizzaImg from '../assets/pizza.jpeg';
import burgerImg from '../assets/burger.jpg';
import pastaImg from '../assets/pasta.jpeg';
import sushiImg from '../assets/sushi.jpeg';
import tacosImg from '../assets/tacos.jpeg';
import saladImg from '../assets/salad.jpeg';
import sandwichImg from '../assets/sandwich.jpeg';
import friedChickenImg from '../assets/friedchicken.jpeg';
import iceCreamImg from '../assets/icecream.jpeg';
import steakImg from '../assets/steak.jpeg';
import noodlesImg from '../assets/noodles.jpeg';
import curryImg from '../assets/curry.jpeg';
import biryaniImg from '../assets/biriyani.jpeg';
import dosaImg from '../assets/dosa.jpeg';
import pancakesImg from '../assets/pancakes.jpeg';
import momosImg from '../assets/momos.jpeg';
import donutImg from '../assets/donuts.jpeg';

export const menu_list = [
  { item_name: "Pizza", item_image: pizzaImg },
  { item_name: "Burger", item_image: burgerImg },
  { item_name: "Pasta", item_image: pastaImg },
  { item_name: "Sushi", item_image: sushiImg },
  { item_name: "Tacos", item_image: tacosImg },
  { item_name: "Salad", item_image: saladImg },
  { item_name: "Sandwich", item_image: sandwichImg },
  { item_name: "Fried Chicken", item_image: friedChickenImg },
  { item_name: "Ice Cream", item_image: iceCreamImg },
  { item_name: "Steak", item_image: steakImg },
  { item_name: "Noodles", item_image: noodlesImg },
  { item_name: "Curry", item_image: curryImg },
  { item_name: "Biryani", item_image: biryaniImg },
  { item_name: "Dosa", item_image: dosaImg },
  { item_name: "Pancakes", item_image: pancakesImg },
  { item_name: "Momos", item_image: momosImg },
  { item_name: "Donut", item_image: donutImg }
];

export const food_list = [
  // 🍕 Pizza
  { _id: '1', name: 'Margherita Pizza', image: pizzaImg, price: 12, description: 'Classic cheesy Margherita pizza with basil.', category: 'Pizza' },
  { _id: '2', name: 'Pepperoni Pizza', image: pizzaImg, price: 14, description: 'Spicy pepperoni with mozzarella and tomato sauce.', category: 'Pizza' },
  { _id: '3', name: 'Veggie Pizza', image: pizzaImg, price: 13, description: 'Loaded with fresh bell peppers, olives, and onions.', category: 'Pizza' },

  // 🍔 Burger
  { _id: '4', name: 'Beef Burger', image: burgerImg, price: 8, description: 'Juicy beef burger with lettuce and tomato.', category: 'Burger' },
  { _id: '5', name: 'Chicken Burger', image: burgerImg, price: 9, description: 'Crispy chicken fillet with mayo and lettuce.', category: 'Burger' },
  { _id: '6', name: 'Veggie Burger', image: burgerImg, price: 7, description: 'Healthy veg patty with fresh toppings.', category: 'Burger' },

  // 🍝 Pasta
  { _id: '7', name: 'White Sauce Pasta', image: pastaImg, price: 11, description: 'Creamy Alfredo pasta topped with cheese.', category: 'Pasta' },
  { _id: '8', name: 'Red Sauce Pasta', image: pastaImg, price: 10, description: 'Tangy tomato sauce pasta with herbs.', category: 'Pasta' },
  { _id: '9', name: 'Pesto Pasta', image: pastaImg, price: 12, description: 'Italian pasta tossed with green pesto sauce.', category: 'Pasta' },

  // 🍣 Sushi
  { _id: '10', name: 'California Roll', image: sushiImg, price: 15, description: 'Crab, avocado, and cucumber rolls.', category: 'Sushi' },
  { _id: '11', name: 'Salmon Sushi', image: sushiImg, price: 16, description: 'Fresh salmon over seasoned rice.', category: 'Sushi' },
  { _id: '12', name: 'Veg Sushi', image: sushiImg, price: 13, description: 'Healthy vegetable sushi rolls.', category: 'Sushi' },

  // 🌮 Tacos
  { _id: '13', name: 'Chicken Tacos', image: tacosImg, price: 9, description: 'Spicy chicken filling with salsa.', category: 'Tacos' },
  { _id: '14', name: 'Beef Tacos', image: tacosImg, price: 10, description: 'Tender beef with Mexican spices.', category: 'Tacos' },
  { _id: '15', name: 'Veggie Tacos', image: tacosImg, price: 8, description: 'Fresh veggies wrapped in taco shell.', category: 'Tacos' },

  // 🥗 Salad
  { _id: '16', name: 'Veg Salad', image: saladImg, price: 6, description: 'Fresh lettuce, tomato, and cucumber.', category: 'Salad' },
  { _id: '17', name: 'Chicken Salad', image: saladImg, price: 9, description: 'Grilled chicken with veggies.', category: 'Salad' },
  { _id: '18', name: 'Greek Salad', image: saladImg, price: 8, description: 'Feta cheese, olives, and tomatoes.', category: 'Salad' },

  // 🥪 Sandwich
  { _id: '19', name: 'Veg Sandwich', image: sandwichImg, price: 5, description: 'Fresh veggies with cheese.', category: 'Sandwich' },
  { _id: '20', name: 'Chicken Sandwich', image: sandwichImg, price: 7, description: 'Grilled chicken breast sandwich.', category: 'Sandwich' },

  // 🍗 Fried Chicken
  { _id: '21', name: 'Crispy Fried Chicken', image: friedChickenImg, price: 11, description: 'Golden fried crunchy chicken.', category: 'Fried Chicken' },
  { _id: '22', name: 'Spicy Fried Chicken', image: friedChickenImg, price: 12, description: 'Spicy seasoning for fiery taste.', category: 'Fried Chicken' },

  // 🍨 Ice Cream
  { _id: '23', name: 'Vanilla Ice Cream', image: iceCreamImg, price: 5, description: 'Classic creamy vanilla.', category: 'Ice Cream' },
  { _id: '24', name: 'Chocolate Ice Cream', image: iceCreamImg, price: 6, description: 'Rich chocolate flavor.', category: 'Ice Cream' },
  { _id: '25', name: 'Strawberry Ice Cream', image: iceCreamImg, price: 6, description: 'Fruity and refreshing.', category: 'Ice Cream' },

  // 🥩 Steak
  { _id: '26', name: 'Grilled Steak', image: steakImg, price: 20, description: 'Tender juicy grilled steak.', category: 'Steak' },
  { _id: '27', name: 'Pepper Steak', image: steakImg, price: 22, description: 'Pepper-seasoned beef steak.', category: 'Steak' },

  // 🍜 Noodles
  { _id: '28', name: 'Veg Noodles', image: noodlesImg, price: 9, description: 'Stir-fried noodles with vegetables.', category: 'Noodles' },
  { _id: '29', name: 'Chicken Noodles', image: noodlesImg, price: 11, description: 'Noodles tossed with chicken.', category: 'Noodles' },

  // 🍛 Curry
  { _id: '30', name: 'Paneer Curry', image: curryImg, price: 10, description: 'Indian cottage cheese curry.', category: 'Curry' },
  { _id: '31', name: 'Chicken Curry', image: curryImg, price: 12, description: 'Spicy chicken curry.', category: 'Curry' },
  { _id: '32', name: 'Mutton Curry', image: curryImg, price: 14, description: 'Rich mutton curry with spices.', category: 'Curry' },

  // 🍚 Biryani
  { _id: '33', name: 'Veg Biryani', image: biryaniImg, price: 10, description: 'Aromatic rice with vegetables.', category: 'Biryani' },
  { _id: '34', name: 'Paneer Biryani', image: biryaniImg, price: 11, description: 'Biryani with paneer cubes.', category: 'Biryani' },
  { _id: '35', name: 'Mushroom Biryani', image: biryaniImg, price: 12, description: 'Flavored rice with mushrooms.', category: 'Biryani' },
  { _id: '36', name: 'Mutton Biryani', image: biryaniImg, price: 15, description: 'Rich mutton biryani with spices.', category: 'Biryani' },

  // 🥞 Dosa
  { _id: '37', name: 'Plain Dosa', image: dosaImg, price: 6, description: 'Classic crispy dosa.', category: 'Dosa' },
  { _id: '38', name: 'Masala Dosa', image: dosaImg, price: 8, description: 'Stuffed with spicy potato filling.', category: 'Dosa' },
  { _id: '39', name: 'Paneer Dosa', image: dosaImg, price: 9, description: 'Dosa filled with paneer masala.', category: 'Dosa' },

  // 🥞 Pancakes
  { _id: '40', name: 'Classic Pancakes', image: pancakesImg, price: 7, description: 'Fluffy pancakes with syrup.', category: 'Pancakes' },
  { _id: '41', name: 'Choco Pancakes', image: pancakesImg, price: 8, description: 'Chocolate-loaded pancakes.', category: 'Pancakes' },

  // 🥟 Momos
  { _id: '42', name: 'Veg Momos', image: momosImg, price: 6, description: 'Steamed veg momos with sauce.', category: 'Momos' },
  { _id: '43', name: 'Chicken Momos', image: momosImg, price: 8, description: 'Juicy chicken momos.', category: 'Momos' },

  // 🍩 Donut
  { _id: '44', name: 'Classic Donut', image: donutImg, price: 3, description: 'Sweet soft donut.', category: 'Donut' },
  { _id: '45', name: 'Chocolate Donut', image: donutImg, price: 4, description: 'Rich chocolate glaze.', category: 'Donut' },
  { _id: '46', name: 'Amul Donut', image: donutImg, price: 5, description: 'Donut topped with Amul choco.', category: 'Donut' },
];

