const items = {
  activities: [
    ['🎲 Board Games','Winner gets to choose dessert.','relaxing','0-20','nearby',false],
    ['🎬 Movies','Loser buys popcorn, winner chooses seats.','relaxing','50-100','20min',false],
    ['🦁 Zoo','Find the animal that looks most like each other. Be kind-ish.','adventurous','50-100','anywhere',true],
    ['📚 Library','Pick one random book for each other.','relaxing','0-20','nearby',false],
    ['🎨 Batik Painting','Make something your future selves will laugh at lovingly.','romantic','50-100','20min',false],
    ['🏺 Pottery','Create a tiny thing and give it a dramatic name.','romantic','100+','20min',false],
    ['🗼 KL Tower','Take one touristy photo without shame.','romantic','100+','20min',true],
    ['🐠 KLCC / Aquaria','Choose your couple sea creature mascot.','romantic','100+','20min',false],
    ['🛷 Skyline Luge','Winner gets bragging rights for 24 hours.','adventurous','100+','anywhere',true],
    ['🥾 Hiking','No complaining for the first 20 minutes.','active','0-20','anywhere',true],
    ['🧺 Picnic','No phones for 30 minutes.','romantic','20-50','nearby',true],
    ['🚲 Cycling at the Park','Race to the next tree. Safely.','active','20-50','nearby',true],
    ['🌊 Sunway Lagoon','One ride each that the other chooses.','adventurous','100+','anywhere',true],
    ['💆 Couple Massage','No talking for the first 10 minutes.','romantic','100+','20min',false],
    ['🐄 Farm Fresh @ UPM','Buy one cute snack to share.','relaxing','20-50','20min',true],
    ['☕ Work at the Cafe','One productive hour before scrolling.','relaxing','20-50','nearby',false],
    ['📖 Read a Book at the Cafe','Swap books after 20 minutes and explain the plot badly.','relaxing','20-50','nearby',false],
    ['🏺 Pottery Workshop','Make something that reminds you of each other.','romantic','100+','20min',false],
    ['🏛️ Museum','Pick one artwork/object and invent a backstory.','relaxing','20-50','20min',false],
    ['🏖️ To the Beach!','Find the prettiest shell or stone for each other.','romantic','100+','anywhere',true],
    ['🐱 Pet Cafe','Take a photo with the pet that judges you the most.','relaxing','20-50','20min',false],
    ['🏸 Badminton','Loser buys drinks.','active','20-50','nearby',false],
    ['🏐 Volleyball','Best rally gets a victory selfie.','active','0-20','nearby',true],
    ['🎻 Orchestra / Musical','Dress one level fancier than usual.','romantic','100+','anywhere',false],
    ['🎤 Karaoke','Each person must sing one dramatic song.','adventurous','50-100','20min',false],
    ['🧱 Build a Block / Lego','Build one mini thing together with a title.','relaxing','50-100','nearby',false],
    ['🔐 Escape Room','No blaming each other until after escaping.','adventurous','100+','20min',false],
    ['🛶 Kayak','Create a ridiculous boat team name.','adventurous','50-100','anywhere',true],
    ['🧗 Bouldering','Whoever reaches higher chooses dinner.','active','50-100','20min',false]
  ],
  foods: [
    ['🍣 Japanese','Order one thing you have never tried.','relaxing','50-100','nearby',false],
    ['🥩 Korean BBQ','Cook food for your partner only for the first round.','adventurous','100+','20min',false],
    ['🍝 Western Food','No ordering the usual. Tiny rebellion.','relaxing','50-100','nearby',false],
    ['🍟 Fast Foods','Upgrade only if both agree. The wallet has feelings.','budget','20-50','nearby',false],
    ['🌶️ Ayam Gepuk','Medium spicy minimum. Brave face required.','budget','20-50','nearby',false],
    ['🍜 Super Kitchen Chili Pan Mee','Finish every noodle. Respect the bowl.','budget','20-50','nearby',false],
    ['🥬 Fasting','Save the money for the next date fund.','budget','0-20','nearby',false],
    ['🍜 Noodle','Share one side dish.','budget','20-50','nearby',false],
    ['🥢 Fu Fu Noodles','Take one proper noodle-lift photo.','relaxing','20-50','nearby',false],
    ['🍲 Hai Di Lao','Try one ingredient you have never ordered.','adventurous','100+','20min',false],
    ['🍗 Borenos!','One person chooses sauce, the other chooses side.','relaxing','50-100','20min',false],
    ['👩‍🍳 KJ Cook','Josh washes dishes. Non-negotiable royalty tax.','romantic','20-50','nearby',false],
    ['🍚 Sukiya','Order like you are in a comfort-food anime episode.','budget','20-50','nearby',false],
    ['🥗 Eat Healthy. Veggies only!','No dessert today. The spinach is watching.','budget','20-50','nearby',false],
    ['🤴 Anything Josh wants','KJ cannot complain for one meal.','relaxing','50-100','nearby',false],
    ['👸 Anything KJ wants','Josh cannot say “anything”.','romantic','50-100','nearby',false],
    ['☕ Thong Kee','Order one thing to share.','budget','20-50','nearby',false],
    ['🍖 Ribs King','One bite must be rated MasterChef style.','adventurous','50-100','20min',false],
    ['🍜 Noodle Art','Share one drink. Fancy straw diplomacy.','budget','20-50','nearby',false],
    ['🌴 Rustic Borneo','Talk in Sarawak mode for at least 5 minutes.','romantic','50-100','20min',false],
    ['🍣 Sushi Ten','Order one plate based only on looks.','relaxing','50-100','nearby',false],
    ['🍜 Mama Ting','Pick the most comforting dish.','relaxing','20-50','20min',false],
    ['🍲 Bak Kut Teh','Extra yau char kwai if both approve.','relaxing','50-100','20min',false],
    ['🥢 Yong Tau Foo','Each person chooses 3 pieces for the other.','budget','20-50','nearby',false],
    ['🍔 BurgerLabs','No fries until the burger is finished.','adventurous','50-100','20min',false]
  ]
};

