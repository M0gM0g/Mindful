'use strict'
const authEvents = require('./events')
const authUi = require('./ui')
// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
//
// $(function () {
//   $('[data-toggle="popover"]').popover()
// })
//
// $('.popover-dismiss').popover({
//   trigger: 'focus'
// })

$(document).ready(function () {
  $('#reset, #reset1, #reset2, #reset3, #reset4, #reset5, #reset6, #reset7, #reset8, #reset9').click(function () {
    $('input').val('')
  })
})

// $('#tableMenu a').click(function (e) {
//   e.preventDefault() // cancel the link behaviour
//   const selText = $(this).text()
//   $('#tableButton').text(selText)
// })

$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})

$('#come-back, #intro, #intro2, .message-main, #edit-form').hide()
$('#sign-out, .get-entries-view, #exit-entries').hide()
$('#change-password, #change-password-button').hide()
$('#entry-button, #delete-id-form').hide()
$('#get-entries, #delete-entry-button, #edit-button').hide()
// $('#submit-delete').on('click', authEvents.onDeleteEntry)
$(() => {
  $('#sign-up-form').on('submit', authEvents.onSignUp)
  $('#sign-in-form').on('submit', authEvents.onSignIn)
  $('#sign-out').on('click', authEvents.onSignOut)
  $('#change-password').on('submit', authEvents.onChangePassword)
  $('#entry').on('submit', authEvents.onCreateEntry)
  $('#get-entries').on('click', authEvents.onGetEntries)
  $('#delete-id-form').on('submit', authEvents.onDeleteEntry)
  $('#edit-form').on('submit', authEvents.onEditEntry)
  $('.cancelbtn').on('click', authUi.resetAllForms)
  $('#reset4, #reset3, #reset2, #reset, #reset5').on('click', authUi.clearModalAlert)
  $('#exit-entries').on('click', authUi.exitEntries)
  // $('#reset7').on('click', authEvents.onGetEntries)
  // $('#tableMenu a').on('click', authUi.getTableData)
  // $('#exit-entries').on('click', authUi.clearModal)
})
