import tripModel from "@/models/TripModel";

export const getAllTrips = async () => {
    return await tripModel.find().lean();
}

export const getTripsByCity = async (city: string) => {
    return await tripModel.find({ city }).lean();
}

export const getTripById = async (id: string) => {
    return await tripModel.findById(id).lean();
}