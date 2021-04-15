require('dotenv').config()
const express = require('express');
const app = express();
const nodemailer = require("nodemailer");
const db = require('./models');

const port = process.env.PORT || 8080;

const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");


const swaggerOptions = {
  swaggerDefinition: {
    openapi: "3.0.0",
    info: {
      title: "CNSS Backend app",
      description: "CNSS Backend app doc",
      contact: {
        name: "root",
      },
      server: ["http://localhost:5000"],
    },
  },
  apis: ["./routes/*.js"],
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use("/api-doc", swaggerUi.serve, swaggerUi.setup(swaggerDocs));


app.use(express.json());
app.use(express.urlencoded({ extended: true }));








const adminRoutes = require("./routes/admin");
const employeeRoutes = require("./routes/employee");




app.use('/admin', adminRoutes);
app.use('/', employeeRoutes);




db.sequelize.sync().then((res)=>{


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  }) 

})



