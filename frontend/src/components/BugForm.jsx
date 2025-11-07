import React, { useState } from 'react';
import { createBug } from '../api/bugsApi';
export default function BugForm({ onCreated }) {
  const [title,setTitle]=useState('');
  const [error,setError]=useState(null);
  const handleSubmit=async e=>{
    e.preventDefault();
    if (title.trim().length<3) return setError('title must be at least 3 chars');
    try{ const created = await createBug({ title }); setTitle(''); setError(null); onCreated && onCreated(created); }catch(e){ setError('Failed to create'); }
  };
  return (<form onSubmit={handleSubmit}><input placeholder="Bug title" value={title} onChange={e=>setTitle(e.target.value)} /><button>Report</button>{error && <div role="alert">{error}</div>}</form>);
}
