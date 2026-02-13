import express from 'express';
import bikeController from '../controllers/bikeController';

const router = express.Router();

router.get('/', bikeController.allBikes.bind(bikeController));
router.post('/', bikeController.createBike.bind(bikeController));
router.post('/:id', bikeController.detailsBike.bind(bikeController));

export default router;