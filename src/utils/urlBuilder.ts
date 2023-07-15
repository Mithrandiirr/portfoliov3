import imageUrlBuilder from "@sanity/image-url";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
interface SanityConfig {
  projectId: string;
  dataset: string;
}
const sanityConfig = {
  projectId: process.env.SANITY_PROJECT_ID, // Change this to your sanity's projectId
  dataset: process.env.SANITY_DATASET,
};
const builder = imageUrlBuilder(sanityConfig as SanityConfig);
export const urlFor = (source: SanityImageSource) => {
  return builder.image(source);
};
