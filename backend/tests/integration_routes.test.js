const request = require('supertest');
const app = require('../src/app');
const Bug = require('../src/models/bugModel');
beforeEach(() => { Bug.__reset && Bug.__reset(); });
test('POST /api/bugs creates', async () => {
  const res = await request(app).post('/api/bugs').send({ title: 'Bug A' });
  expect(res.statusCode).toBe(201);
  expect(res.body.title).toBe('Bug A');
});
test('GET /api/bugs lists', async () => {
  await request(app).post('/api/bugs').send({ title: 'B1' });
  const res = await request(app).get('/api/bugs');
  expect(res.statusCode).toBe(200);
  expect(Array.isArray(res.body)).toBe(true);
  expect(res.body.length).toBeGreaterThanOrEqual(1);
});
