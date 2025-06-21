const facts = [
  { text: "Every 60 seconds in Africa, a minute passes.", weight: 50 },
  { text: "Bananas are berries. Strawberries are not.", weight: 50 },
  { text: "You blink more than 10 million times a year.", weight: 50 },
  { text: "Octopuses have three hearts.", weight: 50 },
  { text: "The word 'empty' has more letters than 'full'.", weight: 50 } 
  { text: "If you lift a kangaroo’s tail off the ground, it can’t hop.", weight: 50 }
  { text: "If you lift a kangaroo’s tail off the ground, it can’t hop.", weight: 50 }
  
];

// Function to get weighted random fact
function getWeightedRandom(facts) {
  const weightedPool = [];

  facts.forEach(fact => {
    for (let i = 0; i < fact.weight; i++) {
      weightedPool.push(fact.text);
    }
  });

  const randomIndex = Math.floor(Math.random() * weightedPool.length);
  return weightedPool[randomIndex];
}

// Display the fact
document.getElementById("fact").innerText = getWeightedRandom(facts);
