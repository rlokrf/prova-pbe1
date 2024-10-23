const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const con = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    database:'hoteis'
});

con.connect((err) =>{
    if(err) {
        console.error('Erro ao conectar ao banco de dados', err);
        return;
    }
    console.log('Conectado ao banco de dados.');
});

const teste = (req, res) => {
    res.send("Back-end respondendo");
}

// CRUD - Create clientes
const createclientes = (req, res) => {
    const {cliente_id, nome, cpf, email, endereco, data_nascimento, data_cadastro} =req.body;

    const query = 'INSERT INTO clientes (cliente_id, nome, cpf, email, endereco, data_nascimento, data_cadastro) VALUES(?, ?, ?, ?, ?, ?, ?)';
    con.query(query, [cliente_id, nome, cpf, email, endereco, data_nascimento, data_cadastro], (err,result) => {
        if(err) {
            res.status(500).json({error: err.message});
        } else {
            res.status(201).json({message: 'clientes criado com sucesso', result});
        }

    });
}

//CRUD - Read clientes
const readclientes = (req, res) => {
    con.query("SELECT * FROM clientes",(err,result) => {
        if(err) {
            res.status(500).json({error: err.message});
        } else {
            res.json(result);
        }
    });
}

// CRUD - Update clientes
const updateclientes = (req, res) => {
    const {cliente_id, nome, cpf, email, endereco, data_nascimento, data_cadastro} = req.body;

    const query = 'UPDATE clientes SET nome = ?, cpf = ?, email = ?, endereco = ?, data_nascimento = ?, data_cadastro = ? WHERE cliente_id = ?'
    con.query(query, [nome, cpf, email, endereco, data_nascimento, data_cadastro, cliente_id], (err, result)=>{
        if(err) {
            res.status(500).json({error: err.message});
        }else {
            res.json({message:'clientes atualizado com sucesso', result});
        }
    });
}


//CRUD - Delete cliente
const deleteclientes = (req, res) => {
    const {cliente_id} = req.params;

    const query = 'DELETE FROM clientes WHERE cliente_id = ?';
    con.query(query, [cliente_id], (err,result)=> {
        if(err) {
            res.status(500).json({error:err.message});
        }else {
            res.json({message: 'clientes removido com sucesso', result});
        }
    });
}


//Estacionamento


// CRUD - Create estacionamento
const createestacionamento = (req, res) => {
    const {cliente_id, veiculo_placa, veiculo_marca, veiculo_modelo, data_entrada, data_saida} =req.body;

    const query = 'INSERT INTO estacionamento (cliente_id, veiculo_placa, veiculo_marca, veiculo_modelo, data_entrada, data_saida) VALUES(?, ?, ?, ?, ?, ?)';
    con.query(query, [cliente_id, veiculo_placa, veiculo_marca, veiculo_modelo, data_entrada, data_saida], (err,result) => {
        if(err) {
            res.status(500).json({error: err.message});
        } else {
            res.status(201).json({message: 'estacionamento criado com sucesso', result});
        }

    });
}

//CRUD - Read estacionamento
const readestacionamento = (req, res) => {
    con.query("SELECT * FROM estacionamento",(err,result) => {
        if(err) {
            res.status(500).json({error: err.message});
        } else {
            res.json(result);
        }
    });
}

// CRUD - Update estacionamento
const updateestacionamento = (req, res) => {
    const {estacionamento_id, veiculo_placa, veiculo_marca, veiculo_modelo, data_entrada, data_saida} = req.body;

    const query = 'UPDATE estacionamento SET veiculo_placa = ?, veiculo_marca = ?, veiculo_modelo = ?, data_entrada = ?, data_saida = ?  WHERE estacionamento_id = ?'
    con.query(query, [veiculo_placa, veiculo_marca, veiculo_modelo, data_entrada, data_saida, estacionamento_id], (err, result)=>{
        if(err) {
            res.status(500).json({error: err.message});
        }else {
            res.json({message:'estacionamento atualizado com sucesso', result});
        }
    });
}


//CRUD - Delete estacionamento
const deleteestacionamento = (req, res) => {
    const {estacionamento_id} = req.params;

    const query = 'DELETE FROM estacionamento WHERE estacionamento_id = ?';
    con.query(query, [estacionamento_id], (err,result)=> {
        if(err) {
            res.status(500).json({error:err.message});
        }else {
            res.json({message: 'estacionamento removido com sucesso', result});
        }
    });
}


//Quartos


// CRUD - Create quartos
const createquartos = (req, res) => {
    const {numero, andar, tipo, valor_diaria, statusQuarto, cliente_id} =req.body;

    const query = 'INSERT INTO quartos (numero, andar, tipo, valor_diaria, statusQuarto, cliente_id) VALUES(?, ?, ?, ?, ?, ?)';
    con.query(query, [numero, andar, tipo, valor_diaria, statusQuarto, cliente_id], (err,result) => {
        if(err) {
            res.status(500).json({error: err.message});
        } else {
            res.status(201).json({message: 'quartos criado com sucesso', result});
        }

    });
}

//CRUD - Read quartos
const readquartos = (req, res) => {
    con.query("SELECT * FROM quartos",(err,result) => {
        if(err) {
            res.status(500).json({error: err.message});
        } else {
            res.json(result);
        }
    });
}

