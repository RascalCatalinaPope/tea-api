
const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

app.use(cors())

const tea = {
    'lavender':{
        'type': 'plant',
        'origin': 'Yo mamaas house',
        'water temp': 200,
        'steepTimeInSeconds': 180,
        'caffinated': false,
        'flavor': 'floral'
    },
    'ginger':{
        'type': 'root',
        'origin': 'Asia',
        'water temp': 400,
        'steepTimeSeconds': 190,
        'caffinated': false,
        'flavor': 'strong'
    },
    'matcha':{
        'type': 'green',
        'origin': 'Yo mamaas house',
        'water temp': 300,
        'steepTimeSeconds': 180,
        'caffinated': true,
        'flavor': 'delicious'
    },
    'unknown':{
        'type': 'unknown',
        'origin': 'unknown',
        'water temp': 0,
        'steepTimeInSeconds': 0,
        'caffinated': false,
        'flavor': 'unknown'
    }
}

app.get('/', (request, response)=>{
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:name', (request, repsonse)=>{
    const teaName = request.params.name.toLowerCase()
    if( tea[teaName] ){
        repsonse.json(tea[teaName])
    }else{
        repsonse.json(tea['unknown'])
    } 
})

app.listen(process.env.PORT || PORT, ()=>{
    console.log(`The server is running on port ${PORT}! Betta go catch it`)
})