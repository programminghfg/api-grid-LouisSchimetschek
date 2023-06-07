<script>
	import MovieCard from '$lib/components/MovieCard.svelte';
	import { dataset_dev } from 'svelte/internal';
	export let data;
	let movies = data.results;
	console.log(movies);
</script>

<h1>Popular Movies</h1>

<div class="movie-grid">
	{#if movies}
	{#each movies as movieData}
		<MovieCard movie={movieData} />
	{/each}
	{/if}
</div>

<style>
	.movie-grid {
		margin-top: 32px;
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
		gap: 16px;
	}
</style>
