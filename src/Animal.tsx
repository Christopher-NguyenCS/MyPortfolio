import * as THREE from "three";
import { useCallback, useEffect, useRef, useState } from 'react';

type resizeScene = {
	'width': number,
	'height': number
}

function Animal() {
	const refContainer = useRef<HTMLDivElement | null>(null);
	const [clientContainerSize, setClientContainerSize] = useState<resizeScene>({ 'width': 0, 'height': 0 });
	const refRenderer = useRef<THREE.WebGLRenderer | null>(null);
	const refCamera = useRef<THREE.PerspectiveCamera | null>(null);

	const handleResize = useCallback(() => {
		const container = refContainer.current;
		const renderer = refRenderer.current;
		if (renderer && container) {
			if (clientContainerSize.width !== container.clientWidth || clientContainerSize.height !== container.clientHeight) {
				setClientContainerSize({
					"width": container.clientWidth,
					"height": container.clientHeight
				});
			}
		}
		return;
	}, []);

	useEffect(() => {
		handleResize();
		window.addEventListener("resize", handleResize);
		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, [handleResize]);

	useEffect(() => {
		const camera = refCamera.current;
		const renderer = refRenderer.current;
		if (camera !== null && renderer != null && clientContainerSize) {
			camera.aspect = clientContainerSize.width / clientContainerSize.height;
			camera.updateProjectionMatrix();
			renderer.setSize(clientContainerSize.width, clientContainerSize.height);
		}
	}, [clientContainerSize])

	useEffect(() => {
		const scene = new THREE.Scene();
		const renderer = new THREE.WebGLRenderer();
		let camera: THREE.PerspectiveCamera;
		refRenderer.current = renderer;
		if (refContainer.current != null) {
			refContainer.current.appendChild(renderer.domElement);
			camera = new THREE.PerspectiveCamera(40, refContainer.current.clientWidth / refContainer.current.clientHeight, 0.1, 1000);
			refCamera.current = camera;
			renderer.setSize(refContainer.current.clientWidth, refContainer.current.clientHeight);
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
			if (refContainer.current && renderer.domElement.parentNode === refContainer.current) {
				refContainer.current.removeChild(renderer.domElement);
			}
		};
	}, []);

	return (

		<>
			<div className='flex justify-center items-start sm:w-2xs md:w-xl lg:w-2xl xl:w-3xl 2xl:w-4xl' ref={refContainer}>

			</div>
		</>
	)

}

export default Animal;
