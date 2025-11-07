import React, { useEffect, useState } from 'react';
import { fetchBugs } from './api/bugsApi';
import BugForm from './components/BugForm';
export default function App(){
  const [bugs,setBugs]=useState([]);
  const [error,setError]=useState(null);
  const load = async ()=>{
    try{ const res = await fetchBugs(); setBugs(res); }catch(e){ setError('Failed to load'); }
  };
  useEffect(()=>{ load(); },[]);
  return (<div style={{padding:20}}>
    <h1>Bug Tracker</h1>
    <BugForm onCreated={b=>setBugs(prev=>[b,...prev])} />
    {error && <div role="alert">{error}</div>}
    <ul>{bugs.length===0? <li>No bugs yet</li> : bugs.map(b=> <li key={b._id}>{b.title} - {b.status || 'open'}</li>)}</ul>
  </div>);
}
