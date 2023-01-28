import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import styled from "styled-components";

const Wrapper = styled(motion.div)`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: linear-gradient(135deg, rgb(0, 210, 238), rgb(0, 83, 238));
`;
const Box = styled(motion.div)`
  width: 400px;
  height: 200px;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 40px;
  top: 100px;
  display: flex;
  position: absolute;
  justify-content: center;
  align-items: center;
  font-size: 28px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;
const box = {
  entry: (back:boolean) =>{
    return {
      x: 500,
      opacity: 0,
      scale: 0,
    }
  },
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: { duration: 1 },
  },
  exit: (back:boolean)=>{
    return {
      x: -500,
      opacity: 0,
      scale: 0,
      rotateY: 180,
      transition: { duration: 1 },
    }
  },
};

function App() {
  const [visible, setVisible] = useState(1);
  const [back, setBack] = useState(false);
  const nextPlease = () => {
    setBack(false);
    setVisible((prevValue) => (prevValue === 10 ? 10 : prevValue + 1));
  }
  const prevPlease = () => {
    setBack(true);
    setVisible((prevValue) => (prevValue === 1 ? 1 : prevValue - 1));
  }
  return (
    <Wrapper>
      <AnimatePresence custom={back}>
        <Box
          custom={back}
          variants={box}
          initial="entry"
          animate="center"
          exit="exit"
          key={visible}
        >
          {visible}
        </Box>
      </AnimatePresence>
      <button onClick={nextPlease}>Next</button>
      <button onClick={prevPlease}>Prev</button>
    </Wrapper>
  );
}

export default App;
