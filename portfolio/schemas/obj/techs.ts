import { defineField } from "sanity";

export default defineField({
    name: 'techs',
    title: 'Technologies',
    type: 'object',
    fields: [
        defineField({
            name: 'techStacks',
            title: 'Technologies',
            type: 'array',
            of: [{type: 'tech'}]
        }),
        defineField({
            name: 'techStacksReversed',
            title: 'Technologies Reversed',
            type: 'array',
            of: [{type: 'tech'}]
        })
    ]
})