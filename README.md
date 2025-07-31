# 😩 tired-of-manually-having-to-fill-out-github-green-wall

Automated commit system to keep your GitHub contributions graph green — without lifting a finger.

This script runs a daily scheduled task that updates a dummy file and pushes a commit, helping you maintain consistent contributions even on your busiest (or laziest) days.

---

## 🚀 Features

- 🟩 Automatically updates your GitHub contribution graph
- ⏱️ Scheduled via cron (or can be adapted to GitHub Actions, local timers, etc.)
- 📝 Minimal: modifies a simple `.txt` file with a timestamp
- 🔒 Uses your Git credentials or access token for authentication

---

## 📦 File Structure

```bash
.
├── cron.log              # Log of cron executions
├── day-XXX.txt           # Daily text files, modified by script
├── modifier.js           # Main automation script
└── ...
```

## ⚙️ Setup Instructions
1. Clone this repository
   ```
     git clone https://github.com/hendrixgotcodes/tired-of-manually-having-to-fill-out-github-green-wall.git
     cd tired-of-manually-having-to-fill-out-github-green-wall
   ```
   
2.  Install Node.js (if not already installed)
    ```
      # macOS (Homebrew)
      brew install node
      
      # Ubuntu/Debian
      sudo apt install nodejs npm
    ```
    
3.  Configure Git credentials
     ```
        git config --global user.name "Your Name"
        git config --global user.email "you@example.com"
     ```

4.  Set up a cron job (Linux/macOS)
     ```
        crontab -e
     ```

Made with ❤️
Make sure to follow me
