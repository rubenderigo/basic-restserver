var cors = require("cors");
const express = require("express");

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    this.usuariosPath = "/api/usuario";

    // middlewares
    this.middlewares();

    // routes
    this.routes();
  }

  middlewares() {
    // CORS
    this.app.use(cors());

    // parse and body read
    this.app.use(express.json());

    // public directory
    this.app.use(express.static("public"));
  }

  routes() {
    this.app.use(this.usuariosPath, require("../routes/user"));
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log("CORS-enabled web server listening on port ", this.port);
    });
  }
}

module.exports = Server;
