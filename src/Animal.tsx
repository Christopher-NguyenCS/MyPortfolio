import * as THREE from "three";
import { useEffect, useRef } from 'react';
import { useElementSize } from "./hooks/useElementSize";


function Animal() {
	const refContainer = useRef<HTMLDivElement | null>(null);
	const refRenderer = useRef<THREE.WebGLRenderer | null>(null);
	const refCamera = useRef<THREE.PerspectiveCamera | null>(null);
	const {storedElementSize} = useElementSize({elementRef:refContainer});

	useEffect(() => {
		const camera = refCamera.current;
		const renderer = refRenderer.current;
		const container = refContainer.current;
		if (camera !== null && renderer != null && container != null && storedElementSize.width > 0 && storedElementSize.height > 0) {
			camera.aspect = storedElementSize.width / storedElementSize.height;
			camera.updateProjectionMatrix();
			renderer.setSize(storedElementSize.width, storedElementSize.height);
		}
	}, [storedElementSize]);

	useEffect(() => {
		const scene = new THREE.Scene();
		const renderer = new THREE.WebGLRenderer();
		let camera: THREE.PerspectiveCamera;
		const container = refContainer.current;

		refRenderer.current = renderer;
		if (container != null) {
			container.appendChild(renderer.domElement);
			camera = new THREE.PerspectiveCamera(40, container.clientWidth / container.clientHeight, 0.1, 1000);
			refCamera.current = camera;
			renderer.setSize(container.clientWidth, container.clientHeight);
		}
		else {
			camera = new THREE.PerspectiveCamera(40, window.innerWidth / window.innerHeight, 0.1, 1000);
			refCamera.current = camera;
			renderer.setSize(400, 500);
		}

		const intensity = 3;
		const color = 0x00ff00;
		const light = new THREE.DirectionalLight(color, intensity);
		light.position.set(-1, 2, 4);
		scene.add(light);

		const geometry = new THREE.BoxGeometry(1, 1, 1);
		const material = new THREE.MeshPhongMaterial({ color: 0x44aa88 });
		const cube = new THREE.Mesh(geometry, material);
		scene.add(cube);


		camera.position.z = 5;
		camera.lookAt(0, 0, 0);
		const animate = function(time: number) {
			time *= 0.001;
			cube.rotation.x = time;
			cube.rotation.y = time;
			renderer.render(scene, camera);
			requestAnimationFrame(animate);
		}
		requestAnimationFrame(animate)

		return () => {
			// Remove the canvas element when the component unmounts
			if (container && renderer.domElement.parentNode === container) {
				container.removeChild(renderer.domElement);
			}
		};
	}, []);

	return (

		<>
			<div className='flex justify-center items-start w-2xs md:w-xl lg:w-2xl xl:w-3xl 2xl:w-4xl' ref={refContainer}>

			</div>
		</>
	)

}

export default Animal;
