// =====================================================
// ENTIRELY UPDATED script.js 
// - Leaderboard panel removed from main game screen
// - Clean and optimized code
// - No changes to core game logic
// =====================================================

const levels = [
  {
    categoryId: 1,
    image: "https://picsum.photos/400/400?image=10",
    bookCover: "https://m.media-amazon.com/images/I/51Q4Z8Z8Z8L._SY445_.jpg",
    questions: [
      { q: "What is the central theme of Manoj Gupta's book on the Indian Ocean Region?", options: ["Land-based conflicts", "Maritime regimes for regional cooperation", "Bilateral trade only", "Military alliances"], answer: "Maritime regimes for regional cooperation" },
      { q: "Which theoretical frameworks does Gupta synthesize to analyze regime effectiveness?", options: ["Realism and Liberalism", "Regime theory and structuration theory", "Marxism and Constructivism", "Feminism and Post-colonialism"], answer: "Regime theory and structuration theory" },
      { q: "What is identified as one of the most important maritime regimes in the IOR?", options: ["Exclusive Economic Zones", "Port State Control", "UNCLOS alone", "Bilateral naval exercises"], answer: "Port State Control" },
      { q: "The book highlights that security, economic well-being, and health of the Indian Ocean depend on what?", options: ["Global superpowers", "Ability of regional countries to govern the sea", "Oil prices", "Climate summits"], answer: "Ability of regional countries to govern the sea" },
      { q: "What challenge does the author point out regarding ocean governance in the IOR?", options: ["Overemphasis on maritime power", "Land-based orientation of regional countries", "Too much cooperation already", "Lack of ports"], answer: "Land-based orientation of regional countries" },
      { q: "Gupta argues that common maritime concerns have not led to broader regional cooperation due to what?", options: ["Absence of shared interests", "Land-based mindset of littoral states", "External interference only", "Lack of technology"], answer: "Land-based mindset of littoral states" },
      { q: "Which regime is examined for effectiveness in maritime scientific research?", options: ["Port State Control", "Maritime scientific research regime", "Exclusive Economic Zone regime", "Naval diplomacy"], answer: "Maritime scientific research regime" },
      { q: "The book emphasizes the need for countries in the IOR to develop power to govern what?", options: ["Land territories", "The sea", "Airspace", "Outer space"], answer: "The sea" },
      { q: "What post-Cold War context does the book analyze for maritime cooperation?", options: ["Bipolar world", "Multipolar regional order", "Unipolar dominance", "Isolationism"], answer: "Multipolar regional order" },
      { q: "Gupta's model for regime effectiveness combines regime theory with what?", options: ["Game theory", "Structuration theory", "Dependency theory", "World systems theory"], answer: "Structuration theory" },
      { q: "The author stresses that the health of the Indian Ocean cannot be separated from what?", options: ["Global trade", "Security and economic well-being of littoral states", "Tourism", "Fishing rights"], answer: "Security and economic well-being of littoral states" },
      { q: "What is the overall message regarding regional cooperation in the Indian Ocean?", options: ["It is impossible", "It is essential through effective maritime regimes", "It should be avoided", "It depends only on superpowers"], answer: "It is essential through effective maritime regimes" }
    ]
  },
  {
    categoryId: 2,
    image: "https://picsum.photos/400/400?image=20",
    bookCover: "https://m.media-amazon.com/images/I/41fZfZfZfZL._SY445_.jpg",
    questions: [
      { q: "What does Pius Malekandathil's 'Maritime India' primarily explore?", options: ["Only naval wars", "Socio-economic and political processes in coastal India and Indian Ocean circuits", "Modern shipping", "Port infrastructure"], answer: "Socio-economic and political processes in coastal India and Indian Ocean circuits" },
      { q: "The book discusses the impact of which power's expansion on coastal India?", options: ["British", "Portuguese", "Dutch", "French"], answer: "Portuguese" },
      { q: "What significant agricultural change occurred in Kerala due to intensified maritime trade?", options: ["Decline in spices", "600% increase in pepper production", "Shift to rice only", "No change"], answer: "600% increase in pepper production" },
      { q: "The work highlights the distinctive consciousness of which zones?", options: ["Himalayan", "Littoral (coastal)", "Desert", "Northern plains"], answer: "Littoral (coastal)" },
      { q: "Which foreign merchant groups' settlements and social processes are examined?", options: ["Only Arab traders", "Foreign merchant groups in India", "European settlers only", "Chinese merchants"], answer: "Foreign merchant groups in India" },
      { q: "The book covers maritime trade of the Sassanids with which region?", options: ["Europe", "India", "Africa", "China"], answer: "India" },
      { q: "What role did maritime trade play in shaping political processes in Goa?", options: ["No role", "Significant impact", "Only economic", "Only religious"], answer: "Significant impact" },
      { q: "The author analyzes the repercussions of Ottoman expansion into which ocean?", options: ["Atlantic", "Indian Ocean", "Pacific", "Arctic"], answer: "Indian Ocean" },
      { q: "The impact of Portuguese commercial expansion is discussed on which community in Kerala?", options: ["Hindu merchants", "Traditional Muslim merchants", "Christian settlers", "Jewish traders"], answer: "Traditional Muslim merchants" },
      { q: "The book examines the burgeoning of Portuguese power units in which region?", options: ["Goa", "Bengal", "Kerala", "Gujarat"], answer: "Bengal" },
      { q: "What role of private traders is highlighted in the structure of Estado da India?", options: ["Negligible", "Significant", "Only military", "None"], answer: "Significant" },
      { q: "The book ultimately gives the littoral zones the distinctive identity of what?", options: ["Maritime India", "Continental India", "Colonial India", "Modern India"], answer: "Maritime India" }
    ]
  },
  {
    categoryId: 3,
    image: "https://picsum.photos/400/400?image=30",
    bookCover: "https://indiannavy.nic.in/sites/default/files/Blue%20Waters%20Ahoy%20Cover.jpg",
    questions: [
      { q: "What period does 'Blue Waters Ahoy' chronicle in the history of the Indian Navy?", options: ["1947-1960", "2001-2010", "1990-2000", "2011-2020"], answer: "2001-2010" },
      { q: "The book emphasizes the Indian Navy’s shift towards becoming what?", options: ["Buyer’s Navy", "Builder’s Navy", "Allied Navy", "Defensive Navy"], answer: "Builder’s Navy" },
      { q: "What major indigenous capability effort is highlighted?", options: ["Importing submarines", "Designing and building an aircraft carrier", "Decommissioning ships", "Selling old vessels"], answer: "Designing and building an aircraft carrier" },
      { q: "The volume re-emphasizes the transformations and challenges faced by the Navy during which decade?", options: ["1990s", "2001-2010", "2010s", "1980s"], answer: "2001-2010" },
      { q: "Blue Waters Ahoy is which volume in the official history of the Indian Navy?", options: ["Fifth", "Sixth", "Seventh", "Eighth"], answer: "Sixth" },
      { q: "The book throws light on the Navy’s efforts in which area of shipbuilding?", options: ["Aircraft carrier design", "Submarine import", "Patrol boats only", "None"], answer: "Aircraft carrier design" },
      { q: "What role did the Navy expand during this period?", options: ["Only coastal defence", "Blue water operations and forward presence", "Riverine only", "Air defence only"], answer: "Blue water operations and forward presence" },
      { q: "The author served as Flag Officer Commanding-in-Chief of which command?", options: ["Western Naval Command", "Eastern Naval Command", "Southern Naval Command", "Andaman & Nicobar"], answer: "Eastern Naval Command" },
      { q: "The book chronicles the Navy’s impetus towards what kind of capability development?", options: ["Indigenous design and build", "Complete import dependence", "Reduction in fleet", "Coastal defence only"], answer: "Indigenous design and build" },
      { q: "What does the volume highlight regarding naval diplomacy?", options: ["Its decline", "Its growth and importance", "No mention", "Only exercises"], answer: "Its growth and importance" },
      { q: "The period covered saw focus on which type of security?", options: ["Only territorial", "Economic and energy security", "Only military", "None"], answer: "Economic and energy security" },
      { q: "Overall, the book portrays the Indian Navy during 2001-2010 as moving towards what?", options: ["Decline", "A modern blue-water builder’s navy", "Coastal force", "Allied dependency"], answer: "A modern blue-water builder’s navy" }
    ]
  },
  {
    categoryId: 4,
    image: "https://picsum.photos/400/400?image=40",
    bookCover: "https://m.media-amazon.com/images/I/51Q4Z8Z8Z8L._SY445_.jpg",
    questions: [
      { q: "What does 'atomic' refer to in Atomic Habits?", options: ["Nuclear power", "Tiny changes with remarkable results", "Fast success", "Big goals"], answer: "Tiny changes with remarkable results" },
      { q: "What are the four stages of the habit loop?", options: ["Goal, Plan, Action, Result", "Cue, Craving, Response, Reward", "Motivation, Discipline, Success, Repeat", "Dream, Try, Fail, Quit"], answer: "Cue, Craving, Response, Reward" },
      { q: "What philosophy does James Clear call the 'aggregation of marginal gains'?", options: ["1% better every day", "All or nothing", "Big leaps", "Perfectionism"], answer: "1% better every day" },
      { q: "According to the book, what matters more than goals?", options: ["Willpower", "Systems and processes", "Luck", "External motivation"], answer: "Systems and processes" },
      { q: "What are the Four Laws of Behavior Change for building good habits?", options: ["Make it obvious, attractive, easy, satisfying", "Make it hard, visible, difficult, unsatisfying", "Ignore cues, suppress cravings", "Focus only on rewards"], answer: "Make it obvious, attractive, easy, satisfying" },
      { q: "Identity-based habits focus first on changing what?", options: ["Outcomes", "Processes", "Your identity", "Environment"], answer: "Your identity" },
      { q: "What is habit stacking?", options: ["Doing many habits at once", "Pairing a new habit with an existing one", "Stopping bad habits", "Tracking only"], answer: "Pairing a new habit with an existing one" },
      { q: "The book says winners and losers have the same what?", options: ["Systems", "Goals", "Habits", "Motivation"], answer: "Goals" },
      { q: "To break bad habits, invert the Four Laws — for example, make it what?", options: ["Obvious, attractive, easy, satisfying", "Invisible, unattractive, difficult, unsatisfying", "Visible and easy", "Rewarding"], answer: "Invisible, unattractive, difficult, unsatisfying" },
      { q: "What layer of behavior change is considered the deepest?", options: ["Outcomes", "Processes", "Identity", "Environment"], answer: "Identity" },
      { q: "Clear emphasizes that early progress is often in what phase?", options: ["Visible", "The plateau of latent potential", "Fast results", "Decline"], answer: "The plateau of latent potential" },
      { q: "The ultimate purpose of habits is to become what kind of person?", options: ["Rich and famous", "The person you wish to be", "Perfect", "Famous"], answer: "The person you wish to be" }
    ]
  },
  {
    categoryId: 5,
    image: "https://picsum.photos/400/400?image=50",
    bookCover: "https://m.media-amazon.com/images/I/41fZfZfZfZL._SY445_.jpg",
    questions: [
      { q: "What is the core thesis of 'India, That is Bharat'?", options: ["India is only a modern nation-state", "India is an ancient continuous civilisational state called Bharat", "India should fully adopt Western models", "Colonial rule had no lasting impact"], answer: "India is an ancient continuous civilisational state called Bharat" },
      { q: "The book is structured into three main parts. What are they?", options: ["Economy, Politics, Society", "Coloniality, Civilisation, Constitution", "Religion, Trade, War", "Education, Science, Technology"], answer: "Coloniality, Civilisation, Constitution" },
      { q: "What does J Sai Deepak distinguish as different from colonialism?", options: ["Decolonisation", "Coloniality (the lingering mindset)", "Post-colonialism", "Globalisation"], answer: "Coloniality (the lingering mindset)" },
      { q: "The author argues that modern Indian constitutional morality is heavily influenced by what?", options: ["Ancient Indic traditions", "Protestant Reformation theology and colonial consciousness", "Pure indigenous jurisprudence", "Marxist ideology"], answer: "Protestant Reformation theology and colonial consciousness" },
      { q: "What does the book advocate as a civilisational imperative for Bharat?", options: ["Complete Westernisation", "Decoloniality to reclaim indigeneity", "Return to pre-1947 systems", "Adoption of secularism as defined in the West"], answer: "Decoloniality to reclaim indigeneity" },
      { q: "The title 'India, That is Bharat' is taken from which article of the Indian Constitution?", options: ["Article 1", "Article 370", "Article 21", "Article 14"], answer: "Article 1" },
      { q: "The book traces the roots of coloniality to events in Europe starting from which century?", options: ["10th", "15th", "20th", "21st"], answer: "15th" },
      { q: "What term does the author use for the unconscious continuation of colonial frameworks in the Indian mind?", options: ["Colonisation", "Coloniality", "Decolonisation", "Globalisation"], answer: "Coloniality" },
      { q: "The author critiques which school of thought as insufficient to address coloniality?", options: ["Decolonial school", "Post-colonial and Modern schools", "Indic school", "All schools"], answer: "Post-colonial and Modern schools" },
      { q: "The book examines the influence of which two colonialities on Indic civilisation?", options: ["European and Middle Eastern", "Only European", "Only Chinese", "Only American"], answer: "European and Middle Eastern" },
      { q: "According to the book, what shaped universal definitions of modernity, secularism, and equality?", options: ["Ancient Indian thought", "Protestant Reformation and Christian morality", "Marxist theory", "Indic philosophy"], answer: "Protestant Reformation and Christian morality" },
      { q: "The ultimate goal emphasized in the book is to reclaim what?", options: ["Political power only", "Indic civilisational consciousness and indigeneity", "Western acceptance", "Economic growth only"], answer: "Indic civilisational consciousness and indigeneity" }
    ]
  }
];

