exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('activities').del()
    .then(function () {
      // Inserts seed entries
      return knex('activities').insert([
        {id: 1, name: 'Running', frequency: 'daily', level: 2},
        {id: 2, name: 'TV', frequency: 'daily', level: 10},
        {id: 3, name: 'Crafts', frequency: 'weekly', level: 5}
      ])
    })
}
