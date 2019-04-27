const ghpages = require("gh-pages")

ghpages.publish(
  "public",
  {
    branch: "master",
    repo: "https://github.com/andresrodh/andresrodh.github.io.git",
  },
  () => {
    console.log("Deployed 🚀")
  }
)
