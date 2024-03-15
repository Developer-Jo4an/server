const express = require('express')
const router = express.Router()
const UserController = require('../Controllers/user-controller')

// GET
router.get('/:id/user/get-user-info', UserController.getUserInfo)
// POST
router.post('/:id/transactions/add-transaction', UserController.addTransaction)
router.post('/:id/accounts/add-account', UserController.addAccount)
// PUT
router.put('/:id/transactions/modified-transaction', UserController.modifiedTransaction)
router.put('/:id/accounts/modified-account', UserController.modifiedAccount)
// DELETE
router.delete('/:id/transactions/delete-transaction/:transactionId', UserController.deleteTransaction)
router.delete('/:id/accounts/delete-account/:accountId', UserController.deleteAccount)

module.exports = router
