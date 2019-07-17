import { Model, RelationMappings, JsonSchema } from 'objection'

export interface FieldType {
    key: string;
    name: string;
    langs: Array<string>;
}

export interface TemplateType {
    key: string;
    name: string;
    fields: Array<FieldType>;
    deleted?: boolean;
}

export default class Job extends Model {
    public jobId!: number
    public templates!: Array<TemplateType>
    public lang!: Array<string>
    public createdAt!: Date
    public createdBy!: number
    public editedAt: Date
    public editedBy: number
    public deletedAt: Date
    public deletedBy: number

    public static get idColumn (): any {
        return 'jobId'
    }

    public static get tableName (): any {
        return 'jobs'
    }

    public static get jsonSchema (): JsonSchema {
        return {
            type: 'object',
            required: ['type', 'lang', 'templates'],

            properties: {
                jobId: { type: 'integer' },
                type: { type: 'string', minLength: 1, maxLength: 255 },
                lang: { type: 'array' },
                templates: { type: 'array' }
            }
        }
    }

    public static get relationMappings (): RelationMappings {
        return {
        }
    }
}
