const { Router } = require("express");
const router = Router();
const { createInfoCard, getIdInfoCard, putInfoCard, deleteInfoCard, findInfoCards } = require("../controllers/infoCard.controller");

router.post('/', createInfoCard);
router.get('/:infoCardId', getIdInfoCard);
router.put('/:infoCardId', putInfoCard);
router.delete('/:infoCardId', deleteInfoCard);
router.get('/', findInfoCards);

module.exports = router;