const jackpots = [
  ['🍦 LOVE JACKPOT: Ice Cream Date','Get ice cream before or after the main plan.'],
  ['🌅 LOVE JACKPOT: Sunset Walk','Find a sunset spot and take one photo together.'],
  ['🎁 LOVE JACKPOT: RM20 Surprise Gift','Buy each other something small and silly.'],
  ['💆 MEGA JACKPOT: Free Massage Voucher','Winner gets one massage voucher from the other.'],
  ['☕ LOVE JACKPOT: Coffee & Deep Talk','Ask one question you have never asked before.']
];

const $ = (id) => document.getElementById(id);
let mode = 'activities';
let state = JSON.parse(localStorage.getItem('decisionMachine') || '{"history":[],"stats":{"total":0,"foods":0,"activities":0,"jackpots":0}}');
const achievements = [
  ['First Spin', s => s.stats.total >= 1],
  ['10 Spins', s => s.stats.total >= 10],
  ['Food Explorer', s => s.stats.foods >= 5],
  ['Adventure Couple', s => s.history.filter(h => h.mood === 'adventurous').length >= 3],
  ['Healthy Once', s => s.history.some(h => h.title.includes('Veggies'))],
  ['Fasting Survivor', s => s.history.some(h => h.title.includes('Fasting'))],
  ['Jackpot Lovers', s => s.stats.jackpots >= 1],
  ['Level 5 Couple', s => Math.floor(s.stats.total / 5) + 1 >= 5]
];

