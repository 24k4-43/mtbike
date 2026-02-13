import mongoose, {Document, Schema} from "mongoose";

export interface IBike extends Document {
    name: string;
    brand: string;
    type: string;
    size: string;
    pricePerDay: number;
    pricePerWeek: number;
    imageUrl: string;
    available: boolean;
    description: string;
    createdAt: Date;
    updatedAt: Date;
}

const bikeSchema = new Schema<IBike>(
    {
        name: {
            type: String,
            required: [true, 'Bike name is required'],
            trim: true,
        },
        brand: {
            type: String,
            required: [true, 'Brand is required'],
            trim: true,
        },
        type: {
            type: String,
            required: [true, 'Model is required'],
            trim: true,
        },
        size: {
            type: String,
            enum: ['S', 'M', 'L'],
            required: [true, 'Size is required'],
        },
        pricePerDay: {
            type: Number,
            required: [true, 'Price per day is required'],
            min: [0, 'Price per day must be a positive number'],
        },
        pricePerWeek: {
            type: Number,
            required: [true, 'Price per week is required'],
            min: [0, 'Price per week must be a positive number'],
        },
        imageUrl: {
            type: String,
            required: [true, 'Image URL is required'],
            trim: true,
        },
        available: {
            type: Boolean,
            default: true,
        },
        description: {
            type: String,
            trim: true,
        },
    },
    {
        timestamps: true,
    }
);

const Bike = mongoose.model<IBike>('Bike', bikeSchema);

export default Bike;