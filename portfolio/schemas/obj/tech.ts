import { defineField } from "sanity";

export default defineField({
    name: 'tech',
    title: 'Technology',
    type: 'object',
    fields: [
        defineField({
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
                hotspot : true
            },
             fields: [
                    {
                    name: 'caption',
                    type: 'string',
                    title: 'Caption',
                    },
            ]
        })
    ] 
})