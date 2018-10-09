import assets from './assets';
import users from './users';

const transactions = [
    {
        id: '507f191e810c19729de860ea',
        me: {
            selling: [assets[1], assets[0]],
            user: users[0]
        },
        contractor: {
            selling: [assets[2], assets[4], assets[5]],
            user: users[1]
        },
        status: 'unseen',
        createdBy: users[0].id,
        updatedAt: '',
        createdAt: ''
    },
    {
        id: '31317f1we110c19729de8660',
        me: {
            selling: [assets[1], assets[0]],
            user: users[0]
        },
        contractor: {
            selling: [assets[2], assets[4], assets[5]],
            user: users[1]
        },
        status: 'unseen',
        createdBy: users[1].id,
        updatedAt: '',
        createdAt: ''
    },
    {
        id: '651f1ew1312729de860e228a',
        me: {
            selling: [assets[1], assets[0]],
            user: users[0]
        },
        contractor: {
            selling: [assets[2], assets[4], assets[5]],
            user: users[1]
        },
        status: 'updated',
        createdBy: users[0].id,
        updatedAt: '',
        createdAt: ''
    },
    {
        id: '312f191e810c19729de860ea',
        me: {
            selling: [assets[1], assets[0]],
            user: users[0]
        },
        contractor: {
            selling: [assets[2], assets[4], assets[5]],
            user: users[1]
        },
        status: 'updated',
        createdBy: users[0].id,
        updatedAt: '',
        createdAt: ''
    }
]

export default transactions;
