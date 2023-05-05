console.log("Hallo Welt")

const burgerObj = {
    burger: [
      { title: "Cheeseburger" },
      { title: "Hamburger" },
      { title: "Veggie Burger" },
      { title: "Bacon Burger" },
      { title: "Mushroom Burger" },
      { title: "Double Cheeseburger" }
    ]
  };
  //const burger = JSON.stringify(burgerObj);
  

//const burger = ["B1","B2","B3","B4","B5","B6"]

/* for (let i=0; i<burgerObj.burger.length; i++) {
   console.log(burgerObj.burger[i].title)
} */

// let i = 0; while (i < 6) {console.log(burgerObj.burger[i].title);i++;}
/* async function printBurger() {
      for await (let b of burgerObj.burger) {    
        console.log(b.title);  
    }
}

printBurger();
 */


/* fetch('https://dummyjson.com/products')
  .then(res => res.json())
  .then(console.log); */

/*   const fruits = ['apple', 'banana', 'cherry', 'date', 'fig']; 
  const selectedFruits = fruits.slice(1, 4); // ['banana', 'cherry', 'date']
  console.log(selectedFruits) */

  let name = "Max"
  let nb = 8
let tmp = name+nb
  console.log((tmp))

  for (let i = 5; ; i++) { console.log(i)}