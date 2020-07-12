const routes = require("express").Router();


routes.get("/random", (req, res) =>{
    const random = Math.random().toFixed(2);
    return res.json({msg:`${random}`});
})

routes.get("/numero", (req, res) => {
    const {numero} = req.body;
    if(numero%2 == 0){
        return res.status(201).json({msg: "Numero Par"});
    }

    return res.status(200).json({msg:"Numero impar"});    
})

routes.post("/users", (req, res) =>{
    console.log( a = 3+5);
    return res.json({msg:`${a}`});
})

routes.post("/cadastro", (req, res) =>{
    const {nome,sobrenome,idade} = req.body;
    console.log(nome,sobrenome,idade);
    return res.json({msg: `Meu nome é ${nome} ${sobrenome} e tenho ${idade} anos `});
})


module.exports = routes;