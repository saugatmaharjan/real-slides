<script>
	export let data;
	export let activeSlideNumber = 1;
	$: activeSlideData = data.slides[activeSlideNumber - 1];
	console.log(data, activeSlideNumber, activeSlideData);
</script>

<div>
	<button on:click={() => (activeSlideNumber -= 1)} aria-label="Decrease the counter by one">
		Previous
	</button>
	<button on:click={() => (activeSlideNumber += 1)} aria-label="Decrease the counter by one">
		Next
	</button>
</div>
<div>{@html activeSlideData.content}</div>
<h1>Meta</h1>
<div>{@html activeSlideData.title}</div>
