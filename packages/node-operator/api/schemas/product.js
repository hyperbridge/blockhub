const Joi = require('joi');

const productSchema = Joi.object().keys({
  name: Joi.string().min(1).required(),
  price: Joi.number().required(),
  oldPrice: Joi.number(),
  images: Joi.object().required(),
  video: Joi.string().allow(null),
  genre: Joi.string(),
  releaseDate: Joi.string().required(),
  developer: Joi.string().required(),
  publisher: Joi.string().required(),
  content: Joi.string(),
  developerTags: Joi.array(),
  languageSupport: Joi.array().required(),
  systemRequirements: Joi.array().required(),
  tags: Joi.array(),
  type: Joi.string(),
  downloads: Joi.number(),
  plans: Joi.array(),
  frequentlyTradedAssets: Joi.array(),
  saleBox: Joi.object(),
  rating: Joi.array(),
  assets: Joi.array(),
  community: Joi.object(),
  name_url: Joi.string(),
  steam_id: Joi.number()
});

module.exports = productSchema;
