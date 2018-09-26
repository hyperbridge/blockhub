'use strict';
import * as db from './src/db/';

const product = db.marketplace.products.findOne({ $id: 1 });

const plan = {
    title: "3 Month Subscription",
    price: 12.95,
    link: ""
}

export const up = next => {
    product.price = 29.99;
    product.plans.insert(plan);
    db.marketplace.update(product);
    next();
};

export const down = next => {
    product.price = 13.99;
    product.plans.remove(plan);
    db.marketplace.update(product);
    next();
};
