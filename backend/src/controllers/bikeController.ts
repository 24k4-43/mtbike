import { Response, Request } from "express";
import bikeService from "../services/bikesService";

class BikeController {
  async createBike(req: Request, res: Response): Promise<void> {
    try {
      const bike = await bikeService.createBike(req.body);
      res.status(201).json({ 
          message: "Bike created successfully", 
          data: bike
      });
    } catch (error) {
      res.status(500).json({
        message: "Error creating bike",
        error: error instanceof Error ? error.message : error
      });
    }
  }
  async allBikes(req: Request, res: Response): Promise<void> {
    try {
      const bikes = await bikeService.getAllBikes();
      res.status(200).json({ 
          message: "Bikes retrieved successfully", 
          data: bikes
      });
    } catch (error) {
      res.status(500).json({
        message: "Error retrieving bikes",
        error: error instanceof Error ? error.message : error
      });
    }
  }
  async detailsBike(req: Request, res: Response): Promise<void> {
    try {
      const id = Array.isArray(req.params.id) ? req.params.id[0] : req.params.id;
      const bike = await bikeService.getBikeDetails(id);

      if (!bike) {
        res.status(404).json({ message: "Bike not found" });
        return;
      }
      res.status(200).json({ 
          message: "Bike details retrieved successfully", 
          data: bike
      });
    } catch (error) {
      res.status(500).json({
        message: "Error retrieving bike details",
        error: error instanceof Error ? error.message : error
      });
    }
  }
}

export default new BikeController();