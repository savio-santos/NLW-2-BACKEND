import knex from 'knex'; // blibioteca que permite escrever script sql como js
import path from 'path'; // navegaçao entre diretorios do projeto


//migration = controlam a versao do banco de dados

const db= knex({
    client:'sqlite3',
    connection:{
        filename:path.resolve(__dirname,'database.sqlite')
    },
    useNullAsDefault:true,
});

export default db;