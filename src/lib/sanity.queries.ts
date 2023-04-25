import groq from "groq";

export const homeQuery = groq`
    *[_type == 'home'][0]
`

export const projectsQuery = groq`
    *[_type == 'home'][0] {
        content[5]->
    }
`