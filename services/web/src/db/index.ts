import config from '../../config'
import Account from '../models/account'
import Profile from '../models/profile'
import Project from '../models/project'

export interface UpdateTokenRequest {
    id: number;
    accountId: number;
    accessToken1: string;
    accessToken2: string;
    snType: string;
}

// export type Project = {
//     id: number,
//     name: string
// }

// export type Account = {
//     id: number,
//     email: string,
//     firstName: string,
//     lastName: string,
//     isActive: number,
//     pastMatches?: Array<any>
// }

// type AccountRecord = {
//     id: number,
//     email: string,
//     firstName: string,
//     lastName: string,
//     is_active: number
// }

// type ProjectRecord = {
//     id: number,
//     name: string,
//     members: Array<AccountRecord>
// }

export const fetchProjectMembers = async (projectId: number, isAdmin: boolean) => {
    const projectRecord = await Project
        .query()
        .eager('members(onlyMembers)', {
            onlyMembers: builder => {
                builder.where('isAdmin', isAdmin ? 1 : 0)
            }
        })
        .findById(projectId)

    return Promise.resolve(projectRecord!.members)
}

export const findSocalProfile = async (uId: string, snType: string) => new Promise((resolve, reject) => {
        // let queryString = 'SELECT * from socialProfile where snUid=? AND snType=?'
        // connection.query(queryString, [uId, snType], function(
        //     error,
        //     results
        // ) {
        //     if (error) {
        //         reject(error)
        //     }
        //     resolve(results)
        // })
    })

export const storeToken = async (accountId: number, accessToken1: string, accessToken2: string, snType: string, snUid: string) => new Promise((resolve, reject) => {
        // let queryString = 'INSERT INTO socialProfile (accountId, accessToken1, accessToken2, snType, snUid) VALUES(?,?,?,?,?)'
        // connection.query(
        //     queryString,
        //     [accountId, accessToken1, accessToken2, snType, snUid],
        //     (error, results) => {
        //         if (error) {
        //             reject(error)
        //         }
        //         resolve(results)
        //     }
        // )
    })

export const updateToken = async (req: UpdateTokenRequest) => new Promise((resolve, reject) => {
        // let queryString = 'UPDATE socialProfile set accountId = ?, accessToken1 = ?, accessToken2 =? , snType = ? where id = ? '
        // connection.query(
        //     queryString,
        //     [req.accountId, req.accessToken1, req.accessToken2, req.snType, req.id],
        //     (error, results) => {
        //         if (error) {
        //             reject(error)
        //         }
        //         resolve(results)
        //     }
        // )
    })


// export const createAccount = async (email: string, firstName: string, lastName: string, password: string): Promise<Account | undefined> => {
//     let account = await Account
//         .query()
//         .insert({
//             email,
//             firstName,
//             lastName,
//             password
//         })

//     return Promise.resolve(account)

//     // return new Promise((resolve, reject) => {
//     //     // let queryString = 'INSERT INTO accounts (email, firstName, lastName) VALUES(?,?,?)'
//     //     // connection.query(
//     //     //     queryString,
//     //     //     [email, firstName, lastName],
//     //     //     (error, results) => {
//     //     //         if (error) {
//     //     //             reject(error)
//     //     //         }
//     //     //         resolve(results)
//     //     //     }
//     //     // )
//     // })
// }

export const getAccounts = async (isAdmin: boolean) => {
    const accountRecords = await Account
        .query()
        .pick(['id', 'firstName', 'lastName', 'email'])
    // .eager('members(onlyMembers)', {
    //     onlyMembers: (builder) => {
    //         builder.where('isAdmin', isAdmin ? 1 : 0)
    //     }
    // })
    // .groupBy('id')

    return Promise.resolve(accountRecords)
}


export const getAccount = async ({ id, email, fieldKey }): Promise<Account | undefined> => {
    const result = await Account
        .query()
        .findOne(fieldKey, fieldKey === 'id' ? id : email)
        .eager('profiles')

    if (!result) { return Promise.resolve(result) }

    result.status = result.status || (Boolean(result.password) ? 'active' : 'disabled')

    return Promise.resolve(result)
}

export const removeAccount = async ({ id }): Promise<number> => {
    const result = await Account.query().deleteById(id)

    return Promise.resolve(result)
}


export const getProfiles = async (isAdmin: boolean) => {
    const accountRecords = await Profile
        .query()
        .pick(['id', 'address'])
    // .eager('members(onlyMembers)', {
    //     onlyMembers: (builder) => {
    //         builder.where('isAdmin', isAdmin ? 1 : 0)
    //     }
    // })
    // .groupBy('id')

    return Promise.resolve(accountRecords)
}


export const getProfile = async ({ id, email, fieldKey }): Promise<Profile | undefined> => {
    const result = await Profile
        .query()
        .findOne(fieldKey, fieldKey === 'id' ? id : email)
        .eager('projects')

    if (!result) { return Promise.resolve(result) }

    return Promise.resolve(result)
}

// export const fetchProject = async (id: number): Promise<Project> => {
//     return new Promise((resolve, reject) => {
//         const queryString = 'select id, name from `projects` where id = ?'
//         connection.query(
//             queryString,
//             [ id ],
//             (error: ?string, results: Array<Object>) => {
//                 if (error) {
//                     return reject(error)
//                 }

