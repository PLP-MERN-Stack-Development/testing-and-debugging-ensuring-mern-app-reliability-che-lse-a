function validateBugPayload(payload) {
  const errors = [];
  if (!payload || typeof payload !== 'object') errors.push('invalid payload');
  if (!payload.title || payload.title.trim().length < 3) errors.push('title must be at least 3 characters');
  return { valid: errors.length === 0, errors };
}
module.exports = { validateBugPayload };
