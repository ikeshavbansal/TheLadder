import mongoose from 'mongoose';

const sectionASchema = new mongoose.Schema({
    title: String,
    description: String,
    bgImage: String,
    bgColor: String,
    initialScale: Number,
    finalScale: Number
}, { collection: 'sectionA' });

export default mongoose.model('SectionA', sectionASchema);
