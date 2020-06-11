//importar a dependencia do sqlite
const sqlite3 = require("sqlite3").verbose()

//criar o objeto que irá fazer operações no banco de dados
const db = new sqlite3.Database("./src/database/database.db")


module.exports = db
//utiiizar o objeto de banco de dados para nossas operações
//db.serialize(() => {

//1 criar uma  tabela

    //db.run(`
//        CREATE TABLE IF NOT EXISTS places (
         //   id INTEGER PRIMARY KEY AUTOINCREMENT,
       //     name TEXT,
     //       cpf TEXT,
   //         phone TEXT,
 //           email TEXT,
//            password TEXT
//        );
 //   `)

    //2 inserir dados na tabela
//    const query = `
   //     INSERT INTO places (
//            name,
          //  cpf,
        //    phone,
      //      email,
    //        password
  //      ) VALUES (?,?,?,?,?);
//   `

    //    const values = [
    //      "Alena",
    //       "13456789012",
    //     "8133333333",
    // "alena123@gmail.com",
    //   "alena123"
    // ]

    //   function afterInsertData(err) {
    //      if (err) {
    //        return console.log(err)
    //        }

    //        console.log("Cadastrado com sucesso")
    //      console.log(this)   }
    //
    //   db.run(query, values, afterInsertData)

    //3 consultar os dados da tabela
    //    db.all(`SELECT * FROM places`, function (err, rows) {
    //      if (err) {
    //        return console.log(err)}

    //console.log("Aqui estão seus registros")
    //console.log(rows)})

    //4 deletar um dado da tabelo
    //    db.run(`DELETE FROM places WHERE id = ?`, [1], function (err) {
    //        if (err) {
    //            return console.log(err)
    //        }

    //        console.log("Registro deletado com sucesso")

    //    })



//})