'use strict';

const express = require('express');
const validator = require('../middleware/validator.js');
const Clothes = require('../models/clothes.js');
const clothes = new Clothes();
const router = express.Router();

router.get('/', getClothes);
router.get('/:id', validator, getClotheById);
router.post('/', createClothe);
router.put('/:id', validator, updateClothe);
router.delete('/:id', validator, deleteClothe);

function getClothes(req, res) {
  const resObj = clothes.read();
  res.json(resObj);
}

function getClotheById(req, res) {
  const resObj = clothes.read(req.params.id);
  res.json(resObj);
}

function createClothe(req, res) {
  const clotheObject = req.body;
  const resObj = clothes.create(clotheObject);
  res.status(201).json(resObj);
}

function updateClothe(req, res) {
  const clotheObject = req.body;
  const resObj = clothes.update(req.params.id, clotheObject);
  res.json(resObj);
}

function deleteClothe(req, res) {
  const resObj = clothes.delete(req.params.id);
  res.json(resObj);
}

module.exports = router;