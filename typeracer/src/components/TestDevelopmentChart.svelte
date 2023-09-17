<script lang="ts">
	import { onMount, afterUpdate } from 'svelte';
	import * as d3 from 'd3';

	let chartData = [];

	const margin = { top: 20, right: 30, bottom: 50, left: 50 };
	const width = 600;
	const height = 600;

	let svg;

	async function fetchData() {
		try {
			const username = localStorage.getItem('username') as string;
			const token = localStorage.getItem('token') as string;
			if (username && token) {
				const response = await fetch('/scores?username=' + username, {
					method: 'GET',
					headers: {
						'Content-Type': 'application/json',
						Authorization: token
					}
				});
				const data = await response.json();
				console.log(data);
				if (data && data.length > 0) {
					chartData = data;
					updateChart();
				}
			}
		} catch (error) {
			console.error('Error fetching data:', error);
		}
	}

	onMount(() => {
		svg = d3
			.select('#chart-container')
			.append('svg')
			.attr('width', width + margin.left + margin.right)
			.attr('height', height + margin.top + margin.bottom)
			.append('g')
			.attr('transform', `translate(${margin.left},${margin.top})`);

		fetchData();
	});

	afterUpdate(() => {
		fetchData();
	});

	function updateChart() {
		const xScale = d3.scaleLinear().domain([1, chartData.length]).range([0, width]);

		const yScale = d3
			.scaleLinear()
			.domain([0, d3.max(chartData, (d) => d.wpm)])
			.nice()
			.range([height, 0]);

		svg.selectAll('*').remove();

		svg
			.selectAll('.line')
			.data(chartData.slice(1))
			.enter()
			.append('line')
			.attr('class', 'line')
			.attr('x1', (d, i) => xScale(i + 1))
			.attr('y1', (d, i) => yScale(chartData[i].wpm))
			.attr('x2', (d, i) => xScale(i + 2))
			.attr('y2', (d) => yScale(d.wpm));

		svg
			.append('g')
			.attr('class', 'x-axis')
			.attr('transform', `translate(0,${height})`)
			.call(d3.axisBottom(xScale));

		svg.append('g').attr('class', 'y-axis').call(d3.axisLeft(yScale));
		svg
			.append('text')
			.attr('x', width / 2)
			.attr('y', height + margin.bottom)
			.style('text-anchor', 'middle')
			.text('Test Number');

		svg
			.append('text')
			.attr('x', -height / 2)
			.attr('y', -margin.left)
			.attr('dy', '1em')
			.style('text-anchor', 'middle')
			.attr('transform', 'rotate(-90)')
			.text('WPM');

		svg
			.selectAll('.dot')
			.data(chartData)
			.enter()
			.append('circle')
			.attr('class', 'dot')
			.attr('cx', (d, i) => xScale(i + 1))
			.attr('cy', (d) => yScale(d.wpm))
			.attr('r', 4);
	}
</script>

<div id="chart-container" />
