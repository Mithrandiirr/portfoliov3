import { defineField } from "sanity";

 export default defineField({
    name: 'projectCases',
    title: 'Projects',
    type: 'object',
    fields: [
        defineField({
            name : 'projectCases',
            title: 'Projects',
            type: 'array',
            of: [{type: 'project'}]
        })
    ]
 })