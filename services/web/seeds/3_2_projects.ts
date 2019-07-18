import Project from '../src/models/project'

export const data = [
    {
        ownerId: 1,
        name: "My Project Name",
        value: "<h2>An adventure of a lifetime...</h2>\n<p>Any new features or tools which are added to the current store shall also be subject to the Terms of Service. You can review the most current version of the Terms of Service at any time on this page. We reserve the right to update, change or replace any part of these Terms of Service by posting updates and/or changes to our website. It is your responsibility to check this page periodically for changes. Your continued use of or access to the website following the posting of any changes constitutes acceptance of those changes.</p><p>Our store is hosted on Shopify Inc. They provide us with the online e-commerce platform that allows us to sell our products and services to you.</p> IMAGE LIST",
        status: 'active',
        contractStatus: 'Contributable',
        meta: {
            revision: 0,
            created: 1531430916082,
            version: 0,
            description: "Project description",
            tags: [],
            images: {},
            developer: "0x0",
            developerId: 1,
            developerTags: [
                "game"
            ],
            funds: {
                currency: "USD",
                obtained: 7613,
                goal: 8500,
                cap: 10000
            },
            overflowEnabled: true,
            timelineEnabled: true,
            refundsEnabled: false,
            curationEnabled: true,
            contributionPeriodEnabled: true,
            supportEmail: "",
            twitterUsername: "",
            shareText: "",
            comments: [],
            contributors: [],
            moderators: [],
            community: {
                discussions: [
                    {
                        name: "[GUIDE] Short Title",
                        count: "381",
                        link: "#"
                    },
                    {
                        name: "Just Title",
                        count: "31",
                        link: "#"
                    },
                    {
                        name: "Just Some a Little bit long Title",
                        count: "1701",
                        link: "#"
                    }
                ]
            },
            funding: {
                stages: [
                    {
                        status: "done",
                        text: "m1"
                    },
                    {
                        status: "done",
                        text: "m2"
                    },
                    {
                        status: "InProgress",
                        text: "m3"
                    },
                    {
                        status: "awaiting",
                        text: "m4"
                    },
                    {
                        status: "awaiting",
                        text: "m5"
                    },
                    {
                        status: "awaiting",
                        text: "m6"
                    }
                ],
                fundedAmount: "202,190.63",
                goalAmount: "200,000.00",
                spentAmount: {
                    amount: "32,000",
                    percent: "37"
                },
                lockedAmount: {
                    amount: "182,242",
                    percent: "71"
                },
                overflowAmount: {
                    amount: "17,342",
                    percent: "12"
                }
            },
            milestones: [
                {
                    text: "Create the base game with 2 dungeons",
                    status: "done"
                },
                {
                    text: "New Class, storyline and weapons type",
                    status: "done"
                },
                {
                    text: "Level cap updated to 90 with new set of armors and weapons.",
                    stepNumber: "3"
                },
                {
                    text: "Add 3 extra dungeons",
                    stepNumber: "4"
                }
            ]
        }
    }
]

export const seed = async function (knex): Promise<any> {
    console.log('[BlockHub] Seeding projects')

    await knex('projects').del()

    await Project
        .query(knex)
        .upsertGraph(data)

    // // Deletes ALL existing entries
    // return knex('projects')
    //     .del()
    //     .then(function() {
    //         // Inserts seed entries
    //         return knex('projects').insert(projects)
    //     })
}
