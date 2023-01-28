import { motion, useMotionValue, useMotionValueEvent, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";
import styled from "styled-components";

const Wrapper = styled(motion.div)`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg, rgb(0, 210, 238), rgb(0, 83, 238));
`;

const Box = styled(motion.div)`
  width: 200px;
  height: 200px;
  background-color: rgba(223, 230, 233,1.0);
  border-radius: 40px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.6);
`;

const boxVariants = {};

function App() {
  const x = useMotionValue(0);
  const rotate = useTransform(x, [-800, 800], [-360 , 360]);
  const gradient = useTransform(
    x,
    [-800, 800],
    [
      "linear-gradient(135deg, rgb(0, 210, 238), rgb(0, 83, 238))",
      "linear-gradient(135deg, rgb(0, 238, 155), rgba(253, 203, 110,1.0))",
    ]
  );

  useMotionValueEvent(rotate, "change", (scaleValue) => {
    // console.log(xValue);
    console.log(scaleValue);
  });
  return (
    <Wrapper style={{background: gradient}}>
      <Box style={{ x, rotateZ:rotate }} drag="x" dragSnapToOrigin />
    </Wrapper>
  );
}

export default App;
