import { boot } from 'quasar/wrappers'
import VuePlugin1 from '@tobymosque/quasar-ui-ext-test1'

export default boot(({ app }) => {
  app.use(VuePlugin1)
})
