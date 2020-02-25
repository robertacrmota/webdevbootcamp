const mongoose = require('mongoose');

const chartSampleSchema = new mongoose.Schema({
   thumbnail_url: String,
   url: String
});

const chartSchema = new mongoose.Schema({
    type: String,
    thumbnail_url: String,
    description: String,
    functions: [String],
    shapes: [String],
    samples: [chartSampleSchema],
});

const Chart = mongoose.model('Chart', chartSchema);

module.exports = Chart;
