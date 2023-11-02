import express from 'express'
import { db, players } from './schema.js';
const app = express()
const port = 3000

app.get('/', async (req, res) => {
    res.send(`
    Hello World!
    <br>
    <a href="/players">Players</a>
    <br>
    <a href="/players/create">Create player</a>
    `)
})


app.get('/players', async (req, res) => {
    let result = await db.select().from(players)
    console.log(result)
    res.send(`<a placeholder="Player name"></a>`)
})

app.post('/players/create', async (req, res) => {
    res.send('Inserted! <a href="/">Go back<a>')
})

app.get('/players/create', async (req, res) => {
    res.send(`<form action="/players/create" method="POST">
    <input type="text" name="name" placeholder="Player name" />
    <button>Create</button>
    </form>`)
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})