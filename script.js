const facts = [
  { text: "Every 60 seconds in Africa, a minute passes." },
  { text: "Bananas are berries, but strawberries aren't." },
  { text: "If you lift a kangaroo’s tail off the ground, it can’t hop." },
  { text: "A group of flamingos is called a 'flamboyance'." },
  { text: "Wombat poop is cube-shaped." },
  { text: "There are more fake flamingos in the world than real ones." },
  { text: "The unicorn is the national animal of Scotland." },
  { text: "Octopuses have three hearts." },
  { text: "Sloths can hold their breath longer than dolphins can." },
  { text: "You can't hum while holding your nose." },
  { text: "An eagle can kill a young deer and fly away with it." },
  { text: "A sloth's fart doesn't stink." },
  { text: "Peacocks sleep in trees." },
  { text: "Ice-cream warms your body." },
  { text: "You are enough." },
  { text: "You are worth it!" },
  { text: "You can insert even two Icelands in the Atlantic Ocean." },
  { text: "If you shout for 8 years, 7 months, and 6 days, you'll heat one cup of coffee." },
  { text: "Sometimes, babies under 1 die suddenly — it's called SIDS." },
  { text: "Cows have best friends." },
  { text: "Cow moos have regional accents." },
  { text: "Sea otters hold hands while sleeping so they don’t drift apart." },
  { text: "Pigeons can tell the difference between Picasso and Monet." },
  { text: "You're more likely to get a virus from a religious site than a porn site." },
  { text: "Certain turtles can breathe through their butts." },
  { text: "Wombats have backward-facing pouches." },
  { text: "Apples float because they’re 25% air." },
  { text: "The inventor of Pringles is buried in a Pringles can." },
  { text: "The first oranges weren’t orange — they were green." },
  { text: "Kangaroos can't walk backwards." },
  { text: "There’s a basketball court on top of the US Supreme Court — 'The Highest Court in the Land'." },
  { text: "Space smells like seared steak, according to astronauts." },
  { text: "Octopuses taste with their arms." },
  { text: "Dolphins have names for each other." },
  { text: "The Twitter bird’s name is Larry." },
  { text: "A day on Venus is longer than its year." },
  { text: "Frogs can’t swallow with their eyes open." },
  { text: "The longest hiccuping spree lasted 68 years." },
  { text: "The inventor of the Frisbee was turned into a Frisbee after he died." },
  { text: "In Switzerland, it’s illegal to own just one guinea pig." },
  { text: "Your ears never stop growing." },
  { text: "Elephants can’t jump." }
];

const rareFacts = [
  { text: "Never gonna give you up..." },
  { text: "... never gonna let you down." },
  { text: "Never gonna run around and desert you." },
  { text: "Never gonna make you cry..." },
  { text: "... never gonna say goodbye." },
  { text: "Never gonna tell a lie and hurt you." },
  { text: "You are Kenough!" }
];

function getRandomIndex(arrayLength, usedIndices) {
  const availableIndices = [...Array(arrayLength).keys()].filter(i => !usedIndices.includes(i));
  if (availableIndices.length === 0) return -1;
  return availableIndices[Math.floor(Math.random() * availableIndices.length)];
}

function displayFact(fact, isRare = false) {
  const factElement = document.getElementById("fact");
  factElement.style.opacity = 0;

  if (isRare) {
    factElement.classList.add("rare-fact");
  } else {
    factElement.classList.remove("rare-fact");
  }

  setTimeout(() => {
    factElement.innerText = fact;
    factElement.style.transition = "opacity 1s";
    factElement.style.opacity = 1;
  }, 100);
}

const shownNormal = JSON.parse(localStorage.getItem("shownNormal") || "[]");
const shownRare = JSON.parse(localStorage.getItem("shownRare") || "[]");

let factToShow = "";
let isRare = false;

if (shownNormal.length < facts.length) {
  const index = getRandomIndex(facts.length, shownNormal);
  if (index !== -1) {
    factToShow = facts[index].text;
    shownNormal.push(index);
    localStorage.setItem("shownNormal", JSON.stringify(shownNormal));
  }
} else {
  const index = getRandomIndex(rareFacts.length, shownRare);
  if (index !== -1) {
    factToShow = rareFacts[index].text;
    shownRare.push(index);
    localStorage.setItem("shownRare", JSON.stringify(shownRare));
    isRare = true;
  } else {
    localStorage.setItem("shownNormal", JSON.stringify([]));
    localStorage.setItem("shownRare", JSON.stringify([]));
    factToShow = facts[Math.floor(Math.random() * facts.length)].text;
  }
}

displayFact(factToShow, isRare);
