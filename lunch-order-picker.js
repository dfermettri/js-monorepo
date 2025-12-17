let lunches = []

const addLunchToEnd = (array,str) => {
  array.push(str);
  console.log(`${str} added to the end of the lunch menu.`)
  return array;
}

const addLunchToStart = (array,str) => {
  array.unshift(str);
  console.log(`${str} added to the start of the lunch menu.`)
  return array;
}

const removeLastLunch = (array) => {
  if (array.length === 0)
    console.log("No lunches to remove.");
  const removedItem = array.pop()
  console.log(`${removedItem} removed from the end of the lunch menu.`);
  return array;
}

const removeFirstLunch = (array) => {
  if (array.length === 0)
    console.log("No lunches to remove.");
  const removedItem = array.shift()
  console.log(`${removedItem} removed from the start of the lunch menu.`);
  return array;
}

const getRandomLunch = (array) => {
  if (array.length === 0) {
    console.log("No lunches available.");
  }
  const randomIndex = Math.floor(Math.random() * array.length);
    const randomElement = array[randomIndex]; 
    console.log(`Randomly selected lunch: ${randomElement}`);
    return randomElement;
}

const showLunchMenu = (array) => {
  if (array.length === 0) {
    console.log("The menu is empty.");
  }
  const splitArray = array.join(", ")
    console.log(`Menu items: ${splitArray}`);
}

// проверки
console.log(addLunchToEnd(lunches, "Tacos"))
console.log(addLunchToEnd(["Pizza", "Tacos"], "Burger"))
console.log(addLunchToStart(lunches, "Sushi"))
console.log(addLunchToStart(["Burger", "Sushi"], "Pizza"))
console.log(removeLastLunch(["Stew", "Soup", "Toast"]))
console.log(removeLastLunch(["Sushi", "Pizza", "Noodles"]))
console.log(removeFirstLunch(["Salad", "Eggs", "Cheese"]))
console.log(removeFirstLunch(["Sushi", "Pizza", "Burger"]))
console.log(showLunchMenu(["Greens", "Corns", "Beans"]))
console.log(showLunchMenu(["Pizza", "Burger", "Fries", "Salad"]))