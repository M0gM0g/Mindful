'use strict'
const authUi = require('./ui')
const getFormFields = require('../../lib/get-form-fields')
const authApi = require('./api')

// const passId = function (event) {
//   event.preventDefault()
//   const passTheId = $(event.target).attr('data-id')
//   $('#data-id-number').val(passTheId)
// }

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
  // const entryId = $(event.target).closest('button').attr('data-id')
  // const entryId = $(event.target).('data-id')
  // const data = $(event.target).attr('data-id')

  const data = getFormFields(event.target)
  authApi.deleteEntry(data)
    .then(authUi.deleteEntrySuccess, authUi.getEntriesSuccess(data))
    .catch(authUi.deleteEntryFailure)
}

const onEditEntry = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  authApi.editEntry(data)
    .then(authUi.editEntrySuccess, authUi.getEntriesSuccess(data))
    .catch(authUi.editEntryFailure)
}

module.exports = {
  onSignUp,
  onSignIn,
  onSignOut,
  onChangePassword,
  onCreateEntry,
  onGetEntries,
  onDeleteEntry,
  onEditEntry
}