const categories = [
  { id: 1, name: "IOR: Maritime regimes of regional wars", author: "Manoj Gupta", level: levels[0] },
  { id: 2, name: "Maritime India", author: "Pius Malekandathil", level: levels[1] },
  { id: 3, name: "Blue Waters Ahoy", author: "VAdm Arup Singh", level: levels[2] },
  { id: 4, name: "Atomic Habits", author: "James Clear", level: levels[3] },
  { id: 5, name: "India, that is Bharat", author: "J Sai Deepak", level: levels[4] }
];

// Game Variables
let score = 0;
let timeElapsed = 0;
let timerInterval;
let flippedPiecesCount = 0;
let selectedCategory = null;
let playerName = "";
let currentLevelData = null;

// DOM Elements
const categoryScreen = document.getElementById('category-screen');
const categoryList = document.getElementById('category-list');
const nameScreen = document.getElementById('name-screen');
const playerNameInput = document.getElementById('player-name');
const startGameBtn = document.getElementById('start-game-btn');
const gameHeader = document.getElementById('game-header');
const displayNameEl = document.getElementById('display-name');
const scoreboard = document.getElementById('scoreboard');
const timerDisplay = document.getElementById('timer');
const gameContainer = document.getElementById('game-container');
const piecesContainer = document.getElementById('pieces');
const boardContainer = document.getElementById('board');
const questionBox = document.getElementById('question-box');
const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options');
const hintBtn = document.getElementById('hint-btn');
const rewardBox = document.getElementById('reward-box');
const rewardImage = document.getElementById('reward-image');
const levelSummary = document.getElementById('level-summary');
const completionLeaderboardList = document.getElementById('completion-leaderboard-list');

