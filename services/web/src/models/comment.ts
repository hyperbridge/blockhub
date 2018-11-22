
objectId: { type: Schema.Types.ObjectId, required: true },
author: { type: String, required: true },
text: { type: String, required: true },
rate: { type: Number, default: 0 },
createdAt: { type: Date, default: Date.now },
updatedAt: { type: Date, default: Date.now },
replies: [{ type: Schema.Types.ObjectId, ref: 'Comment' }]