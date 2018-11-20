const mongoose = require('mongoose');
const { Schema } = mongoose;

const productSchema = Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  old_price: Number,
  images: { type: Object, required: true },
  video: { type: String, required: true },
  genre: { type: String, required: true },
  release_date: { type: String, required: true },
  developer: { type: String, required: true },
  publisher: { type: String, required: true },
  content: { type: String, required: true },
  developer_tags: { type: Array, required: true },
  language_support: { type: Array, required: true },
  system_requirements: { type: Array, required: true },
  system_tags: Array,
  type: String,
  downloads: Number,
  plans: Array,
  frequently_traded_assets: Array,
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


