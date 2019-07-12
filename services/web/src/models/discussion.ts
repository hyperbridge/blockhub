import { Model, RelationMappings } from 'objection'
import Profile from './profile'
import Message from './message'
import Event from './event'
import Node from './node'
import Rating from './rating'
import BaseModel from './base'
import Community from './community'

export enum DiscussionType {
    Discussion = 'discussion',
    Chat = 'chat',
    Both = 'both'
}

export default class Discussion extends BaseModel {
    content!: String;
    parentId!: Number;
    rootMessageId!: Number;
    type!: DiscussionType;

    static get tableName() {
        return 'discussions'
    }

    static get timestamps() {
        return true
    }

    static get jsonSchema() {
        return {
            type: 'object',
            required: ['name', 'value', 'meta'],
            properties: {
            }
        }
    }

    static get modifiers() {
        return {
            publicCols(builder) {
                builder.select(['name', 'key', 'id', 'value']);
            },
            idCol(builder) {
                builder.select(['id']);
            }
        };
    }

    public static get relationMappings (): RelationMappings {
        return {
            owner: {
                relation: Model.HasOneThroughRelation,
                modelClass: Profile,
                join: {
                    from: 'discussions.id',
                    to: 'profiles.id',
                    through: {
                        from: 'nodes.fromDiscussionId',
                        to: 'nodes.toProfileId'
                    }
                }
            },
            parent: {
                relation: Model.HasOneRelation,
                modelClass: Node,
                join: {
                    from: 'discussions.parentId',
                    to: 'nodes.id'
                }
            },
            rootMessage: {
                relation: Model.HasOneRelation,
                modelClass: Message,
                join: {
                    from: 'discussions.rootMessageId',
                    to: 'messages.id'
                }
            },
            rating: {
                relation: Model.HasOneRelation,
                modelClass: Rating,
                join: {
                    from: 'discussions.ratingId',
                    to: 'ratings.id'
                }
            },
            members: {
                relation: Model.ManyToManyRelation,
                modelClass: Profile,
                filter: {
                    relationKey: 'members'
                },
                beforeInsert(model) {
                    (model as Node).relationKey = 'members'
                },
                join: {
                    from: 'profiles.id',
                    to: 'discussions.id',
                    through: {
                        from: 'nodes.fromProfileId',
                        to: 'nodes.toDiscussionId',
                        extra: ['relationKey']
                    }
                }
            },
            messages: {
                relation: Model.ManyToManyRelation,
                modelClass: Message,
                filter: {
                    relationKey: 'messages'
                },
                beforeInsert(model) {
                    (model as Node).relationKey = 'messages'
                },
                join: {
                    from: 'discussions.id',
                    to: 'messages.id',
                    through: {
                        from: 'nodes.fromDiscussionId',
                        to: 'nodes.toMessageId',
                        extra: ['relationKey']
                    }
                }
            },
            events: {
                relation: Model.ManyToManyRelation,
                modelClass: Event,
                filter: {
                    relationKey: 'events'
                },
                beforeInsert(model) {
                    (model as Node).relationKey = 'events'
                },
                join: {
                    from: 'events.id',
                    to: 'discussions.id',
                    through: {
                        from: 'nodes.fromEventId',
                        to: 'nodes.toDiscussionId',
                        extra: ['relationKey']
                    }
                }
            },
            community: {
                relation: Model.HasOneThroughRelation,
                modelClass: Community,
                filter: {
                    relationKey: 'discussions'
                },
                beforeInsert(model) {
                    (model as Node).relationKey = 'discussions'
                },
                join: {
                    from: 'communities.id',
                    to: 'discussions.id',
                    through: {
                        from: 'nodes.fromCommunityId',
                        to: 'nodes.toDiscussionId',
                        extra: ['relationKey']
                    }
                }
            }
        }
    }
}
