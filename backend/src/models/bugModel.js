    // Minimal in-memory model for tests/demo
    let data = [];
    const { v4: uuidv4 } = require('uuid');
    module.exports = {
  create: async (payload) => { const item = { _id: uuidv4(), ...payload, createdAt: new Date() }; data.unshift(item); return item; },
  find: async () => data,
  findByIdAndUpdate: async (id, payload, opts) => { const i = data.findIndex(x=>x._id===id); if (i===-1) return null; data[i] = { ...data[i], ...payload }; return data[i]; },
  findByIdAndDelete: async (id) => { const i = data.findIndex(x=>x._id===id); if (i===-1) return null; const [del] = data.splice(i,1); return del; },
  __reset: () => { data = []; }
};
