import { render, screen, fireEvent } from '@testing-library/react';
import BugForm from '../components/BugForm';
import * as api from '../api/bugsApi';
jest.mock('../api/bugsApi');
test('shows validation error', ()=>{
  render(<BugForm />);
  fireEvent.change(screen.getByPlaceholderText('Bug title'), { target: { value: 'a' } });
  fireEvent.click(screen.getByText('Report'));
  expect(screen.getByRole('alert').textContent).toMatch(/at least 3/);
});
test('calls API when valid', async ()=>{
  api.createBug.mockResolvedValue({ _id:'1', title:'Fix' });
  const onCreated = jest.fn();
  render(<BugForm onCreated={onCreated} />);
  fireEvent.change(screen.getByPlaceholderText('Bug title'), { target: { value: 'Fix login' } });
  fireEvent.click(screen.getByText('Report'));
  await Promise.resolve();
  expect(api.createBug).toHaveBeenCalled();
  expect(onCreated).toHaveBeenCalled();
});
