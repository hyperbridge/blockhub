const Joi = require('joi');
const productSchema = require('../schemas/product');
const Product = require('../models/product');

exports.get_product = async req => {
  const { productId } = req.params;
  const product = await Product.findOne({ _id: productId });
  return {
    product
  };
};

exports.post_product = async req => {
  const { product } = req.body;
  const { id: userId } = req.userData;
  await Joi.validate(product, productSchema);
  
  const date = Date.now();
  const newProduct = {
    ...product,
    author: userId
  }

  const { _id: id } = await new Product(newProduct).save();

  return {
    status: 201,
    msg: `Product has been successfully created with id ${id}`,
    id
  };
};

exports.patch_product = async req => {
  const { productId } = req.params;
  const { product } = req.body;
  const { id } = req.userData;

  await Joi.validate(product, productSchema);
  await Product.where({ _id: productId, author: id }).updateOne(product);

  return {
    msg: `Product with id ${productId} has been successfully updated`
  };
};

exports.delete_product = async req => {
  const { productId } = req.params;

  await Product.deleteOne({ _id: productId, author: id });

  return {
    msg: `Product with id ${productId} has been successfully deleted`
  };
};

exports.get_products_tags = async req => {
  const { tagsType } = req.params;
  if (tagsType !== 'developer' && tagsType !== 'system') {
    return { msg: `You have provided invalid type of tags`, status: 400 };
  }
  const tags = req.params.tags.split(',');
  const products = await Product.find({ [tagsType + '_tags']: { $in: tags }, options: { limit: 5 } });
  return { items: products.length, tags, products };
};

exports.get_products_name = async req => {
  const { productName } = req.params;
  const products = await Product.find({ name: { $regex: productName, $options: 'i' }, options: { limit: 5 } });
  return { 
    items: products.length,
    products
  };
};

exports.get_products_filters = async req => {
  const { properties } = req.params;

  const arrayProps = ['system_tags', 'developer_tags'];
  const objectProps = ['system_requirements', 'language_support'];

  const filters = properties.split('&').reduce((filters, option) => {
    const [prop, val] = option.split('=');
    const multiVals = val.split(',');

    const filtersObj = multiVals.reduce((filters, option) => {
      const [prop, val] = option.split('.');
      return {
        ...filters,
        [prop]: val
      }
    }, {});

    const checkedVal = arrayProps.includes(prop)
      ? { $in: multiVals }
      : objectProps.includes(prop)
        ? { $elemMatch: filtersObj }
        : val

    return {
      ...filters,
      [prop]: checkedVal
    };
  }, {});

  const products = await Product.find(filters).limit(20);

  return {
    items: products.length,
    filters,
    products
  };
};