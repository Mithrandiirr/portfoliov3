import { ListItemBuilder } from "sanity/desk";
import defineStructure from "../utils/defineStructure";

export default defineStructure<ListItemBuilder>((S) =>
S.listItem()
.title('Projects')
.schemaType('projects')
.child(S.documentTypeList('projects'))
)