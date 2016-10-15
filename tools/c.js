 var f = {
  finishColorAlpha: 1,
  finishColorBlue: 0,
  finishColorGreen: 1,
  finishColorRed: 1,
  finishColorVarianceAlpha: 0,
  finishColorVarianceBlue: 0,
  finishColorVarianceGreen: 0,
  finishColorVarianceRed: 0,
}

var s = {
  startColorAlpha: 1,
  startColorBlue: 0,
  startColorGreen: 0,
  startColorRed: 1,
  startColorVarianceAlpha: 0,
  startColorVarianceBlue: 0,
  startColorVarianceGreen: 0,
  startColorVarianceRed: 0,
  startParticleSize: 22,
  startParticleSizeVariance: 14,
};

function gen(json) {
	for(var key in json) {
		console.log("if(json." + key + " !== undefined){");
		console.log('	item = {');
		console.log('		type:"number", ');
		console.log('		name:"' + key + '", ');
		console.log('		converter:"color", ');
		console.log('		path:"' + key +'", ');
		console.log('		value:json.' + key);
		console.log('	};');
		console.log('	out.push(item);');
		console.log("}");
	}
}

gen(f);
