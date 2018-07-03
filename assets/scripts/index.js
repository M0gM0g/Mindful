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
  $('#reset, #reset1, #reset2, #reset3, #reset4, #reset5').click(function () {
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

$('#sign-out, .get-entries-view, #exit-entries').hide()
$('#change-password, #change-password-button').hide()
$('#entry-button').hide()
$('#get-entries, #delete-entry-button, #edit-button').hide()

$(() => {
  $('#sign-up-form').on('submit', authEvents.onSignUp)
  $('#sign-in-form').on('submit', authEvents.onSignIn)
  $('#sign-out').on('click', authEvents.onSignOut)
  $('#change-password').on('submit', authEvents.onChangePassword)
  $('#entry').on('submit', authEvents.onCreateEntry)
  $('#get-entries').on('click', authEvents.onGetEntries)
  $('#delete').on('submit', authEvents.onDeleteEntry)
  $('#edit').on('submit', authEvents.onEditEntry)
  $('.cancelbtn').on('click', authUi.resetAllForms)
  $('.cancelbtn').on('click', authUi.clearModalAlert)
  $('#exit-entries').on('click', authUi.exitEntries)
  $('#tableMenu a').on('click', authUi.getTableData)
  // $('#exit-entries').on('click', authUi.clearModal)
})
