import { Router } from 'express'
import * as locationsCtrl from '../controllers/locations.js'
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'
import { router } from './profiles.js'

// router.get('/:id', locationsCtrl.show)
router.get('/', locationsCtrl.index)

router.use(decodeUserFromToken)
router.post('/', checkAuth, locationsCtrl.create)

export {
  router
}