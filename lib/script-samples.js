import dedent from 'dedent'

const welcome = dedent`
  /*
    Welcome to lashbash!

    Here you have a sandbox to execute pure Javascript...on Node!
    Please be gentle, this is an open source project to test how to run code on server side,
    that means I let you a lot of power!

    ...With great power, comes great responsibility.
  */

  // and now, let's check if google is up :')
  const request = require('request')

  console.log('Asking for google....')
  request('http://www.google.com', (error, response, body) => {
    if (error) console.error(error)

    if (response && response.statusCode === 200) {
      console.info('Google is up :\')')
      // console.trace(body) // uncomment to log Google HTML
    }
  })

  console.log('I am the end?')
`

export { welcome }
