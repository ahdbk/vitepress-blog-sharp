const globby = require('globby')
const matter = require('gray-matter')
const fs = require('fs-extra')
const readingTime = require('reading-time');
module.exports = { getPosts , getCarouselImages}

async function getPosts() {
    let paths = await getPostMDFilePaths()
    let posts = await Promise.all(
        paths.map(async (item) => {
            const content = await fs.readFile(item, 'utf-8')
            const { data } = matter(content)
            data.date = _convertDate(data.date)
            return {
                metaData: data,
                path: `/${item.substring(5).replace('.md', '.html')}`,
                readingTime: readingTime(content).text
            }
        })
    )
    posts.sort(_compareDate)
    return posts
}

async function getCarouselImages() {
    return [
        "/assets/carousel/01.jpg",
        "/assets/carousel/02.jpg",
        "/assets/carousel/03.jpg",
        "/assets/carousel/04.jpg",
        "/assets/carousel/05.jpg",
        "/assets/carousel/06.jpg",
        "/assets/carousel/07.jpg",
    ]
}


function _convertDate(date = new Date().toString()) {
    const json_date = new Date(date).toJSON()
    return json_date.split('T')[0]
}

function _compareDate(obj1, obj2) {
    return obj1.metaData.date < obj2.metaData.date ? 1 : -1
}

async function getPostMDFilePaths() {
    let paths = await globby(['**.md'], {
        ignore: ['node_modules', 'README.md','CODE_OF_CONDUCT.md','CHANGELOG','contributing.md']
    })
    return paths.filter((item) => item.includes('posts/'))
}