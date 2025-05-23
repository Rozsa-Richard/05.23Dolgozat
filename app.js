import express from 'express'
import * as db from "./util/database.js"
const PORT = 8080;
const app = express()
app.use(express.json())


app.get('/notes',(req, res) => {
    try {
        const notes = db.getNotes();
        res.status(200).json(notes)
    }
    catch (err){
        res.status(404)
    }
})

app.get('/notes/:id', (req, res) => {
    try {
        const note = db.getNote(req.params.id)
        if(!note){
            return res.status(404)
        }
        res.status(200).json(note)
    }
    catch (err){
        res.status(404)
    }
})

app.post('/notes', (req, res) => {
    try {
        const {title, content} = req.body;
        const note = db.saveNote(title,content);
        res.status(200).json(note.id)
    }
    catch (err){
        res.status(404)
    }
})

app.delete('/notes/:id', (req,res) => {
    try {
        db.deleteNote(req.params.id)
        res.status(204).json({message:"No content"})
    }
    catch (err){
        res.status(404)
    }
})

app.listen(PORT, () => {
    console.log(`Server runs on port ${PORT}`)
})