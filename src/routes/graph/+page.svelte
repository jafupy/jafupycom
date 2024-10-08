<script lang="ts">
	import { onMount } from 'svelte';
	import * as d3 from 'd3';

	let svg: any;

	// Example node and link data
	let nodes = [
		{ id: 'A', group: 1 },
		{ id: 'B', group: 1 },
		{ id: 'C', group: 2 },
		{ id: 'D', group: 2 },
		{ id: 'E', group: 3 },
		{ id: 'f', group: 1 },
		{ id: 'g', group: 1 },
		{ id: 'h', group: 2 },
		{ id: 'i', group: 2 },
		{ id: 'j', group: 3 },
		{ id: 'k', group: 1 },
		{ id: 'l', group: 1 },
		{ id: 'm', group: 2 },
		{ id: 'n', group: 2 },
		{ id: 'o', group: 3 },
		{ id: 'p', group: 1 },
		{ id: 'q', group: 1 },
		{ id: 'r', group: 2 },
		{ id: 's', group: 2 },
		{ id: 't', group: 3 },
		{ id: 'u', group: 1 },
		{ id: 'v', group: 1 },
		{ id: 'w', group: 2 },
		{ id: 'x', group: 2 },
		{ id: 'y', group: 3 },
	];

	let links = [
		{ source: 'A', target: 'B' },
		{ source: 'A', target: 'C' },
		{ source: 'B', target: 'D' },
		{ source: 'C', target: 'D' },
		{ source: 'D', target: 'E' },
		{ source: 'E', target: 'g' },
		{ source: 'h', target: 'q' },
		{ source: 'x', target: 'p' },
		{ source: 'x', target: 'f' },
		{ source: 'B', target: 'D' },
		{ source: 'D', target: 'i' },
		{ source: 'D', target: 'h' },
		{ source: 'q', target: 'i' },
		{ source: 'q', target: 'A' },
		{ source: 'g', target: 'A' },
	];

	// Node styling
	const nodeRadius = 7.5;
	const linkColor = '#dce1de33';
	const nodeColor = '#dce1de';
	const hoverNodeColor = '#cb8b8c'; // Color when node is hovered
	const labelColor = '#dce1de80';

	onMount(() => {
		const width = 800;
		const height = 600;

		// Create simulation with forces
		const simulation = d3
			//@ts-ignore
			.forceSimulation(nodes)
			.force(
				'link',
				d3
					.forceLink(links)
					//@ts-ignore
					.id((d) => d.id)
					.distance(24),
			)
			.force('charge', d3.forceManyBody().strength(-200))
			.force('x', d3.forceX())
			.force('y', d3.forceY())
			.force('center', d3.forceCenter(width / 2, height / 2));
		// .force('collide', d3.forceCollide(nodeRadius * 2.5 + 5)); // Collision force to avoid overlap

		// Create zoom behaviour
		const zoom = d3.zoom().on('zoom', (event) => {
			d3.select(svg).selectAll('g').attr('transform', event.transform);

			// Adjust label visibility based on zoom scale
			const scale = event.transform.k;
			if (scale > 0.7) {
				d3.selectAll('text').transition().style('opacity', 1);
			} else {
				d3.selectAll('text').transition().style('opacity', 0);
			}
		});

		// Apply zoom to the SVG
		d3.select(svg).call(zoom);

		// Append links (edges) to the SVG
		const link = d3
			.select(svg)
			.append('g')
			.attr('stroke', linkColor)
			.attr('stroke-opacity', 0.6)
			.selectAll('line')
			.data(links)
			.join('line')
			.attr('stroke-width', 2);

		// Append nodes (circles) to the SVG
		const node = d3
			.select(svg)
			.append('g')
			.selectAll('circle')
			.data(nodes)
			.join('circle')
			.attr('r', nodeRadius)
			.attr('fill', nodeColor)
			//@ts-ignore
			.call(drag(simulation))
			.on('mouseover', handleMouseOver)
			.on('mouseout', handleMouseOut);

		// Add labels below the nodes
		const label = d3
			.select(svg)
			.append('g')
			.selectAll('text')
			.data(nodes)
			.join('text')
			.attr('text-anchor', 'middle')
			.attr('class', 'text-sm')
			.attr('fill', labelColor)
			.attr('dy', 20) // Position labels below nodes
			.text((d) => d.id);

		// Simulation tick updates positions
		simulation.on('tick', () => {
			link
				.attr('x1', (d) => d.source.x)
				.attr('y1', (d) => d.source.y)
				.attr('x2', (d) => d.target.x)
				.attr('y2', (d) => d.target.y);

			node.attr('cx', (d) => d.x).attr('cy', (d) => d.y);

			label.attr('x', (d) => d.x).attr('y', (d) => d.y);
		});

		// Drag functionality for nodes
		function drag(simulation) {
			return d3
				.drag()
				.on('start', (event, d) => {
					if (!event.active) simulation.alphaTarget(0.3).restart();
					d.fx = d.x;
					d.fy = d.y;
				})
				.on('drag', (event, d) => {
					d.fx = event.x;
					d.fy = event.y;
				})
				.on('end', (event, d) => {
					if (!event.active) simulation.alphaTarget(0);
					d.fx = null;
					d.fy = null;
				});
		}

		// Handle mouse over event
		function handleMouseOver(event, d) {
			// Highlight node
			d3.select(this)
				.transition()
				.duration(300)
				.attr('r', nodeRadius * 1.5) // Increase size
				.attr('fill', hoverNodeColor); // Change color

			// Highlight connected links
			const connectedLinks = link.filter((l) => l.source === d || l.target === d);
			connectedLinks.transition().duration(300).attr('stroke', hoverNodeColor);

			// Fade out non-connected nodes
			node
				.filter(
					(n) => n !== d && !connectedLinks.data().some((l) => l.source === n || l.target === n),
				)
				.transition()
				.duration(300)
				.attr('fill', '#dce1de33')
				.attr('r', nodeRadius); // Reset size

			// Move labels of hovered node
			d3.select(label.nodes()[nodes.indexOf(d)])
				.transition()
				.duration(300)
				.attr('dy', 30)
				.attr('fill', '#dce1de'); // Move label down
		}

		// Handle mouse out event
		function handleMouseOut(event, d) {
			// Reset node
			d3.select(this)
				.transition()
				.duration(300)
				.attr('r', nodeRadius) // Reset size
				.attr('fill', nodeColor); // Reset color

			// Reset connected links
			link.transition().duration(300).attr('stroke', linkColor);

			// Reset non-connected nodes
			node.transition().duration(300).attr('fill', nodeColor).attr('r', nodeRadius); // Reset size

			// Move labels back to original position
			d3.select(label.nodes()[nodes.indexOf(d)]).transition().duration(300).attr('dy', 20); // Move label back up
		}
	});
</script>

<!-- Main SVG Container -->
<svg bind:this={svg} width="800" height="600"></svg>
