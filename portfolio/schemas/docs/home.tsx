import { defineField } from "sanity";

export default defineField({
    title: 'Home',
    name: 'home',
    type: 'document',
    fields: [
        defineField({
            name: 'name',
            title: 'Name',
            type: 'string',
        }),
        defineField({
            name: 'picture',
            title: 'Picture',
            type: 'image'
        }),
        defineField({
            name: 'content',
            title: 'Content',
            type: 'array',
            of: [{type: 'block'}, {type: 'techs'},  {type: 'projectCases'}]
        })
    ]
})