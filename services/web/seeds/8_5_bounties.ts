import Bounty from '../src/models/bounty'

export const data = [
    {
        status: 'active',
        meta: {
            parentId: 4,
            parentType: 'project',
            title: 'Find a bug, behind the word mountains, far from the countries Vokalia and Consonantia, there live.',
            submited: '2851',
            approved: '408',
            prize: '30000',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eu nulla sed urna malesuada ornare nec ac risus. Nam vehicula mauris ac augue finibus finibus non et erat. Integer malesuada rutrum elit non hendrerit. Nam volutpat scelerisque magna, in lacinia nulla consectetur eget. Nunc feugiat egestas arcu id lobortis. Proin rhoncus viverra mi, ac bibendum ligula molestie eget. Vivamus a tempor ligula.',
            explainText: '',
            fileSrc: ''
        }
    },
    {
        status: 'active',
        meta: {
            parentId: 4,
            parentType: 'project',
            title: 'Find a bug, behind the word mountains, far from the countries Vokalia and Consonantia, there live.',
            submited: '2851',
            approved: '408',
            prize: '30000',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eu nulla sed urna malesuada ornare nec ac risus. Nam vehicula mauris ac augue finibus finibus non et erat. Integer malesuada rutrum elit non hendrerit. Nam volutpat scelerisque magna, in lacinia nulla consectetur eget. Nunc feugiat egestas arcu id lobortis. Proin rhoncus viverra mi, ac bibendum ligula molestie eget. Vivamus a tempor ligula.',
            explainText: '',
            fileSrc: ''
        }
    }
]

export const seed = async function (knex): Promise<any> {
    console.log('[BlockHub] Seeding bounties')

    await knex('bounties').del()

    await Bounty
        .query(knex)
        .upsertGraph(data)
}
