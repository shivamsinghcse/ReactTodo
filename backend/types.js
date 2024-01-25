const { z } = require('zod')
const todoSchema = z.object({
    title: z.string(),
    description: z.string(),
    completed: z.boolean()
})
const completedSchema = z.object({
    id: z.string()
})
module.exports = {
    todoSchema: todoSchema,
    completedSchema: completedSchema
}