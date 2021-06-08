module.exports = function query (){
    return `
    {
      users {
        name
        email
        posts {
          title
          published
        }
      }
    }
    `
}