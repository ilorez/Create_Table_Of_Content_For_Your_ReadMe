/*
Table of content:
    + I) Title one
        - 1) Title 1
            :paraghraph 1 
            :paraghraph 2 
        - 2) Title 2
        - 3) Title 3
    + II) Title one
        - 1) Title 1
            :paraghraph 1 
            :paraghraph 2 
        - 2) Title 2
        - 3) Title 3
*/

/*
+ you can set array of levels that you want create readme file for
+ you can set place of table of content the top or the buttom (default top)
+ you can set any path
+ can choise between write on you readme or create new one by defaule create new one
*/


const fs = require('fs');
// replace path with your README.md file path
const path = './README.md';
const levels = [2, 3]

/**
 * @function
 * @description This function add table of content to your readme file.
 * @param {string} path - the src to your readme file.
 * @param {number} level - the levels that you want create for it readme file.
 * @returns {null} nohting.
 * @example
 * CreateTableOfContent('path/to/file.md',[2,3,4])
 */

function CreateTableOfContent(path, level = 2) {
    if (typeof (level) == typeof 1) {
        level = [level]
    }
    level = level.sort()
    // console.log(typeof level)
    // return
    fs.readFile(path, 'utf-8', (err, data) => {
        if (err) {
            console.error("error in reading data", err);
            return;
        }
        const dashLevel = level.map(times => "#".repeat(times))
        // console.log(dashLevel)
        const index = data.indexOf(dashLevel[0])
        // console.log(index)
        //                       (`\n(##|###|####) [^\n]*\n`, "g")
        const regex = new RegExp(`\n(${dashLevel.join("|")}) [^\n]*\n`, "g")
        const titles = data.match(regex)
        // console.log(titles)
        if (titles === null) {
            console.error(`not titles start with ${dashLevel}`)
            return
        }

        // remove table of content if it found
        if (titles[0] === `\n${dashLevel[0]} Table of Content\n`) {
            data = data.slice(0, index) + data.slice(data.indexOf(dashLevel[0], index + 1))
            fs.writeFile(path, data, (err) => {
                if (err) {
                    console.log(err)
                }
            })

            CreateTableOfContent(path, level)
            return
        }
        // return
        const content = titles.map(title => {
            // console.log(title)
            hashe = title.match(/\n#*\s/)[0].replace(/(\n|\s)/g, "")
            // console.log(hashes)
            let hashNumbers = hashe.split("").length
            spaces = "  ".repeat(hashNumbers - level[0])
            // console.log(spaces)
            t = title.slice(hashNumbers + 2, -1)
            return `${spaces}- [${t}](#${t.trim().replace(/\s/g, "-").replace(/[&?#/%=+,:;\.!]/g, "").toLowerCase()}) \n`
        })
        // console.log(content)
        // return
        const table = `\n${dashLevel[0]} Table of Content\n${content.join("")} `
        // console.log(table)
        // return
        const newReadMe = data.slice(0, index) + table + "\n" + data.slice(index);
        fs.writeFile(path, newReadMe, (err) => {
            if (err) {
                console.log(err)
            }
        })

    })
}

CreateTableOfContent(path, levels);




