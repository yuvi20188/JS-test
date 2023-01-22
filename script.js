const dishesNames = ["Spagetti", "Lasagne", "Beans on toast", "Porridge", "Tomato soup", "Salmon"];
for (let i = 0; i < dishesNames.length; i++) {
    console.log(`${dishesNames[i]}`);

};

// for(index in dishesNames){ console.log(Object.keys(dishesNames[index])[0]) }
function randomDishes() {
    return dishesNames[Math.floor(Math.random() * dishesNames.length)]
   
};
console.log(Math.floor(Math.random() * dishesNames.length));
const randomDish = randomDishes();
console.log(randomDish);


// 2.
window.onload = async function () {
const buttonM = document.createElement('button');
buttonM.innerText = 'Click';
const text = document.createElement('h1');
// text.setAttribute("id", "texti");
const body = document.querySelector('body');
body.appendChild(buttonM);
body.appendChild(text);

buttonM.addEventListener("click", function() {
    text.innerHTML = "Javascripttest";
    const body = document.querySelector('body');
    body.style.backgroundColor = "yellow";
});
}

//3.

fetch('https://reqres.in/api/users', {
    method: 'GET',
    // headers: {
    //     'Accept': 'application/json',
    // },
})
.then((response) => {
    return response.json();
  })
  .then((response) => {
    const body = document.querySelector('body');
    const peopleList = document.createElement('ul');
    body.appendChild(peopleList);
    const people = response.data;

  for (let i = 0; i < 3; i++) {
    const person = people[i]
    const personItem = document.createElement('li');
    personItem.innerHTML = `${person.first_name}`;
    peopleList.appendChild(personItem)
}; 
}); 