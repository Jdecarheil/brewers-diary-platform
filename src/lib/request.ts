interface Request {
	url: string;
	method?: string;
	body: any;
}

export const request = async (request: Request) => {
	const { url, method, body } = request;
	try {
		const response = await fetch(url, {
			headers: {},
			method: method,
			body: body,
		});
		if (response.ok) {
			return response;
		} else {
			console.log(
				`Request failed with code: ${response.status} and message: ${response.statusText}`,
			);
		}
	} catch (error) {
		console.log("There was an error during request", error);
	}
};
