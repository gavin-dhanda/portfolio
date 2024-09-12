const { promises: fs } = require('fs')
const path = require('path')
const RSS = require('rss')
const matter = require('gray-matter')

/*
  * This script generates an RSS feed from the markdown files in the `pages/posts` directory.
  * It reads the frontmatter of each post and adds it to the feed.
  * The feed is then written to `public/feed.xml`.
*/
async function generate() {
  const feed = new RSS({
    title: 'Your Name',
    site_url: 'https://yoursite.com',
    feed_url: 'https://yoursite.com/feed.xml'
  })

  const posts = await fs.readdir(path.join(__dirname, '..', 'pages', 'posts'))
  const allPosts = []
  await Promise.all(
    posts.map(async (name) => {
      if (name.startsWith('index.')) return

      const content = await fs.readFile(
        path.join(__dirname, '..', 'pages', 'posts', name)
      )
      const frontmatter = matter(content)

      allPosts.push({
        title: frontmatter.data.title,
        url: '/posts/' + name.replace(/\.mdx?/, ''),
        date: frontmatter.data.date,
        description: frontmatter.data.description,
        categories: frontmatter.data.tag.split(', '),
        author: frontmatter.data.author
      })
    })
  )

  allPosts.sort((a, b) => new Date(b.date) - new Date(a.date))
  allPosts.forEach((post) => {
      feed.item(post)
  })
  await fs.writeFile('./public/feed.xml', feed.xml({ indent: true }))
}

generate()
