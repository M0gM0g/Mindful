'use strict'
const authEvents = require('./events')
const authUi = require('./ui')

$(document).ready(function () {
  $('#reset, #reset1, #reset2, #reset3, #reset4, #reset5, #reset6, #reset7, #reset8, #reset9').click(function () {
    $('input').val('')
  })
})

$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})

$('#come-back, #intro, #intro2, .message-main, #edit-form, #get-info').hide()
$('#sign-out, .get-entries-view, #exit-entries').hide()
$('#change-password, #change-password-button').hide()
$('#entry-button, #delete-id-form').hide()
$('#get-entries, #delete-entry-button, #edit-button').hide()

$(() => {
  $('#sign-up-form').on('submit', authEvents.onSignUp)
  $('#sign-in-form').on('submit', authEvents.onSignIn)
  $('#sign-out').on('click', authEvents.onSignOut)
  $('#change-password').on('submit', authEvents.onChangePassword)
  $('#entry').on('submit', authEvents.onCreateEntry)
  $('#get-entries').on('click', authEvents.onGetEntries)
  // $('.delete-entry').on('submit', authEvents.onDeleteEntry)
  $('#edit-form').on('submit', authEvents.onEditEntry)
  $('.cancelbtn').on('click', authUi.resetAllForms)
  $('#reset4, #reset3, #reset2, #reset, #reset5').on('click', authUi.clearModalAlert)
  $('#exit-entries').on('click', authUi.exitEntries)
  $('#reset7').on('click', authEvents.onGetEntries)
  $('.get-entries-view').on('submit', '.delete-entry', authEvents.onDeleteEntry)
})
