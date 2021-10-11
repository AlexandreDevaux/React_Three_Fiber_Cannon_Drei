import React from "react";
import {Suspense} from "react";
import './App.css';
import {Canvas} from "@react-three/fiber";
import {Line, OrbitControls, Stars} from "@react-three/drei";
import {Physics} from "@react-three/cannon";
import SoccerBall from "./three_components/SoccerBall";
import Stadium from "./three_components/Stadium"
import TransparentWall from "./three_components/TransparentWall";
import {Counter} from "./Counter";
import {Provider} from "react-redux";
import store from "../store";


function App() {
    return (
        <Provider store={store}>
            <div className="App">
                <div className={"Counter"}>
                    <Counter/>
                </div>
                <Canvas shadowMap  camera={{ fov: 75, near: 0.1, far: 1000, position: [0, 0, 5] }}>
                    <OrbitControls/>
                    <Stars/>
                    <directionalLight
                        intensity={0.5}
                        castShadow
                        shadow-mapSize-height={512}
                        shadow-mapSize-width={512}
                    />
                    <ambientLight intensity={0.2}/>
                    <Physics>
                        <Suspense fallback={null}>
                            <SoccerBall position={[0,5,0]} />
                            <Stadium position={[0,0,0]}  size={[25,25 ]} rotation={[-Math.PI/2, 0, 0]} />
                        </Suspense>
                        <TransparentWall position={[-12.5,12.5,0]} size={[25,25]} rotation={[0,Math.PI/2,0]}/>
                        <TransparentWall position={[12.5,12.5,0]} size={[25,25]} rotation={[0,-Math.PI/2,0]}/>
                        <TransparentWall position={[0,12.5,-12.5]} size={[25,25]} rotation={[0,0,0]}/>
                        <TransparentWall position={[0,12.5,12.5]} size={[25,25]} rotation={[0,Math.PI,0]}/>
                    </Physics>
                    <Line points={[[0,1,0],[1,1,0]]} color={"red"}/>
                    <Line points={[[0,1,0],[0,2,0]]} color={"green"}/>
                    <Line points={[[0,1,0],[0,1,1]]} color={"blue"}/>
                </Canvas>
            </div>

        </Provider>

    );
}

export default App;
