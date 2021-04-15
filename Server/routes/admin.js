const express = require('express');
const router = express.Router();
const adminController = require('../controllers/admin.controller')


/**
 * @swagger
 * /admin/login:
 *   post:
 *     summary: login admin.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 description: The admin's email.
 *                 example: admin@gmail.com
 *               password:
 *                 type: string
 *                 description: The admin's password.
 *                 example: password
 *     responses:
 *       201:
 *         description: A successful response with a valid token
 */


router.post('/login', adminController.loginAdmin);


/**
 * @swagger
 * /admin/:
 *   post:
 *     summary: Add an admin.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 description: The admin's email.
 *                 example: admin@gmail.com
 *               password:
 *                 type: string
 *                 description: The admin's password.
 *                 example: password
 *     responses:
 *       201:
 *         description: A successful response
 */

router.post('/add', adminController.addAdmin);







module.exports = router;