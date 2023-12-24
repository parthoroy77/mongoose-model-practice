import mongoose from "mongoose";

const medicalRecordSchema = new mongoose.Schema({
    patientId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
    },
    doctorId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
    },
}, { timestamps: true });

export const MedicalRecord = mongoose.model("MedicalRecord", medicalRecordSchema);
