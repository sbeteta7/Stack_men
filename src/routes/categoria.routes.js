import { Router } from "express";
import pool from "../database.js";

const router = Router();

router.get('/categoria', async(req, res) => {
    try {
        const [result] = await pool.query('SELECT * FROM categoria');
        
        res.render('../views/categoria.hbs',{categorias:result});
        console.log(result)
           
    } catch (error) {
        res.status(500).json({message:err.message})
    }
});

export default router