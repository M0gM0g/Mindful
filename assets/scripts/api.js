'use strict'
const store = require('./store')
const config = require('./config')

const signUp = function (data) {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/sign-up',
    data: data
  })
}

const signIn = function (data) {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/sign-in',
    data: data
  })
}

const signOut = function () {
  return $.ajax({
    method: 'DELETE',
    url: config.apiUrl + '/sign-out',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const changePassword = function (data) {
  return $.ajax({
    method: 'PATCH',
    url: config.apiUrl + '/change-password',
    data: data,
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const createEntry = function (data) {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/entries',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    // contentType: 'application/json',
    data: data
  })
}

const getEntries = function (data) {
  return $.ajax({
    method: 'GET',
    url: config.apiUrl + '/entries',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: data
  })
}

const deleteEntry = function (data) {
  return $.ajax({
    method: 'DELETE',
    url: config.apiUrl + '/entries/' + data.entry.id,
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
    // data: data
  })
}

const editEntry = function (data) {
  return $.ajax({
    method: 'PATCH',
    url: config.apiUrl + '/entries/' + data.entry.id,
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    // contentType: 'application/json',
    data: data
  })
}

module.exports = {
  signUp,
  signIn,
  signOut,
  changePassword,
  createEntry,
  getEntries,
  deleteEntry,
  editEntry
}