//                 const record: Project = new Project()

//                 resolve(record)
//             }
//         )
//     })
// }


// exports.get_product = async req => {
//     const { productId } = req.params;
//     const product = await Product.findOne({ _id: productId });
//     return {
//         product
//     };
// };

// exports.post_product = async req => {
//     const { product } = req.body;
//     const { id: accountId } = req.accountData;
//     await Joi.validate(product, productSchema);

//     const date = Date.now();
//     const newProduct = {
//         ...product,
//         author: accountId
//     }

//     const { _id: id } = await new Product(newProduct).save();

//     return {
//         status: 201,
//         msg: `Product has been successfully created with id ${id}`,
//         id
//     };
// };

// exports.patch_product = async req => {
//     const { productId } = req.params;
//     const { product } = req.body;
//     const { id } = req.accountData;

//     await Joi.validate(product, productSchema);
//     await Product.where({ _id: productId, author: id }).updateOne(product);

//     return {
//         msg: `Product with id ${productId} has been successfully updated`
//     };
// };

// exports.delete_product = async req => {
//     const { productId } = req.params;

//     await Product.deleteOne({ _id: productId, author: id });

//     return {
//         msg: `Product with id ${productId} has been successfully deleted`
//     };
// };

// exports.get_products_tags = async req => {
//     const { tagsType } = req.params;
//     if (tagsType !== 'developer' && tagsType !== 'system') {
//         return { msg: `You have provided invalid type of tags`, status: 400 };
//     }
//     const tags = req.params.tags.split(',');
//     const products = await Product.find({ [tagsType + '_tags']: { $in: tags }, options: { limit: 5 } });
//     return { items: products.length, tags, products };
// };

// exports.get_products_name = async req => {
//     const { productName } = req.params;
//     const products = await Product.find({ name: { $regex: productName, $options: 'i' }, options: { limit: 5 } });
//     return {
//         items: products.length,
//         products
//     };
// };

// exports.get_products_filters = async req => {
//     const { properties } = req.params;

//     const arrayProps = ['systemTags', 'developerTags'];
//     const objectProps = ['systemRequirements', 'languageSupport'];

//     const filters = properties.split('&').reduce((filters, option) => {
//         const [prop, val] = option.split('=');
//         const multiVals = val.split(',');

//         const filtersObj = multiVals.reduce((filters, option) => {
//             const [prop, val] = option.split('.');
//             return {
//                 ...filters,
//                 [prop]: val
//             }
//         }, {});

//         const checkedVal = arrayProps.includes(prop)
//             ? { $in: multiVals }
//             : objectProps.includes(prop)
//                 ? { $elemMatch: filtersObj }
//                 : val

//         return {
//             ...filters,
//             [prop]: checkedVal
//         };
//     }, {});

//     const products = await Product.find(filters).limit(20);

//     return {
//         items: products.length,
//         filters,
//         products
//     };
// };


// exports.get_comment = async req => {
//     const { commentId } = req.params;

//     const comment = await Comment.findOne({ _id: commentId });

//     return { comment };
// };

// exports.get_comments = async req => {
//     const { objectId } = req.params;

//     const comments = await Comment.find({ objectId, options: { limit: 50 } });

//     return { items: comments.length, comments };
// };

// exports.post_comment = async req => {
//     const { objectId } = req.params;
//     const { comment } = req.body;
//     const { id: accountId } = req.accountData;

//     await Joi.validate(comment, commentSchema);
//     const newComment = {
//         text: comment.text,
//         author: accountId,
//         objectId
//     }
//     const { _id: id } = await new Comment(newComment).save();

//     return {
//         status: 201,
//         msg: `Comment has been successfully created with id ${id} on object at id ${objectId}`,
//         id
//     };
// };

// exports.patch_comment = async req => {
//     const { commentId } = req.params;
//     const { comment } = req.body;
//     const { id } = req.accountData;

//     await Joi.validate(comment, commentSchema);
//     await Comment.where({ _id: commentId, author: id }).updateOne(comment);

//     return {
//         msg: `Comment with id ${commentId} has been successfully updated`
//     };
// };

// exports.delete_comment = async req => {
//     const { commentId } = req.params;
//     const { id } = req.accountData;

//     await Comment.deleteOne({ _id: commentId, author: id });

//     return {
//         msg: `Comment with id ${commentId} has been successfully deleted`
//     };
// };

// exports.post_comment_reply = async req => {
//     const { commentId, objectId } = req.params;
//     const { comment } = req.body;
//     const { id: accountId } = req.accountData;

//     await Joi.validate(comment, commentSchema);

//     const newComment = {
//         text: comment.text,
//         author: accountId,
//         objectId
//     }

//     const { _id } = await new Comment(newComment).save();
//     await Comment.findOneAndUpdate({ _id }, { $push: { replies: _id } });

//     return {
//         msg: `Comment reply has been successfully created with id ${_id} to comment ${commentId} at object with id ${ObjectId}`,
//         id: _id,
//         status: 201
//     };
// };
