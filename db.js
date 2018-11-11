const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getUsers,
  getUser,
  addUser,
  updateUser,
  getActivities,
  getActivity,
  addActivity,
  updateActivity,
  deleteActivity
}

function getUsers (db = connection) {
  return db('users').select()
}

function getUser (id, db = connection) {
  return db('users').where('id', id).first()
}

function addUser (user, db = connection) {
  return db('users').insert(user).select()
}

function updateUser (id, user, db = connection) {
  return db('users').where('id', id).update(user).select()
}

function getActivities (db = connection) {
  return db('activities').select()
}

function getActivity (id, db = connection) {
  return db('activities').where('id', id).first()
}

function addActivity (activities, db = connection) {
  return db('activities').insert(activities).select()
}

function updateActivity (id, activities, db = connection) {
  return db('activities').where('id', id).update(activities).select()
}

function deleteActivity (id, db = connection) {
  return db('activities').where('id', id).delete()
}