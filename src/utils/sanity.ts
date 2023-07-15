import { createClient } from "@sanity/client";

export default createClient({
  projectId: process.env.SANITY_PROJECT_ID, // Change this to your sanity's projectId
  dataset: process.env.SANITY_DATASET,
  useCdn: true, // set to `true` to fetch from edge cache
  apiVersion: process.env.SANITY_API_VERSION, // use current date (YYYY-MM-DD) to target the latest API version
});
