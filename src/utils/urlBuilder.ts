import imageUrlBuilder from "@sanity/image-url"
import { SanityImageSource } from "@sanity/image-url/lib/types/types"
const sanityConfig = {
    projectId: 'xxxxxxxxx', // Change this to your sanity's projectId
    dataset: "production",
  };
const builder = imageUrlBuilder(sanityConfig)
export  const urlFor = (source: SanityImageSource) => {
return builder.image(source)
} 