const correctSound = document.getElementById('correct-sound');
const wrongSound = document.getElementById('wrong-sound');

// Helper Functions
function playSound(soundElement) {
  if (soundElement) {
    soundElement.currentTime = 0;
    soundElement.play().catch(() => {});
  }
}

function startTimer() {
  clearInterval(timerInterval);
  timerInterval = setInterval(() => {
    timeElapsed++;
    timerDisplay.textContent = `Time: ${timeElapsed}s`;
  }, 1000);
}

function updateScoreboard() {
  scoreboard.textContent = `Score: ${score}`;
}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function createGrid(container) {
  container.innerHTML = '';
  container.style.gridTemplateColumns = `repeat(4, 1fr)`;
  container.style.gridTemplateRows = `repeat(3, 1fr)`;
}

// Category & Name Flow
function createCategoryCards() {
  categoryList.innerHTML = '';
  categories.forEach(cat => {
    const card = document.createElement('div');
    card.className = 'category-card';
    card.innerHTML = `<h3>${cat.name}</h3><p class="author">by ${cat.author}</p>`;
    card.addEventListener('click', () => selectCategory(cat));
    categoryList.appendChild(card);
  });
}

function selectCategory(category) {
  selectedCategory = category;
  currentLevelData = category.level;
  categoryScreen.classList.add('hidden');
  nameScreen.classList.remove('hidden');
  playerNameInput.focus();
}

