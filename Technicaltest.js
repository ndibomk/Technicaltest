
//Exercise 1 question 1

function ArrayToaMethod(input) {
    const outputmethod = {};
  
    for (const entry of input) {
      const [key, ...values] = entry;
      outputmethod[key] = values;
    }
  
    return outputmethod;
  }
  
  const inputs = [
    ["key1", 1, 2, 3, 4],
    ["key2", 4, 5, 6, 7]
  ];
  
  const outputmethod = ArrayToaMethod(inputs);
  console.log(outputmethod);
  
// Exercise 1 Question 2

function transform(input) {
    const output = [];
  
    for (const deal of input) {
      let basePrice = deal.price !== undefined ? deal.price + ' €' : 'N/A';
  
      let savings;
      if (deal.savingsType === 'percent') {
        savings = deal.savings + ' %';
      } else {
        savings = deal.savings + ' €';
      }
  
      let description = `You are saving ${savings} related to the initial price`;
  
      let price = basePrice !== 'N/A' ? (deal.price - deal.savings) + ' €' : 'N/A';
  
      let title = deal.kind === 'reductionVoucher' ? 'Flat voucher' : 'Sales';
  
      const transformedDeal = {
        basePrice: basePrice,
        description: description,
        price: price,
        savings: savings,
        title: title
      };
  
      output.push(transformedDeal);
    }
  
    return output;
  }
  
  const input = [
    {
      price: 3000,
      kind: 'reductionVoucher',
      savings: 300,
      savingsType: 'total',
    },
    {
      price: undefined,
      kind: 'sales',
      savings: 10,
      savingsType: 'percent',
    },
    {
      price: 3000,
      kind: 'sales',
      savings: 15,
      savingsType: 'percent',
    }
  ];
  
  const output = transform(input);
  console.log(output);
    
  
  const { faker } = require('@faker-js/faker')
 
  //Exercise 2 question 1

  function generatePerson(maxChildren) {
    const person = {
      name: `${faker.person.firstName()} ${faker.person.lastName()}`,
      children: []
    };
  
    const numChildren = faker.number.int({ min: 0, max: maxChildren });
  
    for (let i = 0; i < numChildren; i++) {
      person.children.push(generatePerson(maxChildren));
    }
  
    return person;
  }
  
  const genealogicalTree = generatePerson(2);
  console.log(JSON.stringify(genealogicalTree, null, 2));


//Exercise 2 question 2
 // In the provided code, regardless of whether num_children is set to 2 or 3, each individual person has an independent chance to have between 0 and the specified maximum number of children.


//If num_children is set to 2: Each person can have 0, 1, or 2 children, with an equal chance for each option.
///If num_children is set to 3: Each person can have 0, 1, 2, or 3 children, with an equal chance for each option.




   //Exercise 3 question 1
 

   const generateRandomPopulation = (count) => {
    const population = [];
  
    for (let i = 0; i < count; i++) {
      const person = {
        name: `${faker.person.firstName()} ${faker.person.lastName()}`,
        location: faker.location.country()
      };
      population.push(person);
    }
  
    return population;
  };
  
  const minPopulationSize = 1;
  const maxPopulationSize = 20;
  const populationSize =faker.number.int({ min: minPopulationSize, max: maxPopulationSize });
  const randomPopulation = generateRandomPopulation(populationSize);
  
  console.log("Generated random population:", randomPopulation.length);

  

  //Exercise 3 question 2

  const displayPopulationByLocation = (population) => {
    const populationByLocation = {};
  
    for (const person of population) {
      const { name, location } = person;
      if (!populationByLocation[location]) {
        populationByLocation[location] = [name];
      } else {
        populationByLocation[location].push(name);
      }
    }
  
    for (const location in populationByLocation) {
      const citizens = populationByLocation[location].join(', ');
      console.log(`Citizens of ${location}: ${citizens}`);
    }
  };
  
  console.time("Displaying population by location");
  displayPopulationByLocation(randomPopulation);
  console.timeEnd("Displaying population by location");



  //Exercise 4 question 1

  const inputobject={
    "leafOne": "valueA1",

    "nodeA": {
      "leafA1": "valueA2",
      "nodeA1": {
        "leafA1_1": "valueA2_1",
        "leafA1_2": "valueA2_2"
      },
      "leafA2": "valueA3"
    },

    "leafC": {
      "nodeC1": {
        "leafC1_1": "valueC1_1"
      },
      "nodeC2": {
        "leafC2_1": "valueC2_1",
        "nodeC2_1": {
          "leafC2_1_1": "valueC2_1_1"
        }
      }
    }
  }
//Exercise 4 question 2
//   nodeA_leafOne
// nodeA_leafA1
// nodeA_nodeA1_leafA1_1
// nodeA_nodeA1_leafA1_2
// nodeA_leafA2
// leafC_nodeC1_leafC1_1
// leafC_nodeC2_leafC2_1
// leafC_nodeC2_nodeC2_1_leafC2_1_1
  
  
 //Exersice 4 question 3 
 function generatePathsFromObject(inputObject, currentPath = "", paths = []) {
  for (const key in inputObject) {
    const newPath = currentPath ? `${currentPath}_${key}` : key;

    if (typeof inputObject[key] === "object") {
      generatePathsFromObject(inputObject[key], newPath, paths);
    } else {
      paths.push(newPath);
    }
  }

  return paths;
}

const paths = generatePathsFromObject(inputobject);
console.log("Generated paths:");
for (const path of paths) {
  console.log(path);
} 
  
  
   
  
  
  
  
  


  
  
