export const Fetch = {


	GET: async url => {
		const res = await fetch(url, {
			credentials: 'include',
		});

		const data = await res.json();
		return data;
	},



	POST: async (dataObject, url) => {
		console.log(dataObject);
		const res = await fetch(url, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			credentials: 'include',
			body: JSON.stringify(dataObject),
		});

		const data = await res.json();

		if (!res.ok) {
			return { error: 'Error!' };
		}

		return data;
	},



	PUT: async (dataObject, url) => {
		const res = await fetch(url, {
			method: 'PUT',
			headers: { 'Content-Type': 'application/json' },
			credentials: 'include',
			body: JSON.stringify(dataObject),
		});

		const data = await res.json();

		if (!res.ok) {
			return { error: 'Error!' };
		}

		return data;
	},



	DELETE: async (dataObject, url) => {
		const res = await fetch(url, {
			method: 'DELETE',
			headers: { 'Content-Type': 'application/json' },
			credentials: 'include',
			body: JSON.stringify(dataObject),
		});

		const data = await res.json();

		if (!res.ok) {
			return { error: 'Error!' };
		}

		return data;
	},



};
