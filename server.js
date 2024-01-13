const http = require('node:http');



const server = http.createServer((req, res) => {
    console.log('request received');
    res.end(` <h1> Película del año</h1>
    <h2>My Dear John</h2>
    <p> John Tyree (Channing Tatum), un apuesto soldado, regresa a casa de permiso y se enamora de Savannah Curtis (Amanda Seyfried), una joven estudiante universitaria. </p>`
    ) 
});

server.listen(3000, () =>{
    console.log(`server listening on port ${server.address().port}`)
})