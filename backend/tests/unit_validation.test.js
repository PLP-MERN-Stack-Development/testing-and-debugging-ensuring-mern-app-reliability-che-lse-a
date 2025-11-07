const { validateBugPayload } = require('../src/utils/validation');
test('valid payload passes', () => {
  const { valid, errors } = validateBugPayload({ title: 'Fix login' });
  expect(valid).toBe(true);
  expect(errors.length).toBe(0);
});
test('invalid payload fails', () => {
  const { valid, errors } = validateBugPayload({});
  expect(valid).toBe(false);
  expect(errors).toContain('title must be at least 3 characters');
});
