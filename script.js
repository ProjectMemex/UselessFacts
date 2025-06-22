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
  { text: "Sloths can hold their breath longer than dolphins." },
  { text: "Ice-cream warms your body." },
  { text: "You are enough." },
  { text: "You are worth it!" },
  { text: "You can insert even two Iceland's in the Atlantic ocean." },
  { text: "If you shout for 8 years, 7 months, and 6 days, you will have produced enough sound energy to heat one cup of coffee." },
  { text: "Sometimes, babies below the age of 1 die of a sudden and unexplained death - it’s called SIDS." },
  { text: "Cows have best friends." },
  { text: "Cow moos have regional accents." },
  { text: "Sea otters hold hands while sleeping so they don’t drift apart." },
  { text: "Pigeons can tell the difference between Picasso and Monet." },
  { text: "You’re more likely to get a computer virus from visiting a religious site than a porn site." },
  { text: "Certain turtles can breathe through their butts." },
  { text: "Wombats have backward-facing pouches." },
  { text: "Apples float because they’re 25% air." },
  { text: "The inventor of Pringles is buried in a Pringles can." },
  { text: "The first oranges weren’t orange — they were green." },
  { text: "Kangaroos can't walk backwards." },
  { text: "There’s a basketball court on the top floor of the US Supreme Court — it's nicknamed “The Highest Court in the Land.”" },
  { text: "Space smells like seared steak, according to astronauts." },
  { text: "Octopuses taste with their arms." },
  { text: "Dolphins have names for each other." },
  { text: "The Twitter bird’s name is Larry." },
  { text: "A day on Venus is longer than its year." },
  { text: "Frogs can’t swallow with their eyes open." },
  { text: "The longest hiccuping spree lasted 68 years (almost nice)." },
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

function getUnusedIndex(key, total) {
  let used = JSON.parse(localStorage.getItem(key)) || [];
  if (used.length >= total) {
    used = [];
  }
  const remaining = [...Array(total).keys()].filter(i => !used.includes(i));
  const choice = remaining[Math.floor(Math.random() * remaining.length)];
  used.push(choice);
  localStorage.setItem(key, JSON.stringify(used));
  return choice;
}

const factElement = document.getElementById("fact");
factElement.style.opacity = 0;

let index;
let isRare = false;

const shownRegular = JSON.parse(localStorage.getItem("shownRegular")) || [];
if (shownRegular.length >= facts.length) {
  isRare = true;
  index = Math.floor(Math.random() * rareFacts.length);
} else {
  index = getUnusedIndex("shownRegular", facts.length);
}

if (isRare) {
  factElement.innerText = rareFacts[index].text;
  factElement.classList.add("rare-fact");
} else {
  factElement.innerText = facts[index].text;
  factElement.classList.remove("rare-fact");
}

setTimeout(() => {
  factElement.style.transition = "opacity 1s";
  factElement.style.opacity = 1;
}, 100);
