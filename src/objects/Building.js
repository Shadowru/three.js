import { Object3D } from '../core/Object3D.js';

function Building() {

	Object3D.call( this );

	this.type = 'Building';

}

Building.prototype = Object.assign( Object.create( Object3D.prototype ), {

	constructor: Building,

	isBuilding: true

} );
