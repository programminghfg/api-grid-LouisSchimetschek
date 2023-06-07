<script>
	import dummydata from '$lib/dummydata.js';
	import MovieCard from '$lib/components/MovieCard.svelte';

	let movies = dummydata;
	console.log(movies);
</script>

<h1>Popular Movies</h1>

<div class="movie-grid">
	{#each movies as movieData}
		<MovieCard movie={movieData} />
	{/each}
</div>

<style>
	.movie-grid {
		margin-top: 32px;
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
		gap: 16px;
	}
</style>
