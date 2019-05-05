'use strict'
const NpmProfile = require('./index.js')

NpmProfile()
  .then((data) => {
    console.log(data)
  })
  .catch((err) => console.log(err))
