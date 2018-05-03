import { Object3D } from '../core/Object3D.js';
import { MeshBasicMaterial } from "../materials/MeshBasicMaterial";
import { TrianglesDrawMode } from "../constants";
import { BoxBufferGeometry } from "../geometries/BoxGeometry";

function Building( width, height, depth, levels ) {

	Object3D.call( this );

	this.type = 'Building';

	this.parameters = {
		width: width,
		height: height,
		depth: depth,
		levels: levels
	};

	this.parameters.levels = Math.floor( levels ) || 1;

	this.geometry = new BoxBufferGeometry(
		this.parameters.width,
		this.parameters.height,
		this.parameters.depth,
		1,
		this.parameters.levels,
		1 );
	this.material = new MeshBasicMaterial( { color: Math.random() * 0xffffff } );

	this.drawMode = TrianglesDrawMode;

}

Building.prototype = Object.assign( Object.create( Object3D.prototype ), {

	constructor: Building,

	isBuilding: true

} );

export { Building };
