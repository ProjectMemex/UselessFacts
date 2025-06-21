const facts = [
  { text: "Every 60 seconds in Africa, a minute passes.", weight: 100 },
  { text: "Bananas are berries, but strawberries aren't.", weight: 100 },
  { text: "If you lift a kangaroo’s tail off the ground, it can’t hop.", weight: 100 },
  { text: "A group of flamingos is called a 'flamboyance'.", weight: 100 },
  { text: "Wombat poop is cube-shaped.", weight: 100 },
  { text: "There are more fake flamingos in the world than real ones.", weight: 100 },
  { text: "The unicorn is the national animal of Scotland.", weight: 100 },
  { text: "Octopuses have three hearts.", weight: 100 },
  { text: "Sloths can hold their breath longer than dolphins can.", weight: 100 },
  { text: "You can't hum while holding your nose.", weight: 100 },
  { text: "An eagle can kill a young deer and fly away with it.", weight: 100 },
  { text: "A sloth's fart doesn't stink.", weight: 100 },
  { text: "Peacocks sleep in trees.", weight: 100 },
  { text: "Sloths can hold their breath longer than dolphins", weight: 100 },
  { text: "Ice-cream warms your body.", weight: 100 },
  { text: "You are enough.", weight: 100 },
  { text: "You are worth it!", weight: 100 },
  { text: "You can insert even two Iceland's in the Atlantic ocean.", weight: 100 },
  { text: "If you shout for 8 years, 7 months, and 6 days, you will have produced enough sound energy to heat one cup of coffee.", weight: 100 },
  { text: "Sometimes, babies below the age of 1 die of a sudden and unexplained death - it’s called SIDS.", weight: 100 },
  { text: "Cows have best friends.", weight: 100 },
  { text: "Cow moos have regional accents.", weight: 100 },
  { text: "Cows have best friends.", weight: 100 },
  { text: "Sea otters hold hands while sleeping so they don’t drift apart.", weight: 100},
  { text: "Pigeons can tell the difference between Picasso and Monet.", weight: 100},
  { text: "You’re more likely to get a computer virus from visiting a religious site than a porn site.", weight: 100},
  { text: "Certain turtles can breathe through their butts.", weight: 100},
  { text: "Wombats have backward-facing pouches.", weight: 100},
  { text: "Apples float because they’re 25% air.", weight: 100},
  { text: "The inventor of Pringles is buried in a Pringles can.", weight: 100},
  { text: "The first oranges weren’t orange — they were green.", weight: 100},
  { text: "Kangaroos can't walk backwards.", weight: 100},
  { text: "There’s a basketball court on the top floor of the US Supreme Court — it's nicknamed “The Highest Court in the Land.”", weight: 100},
  { text: "Space smells like seared steak, according to astronauts.", weight: 100},
  { text: "Octopuses taste with their arms.", weight: 100},
  { text: "Dolphins have names for each other.", weight: 100},
  { text: "The Twitter bird’s name is Larry.", weight: 100},
  { text: "A day on Venus is longer than its year.", weight: 100},
  { text: "Frogs can’t swallow with their eyes open.", weight: 100},
  { text: "The longest hiccuping spree lasted 68 years (almost nice).", weight: 100},
  { text: "The inventor of the Frisbee was turned into a Frisbee after he died.", weight: 100},
  { text: "In Switzerland, it’s illegal to own just one guinea pig.", weight: 100},
  { text: "Your ears never stop growing.", weight: 100},
  { text: "Elephants can’t jump.", weight: 100},

  { text: "Never gonna give you up...", weight: 1 },
  { text: "... never gonna let you down.", weight: 1 },
  { text: "Never gonna run around and desert you.", weight: 1 },
  { text: "Never gonna make you cry...", weight: 1 },
  { text: "... never gonna say goodbye.", weight: 1 },
  { text: "Never gonna tell a lie and hurt you.", weight: 1 },
  { text: "You are Kenough!", weight: 1 },
];

function getWeightedRandom(facts) {
  const totalWeight = facts.reduce((sum, fact) => sum + fact.weight, 0);
  let threshold = Math.random() * totalWeight;

  for (let i = 0; i < facts.length; i++) {
    threshold -= facts[i].weight;
    if (threshold <= 0) {
      return facts[i].text;
    }
  }

  return facts[0].text;
}

const factElement = document.getElementById("fact");
factElement.style.opacity = 0;

const fact = getWeightedRandom(facts);
factElement.innerText = fact;

setTimeout(() => {
  factElement.style.transition = "opacity 1s";
  factElement.style.opacity = 1;
}, 100);
