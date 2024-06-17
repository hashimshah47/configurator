// // /*
// // Auto-generated by: https://github.com/pmndrs/gltfjsx
// // Command: npx gltfjsx@6.2.16 public/models/Table.gltf 
// // */

// import React, { useRef } from 'react'
// import { useGLTF } from '@react-three/drei'
// import { useConfigurator } from '../../context/Configurator'
// import * as THREE from "three";

// import { Box } from './Box';
// import { useFrame } from '@react-three/fiber';

// export default function Model(props) {
//   const { nodes, materials } = useGLTF('./models/Table.gltf')

//   const {legs} = useConfigurator();
//   const meshRef = useRef();
//   const boxContainer = new THREE.Group();
  
// // useFrame(() => {
  
// //   // meshRef.current.position = nodes.Plate.geometry.position.clone()
// // })
//   return (
//     <group {...props} dispose={null}>
//       <mesh ref={meshRef} geometry={nodes.Plate.geometry} material={materials.Plate}/>
//       {
//         legs == 0 && (
//           <>
//             <mesh geometry={nodes.Legs01Left.geometry} material={materials.Metal} position={[-1.5, 0, 0]} />
//             <mesh geometry={nodes.Legs01Right.geometry} material={materials.Metal} position={[1.5, 0, 0]} />
//           </>
//         )
//       }

//       {
//         legs == 1 && (
//           <>
//             <mesh geometry={nodes.Legs02Left.geometry} material={materials.Metal} position={[-1.5, 0, 0]} />
//             <mesh geometry={nodes.Legs02Right.geometry} material={materials.Metal} position={[1.5, 0, 0]} />
//           </>
//         )
//       }

//       {
//         legs == 2 && (
//           <>
//             <mesh geometry={nodes.Legs03Left.geometry} material={materials.Metal} position={[-1.5, 0, 0]} />
//             <mesh geometry={nodes.Legs03Right.geometry} material={materials.Metal} position={[1.5, 0, 0]} />
//           </>
//         )
//       }
//       {/* <Box/> */}
//     </group>
//   )
// }

// useGLTF.preload('./models/Table.gltf')



/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

// import React, { useRef } from 'react'
// import { useGLTF } from '@react-three/drei'

// export default function Model(props) {
//   const { nodes, materials } = useGLTF('./models/Table.glb')
//   return (
// <group {...props} dispose={null}>
//       <group scale={0.4}>
//         <mesh
//           castShadow
//           receiveShadow
//           geometry={nodes.Plane002.geometry}
//           material={materials['BlueMetal.002']}
//         />
//         <mesh
//           castShadow
//           receiveShadow
//           geometry={nodes.Plane002_1.geometry}
//           material={materials['CreamGloss.003']}
//         />
//         <mesh
//           castShadow
//           receiveShadow
//           geometry={nodes.Plane002_2.geometry}
//           material={materials['metalic plate.002']}
//         />
//         <mesh // Main top and bottom shelf
//           castShadow
//           receiveShadow
//           geometry={nodes.Plane002_3.geometry}
//           material={materials['Rubber - Black.003']}
//         />
//         <mesh //Tyres
//           castShadow
//           receiveShadow
//           geometry={nodes.Plane002_4.geometry}
//           material={materials.Black_background}
//         />
//       </group>
//     </group>
//   )
// }

// useGLTF.preload('./models/Table.glb')


import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const { nodes, materials } = useGLTF('./models/Table.glb')
  return (
    <group {...props} dispose={null}>
      <group scale={0.4}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane002.geometry}
          material={materials.BlueMetal}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane002_1.geometry}
          material={materials.CreamGloss}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane002_2.geometry}
          material={materials['metalic plate']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane002_3.geometry}
          material={materials['Rubber - Black.001']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane002_4.geometry}
          material={materials.Black_background}
        />
      </group>
    </group>
  )
}

useGLTF.preload('./models/Table.glb')