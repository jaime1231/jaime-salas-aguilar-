app.use((express).json());
let estudiantes=[ //se crea la lista en formato de arreglo
    {id:1,nombre:'juan perez'},
    {id:2,nombre:'monica gomez'},
    {id:3,nombre:'jose ruiz'},
]
//get: obtener todos los estudiantes 
app.get('/api/greet',(requires) => {
    res.json(estudiantes)

})

//get obtener un estudiante 

app.get('/estudiantes/:id',(req,res)=>{
    const id=parseint(req.params.id);
    const estudiante = estudiantes.find(e=>e.id===id);
    if(estudiante){
        res.json(estudiante);
    }else{
        res.status(404).send('estudiante no encontrado')
    }
} )


//POST Crear un nuevo estudiante
app.post('/estudiantes', (req,res)=>{ // Estamos definiendo una ruta para crear un estudiante en el arreglo estudiantes.
    const nuevoEstudiante={ // Creamos una variable
        id:estudiantes.length+1,
        nombre:req.body.nombre // En el body voy a observar como se hace la actualizacion en el postman.
    };
    estudiantes.push(nuevoEstudiante); // Estamos agregando un nuevo estudiante en mi arreglo estudiantes. Push (Agregar)
    res.status(201).json(nuevoEstudiante); // 
})


//metodo put
app.put('/estudiantes/:id',(req, res)=>{//define la ruta put que permite actualizar un estudiante con su req y res
    const id=parseInt(req, params.id);//define la variable id para hacer la busqueda y localizar lo que se busca
    const estudiante=estudiantes.find(e=>e.id==id)//busca si el id esta en la lista de estudiantes
    if(estudiante){
        estudiante.name=req.body.nombre;//ve si se enconttro un estudiante 
        res.json(estudiante);
    }else{
        res.status(404).send('estudiante no encontrado')//si no encuentra estudiante mandara esta linea 
    }
} )

//delete: eliminar un item por id

app.delete('/estudiante/:id',(req,res)=>{//define una ruta que permite borrar un estudiante por su id 
    const id=parseint(req.params.id);//define la variable id para eliminar al estudiante 
    const index=estudiantes.findindex(e=>e.id===id);//busca si el id esta en la lista de estudiantes 
    if(index!==-1){
        estudiantes.splice(index,1)//elimina al estudiante 
        res.send('estudiante eliminado');//notifica que el estudiante se elimino
    }else{
        res.status(404).send('estudiante no encontrado')//si no encuentra estudiante mandara esta linea 
    }
})