import sanity from "@/utils/sanity";
import { homeQuery, projectsQuery } from "./sanity.queries";

export async function getHomeData() : Promise<[]> {
    if(sanity) {
        return (await sanity.fetch(homeQuery))
    }
    return []
}
export async function getProjects() : Promise<[]> {
    if(sanity) {
        return (await sanity.fetch(projectsQuery))
    }
    return []
}

