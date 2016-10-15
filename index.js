
var fs = require("fs");
var plist = require('plist');

if(process.argv.length < 3) {
	console.log("Usage: node index.js [file name]");
	console.log("eg: node index.js cocos2d/Comet.plist");
}
else{
	var fileName = process.argv[2];
	fs.readFile(fileName, "utf-8", function(err, data) {
		var val = plist.parse(data.toString());
		gen(val);
	});
}

function gen(json) {
	var startColor = genStartColor(json);
	var endColor = genFinishColor(json);
	var range = genRange(json);
	var basic = genBasic(json);	
	var image = genImage(json);	
	var template = [
		{title:"Basic", propsDesc:basic},
		{title:"Start Color", propsDesc:startColor},
		{title:"End Color", propsDesc:endColor},
		{title:"Range", propsDesc:range},
		{title:"Image", propsDesc:image},
	];
	console.log(JSON.stringify(template, null, "\t"));
}
	
function genImage(json) {
	var out = [];
	var item = null;

	if(json.textureFileName !== undefined){
		item = {
			type:"text", 
			name:"textureFileName", 
			converter:"textureFileName", 
			path:"textureFileName", 
			value:json.textureFileName
		};
		out.push(item);
	}
	
	if(json.textureImageData !== undefined){
		item = {
			type:"text", 
			name:"textureImageData", 
			converter:"textureImageData", 
			path:"textureImageData", 
			value:json.textureImageData
		};
		out.push(item);
	}

	return out;
}

function genBasic(json) {
	var out = [];
	var item = null;

	if(json.blendFuncDestination !== undefined){
		item = {
			type:"number", 
			name:"blendFuncDestination", 
			converter:"blendFuncDestination", 
			path:"blendFuncDestination", 
			value:json.blendFuncDestination
		};
		out.push(item);
	}
	if(json.blendFuncSource !== undefined){
		item = {
			type:"number", 
			name:"blendFuncSource", 
			converter:"blendFuncSource", 
			path:"blendFuncSource", 
			value:json.blendFuncSource
		};
		out.push(item);
	}
	if(json.duration !== undefined){
		item = {
			type:"number", 
			name:"duration", 
			converter:"duration", 
			path:"duration", 
			value:json.duration
		};
		out.push(item);
	}
	if(json.emitterType !== undefined){
		item = {
			type:"number", 
			name:"emitterType", 
			converter:"emitterType", 
			path:"emitterType", 
			value:json.emitterType
		};
		out.push(item);
	}
	if(json.maxParticles !== undefined){
		item = {
			type:"number", 
			name:"maxParticles", 
			converter:"maxParticles", 
			path:"maxParticles", 
			value:json.maxParticles
		};
		out.push(item);
	}
	if(json.gravityx !== undefined){
		item = {
			type:"number", 
			name:"gravityx", 
			converter:"gravityx", 
			path:"gravityx", 
			value:json.gravityx
		};
		out.push(item);
	}
	if(json.gravityy !== undefined){
		item = {
			type:"number", 
			name:"gravityy", 
			converter:"gravityy", 
			path:"gravityy", 
			value:json.gravityy
		};
		out.push(item);
	}
	if(json.sourcePositionVariancex !== undefined){
		item = {
			type:"number", 
			name:"sourcePositionVariancex", 
			converter:"sourcePositionVariancex", 
			path:"sourcePositionVariancex", 
			value:json.sourcePositionVariancex
		};
		out.push(item);
	}
	if(json.sourcePositionVariancey !== undefined){
		item = {
			type:"number", 
			name:"sourcePositionVariancey", 
			converter:"sourcePositionVariancey", 
			path:"sourcePositionVariancey", 
			value:json.sourcePositionVariancey
		};
		out.push(item);
	}
	if(json.sourcePositionx !== undefined){
		item = {
			type:"number", 
			name:"sourcePositionx", 
			converter:"sourcePositionx", 
			path:"sourcePositionx", 
			value:json.sourcePositionx
		};
		out.push(item);
	}
	if(json.sourcePositiony !== undefined){
		item = {
			type:"number", 
			name:"sourcePositiony", 
			converter:"sourcePositiony", 
			path:"sourcePositiony", 
			value:json.sourcePositiony
		};
		out.push(item);
	}

	return out;
}
/*
  gravityx: 0,
  gravityy: 0,
  sourcePositionVariancex: 7,
  sourcePositionVariancey: 7,
  sourcePositionx: 161.4199981689453,
  sourcePositiony: 232.94000244140625,
  maxParticles: 500,

*/

