const Joi = require('joi');

const productSchema = Joi.object().keys({
  name: Joi.string().min(1).required(),
  price: Joi.number().required(),
  old_price: Joi.number(),
  images: Joi.object().required(),
  video: Joi.string().allow(null),
  genre: Joi.string(),
  release_date: Joi.string().required(),
  developer: Joi.string().required(),
  publisher: Joi.string().required(),
  content: Joi.string(),
  developer_tags: Joi.array(),
  language_support: Joi.array().required(),
  system_requirements: Joi.array().required(),
  system_tags: Joi.array(),
  type: Joi.string(),
  downloads: Joi.number(),
  plans: Joi.array(),
  frequently_traded_assets: Joi.array(),
  sale_box: Joi.object(),
  rating: Joi.array(),
  assets: Joi.array(),
  community: Joi.object(),
  name_url: Joi.string(),
  steam_id: Joi.number()
});

module.exports = productSchema;