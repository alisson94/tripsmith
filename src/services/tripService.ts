import tripModel from "@/models/TripModel";
import dbConnect from "@/config/db";

export const getAllTrips = async () => {
    await dbConnect();
    const response = await tripModel.find().lean();

    return JSON.parse(JSON.stringify(response));
}

export const getTripsByCity = async (city: string) => {
    await dbConnect();
    const response = await tripModel.find({ city }).lean();

    return JSON.parse(JSON.stringify(response));
}


export const getTripById = async (id: string) => {
    await dbConnect();
    const response = await tripModel.findById(id).lean();

    return JSON.parse(JSON.stringify(response));
}