function startGameAfterName() {
  playerName = playerNameInput.value.trim();
  if (!playerName) {
    alert("Please enter your name to continue.");
    playerNameInput.focus();
    return;
  }

  nameScreen.classList.add('hidden');
  gameHeader.classList.remove('hidden');
  gameContainer.classList.remove('hidden');

  displayNameEl.textContent = playerName;

  score = 0;
  timeElapsed = 0;
  flippedPiecesCount = 0;

  updateScoreboard();
  startTimer();
  loadLevel();
}

function goBackToCategories() {
  clearInterval(timerInterval);
  gameHeader.classList.add('hidden');
  gameContainer.classList.add('hidden');
  rewardBox.classList.add('hidden');
  questionBox.classList.add('hidden');
  playerNameInput.value = "";

  categoryScreen.classList.remove('hidden');
}

// Load Level
function loadLevel() {
  if (!currentLevelData) return;

  flippedPiecesCount = 0;
  rewardBox.classList.add('hidden');

  updateScoreboard();
  createGrid(piecesContainer);
  createGrid(boardContainer);

  let currentQuestions = shuffleArray([...currentLevelData.questions]);
  const requiredQuestions = currentQuestions.slice(0, 12);

  const pieceData = requiredQuestions.map((q, index) => ({ question: q, index: index }));
  const shuffledPieceData = shuffleArray(pieceData);

  shuffledPieceData.forEach((data, i) => {
    const piece = document.createElement('div');
    piece.classList.add('piece');
    piece.textContent = i + 1;
    piece.setAttribute('data-index', data.index);
    piece.addEventListener('click', () => handlePieceClick(piece, data.question));
    piecesContainer.appendChild(piece);
  });
}

