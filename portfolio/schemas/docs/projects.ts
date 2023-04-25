import { defineField } from "sanity";

export default defineField({
    name: 'projects',
    title: 'Projects',
    type: 'document',
    fields: [
        defineField({
            title: 'Name',
            name: 'name',
            type: 'string'
        }),
        defineField({
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
                hotspot: true
            },
              fields: [
                    {
                    name: 'caption',
                    type: 'string',
                    title: 'Caption',
                    },
                ]
        }),
       defineField({
            name: 'content',
            title: 'Content',
            type: 'array',
            of: [{type: 'block'},
            {
                type: 'image',
                fields: [{
                    type: 'text',
                    name: 'alt',
                    title: 'Alternative text',
                    description: `Some of your visitors cannot see images, 
                        be they blind, color-blind, low-sighted; 
                        alternative text is of great help for those 
                        people that can rely on it to have a good idea of 
                        what\'s on your page.`,
                    options: {
                        isHighlighted: true
                    }
                }]
            }]
       }) 
    ],
    preview: {
        select: {
            title: 'name',
            media: 'image'
        }
    }

})