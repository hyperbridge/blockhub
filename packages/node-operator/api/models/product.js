const mongoose = require('mongoose');
const { Schema } = mongoose;

const productSchema = Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  oldPrice: Number,
  images: { type: Object, required: true },
  video: { type: String, required: true },
  genre: { type: String, required: true },
  releaseDate: { type: String, required: true },
  developer: { type: String, required: true },
  publisher: { type: String, required: true },
  content: { type: String, required: true },
  developerTags: { type: Array, required: true },
  languageSupport: { type: Array, required: true },
  systemRequirements: { type: Array, required: true },
  tags: Array,
  type: String,
  downloads: Number,
  plans: Array,
  frequentlyTradedAssets: Array,
  sale_box: Object,
  rating: Array,
  assets: Array,
  community: Object,
  name_url: String,
  steam_id: Number,
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  author: String
});

module.exports = mongoose.model('Product', productSchema);


