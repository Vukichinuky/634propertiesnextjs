import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import StudioNavbar from './components/StudioNavbar'

export default defineConfig({
  basePath: '/studio',
  name: '634_Properties',
  title: '634properties',
  projectId: '5bjnsef4',
    dataset: 'production',

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
  studio:{
    components:{
      navbar: StudioNavbar,
    }
  }
})
