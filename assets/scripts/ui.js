'use script'
const store = require('./store')
const getEntryHandlebars = require('./templates/entry-listing.handlebars')

const refreshWelcome = function () {
  $('#welcome').hide()
  $('#come-back').fadeIn(2000)
  $('#come-back').fadeOut(6000)
  $('#welcome').delay(4000).fadeIn(4500)
}

const introWelcome = function () {
  $('#welcome').hide()
  $('#intro').fadeTo(5000, 100)
  $('#intro2').delay(3000).fadeTo(3000, 100)
  $('#intro').delay(1000).fadeTo(2000, 0)
  $('#intro2').delay(1000).fadeTo(2000, 0)
  $('#welcome').delay(9000).fadeIn(4000)
}

const getTableData = function (a) {
  event.preventDefault()
  const selText = $(this).text()
  $('#tableButton').text(selText)
}

const exitEntries = function (event) {
  $('#sign-out').show()
  $('#sign-in, #sign-up, #sign-in-button, #sign-up-button, .get-entries-view, #exit-entries, #delete-id-form, #edit-form').hide()
  $('#change-password-button').show()
  $('#entry-button, #get-entries, #edit-button, #delete-entry-button, .message-main').show()
  $('#delete-message, #edit-alert').text('')
  resetAllForms()
}

const resetAllForms = function (event) {
  $('#sign-in-form, #sign-up-form, #change-password-form, #edit-form, #delete-entry-form, #entry-form, #entry, #entry-form, #delete-id-form, #edit-form').trigger('reset')
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
  introWelcome()
  $('#sign-out, .message-main').show()
  $('#sign-in, #sign-up, #sign-in-button, #sign-up-button').hide()
  // $('#sign-up').hide()
  // $('#sign-in-button').hide()
  // $('#sign-up-button').hide()
  $('#change-password-button').show()
  $('#entry-button, #get-entries, #edit-button, #delete-entry-button').show()
  resetAllForms()
  clearModalAlert()
}

const signInError = function (event) {
  console.log('sign IN error')
  $('.modal-alert').text('There was an error signing in. Try again.')
  resetAllForms()
}

const signOutSuccess = function (event) {
  delete store.user
  $('#sign-out, #change-password, #change-password-button, #change-password').hide()
  $('#sign-in-button, #sign-up-button').show()
  $('#entry-button,#get-entries, #edit-button, #delete-entry-button, .get-entries-view').hide()
  // setTimeout(refreshWelcome, 5000)
  refreshWelcome()
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
  clearModalAlert()
  $('#sign-out').show()
  $('#change-password-button').show()
  $('#change-password').hide()
  resetAllForms()
}

const changePasswordFailure = function (event) {
  clearModalAlert()
  $('.modal-alert').text('There was an error. Try again.')
  resetAllForms()
}

const createEntrySuccess = function (event) {
  $('.modal-alert').text('You just created an entry!')
  $('#entry').css('display', 'none')
  resetAllForms()
  clearModalAlert()
}

const createEntryFailure = function (event) {
  $('.modal-alert').text('There was an error. Try again.')
}

const getEntriesSuccess = function (data) {
  $('.get-entries-view, #exit-entries, #delete-id-form, #edit-form').show()
  clearModalAlert()
  const getEntryHtml = getEntryHandlebars({ entries: data.entries })
  $('.get-entries-view').html(getEntryHtml)
  $('#sign-out, #change-password, #change-password-button, #entry-button, #get-entries, #delete-entry-button, .message-main').hide()
  $('#delete-message').text('')
}

const getEntriesFailure = function (event) {
  console.log('get entries failed')
  $('.modal-alert').text('There was an error. Try again.')
}

const deleteEntrySuccess = function (event) {
  $('#delete-message').text('Successfuly deleted.')
  resetAllForms()
  clearModalAlert()
}

const deleteEntryFailure = function (event) {
  $('#delete-message').text('Something went wrong. Try again.')
}

const editEntrySuccess = function (event) {
  $('#edit-alert').text('You successfuly edited this entry!')
  resetAllForms()
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
  getTableData,
  refreshWelcome,
  introWelcome
}
