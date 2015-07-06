var scene = new THREE.Scene();
			var camera = new THREE.PerspectiveCamera( 75, 968/400, 0.1, 1000 );
			
			var renderer = new THREE.WebGLRenderer();
			renderer.setSize( 968, 400);
			document.body.appendChild( renderer.domElement );

			var geometry = new THREE.BoxGeometry( 2, 2, 2 );
			var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
			var cube = new THREE.Mesh( geometry, material );
			scene.add( cube );

			camera.position.z = 4;
			camera.position.y = 2;
			camera.rotation.x = -0.5;

			var render = function () {
				requestAnimationFrame( render );

				//cube.rotation.x += 0.1;
				cube.rotation.y += 0.01;

				renderer.render(scene, camera);
			};

			render();