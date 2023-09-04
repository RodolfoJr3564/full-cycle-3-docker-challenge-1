class Database {
  constructor() {
    this.connection = null;
  }

  connect(dbConfig) {
    const mysql = require("mysql2");

    if (!this.connection) {
      this.connection = mysql.createConnection(dbConfig);
    }
  }

  static getInstance() {
    if (!this._instance) {
      this._instance = new Database();
    }
    return this._instance;
  }

  async createTables() {
    try {
      await this.connection.execute(
        `CREATE TABLE IF NOT EXISTS users (
            id INT AUTO_INCREMENT PRIMARY KEY,
            name VARCHAR(255) NOT NULL
        )`
      );
      console.log("Tabela de usuários criada com sucesso!");
    } catch (error) {
      console.error("Erro ao criar a tabela de usuários:", error);
    }
  }

  async hasUsers() {
    try {
      const [rows] = await this.connection
        .promise()
        .query(`SELECT 1 FROM users LIMIT 1`);
      return rows && rows.length > 0;
    } catch (error) {
      console.error("Erro ao verificar usuários:", error);
      throw error;
    }
  }

  async seedUser() {
    try {
      const hasUsersAlready = await this.hasUsers();
      if (!hasUsersAlready) {
        await this.insertUser({ name: "Rodolfo" });
        console.log("Usuário padrão 'Rodolfo' adicionado com sucesso.");
      } else {
        console.log("Banco de dados já tem usuários. Sem necessidade de seed.");
      }
    } catch (error) {
      console.error("Erro ao adicionar usuário:", error);
    }
  }

  async querySelectAll(tableName) {
    if (!this.connection) {
      throw new Error("Não conectado ao banco de dados");
    }

    try {
      const [rows] = await this.connection
        .promise()
        .query(`SELECT * FROM ??`, [tableName]);
      return rows;
    } catch (error) {
      console.error(`Erro ao buscar em ${tableName}:`, error);
      throw error;
    }
  }

  async insertUser(user) {
    const connection = this.connection;
    const query = "INSERT INTO users (name) VALUES (?)";
    await connection.promise().query(query, [user.name]);
  }
}

module.exports = Database;
