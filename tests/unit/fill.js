﻿define([
	"intern!object", "intern/chai!assert", "../utils/testUtils", "gfx/gfx"
], function (registerSuite, assert, tu) {
	var surface;
	tu.registerSuite({
		name: "Fill rule",
		setup: function () {
			surface = tu.createSurface(500, 500);
		},
		teardown: function () {
			tu.destroySurface(surface);
		},
		"fill": function () {

			var path = surface.createPath("");
			// form concentric circles
			var center = {x: 250, y: 250};
			for (var r = 200; r > 0; r -= 30) {
				// make two 180 degree arcs to form a circle
				var start = {x: center.x, y: center.y - r};
				var end = {x: center.x, y: center.y + r};
				path.moveTo(start).arcTo(r, r, 0, true, true, end).arcTo(r, r, 0, true, true, start).closePath();
			}
			// set visual attributes
			path.fill = "red";
			path.stroke = "black";

			/* jshint maxlen:100000, quotmark:single */
			tu.compare(surface, {
				svg: '<defs></defs><path fill="rgb(255, 0, 0)" fill-opacity="1" stroke="rgb(0, 0, 0)" stroke-opacity="1" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="4" path="" d="M 250 50A 200 200 0 1 1 250 450A 200 200 0 1 1 250 50ZM 250 80A 170 170 0 1 1 250 420A 170 170 0 1 1 250 80ZM 250 110A 140 140 0 1 1 250 390A 140 140 0 1 1 250 110ZM 250 140A 110 110 0 1 1 250 360A 110 110 0 1 1 250 140ZM 250 170A 80 80 0 1 1 250 330A 80 80 0 1 1 250 170ZM 250 200A 50 50 0 1 1 250 300A 50 50 0 1 1 250 200ZM 250 230A 20 20 0 1 1 250 270A 20 20 0 1 1 250 230Z" fill-rule="evenodd" stroke-dasharray="none"></path>',
				'canvas-nativedash': '["s","s","b","m",250,50,"be",303.0433,50,353.9141,71.0714,391.4214,108.5786,"be",428.9286,146.0859,450,196.9567,450,250,"be",450,303.0433,428.9286,353.9141,391.4214,391.4214,"be",353.9141,428.9286,303.0433,450,250,450,"be",196.9567,450,146.0859,428.9286,108.5786,391.4214,"be",71.0714,353.9141,50,303.0433,50,250,"be",50,196.9567,71.0714,146.0859,108.5786,108.5786,"be",146.0859,71.0714,196.9567,50,250,50,"c","m",250,80,"be",295.0868,80,338.327,97.9107,370.2082,129.7918,"be",402.0893,161.673,420,204.9132,420,250,"be",420,295.0868,402.0893,338.327,370.2082,370.2082,"be",338.327,402.0893,295.0868,420,250,420,"be",204.9132,420,161.673,402.0893,129.7918,370.2082,"be",97.9107,338.327,80,295.0868,80,250,"be",80,204.9132,97.9107,161.673,129.7918,129.7918,"be",161.673,97.9107,204.9132,80,250,80,"c","m",250,110,"be",287.1303,110,322.7399,124.75,348.9949,151.0051,"be",375.25,177.2601,390,212.8697,390,250,"be",390,287.1303,375.25,322.7399,348.9949,348.9949,"be",322.7399,375.25,287.1303,390,250,390,"be",212.8697,390,177.2601,375.25,151.0051,348.9949,"be",124.75,322.7399,110,287.1303,110,250,"be",110,212.8697,124.75,177.2601,151.0051,151.0051,"be",177.2601,124.75,212.8697,110,250,110,"c","m",250,140,"be",279.1738,140,307.1527,151.5893,327.7817,172.2183,"be",348.4107,192.8473,360,220.8262,360,250,"be",360,279.1738,348.4107,307.1527,327.7817,327.7817,"be",307.1527,348.4107,279.1738,360,250,360,"be",220.8262,360,192.8473,348.4107,172.2183,327.7817,"be",151.5893,307.1527,140,279.1738,140,250,"be",140,220.8262,151.5893,192.8473,172.2183,172.2183,"be",192.8473,151.5893,220.8262,140,250,140,"c","m",250,170,"be",271.2173,170,291.5656,178.4285,306.5685,193.4315,"be",321.5715,208.4344,330,228.7827,330,250,"be",330,271.2173,321.5715,291.5656,306.5685,306.5685,"be",291.5656,321.5715,271.2173,330,250,330,"be",228.7827,330,208.4344,321.5715,193.4315,306.5685,"be",178.4285,291.5656,170,271.2173,170,250,"be",170,228.7827,178.4285,208.4344,193.4315,193.4315,"be",208.4344,178.4285,228.7827,170,250,170,"c","m",250,200,"be",263.2608,200,275.9785,205.2678,285.3553,214.6447,"be",294.7322,224.0215,300,236.7392,300,250,"be",300,263.2608,294.7322,275.9785,285.3553,285.3553,"be",275.9785,294.7322,263.2608,300,250,300,"be",236.7392,300,224.0215,294.7322,214.6447,285.3553,"be",205.2678,275.9785,200,263.2608,200,250,"be",200,236.7392,205.2678,224.0215,214.6447,214.6447,"be",224.0215,205.2678,236.7392,200,250,200,"c","m",250,230,"be",255.3043,230,260.3914,232.1071,264.1421,235.8579,"be",267.8929,239.6086,270,244.6957,270,250,"be",270,255.3043,267.8929,260.3914,264.1421,264.1421,"be",260.3914,267.8929,255.3043,270,250,270,"be",244.6957,270,239.6086,267.8929,235.8579,264.1421,"be",232.1071,260.3914,230,255.3043,230,250,"be",230,244.6957,232.1071,239.6086,235.8579,235.8579,"be",239.6086,232.1071,244.6957,230,250,230,"c","fil","255,0,0,1","f","stro","0,0,0,1","li",1,"lin","butt","line","miter","mi",4,"st","r","r"]',
				'canvas-nonativedash': '["s","s","b","m",250,50,"be",303.0433,50,353.9141,71.0714,391.4214,108.5786,"be",428.9286,146.0859,450,196.9567,450,250,"be",450,303.0433,428.9286,353.9141,391.4214,391.4214,"be",353.9141,428.9286,303.0433,450,250,450,"be",196.9567,450,146.0859,428.9286,108.5786,391.4214,"be",71.0714,353.9141,50,303.0433,50,250,"be",50,196.9567,71.0714,146.0859,108.5786,108.5786,"be",146.0859,71.0714,196.9567,50,250,50,"c","m",250,80,"be",295.0868,80,338.327,97.9107,370.2082,129.7918,"be",402.0893,161.673,420,204.9132,420,250,"be",420,295.0868,402.0893,338.327,370.2082,370.2082,"be",338.327,402.0893,295.0868,420,250,420,"be",204.9132,420,161.673,402.0893,129.7918,370.2082,"be",97.9107,338.327,80,295.0868,80,250,"be",80,204.9132,97.9107,161.673,129.7918,129.7918,"be",161.673,97.9107,204.9132,80,250,80,"c","m",250,110,"be",287.1303,110,322.7399,124.75,348.9949,151.0051,"be",375.25,177.2601,390,212.8697,390,250,"be",390,287.1303,375.25,322.7399,348.9949,348.9949,"be",322.7399,375.25,287.1303,390,250,390,"be",212.8697,390,177.2601,375.25,151.0051,348.9949,"be",124.75,322.7399,110,287.1303,110,250,"be",110,212.8697,124.75,177.2601,151.0051,151.0051,"be",177.2601,124.75,212.8697,110,250,110,"c","m",250,140,"be",279.1738,140,307.1527,151.5893,327.7817,172.2183,"be",348.4107,192.8473,360,220.8262,360,250,"be",360,279.1738,348.4107,307.1527,327.7817,327.7817,"be",307.1527,348.4107,279.1738,360,250,360,"be",220.8262,360,192.8473,348.4107,172.2183,327.7817,"be",151.5893,307.1527,140,279.1738,140,250,"be",140,220.8262,151.5893,192.8473,172.2183,172.2183,"be",192.8473,151.5893,220.8262,140,250,140,"c","m",250,170,"be",271.2173,170,291.5656,178.4285,306.5685,193.4315,"be",321.5715,208.4344,330,228.7827,330,250,"be",330,271.2173,321.5715,291.5656,306.5685,306.5685,"be",291.5656,321.5715,271.2173,330,250,330,"be",228.7827,330,208.4344,321.5715,193.4315,306.5685,"be",178.4285,291.5656,170,271.2173,170,250,"be",170,228.7827,178.4285,208.4344,193.4315,193.4315,"be",208.4344,178.4285,228.7827,170,250,170,"c","m",250,200,"be",263.2608,200,275.9785,205.2678,285.3553,214.6447,"be",294.7322,224.0215,300,236.7392,300,250,"be",300,263.2608,294.7322,275.9785,285.3553,285.3553,"be",275.9785,294.7322,263.2608,300,250,300,"be",236.7392,300,224.0215,294.7322,214.6447,285.3553,"be",205.2678,275.9785,200,263.2608,200,250,"be",200,236.7392,205.2678,224.0215,214.6447,214.6447,"be",224.0215,205.2678,236.7392,200,250,200,"c","m",250,230,"be",255.3043,230,260.3914,232.1071,264.1421,235.8579,"be",267.8929,239.6086,270,244.6957,270,250,"be",270,255.3043,267.8929,260.3914,264.1421,264.1421,"be",260.3914,267.8929,255.3043,270,250,270,"be",244.6957,270,239.6086,267.8929,235.8579,264.1421,"be",232.1071,260.3914,230,255.3043,230,250,"be",230,244.6957,232.1071,239.6086,235.8579,235.8579,"be",239.6086,232.1071,244.6957,230,250,230,"c","m",250,50,"be",303.0433,50,353.9141,71.0714,391.4214,108.5786,"be",428.9286,146.0859,450,196.9567,450,250,"be",450,303.0433,428.9286,353.9141,391.4214,391.4214,"be",353.9141,428.9286,303.0433,450,250,450,"be",196.9567,450,146.0859,428.9286,108.5786,391.4214,"be",71.0714,353.9141,50,303.0433,50,250,"be",50,196.9567,71.0714,146.0859,108.5786,108.5786,"be",146.0859,71.0714,196.9567,50,250,50,"c","m",250,80,"be",295.0868,80,338.327,97.9107,370.2082,129.7918,"be",402.0893,161.673,420,204.9132,420,250,"be",420,295.0868,402.0893,338.327,370.2082,370.2082,"be",338.327,402.0893,295.0868,420,250,420,"be",204.9132,420,161.673,402.0893,129.7918,370.2082,"be",97.9107,338.327,80,295.0868,80,250,"be",80,204.9132,97.9107,161.673,129.7918,129.7918,"be",161.673,97.9107,204.9132,80,250,80,"c","m",250,110,"be",287.1303,110,322.7399,124.75,348.9949,151.0051,"be",375.25,177.2601,390,212.8697,390,250,"be",390,287.1303,375.25,322.7399,348.9949,348.9949,"be",322.7399,375.25,287.1303,390,250,390,"be",212.8697,390,177.2601,375.25,151.0051,348.9949,"be",124.75,322.7399,110,287.1303,110,250,"be",110,212.8697,124.75,177.2601,151.0051,151.0051,"be",177.2601,124.75,212.8697,110,250,110,"c","m",250,140,"be",279.1738,140,307.1527,151.5893,327.7817,172.2183,"be",348.4107,192.8473,360,220.8262,360,250,"be",360,279.1738,348.4107,307.1527,327.7817,327.7817,"be",307.1527,348.4107,279.1738,360,250,360,"be",220.8262,360,192.8473,348.4107,172.2183,327.7817,"be",151.5893,307.1527,140,279.1738,140,250,"be",140,220.8262,151.5893,192.8473,172.2183,172.2183,"be",192.8473,151.5893,220.8262,140,250,140,"c","m",250,170,"be",271.2173,170,291.5656,178.4285,306.5685,193.4315,"be",321.5715,208.4344,330,228.7827,330,250,"be",330,271.2173,321.5715,291.5656,306.5685,306.5685,"be",291.5656,321.5715,271.2173,330,250,330,"be",228.7827,330,208.4344,321.5715,193.4315,306.5685,"be",178.4285,291.5656,170,271.2173,170,250,"be",170,228.7827,178.4285,208.4344,193.4315,193.4315,"be",208.4344,178.4285,228.7827,170,250,170,"c","m",250,200,"be",263.2608,200,275.9785,205.2678,285.3553,214.6447,"be",294.7322,224.0215,300,236.7392,300,250,"be",300,263.2608,294.7322,275.9785,285.3553,285.3553,"be",275.9785,294.7322,263.2608,300,250,300,"be",236.7392,300,224.0215,294.7322,214.6447,285.3553,"be",205.2678,275.9785,200,263.2608,200,250,"be",200,236.7392,205.2678,224.0215,214.6447,214.6447,"be",224.0215,205.2678,236.7392,200,250,200,"c","m",250,230,"be",255.3043,230,260.3914,232.1071,264.1421,235.8579,"be",267.8929,239.6086,270,244.6957,270,250,"be",270,255.3043,267.8929,260.3914,264.1421,264.1421,"be",260.3914,267.8929,255.3043,270,250,270,"be",244.6957,270,239.6086,267.8929,235.8579,264.1421,"be",232.1071,260.3914,230,255.3043,230,250,"be",230,244.6957,232.1071,239.6086,235.8579,235.8579,"be",239.6086,232.1071,244.6957,230,250,230,"c","fil","255,0,0,1","f","stro","0,0,0,1","li",1,"lin","butt","line","miter","mi",4,"st","r","r"]'
			});
			/* jshint maxlen:120, quotmark:double */
		}
	});
});
