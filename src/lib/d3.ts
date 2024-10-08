export interface Node {
	id: string;
	group: number;
	name: string;
	index: number;
}

export interface Link {
	source: string;
	target: string;
	value: number;
}

export interface ForceGraphOptions {
	nodeId?: (d: Node) => string;
	nodeGroup?: (d: Node) => number;
	nodeGroups?: number[];
	nodeTitle?: (d: Node) => string;
	nodeFill?: string;
	nodeStroke?: string;
	nodeStrokeWidth?: number;
	nodeStrokeOpacity?: number;
	nodeRadius?: number;
	nodeStrength?: number;
	linkSource?: (d: Link) => string;
	linkTarget?: (d: Link) => string;
	linkStroke?: string;
	linkStrokeOpacity?: number;
	linkStrokeWidth?: number | ((d: Link) => number);
	linkStrokeLinecap?: string;
	linkStrength?: number;
	colors?: string[];
	width?: number;
	height?: number;
	invalidation?: Promise<void>;
}
