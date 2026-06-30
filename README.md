# ❤️ The Josh & KJ Decision Machine

A mobile-first one-page roulette app for date activities and food decisions.

## Features
- Activities / Food mode
- Mood, budget, distance, and rainy-day filters
- Jackpot and rare love jackpot results
- Challenges for every result
- Spin history
- Couple stats
- Date Night Meter and achievements
- Mobile-first design
- PWA support for Add to Home Screen
- Music toggle placeholder

## Add your own music
1. Put your song file in this folder and name it `music.mp3`.
2. Open `app.js`.
3. Find the music button section.
4. Add this line before `if (audio.paused)`:

```js
audio.src = 'music.mp3';
```

Note: iPhone browsers usually do not allow music to autoplay. The user normally needs to tap the music button once.

## Publish on GitHub Pages
1. Create a GitHub repository.
2. Upload all files in this folder.
3. Go to Settings > Pages.
4. Set Branch to `main` and folder to `/root`.
5. Open the generated GitHub Pages URL on your phone.
6. Tap Share > Add to Home Screen.
