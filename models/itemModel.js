const mongoose = require('mongoose');

const ItemSchema = new mongoose.Schema({
    nome: { type: String, required: true },
    descricao: { type: String },
    quantidade: { type: Number, required: true },
}, { timestamps: true });

module.exports = mongoose.model('Item', ItemSchema);
