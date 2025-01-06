export const request = async <T>(url: string, requestOp: RequestInit): Promise<T> => {
  try {
    const response = await fetch(url, requestOp);
    if (response.ok) {
      return await response.json();
    } else {
      if (response.status >= 400 && response.status < 500) throw new Error('Client error');
      if (response.status >= 500) throw new Error('Server error');

      throw new Error(response.statusText);
    }
  } catch (error) {
    throw new Error('Unknown error occured with fetch request');
  }
};
