import { StructureResolver } from "sanity/desk";
import home from './homeStructure'
import projects from "./projectStructure";

export const structure: StructureResolver = (S, context) =>
S.list()
    .title('Content')
    .items([
        home(S, context),
        S.divider(),
        projects(S, context)
    ])
    