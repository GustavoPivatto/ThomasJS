import {db} from '../db.js';
export const getFilmes = (_,res) => {

    const q = "SELECT * FROM filmes";

    db.query(q,(err,data) =>{

        if (err) return res.json(err);
        return res.status(200).json(data);

    });

};

export const addFilme = (req,res) => {

    const q =
    "INSERT INTO filmes(`titulofilme`,`diretor`,`ano_lancamento`,`elenco`,`pais`) VALUES(?)";

    const values = [
        req.body.titulofilme,
        req.body.diretor,
        req.body.ano_lancamento,
        req.body.elenco,
        req.body.pais,
    ];
    db.query(q,[values], (err)=>{
        if(err) return res.json(err);
        return res.status(200).json("Filme criado com sucesso");
    });

};

export const updateFilme = (req,res) => {

    const q =
    "UPDATE filmes SET `titulofilme`=?,`diretor`=?,`ano_lancamento`=?,`elenco`=?,`pais`=? WHERE `idfilmes` = ?";

    const values = [
        req.body.titulofilme,
        req.body.diretor,
        req.body.ano_lancamento,
        req.body.elenco,
        req.body.pais,
    ];
    db.query(q,[...values, req.params.id], (err)=>{

        if(err) return res.json(err);
        return res.status(200).json("Filme atualizado com sucesso");
    });

};

export const deleteFilme = (req,res) => {

    const q =
    "DELETE FROM filmes WHERE `idfilmes` = ?";

    db.query(q,[req.params.id], (err)=>{

        if(err) return res.json(err);
        return res.status(200).json("Filme deletado com sucesso");
    });

};