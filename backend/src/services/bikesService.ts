import Bike from "../models/bikeModel";

class BikeService {
    async createBike(data: any): Promise<any> {
        try {
            const { name, brand, type, size, pricePerDay, pricePerWeek, imageUrl, available, description } = data;

            const existingBike = await Bike.findOne({ name, brand, size });
            if (existingBike) {
                throw new Error('Bike with this name, brand, and size already exists');
            }

            const bike = await Bike.create({
                name,
                brand,
                type,
                size,
                pricePerDay,
                pricePerWeek,
                imageUrl,
                available,
                description
            });

            if (!bike) {
                throw new Error('Failed to create bike');
            }
            if (!name || !brand || !type || !size) {
                throw new Error('Missing required fields');
            }
            if (pricePerDay <= 0) {
                throw new Error('pricePerDay must be greater than 0');
            }
            if (pricePerWeek <= 0) {
                throw new Error('pricePerWeek must be greater than 0');
            }
            if (pricePerWeek && pricePerWeek < pricePerDay * 3) {
                throw new Error('pricePerWeek is too low');
            }

            return bike;
        } catch (error) {
            throw new Error(error instanceof Error ? error.message : 'An unknown error occurred while creating the bike');
        }
    }

    async getAllBikes(): Promise<any[]> {
        try {
            const bikes = await Bike.find();
            return bikes;
        } catch (error) {
            throw new Error(error instanceof Error ? error.message : 'An unknown error occurred while retrieving bikes');
        }
    }

    async getBikeDetails(id: string): Promise<any> {
        try {
            const bike = await Bike.findById(id);
            if (!bike) {
                throw new Error('Bike not found');
            }
            return bike;
        } catch (error) {
            throw new Error(error instanceof Error ? error.message : 'An unknown error occurred while retrieving bike details');
        }
    }
}

export default new BikeService();