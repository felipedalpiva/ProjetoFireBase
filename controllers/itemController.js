const Item = require('../models/itemModel');

const criarItem = async (req, res) => {
    try {
        const item = await Item.create(req.body);
        res.status(201).json(item);
    } catch (err) {
        res.status(400).json({ erro: err.message });
    }
};

const listarItens = async (req, res) => {
    const itens = await Item.find();
    res.json(itens);
};

const atualizarItem = async (req, res) => {
    try {
        const item = await Item.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(item);
    } catch (err) {
        res.status(400).json({ erro: err.message });
    }
};

const deletarItem = async (req, res) => {
    try {
        await Item.findByIdAndDelete(req.params.id);
        res.json({ mensagem: 'Item deletado' });
    } catch (err) {
        res.status(400).json({ erro: err.message });
    }
};

module.exports = {
    criarItem,
    listarItens,
    atualizarItem,
    deletarItem,
};
