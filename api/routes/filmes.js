import express from 'express'
import {getFilmes,addFilme,updateFilme,deleteFilme} from '../controllers/filme.js'

const router = express.Router()

router.get('/', getFilmes)
router.post('/', addFilme)
router.put('/:id', updateFilme)
router.delete('/:id', deleteFilme)

export default router

