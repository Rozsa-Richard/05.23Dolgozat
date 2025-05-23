import Database from "better-sqlite3"

const db = new Database('./data/database.sqlite')

db.prepare('CREATE TABLE IF NOT EXISTS notes (id INTEGER PRIMARY KEY AUTOINCREMENT, title STRING, content INTEGER)').run()

export const getNotes = () => db.prepare('SELECT * FROM notes').all()
export const getNote = (id) =>db.prepare('SELECT * FROM notes WHERE id = ?').get(id)
export const saveNote = (title,content) => db.prepare('INSERT INTO notes (title,content) VALUES (?,?)').run(title,content)
export const deleteNote = (id) => db.prepare('DELETE FROM notes WHERE id = ?').run(id)

const notes = [
    {title: "Babgulyás recept", content: "Így készül a babgulyás"},
    {title: "Marhapörkölt recept", content: "Így készül a Marhapörkölt"},
    {title: "Bolognai recept", content: "Így készül a Bolognai"},
    {title: "Melegszendvics recept", content: "Így készül a Melegszendvics"}
]
//for (const note of notes) saveNote(note.title,note.content)