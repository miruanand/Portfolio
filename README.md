# Mirunalini A — Portfolio

A static site. No build step, no framework — just `index.html`, `style.css`, `script.js`, and an `assets/` folder.

## Run it locally
Open `index.html` directly in a browser, or from this folder run:
```
python3 -m http.server 8080
```
then visit http://localhost:8080

## Deploy on Vercel (recommended)
1. Create a new GitHub repo and push this whole folder to it.
2. Go to https://vercel.com → **Add New Project** → import that repo.
3. Framework preset: **Other** (no build command needed, output directory is `/`).
4. Click **Deploy**. You'll get a live `.vercel.app` link in under a minute.

After that, updating content (e.g. swapping your resume) is just:
```
git add .
git commit -m "update resume"
git push
```
Vercel auto-redeploys on every push.

## Deploy on Netlify (alternative)
Drag-and-drop this whole folder onto https://app.netlify.com/drop — done, no repo required (though connecting a repo is better long-term for the auto-redeploy workflow above).

## Folder structure
```
index.html
style.css
script.js
assets/
  images/profile.png
  resumes/Mirunalini_Hardware_Resume.pdf
  resumes/Mirunalini_Software_Resume.pdf
  patents/AgroBot.png
  patents/Maternal_fetal.png
  sih/TEAM_IMAGE.jpg
  certs/*.pdf, *.jpg
```

## Updating projects
Project cards are data-driven — open `script.js` and edit the `projects` array at the top. Each entry takes `domain` ("hw" or "sw"), `title`, `desc`, `tags`, an optional `badge`, and an optional `repo` link.
