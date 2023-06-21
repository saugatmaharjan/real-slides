<script lang="ts">
	import QRCode from 'qrcode';
	import { onMount } from 'svelte';

	onMount(() => {
		QRCode.toCanvas(
			document.getElementById('canvas'),
			'http://192.168.10.109:5173/participants-view',
			function (error) {
				if (error) console.error(error);
				console.log('success!');
			}
		);
	});
</script>

<canvas id="canvas" />
<h1>Hello from QRCode route</h1>
