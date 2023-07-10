import { SECRET_API_KEY } from '$env/static/private';

export async function load() {
	try {
		const response = await fetch('http://www.boredapi.com/api/activity/');
		const data = await response.json();
		console.log("server data:", data);
		return data;
	} catch (error) {
		console.error(error);
	}
}