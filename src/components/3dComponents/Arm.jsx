// /*
// Auto-generated by: https://github.com/pmndrs/gltfjsx
// // */

// import React, { useRef } from 'react'
// import { useGLTF } from '@react-three/drei'

// export default function Model(props) {
//   const group = useRef()
//   const { nodes, materials } = useGLTF('./models/Arm.glb')
//   return (
//     // <group {...props} dispose={null}>
//     //   <group position={[-0.005, 1.034, 0.024]} scale={0.2}>
//     //     <mesh
//     //       castShadow
//     //       receiveShadow
//     //       geometry={nodes.Plane004_1.geometry}
//     //       material={materials.WhiteGloss}
//     //     />
//     //     <mesh
//     //       castShadow
//     //       receiveShadow
//     //       geometry={nodes.Plane004_2.geometry}
//     //       material={materials['metalic plate']}
//     //     />
//     //   </group>
//     //   <group position={[0.204, 1.06, -0.248]} rotation={[-Math.PI / 2, 0, 0]} scale={0.069}>
//     //     <primitive object={nodes.Bone} />
//     //   </group>
//     // </group>
//     <group ref={group} {...props} dispose={null}>
//     <group name="Scene">
//       <group name="Robot_1" scale={0.4}>
//         <mesh
//           name="Plane004_1"
//           castShadow
//           receiveShadow
//           geometry={nodes.Plane004_1.geometry}
//           material={materials.WhiteGloss}
//         />
//         <mesh
//           name="Plane004_2"
//           castShadow
//           receiveShadow
//           geometry={nodes.Plane004_2.geometry}
//           material={materials['metalic plate']}
//         />
//       </group>
//       <group
//         name="Armature"
//         position={[0, 2.8, 0]}
//         rotation={[-Math.PI / 2, 0, 0]}
//         scale={0.146}>
//         <primitive object={nodes.Bone} />
//       </group>
//     </group>
//   </group>
//   )
// }

// useGLTF.preload('./models/Arm.glb')
/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useEffect, useRef, useState } from 'react'
import { useGLTF } from '@react-three/drei'
import * as THREE from 'three'
// import { useModelContext } from '../../context/ModelContext';
import { useAppSelector } from '../../redux/hooks';
import { setCurrentInstrumentSelected, setInstrumentArray } from '../../redux/slices/instrument';
import { useDispatch } from 'react-redux';

export default function Model(props) {

  const meshRef = useRef()
  const { nodes:tableNode } = useGLTF("./models/Table.glb");
  const tableBoundingBox = new THREE.Box3().setFromObject(tableNode.Plane002_3);
  const tableHeight = tableBoundingBox.max.y;
  const tableWidth = tableBoundingBox.max.x;
  const tableStartIndex = tableBoundingBox.min.x;

  // const {currentInstrument, setCurrentInstrument, hotelSelected, setHotelSelected} = useModelContext()
  // const currentInstrument = useAppSelector(state => state.instrument);
  const currentInstrumentSelected = useAppSelector(state => state.instrument.instrumentSelected);
  const currentInstrument = useAppSelector(state => state.instrument.instrument);

  const instrumentsList = useAppSelector(state => state.instrument.instrumentsList);
  
  // useEffect(() => {
  //   console.log(instrumentsList)
  // },[instrumentsList])

  const dispatch = useDispatch();


  const [positionArr, setPositionArr] = useState([0.25]);
  const [zArr, setZArr] = useState([-0.4, -0.4, 0.45, 0.45]);
  const [xArr, setXArr] = useState([
    tableStartIndex + 1.7, tableStartIndex + 1.4+0.6+0.6,
    tableStartIndex + 1.7, tableStartIndex + 1.4+0.6+0.6])

  const setPositions = () => {
  let totalItemsOnTop = 9;
    let arr = [];
    arr.push(tableStartIndex + 1.59);
    for (let i = 0; i < totalItemsOnTop; i++) {
      arr.push(arr[i - 1] + 0.6);
    }
    setPositionArr(arr);
  };

  useEffect(() => {
    setPositions();
  }, []);
 const placeArm = (e, index) => {
    console.log("Placing")
    const newMesh = {
      rotation: [],
      position: [xArr[index], 0, zArr[index]],
      shape: 'arm'
    }
    dispatch(setInstrumentArray(newMesh))
    dispatch(setCurrentInstrumentSelected(false));
    e.stopPropagation();
  }

 const ArmModel = ({positions}) => {
  const group = useRef()
  const { nodes, materials } = useGLTF('./models/Arm.glb')

  return(
        <group ref={group} {...props} dispose={null} position={[positions[0], positions[1],positions[2]]}>
        <group name="Scene">
          <group name="Robot_1" scale={0.4}>
            <mesh
              name="Plane004_1"
              castShadow
              receiveShadow
              geometry={nodes.Plane004_1.geometry}
              material={materials.WhiteGloss}
            />
            <mesh
              name="Plane004_2"
              castShadow
              receiveShadow
              geometry={nodes.Plane004_2.geometry}
              material={materials['metalic plate']}
            />
          </group>
          <group
            name="Armature"
            position={[0, 2.8, 0]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={0.146}>
            <primitive object={nodes.Bone} />
          </group>
        </group>
      </group>
  )
 }
  return (
    <>
        {currentInstrument=='arm' && currentInstrumentSelected && positionArr.map((val, index) => {
            return (
              <mesh
                // visible={()=>checkIfModelPresent()}
                key={index}
                ref={meshRef}
                onClick={(e) => {placeArm(e, index)}}
                position={[xArr[index], tableHeight/2.5, zArr[index]]}
              >
                <boxGeometry args={[0.7, 0.001, 0.7]} />
                <meshStandardMaterial color={0x2c9e93} transparent={true} opacity={0.4}/>
              </mesh>
            );
          })}
          {instrumentsList.filter(mesh => mesh.shape === 'arm').map((mesh, index) =>{ return (
            <mesh key={index} >
              <ArmModel positions={mesh.position}/>
            </mesh>
          )})}
    </>
  )
}

useGLTF.preload('./models/Arm.glb')








