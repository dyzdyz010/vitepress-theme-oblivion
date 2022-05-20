const fs = require('fs-extra')

const toISOStringWithTimezone = date => {
    const tzOffset = -date.getTimezoneOffset()
    const diff = tzOffset >= 0 ? '+' : '-'
    const pad = n => `${Math.floor(Math.abs(n))}`.padStart(2, '0')
    return date.getFullYear() +
        '-' + pad(date.getMonth() + 1) +
        '-' + pad(date.getDate()) +
        'T' + pad(date.getHours()) +
        ':' + pad(date.getMinutes()) +
        ':' + pad(date.getSeconds()) +
        diff + pad(tzOffset / 60) +
        ':' + pad(tzOffset % 60)
}

const prompt = require('prompt-sync')()
const args = process.argv.slice(2)
const command = args[0]

switch (command) {
    case 'newpost':
        const storePath = args[1]
        newpost(storePath)
        break

    default:
        break
}

function newpost(storePath) {
    var frontmatter = '---\n'
    const title = prompt('Title: ')
    frontmatter += `title: ${title}\n`
    const date = new Date()
    frontmatter += `date: ${toISOStringWithTimezone(date)}\n`
    const author = prompt('Author: ')
    if (author) {
        frontmatter += `author: ${author}\n`
    }
    frontmatter += 'tags:\n'
    while (true) {
        const tag = prompt('Tag(Press return to end): ')
        if (tag) {
            frontmatter += `\t- ${tag}\n`
        } else {
            break
        }
    }
    const collection = prompt('Collection: ')
    frontmatter += `collection: ${collection}\n`
    const draft = prompt('Draft(y/(n)): ')
    console.log(('draft: ' + draft));

    if (draft == 'y') {
        frontmatter += 'draft: true\n'
    } else {
        frontmatter += 'draft: false\n'
    }
    frontmatter += '---\n'

    const filename = date.getFullYear() * 1e4 + (date.getMonth() + 1) * 100 + date.getDate() + '-' + title.toLowerCase().replace(' ', '-') + '.md'
    const fullpath = storePath + (storePath.endsWith('/') ? '' : '/') + filename
    console.log(fullpath)
    fs.writeFile(fullpath, frontmatter, err => {
        console.log(err)
    })
    console.log(`Post created at: ${fullpath}`);
}