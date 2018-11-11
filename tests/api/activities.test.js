const request = require('supertest')

const server = require('../../server')

jest.mock('../../db', () => ({
  getActivity: (id) => Promise.resolve(
    {id: id, name: 'test activity', frequency: 'daily', level: 20}
  ),
  getActivities: () => Promise.resolve([
    {id: 1, name: 'Running', frequency: 'daily', level: 2},
    {id: 2, name: 'TV', frequency: 'daily', level: 10},
    {id: 3, name: 'Crafts', frequency: 'weekly', level: 5}
  ]),
  addActivity: () => Promise.resolve(
    {id: 4, name: 'testHobby', frequency: 'monthly', level: 4}
  )
}))

test('/activities returns all activities', () => {
  const expected = 3
  return request(server)
    .get('/activities')
    .expect('Content-Type', /json/)
    .expect(200)
    .then(res => {
      expect(res.body.activities.length).toBe(expected)
    })
    .catch(err => {
      expect(err).toBeFalsy()
    })
})

test('/activities/:id returns an activity by ID', () => {
  const expected = 'daily'
  return request(server)
    .get('/activities/15')
    .expect('Content-Type', /json/)
    .expect(200)
    .then(res => {
      expect(res.body.activity.id).toBe(15)
      expect(res.body.activity.frequency).toBe(expected)
    })
    .catch(err => {
      expect(err).toBeFalsy()
    })
})

test('addActivity creates new activity', () => {
  const expected = 4
  return request(server)
    .post('/activities/create')
    .send({id: 4, name: 'testHobby', frequency: 'monthly', level: 4})
    .expect('Content-Type', /json/)
    .expect(200)
    .then(res => {
      expect(res.body.activity.id).toBe(expected)
    })
    .catch(err => {
      expect(err).toBeFalsy()
    })
})
