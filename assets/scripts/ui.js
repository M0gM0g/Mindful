'use script'
const store = require('./store')

const signUpSuccess = function (event) {
  console.log('sign up worked')
}

const signUpError = function (event) {
  console.log('sign up failed')
}

const signInSuccess = function (data) {
  store.user = data.user
  $('#sign-out').show()
  $('#sign-in, #sign-up, #sign-in-button, #sign-up-button').hide()
  // $('#sign-up').hide()
  // $('#sign-in-button').hide()
  // $('#sign-up-button').hide()
  $('#change-password-button').show()
  console.log('sign IN worked')
}

const signInError = function (event) {
  console.log('sign IN error')
}

const signOutSuccess = function (event) {
  delete store.user
  console.log('sign OUT success!')
  $('#sign-out').hide()
  $('#sign-in-button').show()
  $('#sign-up-button').show()
}

const signOutFailure = function (event) {
  console.log('sign OUT failure')
}

const changePasswordSuccess = function (event) {
  $('#sign-out').show()
  $('#change-password-button').show()
  $('#change-password').hide()

  console.log('change password worked!')
}

const changePasswordFailure = function (event) {
  console.log('change password FAILED')
}

module.exports = {
  signUpSuccess,
  signUpError,
  signInError,
  signInSuccess,
  signOutSuccess,
  signOutFailure,
  changePasswordSuccess,
  changePasswordFailure
}
