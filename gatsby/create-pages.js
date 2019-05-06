const path = require("path")
const createLogPostPages = require("./pagination/create-log-post-pages")
const createCodePostPages = require("./pagination/create-code-post-pages")
const createMusicPostPages = require("./pagination/create-music-post-pages")
const createLogPages = require("./pagination/create-log-pages")
const createCodePages = require("./pagination/create-code-pages")
const createMusicPages = require("./pagination/create-music-pages")

const createPages = async ({ graphql, actions }) => {
  // 단일 페이지 생성 + next , prev
  await createLogPostPages(graphql, actions)
  await createCodePostPages(graphql, actions)
  await createMusicPostPages(graphql, actions)

  // Pagination
  await createLogPages(graphql, actions)
  await createCodePages(graphql, actions)
  await createMusicPages(graphql, actions)
}

module.exports = createPages
