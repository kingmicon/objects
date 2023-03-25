const instagrampost = new Object();
instagrampost.handleofauthor = "kingmicon";
instagrampost.content = "Happy Mood";
instagrampost.imagelink = "";
instagrampost.numberofviews = 100;
instagrampost.numberoflikes = 80;

console.log(instagrampost)

function Instagrampost(handleofauthor, content, imagelink, numberofviews, numberoflikes){
    this.handleofauthor = handleofauthor;
    this.content = content;
    this.imagelink = imagelink;
    this.numberofviews = numberofviews;
    this.numberoflikes = numberoflikes;
}
const instagrampost2 = new Instagrampost("miconking", "The tech Guy","", 60, 50);
console.log(instagrampost2)

//Question 3

let createperson = {
    firstname: "Musa",
    lastname: "Dawodu",
    age: '19 years',
    livedin: "lekki",
    jambscore: {
        ENG: 70,
        GOVT: 85,
        LIT: 82,
        CRK: 94,
    },
};
console.log(createperson)
let musa = createperson.jambscore;
console.log(musa)
//clone types
// Option 1 - Using Object.assign()
const foodtypes = {
    nameoffood: "Fried Rice",
    ingrident: "Rice, green beans, carrot, sweet corn, green ball pepper, spring onions",
  };
  
  const foodtypes2 = Object.assign({}, foodtypes);
  
  console.log(foodtypes);
  console.log(foodtypes2);
  
  foodtypes2.nameoffood = "jollof rice";
  
  console.log("After change of the name of food");
  console.log(foodtypes);
  console.log(foodtypes2);
  
  // Option 2 - Using spread syntax
  
  const foodtypes3 = { ...foodtypes };
  foodtypes3.nameoffood = "Eba and Egusi Soup";
  console.log({ foodtypes });
  console.log({ foodtypes3 });
  
  // Option 3 - Using the method JSON.parse
  const foodtypes4 = JSON.parse;
  foodtypes4.nameoffood = "Eba and Ogbonor Soup";
  console.log({ foodtypes });
  console.log({ foodtypes4 });
  