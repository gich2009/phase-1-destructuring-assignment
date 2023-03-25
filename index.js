const farmAnimals = 'cow horse sheep pig chicken';

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

const muppet = {
  muppetName: 'Miss Piggy',
  color: 'pink',
  song: 'Never Before, Never Again',
  job: 'Cast member of The Muppet Show',
  partner: 'Kermit'
};

const nestedMuppet = {
  nestedName: 'Kermit',
  nestedColor: 'green',
  album: {
    theMuppetMovie: {
      song1: 'Rainbow Connection',
      song2: 'Moving Right Along',
      song3: 'Never Before, Never Again',
      song4: 'I Hope That Something Better Comes Along',
    },
  },
  nestedJob: 'Host of The Muppet Show',
  nestedPartner: 'Miss Piggy'
};

// Strings

// 1. Use destructuring to assign appropriate variables based on the sounds animals make.
let [moo, neigh, baa, oink, cluck] = farmAnimals.split(" ");

// 2. Bolt the horse wandered off, so just give us four animals, and let's name them bessie, dolly, babe, and little.
const farmAnimalsArray = farmAnimals.split(" ");
let copyOfFarmAnimals = [...farmAnimalsArray.slice(0, 1), ...farmAnimalsArray.slice(2)];
let [bessie, dolly, babe, little] =  copyOfFarmAnimals;

// 3. Little the chicken had to go back to the coop, so now we're left with three. Let's use color variables of blackAndWhite, black, and pink.
copyOfFarmAnimals = [...copyOfFarmAnimals.slice(0, 3)];
let [blackAndWhite, black, pink] =  copyOfFarmAnimals;

// Arrays

// 4. Use destructuring to assign appropriate variables using the color names.
let [red, orange, yellow, green, blue, indigo, violet] = colors;

// 5. Some people have a really hard time picking out indigo, so let's leave that one out, using the first letter of each color as the variable names.
let colorsCopy = [...colors.slice(0, 5), ...colors.slice(6)];
let [r, o, y, g, b, v] = colorsCopy;

// 6. But wait! Indigo is now feeling *super* left out. Let's only assign indigo using indg.
colorsCopy = [...colors.slice(5, 6)];
let [indg] = colorsCopy;

// Objects

// 7. Use destructuring to assign all variables using the keys as the variable names
let {muppetName, color, song, job, partner} = muppet

// 8. Use destructuring to assign songs 2 and 4, and Kermit's job and partner
let copyNestedMuppet = {...nestedMuppet, album: {theMuppetMovie: {song2: "Moving Right Along", song4: "I Hope That Something Better Comes Along"}}}

let {album:{theMuppetMovie: {song2, song4}}, nestedJob, nestedPartner} = nestedMuppet;

