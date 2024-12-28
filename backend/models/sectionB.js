import mongoose from 'mongoose';

const sectionBSchema = new mongoose.Schema({
    title: String,
    sub1: String,
    sub2: String,
    desc1: String,
    desc2: String
},{collection:'sectionB'});

export default mongoose.model('SectionB', sectionBSchema);