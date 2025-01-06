import { test, vi, expect, afterEach, Mock } from 'vitest';
import { request } from '@/lib/request';
import { HttpMethod } from '@/constants/enums';

test('fetches data successfully from API', async () => {
  afterEach(() => {
    vi.clearAllMocks(); // Reset all mocked calls between tests
  });

  global.fetch = vi.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve('OK'),
    })
  ) as Mock;

  const data = {
    method: HttpMethod.POST,
    body: JSON.stringify({ email: 'test@test.com' }),
    headers: { 'content-type': 'application/json' },
  };

  const response = await request<string>(`forgot_password`, {
    ...data,
  });

  expect(response).toEqual('OK');
  // Check that fetch was called exactly once
  expect(fetch).toHaveBeenCalledTimes(1);
  expect(fetch).toHaveBeenCalledWith('forgot_password', {
    method: 'POST',
    body: '{"email":"test@test.com"}',
    headers: { 'content-type': 'application/json' },
  });
});
