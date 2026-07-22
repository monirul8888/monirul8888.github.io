# 📊 GitHub Contribution Calendar

A dynamic GitHub contribution calendar for **GitHub Pages** built with **GitHub Actions, GitHub GraphQL API, and JavaScript**.

This project automatically collects GitHub contribution data, stores it as JSON, and displays a GitHub-style green contribution calendar with year filtering.

Perfect for personal portfolios, developer websites, and GitHub profile showcases.

---

## ✨ Features

- 🟩 GitHub-style contribution heatmap
- 📅 Year-wise contribution filtering
- 🔄 Automatic daily updates
- 📈 Accurate contribution count
- 🎨 Dynamic green intensity levels
- ⚡ Fully static frontend (GitHub Pages compatible)
- 🔐 Secure API token handling using GitHub Secrets
- 🤖 Automatic commits through GitHub Actions

---

# 🚀 How It Works

```
GitHub Profile
      │
      ▼
GitHub GraphQL API
      │
      ▼
GitHub Actions Workflow
      │
      ▼
contributions.json
      │
      ▼
JavaScript Calendar Renderer
      │
      ▼
GitHub Pages Website
```

---

# 📁 Project Structure

```
your-github-pages-repo/

│
├── index.html
├── github-calendar.js
│
├── data/
│   └── contributions.json
│
└── .github/
    └── workflows/
        └── github-contributions.yml
```

---

# ⚙️ Setup Guide

## 1. Create GitHub Token

Go to:

```
GitHub
→ Settings
→ Developer settings
→ Personal access tokens
→ Fine-grained tokens
→ Generate new token
```

Create a token.

Recommended settings:

### Repository access

```
Public repositories
(Read-only access)
```

### Permissions

No extra permission is required for public contribution data.

---

## 2. Add Repository Secret

Go to your repository:

```
Settings
→ Secrets and variables
→ Actions
→ New repository secret
```

Create:

```
Name:
GH_TOKEN
```

Value:

```
your_github_token
```

Save it.

---

# 🔧 GitHub Actions Setup

Create:

```
.github/workflows/github-contributions.yml
```

The workflow will:

- Fetch GitHub contribution data
- Generate `data/contributions.json`
- Update the calendar automatically
- Commit changes when new data is available

---

# 🕒 Automatic Update

The workflow runs automatically:

```
Every day at 00:00 UTC
```

Flow:

```
GitHub Actions
        ↓
Fetch contribution data
        ↓
Update JSON file
        ↓
Commit changes
        ↓
GitHub Pages updates
```

No manual update is required.

---

# 🖥️ Frontend Usage

Add the JavaScript file:

```html
<script src="./github-calendar.js"></script>
```

before closing:

```html
</body>
```

The script reads:

```
data/contributions.json
```

and generates the contribution calendar.

---

# 🎨 Customization

## Change GitHub Username

Open:

```
.github/workflows/github-contributions.yml
```

Find:

```graphql
user(login:"moonirul")
```

Replace:

```graphql
user(login:"your_username")
```

---

## Change Calendar Colors

The calendar uses GitHub contribution colors:

```javascript
day.color
```

You can customize colors inside:

```
github-calendar.js
```

---

# 🔐 Security

- API token is stored in GitHub Secrets
- Token is never exposed in frontend code
- Frontend only reads generated JSON data
- Safe for GitHub Pages deployment

---

# 📦 Technologies Used

- HTML
- Tailwind CSS
- JavaScript
- GitHub Actions
- GitHub GraphQL API
- GitHub Pages

---

# 🤝 Contributing

Contributions are welcome!

Steps:

1. Fork this repository
2. Create your feature branch

```bash
git checkout -b feature/new-feature
```

3. Commit your changes

```bash
git commit -m "Add new feature"
```

4. Push changes

```bash
git push origin feature/new-feature
```

5. Create a Pull Request

---

# 📄 License

MIT License

---

⭐ If this project helped you, consider giving it a star!