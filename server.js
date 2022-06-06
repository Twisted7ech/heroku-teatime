const express = require('express')
const app = express()
const PORT = 8000
const cors = require('cors')

let tea = {
    'oolong':{
        'type': 'black',
        'origin': 'Yo mommas house',
        'waterTemp': 200,
        'steepTimeSec': 180,
        'caffine': true,
        'flavor': 'delicious'
    },
    'matcha':{
        'type': 'green',
        'origin': 'the lady next door',
        'waterTemp': 200,
        'steepTimeSec': 180,
        'caffine': false,
        'flavor': 'meh'
    },
    'unknown':{
        'type': 'unknown',
        'origin': 'unknown',
        'waterTemp': 'unknown',
        'steepTimeSec': 'unknown',
        'caffine': 'unknown',
        'flavor': 'unknown'
    }
}

app.get('/', (request, response)=>{
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:name', (request, response) =>{
    const teaName = request.params.name.toLowerCase()
    if ( tea[teaName]){
        response.json(tea[teaName])
    }else {
        response.json(tea['unknown'])
    }
})










app.listen(process.env.PORT || PORT, () => {
    console.log(`Server running on port ${PORT}`)
})