const fs = require('fs');
// replace path with your README.md file path
const path = './yourReadme.md';
const level = 2

/**
 * @function
 * @description This function add table of content to your readme file.
 * @param {string} path - the src to your readme file.
 * @param {number} level - the level that you want create for it readme file.
 * @returns {null} nohting.
 */

function CreateTableOfContent(path, level = 2) {
    fs.readFile(path, 'utf-8', (err, data) => {
        if (err) {
            console.error("error in reading data", err);
            return;
        }
        const dashLevel = "#".repeat(level);
        const index = data.indexOf("##")
        const regex = new RegExp(`\n${dashLevel} [^\n]*\n`, "g")
        const titles = data.match(regex)
        // console.log(data)
        // console.log(titles)
        if (titles === null) {
            console.error(`not titles start with ${dashLevel}`)
            return
        }
        // return
        if (titles[0] === "\n## Table of Content\n") {
            data = data.slice(0, index) + data.slice(data.indexOf("##", index + 1))
            fs.writeFile(path, data, (err) => {
                if (err) {
                    console.log(err)
                }
            })

            CreateTableOfContent(path, level)
            return
        }
        const content = titles.map(title => {
            t = title.slice(4, -1)
            return `- [${t}](#${t.replace(/[&?#/%=+,;.!]*/g, "").trim().replace(/\s/g, "-").toLowerCase()}) \n`
        })


        const table = `\n${dashLevel} Table of Content\n${content.join("")} `

        const newReadMe = data.slice(0, index) + table + "\n" + data.slice(index);
        fs.writeFile(path, newReadMe, (err) => {
            if (err) {
                console.log(err)
            }
        })

    })
}

CreateTableOfContent(path, level);
