import React from "react";
import {usePlane} from "@react-three/cannon";
import PropTypes from "prop-types";
import {useLoader} from "@react-three/fiber";
import {TextureLoader} from "three/src/loaders/TextureLoader";

export default function Plane(props) {
    Plane.propTypes = {
        children: PropTypes.any,
        position: PropTypes.any,
        rotation: PropTypes.any,
        color: PropTypes.any,
        size: PropTypes.any
    }

    const [colorMap, displacementMap,normalMap, roughnessMap, aoMap] = useLoader(TextureLoader, [
        'Grass001_1K_Color.png', 'Grass001_1K_Displacement.png', 'Grass001_1K_NormalGL.png', 'Grass001_1K_Roughness.png','Grass001_1K_AmbientOcclusion.png'
    ])
    const [ref] = usePlane(() => ({position:props.position, rotation: props.rotation}))
    return (
        <mesh position={[0,0,0]}  rotation={props.rotation} ref={ref}>
            <planeBufferGeometry  args={props.size} />
            <meshStandardMaterial
                displacementScale={0.2}
                map={colorMap}
                displacementMap={displacementMap}
                normalMap={normalMap}
                roughnessMap={roughnessMap}
                aoMap={aoMap} />
        </mesh>
    )
}