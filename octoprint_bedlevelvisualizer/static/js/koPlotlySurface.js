ko.bindingHandlers.plotlySurface = {
    init: function (element, valueAccessor, allBindingsAccessor, viewModel, bindingContext) {        
		var mesh_data = ko.utils.unwrapObservable(valueAccessor());		
		console.log(mesh_data);	
		var data = [{
				z: mesh_data,
				type: 'surface'
			}
		];

		var layout = {
			//title: 'Bed Leveling Mesh',
			autosize: true,
			margin: {
				l: 0,
				r: 0,
				b: 0,
				t: 0
			},
			scene: {
				camera: {
					eye: {
						x: -1.25,
						y: -1.25,
						z: 1.25
					}
				}
			}
		};	
        Plotly.react(element, data, layout);
    },
    update: function (element, valueAccessor, allBindingsAccessor, viewModel, bindingContext) {
		var mesh_data = ko.utils.unwrapObservable(valueAccessor());	
		console.log(mesh_data);
		var data = [{
				z: mesh_data,
				type: 'surface'
			}
		];

		var layout = {
			//title: 'Bed Leveling Mesh',
			autosize: true,
			margin: {
				l: 0,
				r: 0,
				b: 0,
				t: 0
			},
			scene: {
				camera: {
					eye: {
						x: -1.25,
						y: -1.25,
						z: 1.25
					}
				}
			}
		};		

        Plotly.react(element, data, layout);
    }
};