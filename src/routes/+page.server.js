import { SECRET_API_KEY } from '$env/static/private';

export async function load() {
	const response = await fetch(
		'https://api.themoviedb.org/3/trending/movie/day?api_key=' + SECRET_API_KEY
	);
	const json = await response.json();
	return json;
}