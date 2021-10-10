import React from "react";
import {useBox} from "@react-three/cannon";
import PropTypes from "prop-types";

export default function Box(props) {
    Box.propTypes = {
        children: PropTypes.any,
        position: PropTypes.any,
        color: PropTypes.any,
        scale: PropTypes.any
    };
    console.log(props);
    const [ref, api] = useBox(() => ({mass:1, position:props.position}))

    return (
        <mesh scale={props.scale} position={props.position} ref={ref} onPointerEnter={()=>api.velocity.set(0,5,0)}>
            <boxBufferGeometry />
            <meshLambertMaterial  color={props.color}/>
        </mesh>
    )
}