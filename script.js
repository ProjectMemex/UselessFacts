const facts = [
  { text: "Every 60 seconds in Africa, a minute passes.", weight: 100 },
  { text: "Bananas are berries. Strawberries are not.", weight: 80 },
  { text: "You blink more than 10 million times a year.", weight: 20 },
  { text: "Octopuses have three hearts.", weight: 10 },
  { text: "The word 'empty' has more letters than 'full'.", weight: 1 } // rare!
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
