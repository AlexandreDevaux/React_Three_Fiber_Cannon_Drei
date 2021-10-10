import React from "react";
import {useSphere} from "@react-three/cannon";
import PropTypes from "prop-types";


export default function Sphere(props) {
    Sphere.propTypes = {
        children: PropTypes.any,
        position: PropTypes.any,
        color: PropTypes.any,
        scale: PropTypes.any
    };
    console.log(props);
    const [ref, api] = useSphere(() => ({mass:1, position:props.position}))
    return (
        <mesh scale={props.scale} position={props.position} ref={ref} onPointerEnter={()=>api.velocity.set(0,5,0)}>
            <sphereBufferGeometry attach={"geometry"}/>
            <meshLambertMaterial attach={"material"}  color={props.color} />
        </mesh>
    )
}
