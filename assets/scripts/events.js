'use strict'
const authUi = require('./ui')
const getFormFields = require('../../lib/get-form-fields')
const authApi = require('./api')

const onSignUp = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)

  authApi.signUp(data)
    .then(authUi.signUpSuccess)
    .catch(authUi.signUpError)
}

const onSignIn = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)

  authApi.signIn(data)
    .then(authUi.signInSuccess)
    .catch(authUi.signInError)
}

const onSignOut = function (event) {
  event.preventDefault()
  authApi.signOut()
    .then(authUi.signOutSuccess)
    .catch(authUi.signOutFailure)
}

const onChangePassword = function (event) {
  event.preventDefault()

  const data = getFormFields(event.target)
  authApi.changePassword(data)
    .then(authUi.changePasswordSuccess)
    .catch(authUi.changePasswordFailure)
}

const onCreateEntry = function (event) {
  event.preventDefault()

  const data = getFormFields(event.target)
  authApi.createEntry(data)
    .then(authUi.createEntrySuccess)
    .catch(authUi.createEntryFailure)
}

const onGetEntries = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  authApi.getEntries(data)
    .then(authUi.getEntriesSuccess)
    .catch(authUi.getEntriesFailure)
}

const onDeleteEntry = function (event) {
  event.preventDefault()
  // const entryId = $(event.target).attr('data-id')
  const data = $(event.target).data('id')
  authApi.deleteEntry(data)
    // .then(authUi.deleteEntrySuccess, authUi.getEntriesSuccess(data))
    .then(authUi.exitEntries)
    .then(authApi.onGetEntries)
    .catch(authUi.deleteEntryFailure)
}

module.exports = {
  onSignUp,
  onSignIn,
  onSignOut,
  onChangePassword,
  onCreateEntry,
  onGetEntries,
  onDeleteEntry
}
