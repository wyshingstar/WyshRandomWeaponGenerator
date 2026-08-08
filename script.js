const type = [
  "sword", 
 
];

const size = [
  "tiny", "small", "medium", "large", "giant",
];

const age = [
  "ancient", "antique", "vintage", "contemporary", "modern", "mint", 
];

const material = [
  "gold", "silver", "bronze", "brass", "tin", "iron", "copper", "aluminium", "carbon steel", "steel", "stainless steel", 
  "cast iron", "tungsten", "chromium", "manganese", "nickel", "lead", "magnesium", "titanium", "zinc", "inconel", "cobalt", 
  "maple", "cedar", "cherry", "elm", "hickory", "pine", "oak", "walnut", "ash", "birch", "mahogany", "rosewood", "sugi", "bamboo", 
  "teak", "fir", "ebony", "willow", "jatoba", "koa", "padauk", "acacia", "eucalyptus", "hinoki", "merbau", "ironwood", "nanmu", 
  "styrofoam", "acrylic", "polycarbonate", "nylon", "fibreglass", "silicone", "aramid", "polyimide", "rubber", 
  "bone", "leather", "scale", "carapace", "horn", "ivory", "antler", "hide", "sinew", "tooth", "quill", "shell", 
];

const element = [
  "fire", "water", "air", "earth", "electric", "ice", "plant", "metal", "light", "plasma", "dark", "void",
  "poison", "time", "space", "force", "shadow", "radiation", "entrophy", "acid", "sonic", "life", "death", 
  "gravity", "stone", "illusion", "physical", "null", "explosive", 
];

const style = [
  "medieval", "futuristic", "fantasy", "feudal", "prehistoric", "elven", "vampiric", "gothic", "modern", 
  "dwarven", "ninja", "pirate", "cute", "elegant", "alien", "beast", "tribal", "minimalist", "art deco", 
  "contemporary", "crystalline", "space", "cyberpunk", "steampunk", "superhero", "comic", "heaven", "hell", 
  "european", "asian", "mesoamerican", "native", "viking", "gladiator", "scientific", "junk", "industrial", 
  "historical", "handmade", "primitive", "toy"
];

const extras = [
  "floating parts", "gemstones", "trinket", "keychain", "tassel", "organic parts", "living parts", "lasers", 
  "moving parts", "transformation", "hybrid weapon", "multiple forms", "everyday objects", "explosive", 
  "jet-propelled", "homing", "drone", "tentacles", "eyes", "talking", "telepathic link", "invisibility", "shielded", 
  "wings", 
];


const partMap = [base, head, ears, eyes, nose, legs, feet, tail, coat, colour];

function generateWeaponWithAnimation(index) {
  const button = document.querySelector(`button[onclick='generateWeaponWithAnimation(${index})']`);
  const element = document.getElementById(`num${index}`);
  const arr = partMap[index];
  button.disabled = true;
  let count = 0;
  const interval = setInterval(() => {
    element.textContent = arr[Math.floor(Math.random() * arr.length)];
    count++;
    if (count > 20) {
      clearInterval(interval);
      const final = arr[Math.floor(Math.random() * arr.length)];
      element.textContent = final;
      button.disabled = false;
    }
  }, 20);
}

function generateExtraWithAnimation(index) {
  const button = document.querySelector(`button[onclick='generateExtraWithAnimation(${index})']`);
  const element = document.getElementById(`num${index}`);
  button.disabled = true;
  let count = 0;
  const interval = setInterval(() => {
    element.textContent = extras[Math.floor(Math.random() * extras.length)];
    count++;
    if (count > 20) {
      clearInterval(interval);
      element.textContent = extras[Math.floor(Math.random() * extras.length)];
      button.disabled = false;
    }
  }, 20);
}
