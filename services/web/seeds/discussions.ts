import Discussion from '../src/models/discussion'

export const data = [
    {
        status: 'active',
        name: 'New to BlockHub',
        meta: {
            rate: 43,
            commentsCount: 8234,
            actionStatus: 'pinned',
            author: {
                name: 'Alan Walker'
            },
            content: 'something',
            preview: 'https://via.placeholder.com/100x100',
            comments: [
                {
                    rate: 11,
                    author: {
                        name: 'Alan Walker',
                        img: 'https://via.placeholder.com/100x100'
                    },
                    date: '2017-11-04T04:09:00.000Z',
                    text: 'test'
                }
            ]
        }
    },
    {
        name: 'New to BlockHub',
        meta: {
            rate: 43,
            commentsCount: 8234,
            actionStatus: 'locked',
            author: {
                name: 'Alan Walker'
            }
        }
    },
    {
        name: 'New to BlockHub',
        meta: {
            rate: 43,
            commentsCount: 8234,
            actionStatus: 'starred',
            author: {
                name: 'Alan Walker'
            }
        }
    },
    {
        name: 'New to BlockHub',
        meta: {
            rate: 43,
            commentsCount: 8234,
            author: {
                name: 'Alan Walker'
            }
        }
    },
    {
        "id": 1,
        "slug": "test-slug-1",
        "title": "Why am I seeing H12 request timeout?",
        "text": "<h4>Danish carrot cake jelly-o bonbon chupa</h4><p>Cheesecake gummies cake dessert. Cake liquorice pudding cheesecake gingerbread danish. Danish jelly sweet roll gummi bears. Gummi bears jelly beans I love oat cake sweet I love cake pastry gingerbread. Marshmallow jujubes sesame snaps jelly beans donut.</p><p>Jelly lollipop topping sweet roll brownie. Marzipan sweet pudding oat cake bear claw biscuit soufflé dessert. Sweet roll I love I love sweet roll chocolate bar I love I love candy. Ice cream sesame snaps lemon drops I love cookie sweet roll. Jujubes macaroon sesame snaps biscuit tiramisu cheesecake.</p>"
    },
    {
        "id": 2,
        "slug": "test-slug-2",
        "title": "I'm still seeing 'Your password has expired'",
        "text": "<h4>Danish carrot cake jelly-o bonbon chupa</h4><p>Cheesecake gummies cake dessert. Cake liquorice pudding cheesecake gingerbread danish. Danish jelly sweet roll gummi bears. Gummi bears jelly beans I love oat cake sweet I love cake pastry gingerbread. Marshmallow jujubes sesame snaps jelly beans donut.</p><p>Jelly lollipop topping sweet roll brownie. Marzipan sweet pudding oat cake bear claw biscuit soufflé dessert. Sweet roll I love I love sweet roll chocolate bar I love I love candy. Ice cream sesame snaps lemon drops I love cookie sweet roll. Jujubes macaroon sesame snaps biscuit tiramisu cheesecake.</p>"
    },
    {
        "id": 3,
        "slug": "developer-program",
        "title": "Developer Program",
        "text": "<h4>Danish carrot cake jelly-o bonbon chupa</h4><p>Cheesecake gummies cake dessert. Cake liquorice pudding cheesecake gingerbread danish. Danish jelly sweet roll gummi bears. Gummi bears jelly beans I love oat cake sweet I love cake pastry gingerbread. Marshmallow jujubes sesame snaps jelly beans donut.</p><p>Jelly lollipop topping sweet roll brownie. Marzipan sweet pudding oat cake bear claw biscuit soufflé dessert. Sweet roll I love I love sweet roll chocolate bar I love I love candy. Ice cream sesame snaps lemon drops I love cookie sweet roll. Jujubes macaroon sesame snaps biscuit tiramisu cheesecake.</p>"
    },
    {
        "id": 4,
        "slug": "test-slug-3",
        "title": "Performing Load Test on BlockHub",
        "text": "<h4>Danish carrot cake jelly-o bonbon chupa</h4><p>Cheesecake gummies cake dessert. Cake liquorice pudding cheesecake gingerbread danish. Danish jelly sweet roll gummi bears. Gummi bears jelly beans I love oat cake sweet I love cake pastry gingerbread. Marshmallow jujubes sesame snaps jelly beans donut.</p><p>Jelly lollipop topping sweet roll brownie. Marzipan sweet pudding oat cake bear claw biscuit soufflé dessert. Sweet roll I love I love sweet roll chocolate bar I love I love candy. Ice cream sesame snaps lemon drops I love cookie sweet roll. Jujubes macaroon sesame snaps biscuit tiramisu cheesecake.</p>"
    },
    {
        "id": 5,
        "slug": "test-slug-3",
        "title": "Performing Load Test on BlockHub",
        "text": "<h4>Danish carrot cake jelly-o bonbon chupa</h4><p>Cheesecake gummies cake dessert. Cake liquorice pudding cheesecake gingerbread danish. Danish jelly sweet roll gummi bears. Gummi bears jelly beans I love oat cake sweet I love cake pastry gingerbread. Marshmallow jujubes sesame snaps jelly beans donut.</p><p>Jelly lollipop topping sweet roll brownie. Marzipan sweet pudding oat cake bear claw biscuit soufflé dessert. Sweet roll I love I love sweet roll chocolate bar I love I love candy. Ice cream sesame snaps lemon drops I love cookie sweet roll. Jujubes macaroon sesame snaps biscuit tiramisu cheesecake.</p>"
    },
    {
        "id": 6,
        "slug": "test-slug-3",
        "title": "Performing Load Test on BlockHub",
        "text": "<h4>Danish carrot cake jelly-o bonbon chupa</h4><p>Cheesecake gummies cake dessert. Cake liquorice pudding cheesecake gingerbread danish. Danish jelly sweet roll gummi bears. Gummi bears jelly beans I love oat cake sweet I love cake pastry gingerbread. Marshmallow jujubes sesame snaps jelly beans donut.</p><p>Jelly lollipop topping sweet roll brownie. Marzipan sweet pudding oat cake bear claw biscuit soufflé dessert. Sweet roll I love I love sweet roll chocolate bar I love I love candy. Ice cream sesame snaps lemon drops I love cookie sweet roll. Jujubes macaroon sesame snaps biscuit tiramisu cheesecake.</p>"
    },
    {
        "id": 7,
        "slug": "test-slug-3",
        "title": "Performing Load Test on BlockHub",
        "text": "<h4>Danish carrot cake jelly-o bonbon chupa</h4><p>Cheesecake gummies cake dessert. Cake liquorice pudding cheesecake gingerbread danish. Danish jelly sweet roll gummi bears. Gummi bears jelly beans I love oat cake sweet I love cake pastry gingerbread. Marshmallow jujubes sesame snaps jelly beans donut.</p><p>Jelly lollipop topping sweet roll brownie. Marzipan sweet pudding oat cake bear claw biscuit soufflé dessert. Sweet roll I love I love sweet roll chocolate bar I love I love candy. Ice cream sesame snaps lemon drops I love cookie sweet roll. Jujubes macaroon sesame snaps biscuit tiramisu cheesecake.</p>"
    },
    {
        "id": 8,
        "slug": "test-slug-3",
        "title": "Performing Load Test on BlockHub",
        "text": "<h4>Danish carrot cake jelly-o bonbon chupa</h4><p>Cheesecake gummies cake dessert. Cake liquorice pudding cheesecake gingerbread danish. Danish jelly sweet roll gummi bears. Gummi bears jelly beans I love oat cake sweet I love cake pastry gingerbread. Marshmallow jujubes sesame snaps jelly beans donut.</p><p>Jelly lollipop topping sweet roll brownie. Marzipan sweet pudding oat cake bear claw biscuit soufflé dessert. Sweet roll I love I love sweet roll chocolate bar I love I love candy. Ice cream sesame snaps lemon drops I love cookie sweet roll. Jujubes macaroon sesame snaps biscuit tiramisu cheesecake.</p>"
    }
]

export const seed = async function (knex): Promise<any> {
    await knex('discussions').del()

    await Discussion
        .query(knex)
        .upsertGraph(data)
}
