const express = require('express');
const router = express.Router();

const userController = require('../controllers/employee.controller')

/**
 * @swagger
 * /employee/:
 *   post:
 *     summary: Add an employee.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: The employee name.
 *                 example: Employee Name
 *
 *               phone:
 *                 type: string
 *                 description: The employee phone.
 *                 example: Employee phone
 *               mat:
 *                 type: string
 *                 description: The employee immatriculation.
 *                 example: Employee immatriculation
 *
 *               email:
 *                 type: string
 *                 description: The employee email.
 *                 example: employee@gmail.com
 *
 *               password:
 *                 type: string
 *                 description: The employee password.
 *                 example: password
 *
 *     responses:
 *       201:
 *         description: A successful response
 */
router.post('/addEmployee', userController.addEmployee);


/**
 * @swagger
 * /employee/login:
 *   post:
 *     summary: login an employee.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 description: The employee email.
 *                 example: employee@gmail.com
 *               password:
 *                 type: string
 *                 description: The employee password.
 *                 example: password
 *     responses:
 *       201:
 *         description: A successful response with a valid token
 */

router.post('/login', userController.loginEmployee);

/**
 * @swagger
 * /getEmployeeByid/{id}:
 *   get:
 *     description: Retrieve an specific employee
 *
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         type: number
 *     responses:
 *       200:
 *         description: A successful response
 *         schema:
 *           type: integer
 */

 router.get('/getEmployeeByid/:id', userController.employeeById);


/**
 * @swagger
 * /getEmployee:
 *   get:
 *     description: get Employee all  employees
 *
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: A successful response
 *         schema:
 *           type: integer
 */

router.get('/getEmployee', userController.getAllEmployee);




module.exports = router;