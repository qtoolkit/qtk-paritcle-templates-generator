var v = {
  angle:0,
  angleVariance:0,
  minRadius: 0,
  minRadiusVariance: 0,
  maxRadius: 100,
  maxRadiusVariance: 0,
  particleLifespan: 0.20000000298023224,
  particleLifespanVariance: 0.8553000092506409,
  radialAccelVariance: 0,
  radialAcceleration: -380,
  rotatePerSecond: 0,
  rotatePerSecondVariance: 0,
  rotationEnd: 0,
  rotationEndVariance: 0,
  rotationStart: 0,
  rotationStartVariance: 0,
  speed: 128,
  speedVariance: 6.579999923706055,
  tangentialAccelVariance: 0,
  tangentialAcceleration: -144.74000549316406,
  finishParticleSize: 0,
  finishParticleSizeVariance: 0
};

function gen(json) {
	for(var key in json) {
		if(key.indexOf("Variance") >= 0) continue;
		var secondKey = key + "Variance";
		if(key.indexOf("Acceleration") >  0) {
			secondKey = key.replace("Acceleration", "AccelVariance"); 
		}
		console.log("if(json." + key + " !== undefined){");
		console.log('	item = {');
		console.log('		type:"range", ');
		console.log('		name:"' + key + '", ');
		console.log('		converter:"'+key+'", ');
		console.log('		path:"' + key +'", ');
		console.log('		value:{first:json.' + key +  ", second:json." + secondKey + "}");
		console.log('	};');
		console.log('	out.push(item);');
		console.log("}");
	}
}

gen(v);

