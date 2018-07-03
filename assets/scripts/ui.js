'use script'
const store = require('./store')
const getEntryHandlebars = require('./templates/entry-listing.handlebars')

const getTableData = function (a) {
  event.preventDefault()
  const selText = $(this).text()
  $('#tableButton').text(selText)
}

const exitEntries = function (event) {
  $('#sign-out').show()
  $('#sign-in, #sign-up, #sign-in-button, #sign-up-button, .get-entries-view, #exit-entries').hide()
  $('#change-password-button').show()
  $('#entry-button, #get-entries, #edit-button, #delete-entry-button').show()
}

const resetAllForms = function (event) {
  $('#sign-in-form, #sign-up-form, #change-password-form, #edit-form, #delete-entry-form, #entry-form, #entry').trigger('reset')
}

const clearModalAlert = function (event) {
  $('.modal-alert').text('')
}

const signUpSuccess = function (event) {
  console.log('sign up worked')
  $('#sign-in, #sign-in-button').show()
  $('#sign-up, #sign-up-button').hide()
  resetAllForms()
  clearModalAlert()
}

const signUpError = function (event) {
  $('.modal-alert').text('There was an error signing up. Try again.')
  resetAllForms()
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
  $('#entry-button, #get-entries, #edit-button, #delete-entry-button').show()
  resetAllForms()
  clearModalAlert()
  console.log('sign IN worked')
}

const signInError = function (event) {
  console.log('sign IN error')
  $('.modal-alert').text('There was an error signing in. Try again.')
  resetAllForms()
}

const signOutSuccess = function (event) {
  delete store.user
  console.log('sign OUT success!')
  $('#sign-out, #change-password, #change-password-button, #change-password').hide()
  $('#sign-in-button, #sign-up-button').show()
  $('#entry-button,#get-entries, #edit-button, #delete-entry-button, .get-entries-view').hide()

  resetAllForms()
  clearModalAlert()
}

const signOutFailure = function (event) {
  console.log('sign OUT failure')
  $('.modal-alert').text('There was an error signing out. Try again.')
  resetAllForms()
  clearModalAlert()
}

const changePasswordSuccess = function (event) {
  $('#sign-out').show()
  $('#change-password-button').show()
  $('#change-password').hide()
  resetAllForms()

  console.log('change password worked!')
}

const changePasswordFailure = function (event) {
  console.log('change password FAILED')
  $('.modal-alert').text('There was an error signing out. Try again.')
  resetAllForms()
  clearModalAlert()
}

const createEntrySuccess = function (event) {
  clearModalAlert()
  console.log('create entry WORKED')
}

const createEntryFailure = function (event) {
  console.log('create entry FAILED')
  $('.modal-alert').text('There was an error. Try again.')
}

const getEntriesSuccess = function (data) {
  console.log(data.entries)
  $('.get-entries-view, #exit-entries').show()
  clearModalAlert()
  const getEntryHtml = getEntryHandlebars({ entries: data.entries })
  $('.get-entries-view').html(getEntryHtml)
  $('#sign-out, #change-password, #change-password-button, #entry-button, #get-entries, #delete-entry-button, #edit-button, .message-main').hide()
}

const getEntriesFailure = function (event) {
  console.log('get entries failed')
  $('.modal-alert').text('There was an error. Try again.')
}

const deleteEntrySuccess = function (event) {
  console.log('delete entry worked!')
  clearModalAlert()
}

const deleteEntryFailure = function (event) {
  console.log('delete entry FAILED')
  $('.modal-alert').text('There was an error. Try again.')
}

const editEntrySuccess = function (data) {
  console.log('edit entry worked!')
  console.log(data.entries)
  clearModalAlert()
}

const editEntryFailure = function (error) {
  console.log(error)
  $('.modal-alert').text('There was an error. Try again.')
}

module.exports = {
  signUpSuccess,
  signUpError,
  signInError,
  signInSuccess,
  signOutSuccess,
  signOutFailure,
  changePasswordSuccess,
  changePasswordFailure,
  resetAllForms,
  clearModalAlert,
  createEntrySuccess,
  createEntryFailure,
  getEntriesSuccess,
  getEntriesFailure,
  deleteEntrySuccess,
  deleteEntryFailure,
  editEntrySuccess,
  editEntryFailure,
  getEntryHandlebars,
  exitEntries,
  getTableData
}
