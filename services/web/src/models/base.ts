import { Model } from 'objection'

export default class BaseModel extends Model {
    id!: Number
    key!: String
    value!: String
    status!: String
    meta!: Object

    createdAt!: String
    updatedAt!: String

    static idColumn = 'id'

    $beforeValidate(jsonSchema, json, opt) {
        // @ts-ignore
        if (this.constructor.timestamps) {
            jsonSchema.properties.createdAt = { type: 'string', format: 'date-time' }
            jsonSchema.properties.updatedAt = { type: 'string', format: 'date-time' }
        }

        jsonSchema.properties.id = { type: 'integer' }
        jsonSchema.properties.key = { type: 'string' }
        jsonSchema.properties.value = { type: 'string' }
        jsonSchema.properties.status = {
            type: 'string',
            enum: ['active', 'disabled', 'removed'],
            default: 'active'
        }
        jsonSchema.properties.meta = { type: 'object' }

        return jsonSchema
    }

    $beforeInsert() {
        // @ts-ignore
        if (!this.constructor.timestamps) return
        this.createdAt = new Date().toISOString()
    }

    $beforeUpdate() {
        // @ts-ignore
        if (!this.constructor.timestamps) return
        this.updatedAt = new Date().toISOString()
    }

    static get namedFilters() {
        return {
            active: builder => {
                builder.where('status', 'active')
            }
        }
    }

    get parent() {
        if (this.parentId) return Node.where(id = parentId)

        throw new Error("No parent")
    }

    // $beforeInsert() {
    //     this.createdAt = this.updatedAt = new Date().toISOString()
    // }

    // $beforeUpdate() {
    //     this.updatedAt = new Date().toISOString()
    // }
    // $toDatabaseJson() {
    //     const omit = this.constructor.getRelations()
    //     return this.$$toJson(true, omit, null)
    // }
}

// class MyModel extends BaseModel {
//     static timestamps = true
// }