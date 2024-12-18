export const request = <T>(url: string, requestOp: RequestInit): Promise<T> =>
  fetch(url, requestOp)
    .then((response) => {
      if (!response.ok) throw new Error(response.statusText);
      return response.json();
    })
    .catch((error) => {
      console.log('Http error: ', error);
    });
