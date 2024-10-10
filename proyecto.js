const express = require('express');
const app = express();

app.use(express.json());

let libros = [ // Lista actualizada de libros
    {id: 1, titulo: 'El señor de los anillos', autor: 'J.R.R. Tolkien'},
    {id: 2, titulo: 'Harry Potter y la piedra filosofal', autor: 'J.K. Rowling'},
    {id: 3, titulo: 'El código Da Vinci', autor: 'Dan Brown'},
    {id: 4, titulo: 'Crimen y castigo', autor: 'Fiódor Dostoyevski'},
    {id: 5, titulo: 'Orgullo y prejuicio', autor: 'Jane Austen'},
];

// GET: Obtener todos los libros
app.get('/api/libros', (req, res) => {
    res.json(libros);
});

// GET: Obtener un libro por ID
app.get('/libros/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const libro = libros.find(l => l.id === id);
    if (libro) {
        res.json(libro);
    } else {
        res.status(404).send('Libro no encontrado');
    }
});

// POST: Crear un nuevo libro
app.post('/libros', (req, res) => {
    const nuevoLibro = {
        id: libros.length + 1,
        titulo: req.body.titulo, // Se obtiene el título desde el cuerpo de la solicitud
        autor: req.body.autor    // Se obtiene el autor desde el cuerpo de la solicitud
    };
    libros.push(nuevoLibro);
    res.status(201).json(nuevoLibro);
});

// PUT: Actualizar un libro
app.put('/libros/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const libro = libros.find(l => l.id === id);
    if (libro) {
        libro.titulo = req.body.titulo; // Actualiza el título
        libro.autor = req.body.autor;   // Actualiza el autor
        res.json(libro);
    } else {
        res.status(404).send('Libro no encontrado');
    }
});

// DELETE: Eliminar un libro por ID
app.delete('/libros/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const index = libros.findIndex(l => l.id === id);
    if (index !== -1) {
        libros.splice(index, 1); // Elimina el libro
        res.send('Libro eliminado');
    } else {
        res.status(404).send('Libro no encontrado');
    }
});

// Configuración del puerto
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});

