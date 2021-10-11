import React from "react";
import {usePlane} from "@react-three/cannon";
import PropTypes from "prop-types";

export default function Plane(props) {
    Plane.propTypes = {
        children: PropTypes.any,
        position: PropTypes.any,
        rotation: PropTypes.any,
        color: PropTypes.any,
        size: PropTypes.any
    }

    const [ref] = usePlane(() => ({position:props.position, rotation: props.rotation}))
    return (
        <mesh position={[0,0,0]}  rotation={props.rotation} ref={ref}>
            <planeBufferGeometry  args={props.size} />
            <meshStandardMaterial
                transparent opacity={0} color={"blue"}/>
        </mesh>
    )
}