function genStartColor(json) {
	var out = [];
	var item = null;
	if(json.startColorAlpha !== undefined){
		item = {
			type:"number", 
			name:"startColorAlpha", 
			converter:"color", 
			path:"startColorAlpha", 
			value:json.startColorAlpha
		};
		out.push(item);
	}
	if(json.startColorBlue !== undefined){
		item = {
			type:"number", 
			name:"startColorBlue", 
			converter:"color", 
			path:"startColorBlue", 
			value:json.startColorBlue
		};
		out.push(item);
	}
	if(json.startColorGreen !== undefined){
		item = {
			type:"number", 
			name:"startColorGreen", 
			converter:"color", 
			path:"startColorGreen", 
			value:json.startColorGreen
		};
		out.push(item);
	}
	if(json.startColorRed !== undefined){
		item = {
			type:"number", 
			name:"startColorRed", 
			converter:"color", 
			path:"startColorRed", 
			value:json.startColorRed
		};
		out.push(item);
	}
	if(json.startColorVarianceAlpha !== undefined){
		item = {
			type:"number", 
			name:"startColorVarianceAlpha", 
			converter:"color", 
			path:"startColorVarianceAlpha", 
			value:json.startColorVarianceAlpha
		};
		out.push(item);
	}
	if(json.startColorVarianceBlue !== undefined){
		item = {
			type:"number", 
			name:"startColorVarianceBlue", 
			converter:"color", 
			path:"startColorVarianceBlue", 
			value:json.startColorVarianceBlue
		};
		out.push(item);
	}
	if(json.startColorVarianceGreen !== undefined){
		item = {
			type:"number", 
			name:"startColorVarianceGreen", 
			converter:"color", 
			path:"startColorVarianceGreen", 
			value:json.startColorVarianceGreen
		};
		out.push(item);
	}
	if(json.startColorVarianceRed !== undefined){
		item = {
			type:"number", 
			name:"startColorVarianceRed", 
			converter:"color", 
			path:"startColorVarianceRed", 
			value:json.startColorVarianceRed
		};
		out.push(item);
	}

	return out;
};

function genFinishColor(json) {
	var out = [];
	var item = null;
	
	if(json.finishColorAlpha !== undefined){
		item = {
			type:"number", 
			name:"finishColorAlpha", 
			converter:"color", 
			path:"finishColorAlpha", 
			value:json.finishColorAlpha
		};
		out.push(item);
	}
	if(json.finishColorBlue !== undefined){
		item = {
			type:"number", 
			name:"finishColorBlue", 
			converter:"color", 
			path:"finishColorBlue", 
			value:json.finishColorBlue
		};
		out.push(item);
	}
	if(json.finishColorGreen !== undefined){
		item = {
			type:"number", 
			name:"finishColorGreen", 
			converter:"color", 
			path:"finishColorGreen", 
			value:json.finishColorGreen
		};
		out.push(item);
	}
	if(json.finishColorRed !== undefined){
		item = {
			type:"number", 
			name:"finishColorRed", 
			converter:"color", 
			path:"finishColorRed", 
			value:json.finishColorRed
		};
		out.push(item);
	}
	if(json.finishColorVarianceAlpha !== undefined){
		item = {
			type:"number", 
			name:"finishColorVarianceAlpha", 
			converter:"color", 
			path:"finishColorVarianceAlpha", 
			value:json.finishColorVarianceAlpha
		};
		out.push(item);
	}
	if(json.finishColorVarianceBlue !== undefined){
		item = {
			type:"number", 
			name:"finishColorVarianceBlue", 
			converter:"color", 
			path:"finishColorVarianceBlue", 
			value:json.finishColorVarianceBlue
		};
		out.push(item);
	}
	if(json.finishColorVarianceGreen !== undefined){
		item = {
			type:"number", 
			name:"finishColorVarianceGreen", 
			converter:"color", 
			path:"finishColorVarianceGreen", 
			value:json.finishColorVarianceGreen
		};
		out.push(item);
	}
	if(json.finishColorVarianceRed !== undefined){
		item = {
			type:"number", 
			name:"finishColorVarianceRed", 
			converter:"color", 
			path:"finishColorVarianceRed", 
			value:json.finishColorVarianceRed
		};
		out.push(item);
	}

	return out;
};
	