function save(){ localStorage.setItem('decisionMachine', JSON.stringify(state)); }
function render(){
  $('totalSpins').textContent = state.stats.total;
  $('foodSpins').textContent = state.stats.foods;
  $('dateSpins').textContent = state.stats.activities;
  $('jackpots').textContent = state.stats.jackpots;
  const level = Math.floor(state.stats.total / 5) + 1;
  $('levelBadge').textContent = `Lv. ${level}`;
  $('meterFill').style.width = `${(state.stats.total % 5) * 20}%`;
  const food = state.stats.foods, date = state.stats.activities;
  $('meterTitle').textContent = food > date + 2 ? 'Foodie Era Activated' : date > food + 2 ? 'Adventure Era Activated' : 'Balanced Couple Energy';
  $('meterNote').textContent = `${5 - (state.stats.total % 5 || 5)} more spin(s) to the next level.`;
  $('historyList').innerHTML = state.history.slice(0, 7).map(h => `<li><span>${h.title}</span><small>${h.type}</small></li>`).join('') || '<li><span>No spins yet.</span><small>Fresh start</small></li>';
  $('achievements').innerHTML = achievements.map(([name, fn]) => `<span class="badge ${fn(state) ? 'unlocked' : ''}">${fn(state) ? '✅' : '🔒'} ${name}</span>`).join('');
}
function matches(item){
  const mood = $('moodFilter').value, budget = $('budgetFilter').value, distance = $('distanceFilter').value, rain = $('rainToggle').checked;
  const [, , itemMood, itemBudget, itemDistance, outdoor] = item;
  return (mood === 'all' || itemMood === mood) && (budget === 'all' || itemBudget === budget) && (distance === 'all' || distance === itemDistance || itemDistance === 'nearby') && (!rain || !outdoor);
}
function pick(){
  if (Math.random() < 0.08) {
    const j = jackpots[Math.floor(Math.random() * jackpots.length)];
    return {title:j[0], challenge:j[1], type:'Jackpot', mood:'romantic', jackpot:true};
  }
  const pool = items[mode].filter(matches);
  const source = pool.length ? pool : items[mode];
  const i = source[Math.floor(Math.random() * source.length)];
  return {title:i[0], challenge:i[1], type: mode === 'foods' ? 'Food' : 'Activity', mood:i[2], jackpot:false};
}
function confetti(){
  const c = $('confetti'); c.innerHTML = '';
  for(let i=0;i<70;i++){
    const el = document.createElement('i');
    el.style.left = Math.random()*100 + 'vw';
    el.style.background = ['#ff3b78','#ffd166','#62e6b8','#ffffff','#b86bff'][Math.floor(Math.random()*5)];
    el.style.animationDelay = Math.random()*260 + 'ms';
    c.appendChild(el);
  }
  setTimeout(()=> c.innerHTML = '', 1500);
}
function spin(){
  const reel = $('reel');
  const all = [...items.activities, ...items.foods].map(x=>x[0]);
  reel.classList.add('spinning');
  $('spinBtn').disabled = true;
  let ticks = 0;
  const timer = setInterval(()=>{
    reel.textContent = all[Math.floor(Math.random()*all.length)];
    if(++ticks > 18){
      clearInterval(timer);
      const result = pick();
      reel.classList.remove('spinning');
      reel.textContent = result.title;
      $('resultTitle').textContent = result.title;
      $('resultMeta').textContent = result.jackpot ? 'Rare bonus unlocked ✨' : `${result.type} • ${result.mood} mood`;
      $('challengeText').textContent = result.challenge;
      state.stats.total++;
      if(result.jackpot) state.stats.jackpots++; else state.stats[mode]++;
      state.history.unshift({...result, date:new Date().toISOString()});
      state.history = state.history.slice(0, 50);
      if(navigator.vibrate) navigator.vibrate([35, 35, 50]);
      confetti(); save(); render();
      $('spinBtn').disabled = false;
    }
  }, 80);
}

document.querySelectorAll('.mode-btn').forEach(btn => btn.addEventListener('click', () => {
  mode = btn.dataset.mode;
  document.querySelectorAll('.mode-btn').forEach(b => b.classList.toggle('active', b === btn));
  $('resultMeta').textContent = mode === 'foods' ? 'Food mode. Hunger tribunal is in session.' : 'Activity mode. Adventure committee is awake.';
}));
$('spinBtn').addEventListener('click', spin);
$('clearBtn').addEventListener('click', () => { state = {history:[], stats:{total:0, foods:0, activities:0, jackpots:0}}; save(); render(); });
$('musicBtn').addEventListener('click', () => {
  const audio = $('bgMusic');
  if (!audio.src) alert('Add your music file as music.mp3 in this folder, then set bgMusic.src = "music.mp3" in app.js.');
  audio.src = 'music.mp3'; if (audio.paused) { audio.play().catch(()=>{}); $('musicBtn').textContent = '🔊'; }
  else { audio.pause(); $('musicBtn').textContent = '🔇'; }
});
if ('serviceWorker' in navigator) navigator.serviceWorker.register('sw.js').catch(()=>{});
render();
