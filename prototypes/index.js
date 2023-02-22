const { kitties } = require('./datasets/kitties');
const { puppers } = require('./datasets/puppers');
const { mods } = require('./datasets/mods');
const { cakes } = require('./datasets/cakes');
const { classrooms } = require('./datasets/classrooms');
const { breweries } = require('./datasets/breweries');
const { nationalParks } = require('./datasets/nationalParks');
const { weather } = require('./datasets/weather');
const { boardGames } = require('./datasets/boardGames');
const { instructors, cohorts } = require('./datasets/turing');
const { bosses, sidekicks } = require('./datasets/bosses');
const { constellations, stars } = require('./datasets/astronomy');
const { weapons, characters } = require('./datasets/ultima');
const { dinosaurs, humans, movies } = require('./datasets/dinosaurs');



// SINGLE DATASETS
// =================================================================

// DATASET: kitties from ./datasets/kitties
const kittyPrompts = {
  orangePetNames(pets) {
    // Return an array of just the names of kitties who are orange e.g.
        // ['Tiger', 'Snickers']

        /* CODE GOES HERE */
       const orange = pets.filter(element => element.color === 'orange').map(pet => pet.name);

        return orange;

    // Annotation:
    // first I wrote these methods out the long way, then I shortened it to this more concise syntax. I knew I wanted a smaller subset of cat objects who had orange hair, which led me towards filter. then I knew the output needed to be an array of strings of the same length, so I utilized map to print only the cat's names
  },

  sortByAge(pets) {
    // Sort the kitties by their age

    /* CODE GOES HERE */
      const sortedPets = pets.sort((a, b) => {
         return b.age - a.age;
      })
      return sortedPets;

    // Annotation:
    // Write your annotation here as a comment
    // knowing that we have a an array of objects and that we wanted to sort them by the age property, which is a number, a simple arithmetic sort seemed like the best move
    //we have a callback function in sort, which is sorting them in decending order. Looking at the test helped me realize they were looking for oldest to youngest cat
  },

  growUp(pets) {
    // Return an array of kitties who have all grown up by 2 years e.g.
    // [{
    //   name: 'Felicia',
    //   age: 4,
    //   color: 'grey'
    // },
    // {
    //   name: 'Tiger',
    //   age: 7,
    //   color: 'orange'
    // },
    // ...etc]

    /* CODE GOES HERE */
    const olderPets = pets.map((pet) => {
      pet.age += 2;
      return pet;
    })
    return olderPets;

    //we want an array of the same length, so maybe map()?
    //where the age property goes up by 2
  }
};

// PLEASE READ-----------------------
// Currently, your functions are probably using the `kitties` global import variable.
// refactor the above functions using arguments and parameters so that
// they can perform the same utility
// for the kitties or puppers datasets, depending on what arguments you send through.


// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: clubs from ./datasets/clubs
const clubPrompts = {
  membersBelongingToClubs(clubs) {
    // Your function should access the clubs data through a parameter (it is being passed as an argument in the test file)
    // Create an object whose keys are the names of people, and whose values are
    // arrays that include the names of the clubs that person is a part of. e.g.
    // {
    //   Louisa: ['Drama', 'Art'],
    //   Pam: ['Drama', 'Art', 'Chess'],
    //   ...etc
    // }

    //make an array of all the names, no duplicates
   const members = clubs.reduce((acc, club) => {
        club.members.forEach(member => {
          if(!acc.includes(member)){
            acc.push(member)
          }
        })
        return acc
    }, [])

    //for each of the members we want to go through each club object and check if they are in the members property, if so we want to add that club.name to an array that belongs to the member

  const clubsByPerson = members.reduce((acc, person) => {
    clubsfilter = clubs.filter(club => club.members.includes(person)).map(club => club.club)
    // console.log(person, clubsfilter)
    acc[person] = clubsfilter
    return acc
  }, {})



    //if each club.members includes that name, then add it to the array

    return clubsByPerson

    /* CODE GOES HERE */

    // Annotation:
    // Write your annotation here as a comment
    //okay so we were given an array of objects. Each object is a club which has two properties: the club name (a string), and an array of strings that are the names of it's members. The prompt is asking for us to basically invert the data, transform this array into an object, where each property is a name of one of the students, and its value is an array of all the clubs they are a part of. 

    //First, I decided I wanted an array of all the names of the students. I used reduce on the clubs array. In an attempt to remove duplicates, I ran a forEach on the members property of each club. So there's a nested iterator happening here, idk if that's bad practice. The forEach checks each element of the members array to see if the accumulator of the outer reduce already includes that name. If it doesn't include it, the forEach pushes the name to the accumulator. So for each one of the clubs/iterations of the clubs array by the reduce, there is 2-5 iterations through their member arrays to check for duplicates. 

    //Then after i got this list of names, I was stuck for quite a while. I was playing with my cat about four hours after starting this problem, when I thought of a better way to conceptualize it. I knew we wanted to iterate through the clubs and check if each person was in the members property. I realized I could use filter to create an array for each person, the filter checked to see if each members property included that person's name, and if it did it stores it in a new array. Then we had to map that resulting array so that it was just the name properties instead of the whole object. Becuase filter will store the whole element that meets its condition no matter what. 

    //I got unstuck after this section by trying to test to see if it was working properly by console logging each person, then the filtered array. Noticing that it matched what I wanted to be in the object almost perfectly, I felt like I was in a good place. I had to look up to remember how to create a new property on an existing object, i.e. object.propertyName = value. In this case it needed to be bracket notation so: object[variable] = value. Or more specifically for this problem: object[current person reduce is focusing on] = filteredArray.

  }
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: mods from ./datasets/mods
const modPrompts = {
  studentsPerMod() {
    // Return an array of objects where the keys are mod (the number of the module)
    // and studentsPerInstructor (how many students per instructor there are for that mod) e.g.
    // [
    //   { mod: 1, studentsPerInstructor: 9 },
    //   { mod: 2, studentsPerInstructor: 11 },
    //   { mod: 3, studentsPerInstructor: 10 },
    //   { mod: 4, studentsPerInstructor: 8 }
    // ]

    /* CODE GOES HERE */


    const teacherRatio = mods.map((element) => {
      const ratio = element.students / element.instructors;
      return {mod: element.mod, studentsPerInstructor: ratio}
    })

    // const teacherRatio = mods.reduce((acc, element) => {
    //   const ratio = element.students / element.instructors;
    //   acc.push({mod: element.mod, studentsPerInstructor: ratio})
    //   return acc;
    // }, [])

    return teacherRatio;

      // console.log(teacherRatio)
    // Annotation:
    // Write your annotation here as a comment
    //we want to return an array of objects that is the same length, but with one less key/value pair. The second property will be a combination of the two after a simple division expression. 

    //reduce? this takes in an accumulator and current value parameter. I set a variable to equal the math operation, the current value's (in this case it is an object) number of students property divided by the current value's number of instructors property, which gives us the num of students per professor

    //then the accumulator value is using the initial value param, which is set to an empty array. Since it is set to an empty array, we can use .push() to help it accumulate. for each element, a new object is created that recreates the first property, and a second property is created that uses the ratio variable

    //the accumulator is returned so that the next iteration can add to the array, bringing along the object that was just created

    //finally the teacherRatio variable that the reduce method was saved to must be returned as well

    //I also solved it with .map(), very similar set up, except that setting the initial value to an array isn't necessary, and neither is using .push(), so map() is the more elegant solution in this case
}
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: cakes from ./datasets/cakes
const cakePrompts = {
  stockPerCake() {
    // Return an array of objects that include just the flavor of the cake and how
    // much of that cake is in stock e.g.
    // [
    //    { flavor: 'dark chocolate', inStock: 15 },
    //    { flavor: 'yellow', inStock: 14 },
    //    ..etc
    // ]

    /* CODE GOES HERE */

    const inventory = cakes.map((cake) => {
      return {flavor: cake.cakeFlavor, inStock: cake.inStock}
    })
    return inventory

    // Annotation:
    // I wonder if similarly this could be reduce or map
    //we need an array of objects that mirrors the original array, but with less properties. I dont think filter would be the move, because we want all the objects to be present

    //Okay, so here we are returning an object, which with each iteration an object is created with an element from the original (cakes) array, and saved to a new array. the object contains two of the properties from the original object, accessed through the currentValue (cake) parameter of map()'s callback function
  },

  onlyInStock() {
    // Return an array of only the cakes that are in stock
    // e.g.
    // [
    //   {
    //   cakeFlavor: 'dark chocolate',
    //   filling: null,
    //   frosting: 'dark chocolate ganache',
    //   toppings: ['dutch process cocoa', 'toasted sugar', 'smoked sea salt'],
    //   inStock: 15
    // },
    // {
    //   cakeFlavor: 'yellow',
    //   filling: 'citrus glaze',
    //   frosting: 'chantilly cream',
    //   toppings: ['berries', 'edible flowers'],
    //   inStock: 14
    // },
    // ..etc
    // ]

    /* CODE GOES HERE */
    const availableCakes = cakes.filter((cake) => {
      return cake.inStock;
    })
    
    return availableCakes;

    // Annotation:
    // Write your annotation here as a comment
    //this might be a good place to use filter, we are trying to return cakes that are in stock, so they have a truthy inStock value
    //filter takes in a callback function as a parameter, and that function takes in an argument of the current element, and returns a boolean value 

  },

  totalInventory() {
    // Return the total amount of cakes in stock e.g.
    // 59

    /* CODE GOES HERE */
    const totalCakes = cakes.reduce((acc, cake) => {
      return acc + cake.inStock;
    }, 0)

    return totalCakes;
    // Annotation:
    // Write your annotation here as a comment
    //we want a single value, so I think reduce is the move here
    //we need to return the value of all the inStock properties of each object added togehter
  },

  allToppings() {
    // Return an array of all unique toppings (no duplicates) needed to bake
    // every cake in the dataset e.g.
    // ['dutch process cocoa', 'toasted sugar', 'smoked sea salt', 'berries', ..etc]

    /* CODE GOES HERE */
    // const allToppings = cakes.reduce((acc, cake) => {
    //   return acc.concat(cake.toppings)
    // }, [])

    let allToppings = cakes.map((cake) => {
      return cake.toppings
    })

    allToppings = allToppings.join().split(",")
    // console.log(allToppings)

    const helpMe = [];

    allToppings.forEach((item) => {
      if(!helpMe.includes(item)) {
        helpMe.push(item)
      }
    })
    
    
    return helpMe;

    // Annotation:
    // Write your annotation here as a comment
    //can use includes() to check if something is already added? 
    //So maybe start with 
  },

  groceryList() {
    // I need to make a grocery list. Please give me an object where the keys are
    // each topping, and the values are the amount of that topping I need to buy e.g.
    // {
    //    'dutch process cocoa': 1,
    //    'toasted sugar': 3,
    //    'smoked sea salt': 3,
    //    'berries': 2,
    //    ...etc
    // }

    /* CODE GOES HERE */
    //use full non edited list of toppings, for each in that list, check if theres a key that matches it, if yes ++, if no create a key value pair with the value of 1

    let allToppings = cakes.map((cake) => {
      return cake.toppings
    })

    // console.log(allToppings.join().split(','))
    allToppings = allToppings.join().split(',')
    
    const groceryList = allToppings.reduce((acc, topping) => {
      let keys = Object.keys(acc)
      
      if(keys.includes(topping)) {
        acc[topping]++;
      } else {
        acc[topping] = 1;
      }

      return acc
    }, {})

    return groceryList

    

    // Annotation:
    // This one was tricky. first I created an array of all the toppings arrays with map. Then I reassigned allToppings to be a flattened version of that nested array. I wanted to practice join and split, so I ran allToppings.join() which will return a string of all the values of those nested arrays crunched together. Then looking at that data with a console.log, I could see that I could split them via a comma and end up with an array of string values of each of the toppings. 

    //then I set a new variable equal to that list of toppings with a reduce running on it. the reduce first creates a variable of keys, which creates an array of the keys of the accumulator. First go around it would be empty. Then theres a conditional which checks if that lists of keys includes the currentValue (topping, which is one of the string values of the large toppings list). If the acc does already have the currentValue as a key, then the value is incremented by one. If the accumlator doesn't already have that key, it is created with a value of 1. I expect that the first few go arounds would create more keys, and as it iterates through, more values would update. 
  }
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: classrooms from ./datasets/classrooms
const classPrompts = {
  feClassrooms() {
    // Create an array of just the front-end classrooms. e.g.
    // [
    //   { roomLetter: 'A', program: 'FE', capacity: 32 },
    //   { roomLetter: 'C', program: 'FE', capacity: 27 },
    //   { roomLetter: 'E', program: 'FE', capacity: 22 },
    //   { roomLetter: 'G', program: 'FE', capacity: 29 }
    // ]

    /* CODE GOES HERE */
    const feClasses = classrooms.filter(room => room.program === 'FE')

    return feClasses

    // Annotation:
    // Write your annotation here as a comment
  },

  totalCapacities() {
    // Create an object where the keys are 'feCapacity' and 'beCapacity',
    // and the values are the total capacity for all classrooms in each program e.g.
    // {
    //   feCapacity: 110,
    //   beCapacity: 96
    // }

    /* CODE GOES HERE */

    const capacities = classrooms.reduce((acc, currentValue) => {
      //if the program is "FE" add the capacity to the fe property
      //else if BE then add the capacity to the be property
      if (currentValue.program === 'FE') {
        acc.feCapacity += currentValue.capacity
      } else {
        acc.beCapacity += currentValue.capacity
      }
      return acc
    }, {feCapacity: 0, beCapacity: 0})
    return capacities

    // Annotation:
    // I wasn't sure on this one how to create the starting values for this object, until I realized I could put them directly into the initial value. But from there it's fairly simple. check for the program property of the current value  and add the value based on that. then return the accumulator
  },

  sortByCapacity() {
    // Return the array of classrooms sorted by their capacity (least capacity to greatest)

    /* CODE GOES HERE */
    const sorted = classrooms.sort((a, b) => {
      return a.capacity - b.capacity
    })

    // console.log(sorted)
    return sorted

    // Annotation:
    // sort the capacity property of the current value (a classroom) using the comparison callback of sort
  }
};

// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------

// DATASET: books from './datasets/books

const bookPrompts = {
  removeViolence(bookData) {
    // Your function should access the books data through a parameter (it is being passed as an argument in the test file)
    // return an array of all book titles that are not horror or true crime. Eg:

    //  ['1984', 'The Great Gatsby', 'Lord of the Flies', 'Harry Potter and the Sorcerer\'s Stone',
    //   'The Hitchhiker\'s Guide to the Galaxy', 'Flowers for Algernon', 'Slaughterhouse-Five',
    //   'The Handmaid\'s Tale', 'The Metamorphosis', 'Brave New World', 'Life of Pi',
    //   'The Curious Incident of the Dog in the Night - Time', 'The Bell Jar',
    //   'Catch-22', 'Treasure Island']


    /* CODE GOES HERE */
    //if the book.genre !== horror and not true crime, then add to 

    filteredBooks = bookData.filter(book => book.genre !== 'Horror' && book.genre !== 'True Crime').map(book => book.title)

    return filteredBooks;

    // Annotation:
    // first I ran a filter that only passed those books that were both not horror and not true crime, and then I mapped them to just get the names

  },
  getNewBooks(books) {
    // return an array of objects containing all books that were
    // published in the 90's and 00's. Include the title and the year Eg:

    // [{ title: 'Harry Potter and the Sorcerer\'s Stone', year: 1997 },
    //  { title: 'Life of Pi', year: 2001 },
    //  { title: 'The Curious Incident of the Dog in the Night-Time', year: 2003 }]

    /* CODE GOES HERE */
    const earlyBooks = books.filter(book => book.published >= 1990 && book.published < 2010).map(book => {
     return {title: book.title, year: book.published}
    })
    return earlyBooks

    // Annotation:
    // filter checks for books that are within the date range (reminder to me to double check what the property is called in the data) and map returns only the two pieces of data they were looking for. THe books array was an array of objects and we wanted to get an array of objects back, which is why I picked filter.
  },

  getBooksByYear(books, year) {
    // return an array of objects containing all books that were
    // published after the specified year without the author or genre data. 
    // The published property should be changed to year for the returned books.
    // e.g. given 1990, return

    // [{ title: 'Harry Potter and the Sorcerer\'s Stone', year: 1997 },
    //  { title: 'Life of Pi', year: 2001 },
    //  { title: 'The Curious Incident of the Dog in the Night-Time', year: 2003 }]

    /* CODE GOES HERE */
    const booksAfter = books.filter(book => book.published > year).map(book => {
      return {title: book.title, year: book.published}
    })
    return booksAfter

    // Annotation:
    // Much similar to the one above, different condition to filter the books by, adds a parameter.
  }

};


// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------

// DATASET: weather from './datasets/weather

const weatherPrompts = {
  getAverageTemps() {
    // return an array of all the average temperatures. Eg:
    // [ 40, 40, 44.5, 43.5, 57, 35, 65.5, 62, 14, 46.5 ]

    /* CODE GOES HERE */
    let averages = weather.map((location) => {
      return (location.temperature.high + location.temperature.low)/2
    })
    return averages
    // Annotation:
    // I used map because we wanted to return the same amount of elements
  },

  findSunnySpots() {
    // Return an array of sentences of the locations that are sunny
    // and mostly sunny. Include the location and weather type. Eg:
    // [ 'Atlanta, Georgia is sunny.',
    // 'New Orleans, Louisiana is sunny.',
    // 'Raleigh, North Carolina is mostly sunny.' ]

    /* CODE GOES HERE */
    const sunnySpots = weather.filter(site => {
      return site.type.includes('sunny')
    })
  
    const sentences = sunnySpots.map(spot => {
      return `${spot.location} is ${spot.type}.`
    })
    return sentences

    // Annotation:
    // first I filtered the sites for the weathers that included the word sunny, this will also catch places that are mostly sunny. Then I used that new filtered array to map a new array full of sentences that interpolated the location property and the spot property
  },

  findHighestHumidity() {
    // Return the location with the highest humidity. Eg:
    // {
    //   location: 'Portland, Oregon',
    //   type: 'cloudy',
    //   humidity: 84,
    //   temperature: { high: 49, low: 38 }
    // }

    /* CODE GOES HERE */
    const sortedByHum = weather.sort((a, b) => {
      return b.humidity - a.humidity
    })
    
    return sortedByHum[0]
    // Annotation:
    // we wanted the location object to be returned that had the highest humidity. Sort mutates the original array which is probably why this is the third and final problem in this set. I used the comparison callback function since we are sorting with a number. We wanted the highest humidity, so I sorted it in descending order. then returned the first object in that array.

  }
};

// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------


// DATASET: nationalParks from ./datasets/nationalParks

const nationalParksPrompts = {
  getParkVisitList() {
    /// Return an object containing the names of which parks I need to visit
    // and the ones I have already visited eg:
    // {
    //   parksToVisit: ["Yellowstone", "Glacier", "Everglades"],
    //   parksVisited: ["Rocky Mountain", "Acadia", "Zion"]
    //}

  //   const parksToVisit = nationalParks.filter(park => !park.visited).map(park => park.name)
  //   const parksVisited = nationalParks.filter(park => park.visited).map(park => park.name)

  //  return {
  //   parksToVisit: parksToVisit,
  //   parksVisited: parksVisited
  //  }

  const parkList = nationalParks.reduce((acc, park) => {
    // if (park.visited) {
    //   acc.parksVisited.push(park.name)
    // } else {
    //   acc.parksToVisit.push(park.name)
    // }
    park.visited ? acc.parksVisited.push(park.name) : acc.parksToVisit.push(park.name)
    return acc
  }, {parksToVisit: [], parksVisited: []})

  return parkList


    // Annotation:
    //first off, i ran two filters for each list, one in the case that the park.visited property was false, and one in the case that it was true. Then chained a map iterator to get just the name of the park. THen I used those variables to create an object literal.
    //second time around, I wanted to solve it with reduce. So, i knew I wanted to end up with an object, so I made the initial value an empty object at first. I quickly realized the logic was simplest for me if I added the properties as empty arrays to the initial value object. Then it was simply, if the park has been visited(if park.visited === true) then push it to the first property, if not, push it to the second
    //last refactor, since we were working with a simple either/or I used a ternary operator to simplify the function.
  },

  getParkInEachState() {
    // Return an array of objects where the key is the state and the value is its National Park
    // eg: [ { Colorado: 'Rocky Mountain' },
    // { Wyoming: 'Yellowstone' },
    // { Montana: 'Glacier' },
    // { Maine: 'Acadia' },
    // { Utah: 'Zion' },
    // { Florida: 'Everglades' } ]

    const parksByState = nationalParks.map(park => {
      return {[park.location]: park.name}
    })
    return parksByState

    // Annotation:
    //fairly simple, since we wanted one object for each park with a value of the object saved in an array, one value as the key, one value as the value. I thought map was a good solution. For each item, i used the word park, we will return to the array an object with the information we want from each park
  },

  getParkActivities() {
    // Return an array of all the activities I can do
    // in a National Park. Make sure to exclude duplicates. eg:
    // [ 'hiking',
    //   'shoeshoing',
    //   'camping',
    //   'fishing',
    //   'boating',
    //   'watching wildlife',
    //   'cross-country skiing',
    //   'swimming',
    //   'bird watching',
    //   'canyoneering',
    //   'backpacking',
    //   'rock climbing' ]

    /* CODE GOES HERE */
    //an array with all of the possible activities, removing duplicates
    //I'm leaning toward reduce

    const parktivities = nationalParks.reduce((acc, park) => {
      park.activities.forEach(act => {
        if(!acc.includes(act)) {
          acc.push(act)
        }
      })
      return acc
    }, [])

    return parktivities

    // Annotation:
    // first pass i used a reduce that had a forEach running in it. We were given an array of objects that had an array as the value of one of its properties. We needed to look inside of the nested array, and check if each item was already included in the array being built by the reduce, and if not already included, add it to the array. I'm not sure how great of practice this nested iterator is. 
  }
};



// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: breweries from ./datasets/breweries
const breweryPrompts = {
  getBeerCount() {
    // Return the total beer count of all beers for every brewery e.g.
    // 40

    /* CODE GOES HERE */
    //reduce, becasue we want one value. 
    const allBeers = breweries.reduce((acc, currentValue) => {
      return acc + currentValue.beers.length
    }, 0)
    
    return allBeers;

    // Annotation:
    // we ran reduce over the breweries array, and for each object in that array, we accessed the beers property, which is another array, and accessed its length property to get the full number of beers for that brewery. And in each loop that number is carried over by and added to the accumulator.

  },

  getBreweryBeerCount() {
    // Return an array of objects where each object has the name of a brewery
    // and the count of the beers that brewery has e.g.
    // [
    //  { name: 'Little Machine Brew', beerCount: 12 },
    //  { name: 'Ratio Beerworks', beerCount: 5},
    // ...etc.
    // ]

    /* CODE GOES HERE */

    const smallBreweries = breweries.map((brewery) => {
      return {name: brewery.name, beerCount: brewery.beers.length}
    })
 return smallBreweries
    // Annotation:
    //map returns a new array with the same number of elements as the previous array, and here we wanted a new array with some similar properties, but simplified. so for each loop, we are creating and returning a new object that accesses the brewery's name, and its beers array's length value.
    //the smaller objects, 2 key value pairs - name:name, beers: beers.length
  },

  getSingleBreweryBeerCount(breweryName) {
    // Return a number that is the count of beers that the specified
    // brewery has e.g.
    // given 'Ratio Beerworks', return 5
    //we could do find, to find the object that matches the name and then return beers.length?

    const brewery = breweries.find((brewery) => {
      return brewery.name === breweryName
    })
    
    return brewery.beers.length

    /* CODE GOES HERE */

    // Annotation:
    // here we are setting a variable to be equal to the output of breweries.find(). Find's callback function returns a boolean, but the method itself returns the first element that passes the condition. in this case, we want to find the brewery that matches the name passed into the overal function. once we've caught that object in our variable, we can return the length of it's beers property array, and return that number
  },

  findHighestAbvBeer() {
    // Return the beer which has the highest ABV of all beers
    // e.g.
    // { name: 'Barrel Aged Nature\'s Sweater', type: 'Barley Wine', abv: 10.9, ibu: 40 }

    //maybe sort them and then return the first one? will they need to be all put into one array first? reduce beers into one array
    // const beers = breweries.flatMap((brewery) => {
    //   return brewery.beers
    // })

    // const beers = breweries.map((brewery) => {
    //   return brewery.beers
    // }).flat()
    
    const beers = breweries.flatMap((brewery) => {
      return brewery.beers
    })

    beers.sort((a,b) => {
     return b.abv - a.abv
    })

    return beers[0]

    /* CODE GOES HERE */

    // Annotation:
    // I'm not sure if i could do this without flatMap()
    //beers is being set equal to a map of breweries, or an array of the same length, that gets flattened one level. It will then be an array of all the beers in all the breweries. then I sorted the beers by their abv value in descending order and returned the first beer in the array.
  }
};


// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------

// DATASET: weather from './datasets/boardGames

const boardGamePrompts = {
  listGames(type) {
    // Return an array of just the names of the games within a specified type. 
    // e.g. given an argument of "strategy", return
    // ["Chess", "Catan", "Checkers", "Pandemic", "Battle Ship", "Azul", "Ticket to Ride"]

    /* CODE GOES HERE */
   const names = boardGames[type].map(game => game.name)
   return names

    // Annotation:
    // Boardgames is an object, with three keys who have arrays as their values. We can pass in the type to acccess the key that we want via bracket notation, then map the array inside to return an array of all the names of that type. 
  },

  listGamesAlphabetically(type) {
    // Return an array of just the names of the games within a specified 
    // type, sorted alphabetically. 
    // e.g. given an argument of "childrens", return
    // ["Candy Land", "Connect Four", "Operation", "Trouble"]

    /* CODE GOES HERE */
    const names = boardGames[type].map(game => game.name).sort()
    
    return names

    // Annotation:
    // very similar to the last one, just added on a .sort() to sort the names alphabetically. With sorting words alphabetically you dont have to add anyhting to the callback, and if you wanted to reverse order the names, you could add .reverse()
  },

  findHighestRatedGamesByType(type) {
    // Return an object which is the highest rated game within the specified type.
    // e.g. given the argument of 'party', return
    // { name: 'Codenames', rating: 7.4, maxPlayers: 8 },

    /* CODE GOES HERE */
    const games = boardGames[type].sort((a,b) => {
      return b.rating - a.rating
    })
   
    return games[0]

    // Annotation:
    // first we access the desired array in the boardGames object with bracket notation, then we are sorting that accessed array by its rating property, which is a number, so we are using the longer version of sort. and we're sorting in descending order so that we can return the first object which will have the highest rating.
  },

  averageScoreByType(type) {
    // Return the average score for the specified type.
    // e.g. given the argument of "strategy", return 7
    // note: do not worry about rounding your result.

    /* CODE GOES HERE */
    const avg = boardGames[type].reduce((acc, game) => {
      return acc + game.rating
    }, 0)
    return avg/boardGames[type].length

    // Annotation:
    // we set a variable (avg) equal to the boardGames object's key that is passed in to access a specific array. Reduce is being run on that array to add upp all the ratings. The accumulator is set to zero at first, and then the currentValue(game object) is being used to acces that rating property. 
  },

  averageScoreByTypeAndPlayers(type, maximumPlayers) {
    // Return the average score of any games that match the specified type
    // and maximum number of players.
    // e.g. given the arguments of "strategy" and 2, return 6.16666666667
    // note: do not worry about rounding your result.

    /* CODE GOES HERE */
    const avg = boardGames[type].filter((game) => {
      return game.maxPlayers === maximumPlayers
    }).reduce((acc, game) => {
      return acc + game.rating
    }, 0)

    return avg

    // Annotation:
    // Very similar scenario to the one beofre, though here we are adding another iterator (filter) to remove any games that don't match the max players passed in. this could easily be made more inclusive by changing the strict equals to be either queries for less players or more players
  }
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DOUBLE DATASETS
// =================================================================

// DATASET: instructors, cohorts from ./datasets/turing
const turingPrompts = {
  studentsForEachInstructor() {
    // Return an array of instructors where each instructor is an object
    // with a name and the count of students in their module. e.g.
    // [
    //  { name: 'Pam', studentCount: 21 },
    //  { name: 'Robbie', studentCount: 18 }
    // ]

    /* CODE GOES HERE */

    // Annotation:
    // Write your annotation here as a comment
  },

  studentsPerInstructor() {
    // Return an object of how many students per teacher there are in each cohort e.g.
    // {
    // cohort1806: 9,
    // cohort1804: 10.5
    // }

    /* CODE GOES HERE */

    // Annotation:
    // Write your annotation here as a comment
  },

  modulesPerTeacher() {
    // Return an object where each key is an instructor name and each value is
    // an array of the modules they can teach based on their skills. e.g.:
    // {
    //     Pam: [2, 4],
    //     Brittany: [2, 4],
    //     Nathaniel: [2, 4],
    //     Robbie: [4],
    //     Leta: [2, 4],
    //     Travis: [1, 2, 3, 4],
    //     Louisa: [1, 2, 3, 4],
    //     Christie: [1, 2, 3, 4],
    //     Will: [1, 2, 3, 4]
    //   }

    /* CODE GOES HERE */

    // Annotation:
    // Write your annotation here as a comment
  },

  curriculumPerTeacher() {
    // Return an object where each key is a curriculum topic and each value is
    // an array of instructors who teach that topic e.g.:
    // {
    //   html: [ 'Travis', 'Louisa' ],
    //   css: [ 'Travis', 'Louisa' ],
    //   javascript: [ 'Travis', 'Louisa', 'Christie', 'Will' ],
    //   recursion: [ 'Pam', 'Leta' ]
    // }

    /* CODE GOES HERE */

    // Annotation:
    // Write your annotation here as a comment
  }
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: bosses, sidekicks from ./datasets/bosses
const bossPrompts = {
  bossLoyalty() {
    // Create an array of objects that each have the name of the boss and the sum
    // loyalty of all their sidekicks. e.g.:
    // [
    //   { bossName: 'Jafar', sidekickLoyalty: 3 },
    //   { bossName: 'Ursula', sidekickLoyalty: 20 },
    //   { bossName: 'Scar', sidekickLoyalty: 16 }
    // ]

    /* CODE GOES HERE */

    // Annotation:
    // Write your annotation here as a comment
  }
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: constellations, stars } from ./datasets/astronomy
const astronomyPrompts = {
  starsInConstellations() {
    // Return an array of all the star objects that appear in any of the constellations
    // listed in the constellations object e.g.
    // [
    //   { name: 'Rigel',
    //     visualMagnitude: 0.13,
    //     constellation: 'Orion',
    //     lightYearsFromEarth: 860,
    //     color: 'blue' },
    //   { name: 'Betelgeuse',
    //     visualMagnitude: 0.5,
    //     constellation: 'Orion',
    //     lightYearsFromEarth: 640,
    //     color: 'red' },
    //   {
    //     name: 'Achernar',
    //     visualMagnitude: 0.46,
    //     constellation: 'The Plow',
    //     lightYearsFromEarth: 140,
    //     color: 'blue'
    //   },
    //   {
    //     name: 'Hadar',
    //     visualMagnitude: 0.61,
    //     constellation: 'The Little Dipper',
    //     lightYearsFromEarth: 350,
    //     color: 'blue'
    //   }
    // ]

    /* CODE GOES HERE */

    // Annotation:
    // Write your annotation here as a comment
  },

  starsByColor() {
    // Return an object with keys of the different colors of the stars,
    // whose values are arrays containing the star objects that match e.g.
    // {
    //   blue: [{obj}, {obj}, {obj}, {obj}, {obj}],
    //   white: [{obj}, {obj}],
    //   yellow: [{obj}, {obj}],
    //   orange: [{obj}],
    //   red: [{obj}]
    // }

    /* CODE GOES HERE */

    // Annotation:
    // Write your annotation here as a comment
  },

  constellationsStarsExistIn() {
    // Sort the stars by brightness and return an array of the star's constellation names
    // Brightest Stars are indicated by visualMagnitude - the lower the number, the brighter the star
    // e.g.
    //  [ "Canis Major",
    //    "Carina",
    //    "Boötes",
    //    "Auriga",
    //    "Orion",
    //    "Lyra",
    //    "Canis Minor",
    //    "The Plow",
    //    "Orion",
    //    "The Little Dipper" ]


    /* CODE GOES HERE */

    // Annotation:
    // Write your annotation here as a comment
  }
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: charaters, weapons from ./datasets/ultima
const ultimaPrompts = {
  totalDamage() {

    // Return the sum of the amount of damage for all the weapons that our characters can use
    // Answer => 113

    /* CODE GOES HERE */

    // Annotation:
    // Write your annotation here as a comment
  },

  charactersByTotal() {

    // Return the sum damage and total range for each character as an object.
    // ex: [ { Avatar: { damage: 27, range: 24 }, { Iolo: {...}, ...}

    /* CODE GOES HERE */

    // Annotation:
    // Write your annotation here as a comment
  },
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: dinosaurs, humans, movies from ./datasets/dinosaurs
const dinosaurPrompts = {
  countAwesomeDinosaurs() {
    // Return an object where each key is a movie title and each value is the
    // number of awesome dinosaurs in that movie. e.g.:
    // {
    //   'Jurassic Park': 5,
    //   'The Lost World: Jurassic Park': 8,
    //   'Jurassic Park III': 9,
    //   'Jurassic World': 11,
    //   'Jurassic World: Fallen Kingdom': 18
    // }

    /* CODE GOES HERE */

    // Annotation:
    // Write your annotation here as a comment
  },

  averageAgePerMovie() {
    /* Return an object where each key is a movie director's name and each value is
        an object whose key is a movie's title and whose value is the average age
        of the cast on the release year of that movie.
      e.g.:
      {
        'Steven Spielberg':
          {
            'Jurassic Park': 34,
            'The Lost World: Jurassic Park': 37
          },
        'Joe Johnston':
          {
            'Jurassic Park III': 44
          },
        'Colin Trevorrow':
          {
            'Jurassic World': 56
           },
        'J. A. Bayona':
          {
            'Jurassic World: Fallen Kingdom': 59
          }
      }
    */

    /* CODE GOES HERE */

    // Annotation:
    // Write your annotation here as a comment
  },

  uncastActors() {
    /*
    Return an array of objects that contain the names of humans who have not been cast in a Jurassic Park movie (yet), their nationality, and their imdbStarMeterRating. The object in the array should be sorted alphabetically by nationality.

    e.g.
      [{
        name: 'Justin Duncan',
        nationality: 'Alien',
        imdbStarMeterRating: 0
      },
      {
        name: 'Karin Ohman',
        nationality: 'Chinese',
        imdbStarMeterRating: 0
      },
      {
        name: 'Tom Wilhoit',
        nationality: 'Kiwi',
        imdbStarMeterRating: 1
      }, {
        name: 'Jeo D',
        nationality: 'Martian',
        imdbStarMeterRating: 0
      }]
    */

    /* CODE GOES HERE */

    // Annotation:
    // Write your annotation here as a comment
  },

  actorsAgesInMovies() {
    /*
    Return an array of objects for each human and the age(s) they were in the movie(s) they were cast in, as an array of age(s). Only include humans who were cast in at least one movie.

    e.g.
    [ { name: 'Sam Neill', ages: [ 46, 54 ] },
      { name: 'Laura Dern', ages: [ 26, 34 ] },
      { name: 'Jeff Goldblum', ages: [ 41, 45, 63, 66 ] },
      { name: 'Richard Attenborough', ages: [ 70, 74, 92, 95 ] },
      { name: 'Ariana Richards', ages: [ 14, 18 ] },
      { name: 'Joseph Mazello', ages: [ 10, 14 ] },
      { name: 'BD Wong', ages: [ 33, 55, 58 ] },
      { name: 'Chris Pratt', ages: [ 36, 39 ] },
      { name: 'Bryce Dallas Howard', ages: [ 34, 37 ] } ]
    */

    /* CODE GOES HERE */

    // Annotation:
    // Write your annotation here as a comment
  }
};

module.exports = {
  breweryPrompts,
  turingPrompts,
  clubPrompts,
  bossPrompts,
  classPrompts,
  modPrompts,
  kittyPrompts,
  cakePrompts,
  astronomyPrompts,
  ultimaPrompts,
  nationalParksPrompts,
  weatherPrompts,
  bookPrompts,
  dinosaurPrompts,
  boardGamePrompts,
};
