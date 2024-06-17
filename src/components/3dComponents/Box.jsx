import {  useGLTF } from "@react-three/drei";
import * as THREE from "three";
import { useConfigurator } from "../../context/Configurator";
import { useEffect, useRef, useState } from "react";
import { useBoxContext } from "../../context/BoxContext";





export const Box = () => {
  const { nodes } = useGLTF("./models/Table.gltf");
  const tableBoundingBox = new THREE.Box3().setFromObject(nodes.Plate);
  const tableHeight = tableBoundingBox.max.y;
  const tableWidth = tableBoundingBox.max.x;
  const tableStartIndex = tableBoundingBox.min.x;


  const { box, shape ,addBox } = useConfigurator();
  const [currentColor, setCurrentColor] = useState("gray");
  const [isBoxSelected, setIsBoxSelected] = useState(false);
  const [eventt, setEventt] = useState(null);
  const [positionArr, setPositionArr] = useState([0.25]);
  const [here, setHere] = useState(false);
  const [positionSelected, setPositionSelected] = useState(null);
  const [visible, setVisible] = useState(true);
  const [itemIndex, setItemIndex] = useState(null);
  const {isBoxSelect ,setIsBoxSelect, removeBox, setRemoveBox} = useBoxContext();



  const [meshes, setMeshes] = useState([]);
  const addMesh = (position) => {
    const newMesh = {
      position: position,
      geometry: shape
    };
    // console.log(newMesh)
    setMeshes(prevMeshes => [...prevMeshes, newMesh]);
  };


  // const {leftClicked ,setLeftClicked, rightClicked ,setRightClicked} = useBoxContext();

  //   console.log(box);

  // useEffect(() => {
  //   console.log(rightClicked)
  // },[rightClicked])

  const meshRef = useRef();

  const boxSelected = (e) => {
    setIsBoxSelected(!isBoxSelected);
    setEventt(e);
    if (currentColor !== "gray") {
      setCurrentColor("gray");
    } else {
      setCurrentColor(0x2c9e93);
    }
  };

  // useFrame((state, delta) => {
  //    if(meshRef.current && isBoxSelected) {
  //     meshRef.current.position.x = eventt.point.x
  //    }
  // })
  // const [isFirstMove, setIsFirstMove] = useState(false);
  // const [firstMove, setFirstMove] = useState();

  // const CalculateMove = (e) => {
  //   console.log('calculating')
  //   if(!isFirstMove){
  //     setFirstMove(e.clientX)
  //     setIsFirstMove(true)
  //   }
  //   else{
  //     if(firstMove > e.clientX){
  //       console.log("moving")
  //       meshRef.current.position.x -= 0.015
  //       // setPos(pos-0.1);
  //       setFirstMove(e.clientX)
  //     }
  //     else if(firstMove < e.clientX){
  //       meshRef.current.position.x += 0.015
  //       // setPos(pos+0.1)
  //       setFirstMove(e.clientX)
  //     }
  //   }
  // }
  // const PointerMoving = (e) => {
  //   if(isBoxSelected && meshRef.current){
  //     CalculateMove(e);
  //   }

  // }

  const setPositions = () => {
    // let totalTableLength = 4.4;
    let totalTableLength = tableWidth * 2;
    let totalItemsOnTop = parseInt(totalTableLength / 1.25);
    let arr = [];
    arr.push(0.25 + tableStartIndex + 0.5);
    for (let i = 1; i < totalItemsOnTop; i++) {
      arr.push(arr[i - 1] + 1.5);
    }
    setPositionArr(arr);
  };
  useEffect(() => {
    setPositions();
  }, []);

  const placeBox = (index) => {
    setPositionSelected(index);
    setVisible(false)
    addMesh(index);
    addBox(false);
    console.log(meshes)
  };
useEffect(() => {
  if(box){
    setVisible(true)
  }
},[box])


const itemSelected = (index) => {
  setItemIndex(index);
  // setPopup(true);
  setIsBoxSelect(true)
  // console.log("Remove",removeBox);
  // if(removeBox){
  // const updatedMeshes = meshes.filter((_, i) => i !== index);
  // setMeshes(updatedMeshes);
  // setRemoveBox(!removeBox)
  // }
}
useEffect(() => {
  // if(removeBox){
  const updatedMeshes = meshes.filter((_, i) => i !== itemIndex);
  setMeshes(updatedMeshes);
  setIsBoxSelect(false)
  
// }
},[removeBox])
  return (
    <>
    {/* {popup? <AlertDialogSlide/>:null} */}
      {/* {!isBoxSelected ? <OrbitControls /> : null} */}
      {box && (
        <>
          {positionArr.map((val, index) => {
            return (
              <mesh
                visible={visible}
                key={index}
                ref={meshRef}
                onClick={() => placeBox(index)}
                position={[val, tableHeight, 0]}
              >
                <boxGeometry args={[1, 0.001, 1]} />
                <meshStandardMaterial color={0x2c9e93} />
              </mesh>
            );
          })}
        </>
      )}


          {meshes.map((mesh, index) => {
          return (
            <mesh onClick={()=>itemSelected(index)} key={index} position={[positionArr[mesh.position], tableHeight + 0.5, 0]}>
              {mesh.geometry === "box" && <boxGeometry args={[0.9,0.9,0.9]} />}
              {mesh.geometry === "sphere" && (  <sphereGeometry args={[0.5]} /> )}
              <meshStandardMaterial color={currentColor} />
            </mesh>
          )
          })}
    </>
  );
};
