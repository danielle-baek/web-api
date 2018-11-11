exports.up = function (knex, Promise) {
  return knex.schema.createTable('activities', t => {
    t.increments('id').primary()
    t.string('name')
    t.string('frequency')
    t.integer('level')
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('activities')
}
