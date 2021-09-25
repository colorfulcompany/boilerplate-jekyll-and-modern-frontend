import { Application } from '@hotwired/stimulus'
import { GlobalController } from './controllers/global_controller'

const app = Application.start()
if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
  app.debug = true
}

app.register('global', GlobalController)
