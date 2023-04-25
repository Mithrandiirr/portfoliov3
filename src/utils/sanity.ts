import {createClient} from '@sanity/client'

export default createClient({
  projectId: 'ryhdnq2r',
  dataset: 'production',
  useCdn: true, // set to `true` to fetch from edge cache
  apiVersion: '2022-01-12', // use current date (YYYY-MM-DD) to target the latest API version
})