function genRange(json) {
	var out = [];
	var item = null;
	
	if(json.angle !== undefined){
		item = {
			type:"range", 
			name:"startParticleSize", 
			converter:"startParticleSize", 
			path:"startParticleSize", 
			value:{first:json.startParticleSize, second:json.startParticleSizeVariance}
		};
		out.push(item);
	}

	if(json.angle !== undefined){
		item = {
			type:"range", 
			name:"angle", 
			converter:"angle", 
			path:"angle", 
			value:{first:json.angle, second:json.angleVariance}
		};
		out.push(item);
	}
	if(json.minRadius !== undefined){
		item = {
			type:"range", 
			name:"minRadius", 
			converter:"minRadius", 
			path:"minRadius", 
			value:{first:json.minRadius, second:json.minRadiusVariance}
		};
		out.push(item);
	}
	if(json.maxRadius !== undefined){
		item = {
			type:"range", 
			name:"maxRadius", 
			converter:"maxRadius", 
			path:"maxRadius", 
			value:{first:json.maxRadius, second:json.maxRadiusVariance}
		};
		out.push(item);
	}
	if(json.particleLifespan !== undefined){
		item = {
			type:"range", 
			name:"particleLifespan", 
			converter:"particleLifespan", 
			path:"particleLifespan", 
			value:{first:json.particleLifespan, second:json.particleLifespanVariance}
		};
		out.push(item);
	}
	if(json.radialAcceleration !== undefined){
		item = {
			type:"range", 
			name:"radialAcceleration", 
			converter:"radialAcceleration", 
			path:"radialAcceleration", 
			value:{first:json.radialAcceleration, second:json.radialAccelVariance}
		};
		out.push(item);
	}
	if(json.rotatePerSecond !== undefined){
		item = {
			type:"range", 
			name:"rotatePerSecond", 
			converter:"rotatePerSecond", 
			path:"rotatePerSecond", 
			value:{first:json.rotatePerSecond, second:json.rotatePerSecondVariance}
		};
		out.push(item);
	}
	if(json.rotationEnd !== undefined){
		item = {
			type:"range", 
			name:"rotationEnd", 
			converter:"rotationEnd", 
			path:"rotationEnd", 
			value:{first:json.rotationEnd, second:json.rotationEndVariance}
		};
		out.push(item);
	}
	if(json.rotationStart !== undefined){
		item = {
			type:"range", 
			name:"rotationStart", 
			converter:"rotationStart", 
			path:"rotationStart", 
			value:{first:json.rotationStart, second:json.rotationStartVariance}
		};
		out.push(item);
	}
	if(json.speed !== undefined){
		item = {
			type:"range", 
			name:"speed", 
			converter:"speed", 
			path:"speed", 
			value:{first:json.speed, second:json.speedVariance}
		};
		out.push(item);
	}
	if(json.tangentialAcceleration !== undefined){
		item = {
			type:"range", 
			name:"tangentialAcceleration", 
			converter:"tangentialAcceleration", 
			path:"tangentialAcceleration", 
			value:{first:json.tangentialAcceleration, second:json.tangentialAccelVariance}
		};
		out.push(item);
	}
	if(json.finishParticleSize !== undefined){
		item = {
			type:"range", 
			name:"finishParticleSize", 
			converter:"finishParticleSize", 
			path:"finishParticleSize", 
			value:{first:json.finishParticleSize, second:json.finishParticleSizeVariance}
		};
		out.push(item);
	}
	return out;
}
