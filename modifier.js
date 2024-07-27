const path = require("path")
const fs = require("fs/promises")

const currentDir = path.join(__dirname, '/')

async function exec(){
    const files = await fs.readdir(currentDir)
    const counterFile = files[1]
    let currentDay = parseInt(counterFile.split("-")[1].split(".")[0], 10)
    const newDay = ++currentDay
    await fs.writeFile(path.join(__dirname, counterFile), `Day ${newDay}`)
    await fs.rename(path.join(__dirname, counterFile), `day-${newDay}.txt`)

    console.log("🇬🇭❤️")
}

exec()