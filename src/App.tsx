import { motion, useMotionValue, useMotionValueEvent, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Box = styled(motion.div)`
  width: 200px;
  height: 200px;
  background-color: rgba(116, 185, 255, 1);
  border-radius: 40px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.6);
`;

const boxVariants = {};

function App() {
  const x = useMotionValue(0);
  const resizeBox = useTransform(x, [-800, 0, 800], [2, 1, 0.3]);
  useMotionValueEvent(resizeBox, "change", (scaleValue) => {
    // console.log(xValue);
    console.log(scaleValue);
  });
  return (
    <Wrapper>
      <Box style={{ x, scale:resizeBox }} drag="x" dragSnapToOrigin />
    </Wrapper>
  );
}

export default App;
