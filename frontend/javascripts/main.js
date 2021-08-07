import { Application } from 'stimulus'
import { GlobalController } from './controllers/global_controller'

const app = Application.start()
app.register('global', GlobalController)