// CRUD - Update quartos
const updatequartos = (req, res) => {
    const {numero, andar, tipo, valor_diaria, statusQuarto, cliente_id} = req.body;

    const query = 'UPDATE quartos SET numero= ?, andar = ?, tipo = ?, valor_diaria = ?, statusQuarto = ?,   WHERE cliente_id = ?'
    con.query(query, [numero, andar, tipo, valor_diaria, statusQuarto, cliente_id], (err, result)=>{
        if(err) {
            res.status(500).json({error: err.message});
        }else {
            res.json({message:'quartos atualizado com sucesso', result});
        }
    });
}


//CRUD - Delete quartos
const deletequartos = (req, res) => {
    const {numero} = req.params;

    const query = 'DELETE FROM quartos WHERE numero = ?';
    con.query(query, [numero], (err,result)=> {
        if(err) {
            res.status(500).json({error:err.message});
        }else {
            res.json({message: 'quartos removido com sucesso', result});
        }
    });
}


//Reservas


// CRUD - Create reservas
const createreservas = (req, res) => {
    const {cliente_id, quarto_id, data_reserva, data_entrada, data_saida, valor_total, statusReserva} =req.body;

    const query = 'INSERT INTO reservas (cliente_id, quarto_id, data_reserva, data_entrada, data_saida, valor_total, statusReserva) VALUES(?, ?, ?, ?, ?, ?, ?)';
    con.query(query, [cliente_id, quarto_id, data_reserva, data_entrada, data_saida, valor_total, statusReserva], (err,result) => {
        if(err) {
            res.status(500).json({error: err.message});
        } else {
            res.status(201).json({message: 'reservas criado com sucesso', result});
        }

    });
}

//CRUD - Read Reservas
const readreservas = (req, res) => {
    con.query("SELECT * FROM reservas",(err,result) => {
        if(err) {
            res.status(500).json({error: err.message});
        } else {
            res.json(result);
        }
    });
}

// CRUD - Update Reservas
const updatereservas = (req, res) => {
    const {cliente_id, quarto_id, data_reserva, data_entrada, data_saida, valor_total, statusReserva} = req.body;

    const query = 'UPDATE reservas SET cliente_id = ?, quarto_id = ?, data_reserva = ?, data_saida = ?, valor_total = ?,   WHERE statusreserva = ?'
    con.query(query, [cliente_id, quarto_id, data_reserva, data_entrada, data_saida, valor_total, statusReserva], (err, result)=>{
        if(err) {
            res.status(500).json({error: err.message});
        }else {
            res.json({message:'reservas atualizado com sucesso', result});
        }
    });
}


//CRUD - Delete Reservas
const deletereservas = (req, res) => {
    const {data_reserva} = req.params;

    const query = 'DELETE FROM reservas WHERE data_reserva = ?';
    con.query(query, [data_reserva], (err,result)=> {
        if(err) {
            res.status(500).json({error:err.message});
        }else {
            res.json({message: 'reservas removido com sucesso', result});
        }
    });
}

//TELEFONE

// CRUD - Create Telefone
const createtelefone = (req, res) => {
    const {cliente_id, numero, tipo} =req.body;

    const query = 'INSERT INTO telefone (cliente_id, numero, tipo) VALUES(?, ?, ?)';
    con.query(query, [cliente_id, numero, tipo], (err,result) => {
        if(err) {
            res.status(500).json({error: err.message});
        } else {
            res.status(201).json({message: 'telefone criado com sucesso', result});
        }

    });
}

//CRUD - Read Telefone
const readtelefone = (req, res) => {
    con.query("SELECT * FROM telefone",(err,result) => {
        if(err) {
            res.status(500).json({error: err.message});
        } else {
            res.json(result);
        }
    });
}

// CRUD - Update Telefone
const updatetelefone = (req, res) => {
    const {cliente_id, numero, tipo} = req.body;

    const query = 'UPDATE telefone SET cliente_id = ?, numero = ?, WHERE tipo = ?'
    con.query(query, [cliente_id, numero, tipo], (err, result)=>{
        if(err) {
            res.status(500).json({error: err.message});
        }else {
            res.json({message:'telefone atualizado com sucesso', result});
        }
    });
}


//CRUD - Delete Telefone
const deletetelefone = (req, res) => {
    const {tipo} = req.params;

    const query = 'DELETE FROM telefone WHERE tipo = ?';
    con.query(query, [tipo], (err,result)=> {
        if(err) {
            res.status(500).json({error:err.message});
        }else {
            res.json({message: 'telefone removido com sucesso', result});
        }
    });
}

//Saida Front
const app = express();
app.use(express.json());
app.use(cors());
app.get("/", teste);

//CLIENTE

app.post("/clientes",createclientes);
app.get("/clientes", readclientes);
app.put("/clientes", updateclientes);
app.delete("/clientes/:cliente_id", deleteclientes);

//ESTACIONAMENTO

app.post("/estacionamento",createestacionamento);
app.get("/estacionamento", readestacionamento);
app.put("/estacionamento", updateestacionamento);
app.delete("/estacionamento/:veiculo_modelo", deleteestacionamento);

//QUARTOS

app.post("/quartos",createquartos);
app.get("/quartos", readquartos);
app.put("/quartos", updatequartos);
app.delete("/quartos/:numero", deletequartos);

//RESERVAS

app.post("/reservas",createreservas);
app.get("/reservas", readreservas);
app.put("/reservas", updatereservas);
app.delete("/reservas/:data_reserva", deletereservas);

//TELEFONE

app.post("/telefone",createtelefone);
app.get("/telefone", readtelefone);
app.put("/telefone", updatetelefone);
app.delete("/telefone/:tipo", deletetelefone);

//Teste de porta
app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000");
});