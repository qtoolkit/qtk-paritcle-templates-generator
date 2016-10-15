 var b = {
   blendFuncDestination: 1,
  blendFuncSource: 770,
  duration: -1,
  emitterType: 0,
  maxParticles: 500,
  gravityx: 0,
  gravityy: 0,
  sourcePositionVariancex: 7,
  sourcePositionVariancey: 7,
  sourcePositionx: 161.4199981689453,
  sourcePositiony: 232.94000244140625,
 }

function gen(json) {
	for(var key in json) {
		console.log("if(json." + key + " !== undefined){");
		console.log('	item = {');
		console.log('		type:"number", ');
		console.log('		name:"' + key + '", ');
		console.log('		converter:"'+key+'", ');
		console.log('		path:"' + key +'", ');
		console.log('		value:json.' + key);
		console.log('	};');
		console.log('	out.push(item);');
		console.log("}");
	}
}

gen(b);
