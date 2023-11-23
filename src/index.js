const express = require('express');
const app = express();
const router = express.Router();

const projeto = [{
    id: 1,
    name: "Jp",
    description: "projeto",
    author: "Eu tbm",
},
{
    id: 2,
    name: "Ray",
    description: "projeto",
    author: "Eu tbm",
},
];
router.get("/projeto", (req, res)=>{
    const {id} = req.query;

    console.log(id);

    res.status(200).send(projeto);
});

app.get('/coisa/:nome/:cargo',(req,res)=>{
    res.send(`olá ${req.params.nome}`);
});

app.get('/inicia', (req,res)=>{
    res.sendFile(__dirname + "/index.html");
});

app.use(router);
app.listen(3000, ()=>{console.log('servidor rodando')});
