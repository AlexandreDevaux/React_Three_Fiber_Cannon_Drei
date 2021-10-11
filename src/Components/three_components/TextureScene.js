import React from "react";
import {useLoader} from "@react-three/fiber";
import {TextureLoader} from 'three/src/loaders/TextureLoader'
import PropTypes from "prop-types";
import {useSphere} from "@react-three/cannon";

export default function Scene(props) {
    Scene.propTypes = {
        children: PropTypes.any,
        position: PropTypes.any
    }
    const [ref] = useSphere(() => ({mass: 1, position: props.position}))

    const [colorMap, displacementMap,normalMap, roughnessMap, aoMap] = useLoader(TextureLoader, [
        'PavingStones075_1K_Color.png', 'PavingStones075_1K_Displacement.png', 'PavingStones075_1K_NormalGL.png', 'PavingStones075_1K_Roughness.png','PavingStones075_1K_AmbientOcclusion.png'
    ])
    return (
        <mesh ref={ref}  scale={1} position={props.position}>
            <sphereGeometry args={[1,100,100]}/>
            <meshStandardMaterial
                displacementScale={0.1}
                map={colorMap}
                displacementMap={displacementMap}
                normalMap={normalMap}
                roughnessMap={roughnessMap}
                aoMap={aoMap}
            />
        </mesh>
    )
}