function handlePieceClick(pieceElement, question) {
  if (pieceElement.classList.contains('flipped')) return;

  questionText.textContent = question.q;
  optionsContainer.innerHTML = '';
  hintBtn.onclick = () => showHint(question.answer);
  hintBtn.style.display = 'block';

  const shuffledOptions = shuffleArray([...question.options]);
  shuffledOptions.forEach(option => {
    const btn = document.createElement('button');
    btn.textContent = option;
    btn.addEventListener('click', () => checkAnswer(option, question.answer, pieceElement));
    optionsContainer.appendChild(btn);
  });
  
  questionBox.classList.remove('hidden');
}

function checkAnswer(selectedOption, correctAnswer, pieceElement) {
  Array.from(optionsContainer.children).forEach(btn => btn.disabled = true);
  questionBox.classList.add('hidden');

  if (selectedOption === correctAnswer) {
    playSound(correctSound);
    score += 10;
    flipPiece(pieceElement);
  } else {
    playSound(wrongSound);
    score = Math.max(0, score - 5);
  }

  updateScoreboard();

  setTimeout(() => {
    if (flippedPiecesCount === 12) {
      showRewardBox();
    }
  }, 500);
}

function showHint(correctAnswer) {
  score = Math.max(0, score - 2);
  updateScoreboard();

  const wrongOptions = Array.from(optionsContainer.children).filter(btn => btn.textContent !== correctAnswer && !btn.disabled);
  if (wrongOptions.length > 1) {
    const toRemove = wrongOptions[Math.floor(Math.random() * wrongOptions.length)];
    toRemove.style.opacity = '0.3';
    toRemove.disabled = true;
    hintBtn.style.display = 'none';
  } else {
    hintBtn.style.display = 'none';
  }
}

function flipPiece(pieceElement) {
  const index = parseInt(pieceElement.getAttribute('data-index'));
  const size = 4;
  const row = Math.floor(index / size);
  const col = index % size;
  const tileSize = 100 / 3;

  pieceElement.style.backgroundImage = `url(${currentLevelData.image})`;
  pieceElement.style.backgroundPosition = `${col * tileSize}% ${row * tileSize}%`;
  pieceElement.style.backgroundSize = `400% 400%`;
  pieceElement.classList.add('flipped');
  flippedPiecesCount++;
}

function showRewardBox() {
  clearInterval(timerInterval);
  
  rewardImage.src = currentLevelData.bookCover || currentLevelData.image;
  levelSummary.textContent = `You completed the quiz in ${timeElapsed} seconds with a score of ${score}!`;

  // Leaderboard only on completion screen
  let leaderboard = [{
    name: playerName || "Anonymous",
    score: score,
    time: timeElapsed,
    category: selectedCategory ? selectedCategory.name : "Unknown"
  }];
  
  localStorage.setItem('jigsawQuizLeaderboard', JSON.stringify(leaderboard));

  completionLeaderboardList.innerHTML = '';
  leaderboard.forEach((entry, index) => {
    const li = document.createElement('li');
    li.textContent = `${index + 1}. ${entry.name} - Score: ${entry.score} (Time: ${entry.time}s) [${entry.category}]`;
    completionLeaderboardList.appendChild(li);
  });

  rewardBox.classList.remove('hidden');
}

function restartGame() {
  window.location.reload();
}

// Initialization
document.addEventListener('DOMContentLoaded', () => {
  localStorage.removeItem('jigsawQuizLeaderboard');
  createCategoryCards();
  startGameBtn.addEventListener('click', startGameAfterName);
});