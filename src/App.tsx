import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import styled from "styled-components";

const Wrapper = styled(motion.div)`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: linear-gradient(135deg, rgb(0, 210, 238), rgb(0, 83, 238));
`;
const Box = styled(motion.div)`
  height: 200px;
  background-color: #b2bec3;
  border-radius: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  width: 70vw;
  gap: 10px;
  /* div:first-child,
  div:last-child {
    grid-column: span 2;
  } */
`;
const Circle = styled(motion.div)<CircleProps>`
  border-radius: 50%;
  width: 50px;
  height: 50px;
  background-color: rgb(0, 210, 238);
`;

const Overlay = styled(motion.div)`
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Button = styled.button<{ isSwitch: boolean }>`
  position: fixed;
  bottom: 20px;
  right: 20px;
  border: none;
  border-radius: 20px;
  background-color: ${({ isSwitch }) =>
    isSwitch ? "rgb(0, 210, 238)" : "red"};
  color: white;
  padding: 10px 20px;
  cursor: pointer;
`;

const overlayVariant = {
  start: { backgroundColor: "rgba(0,0,0,0)" },
  ing: { backgroundColor: "rgba(0,0,0,0.5)" },
  end: { backgroundColor: "rgba(0,0,0,0)" },
};

interface CircleProps {
  layoutId?: string;
}

function App() {
  const [id, setId] = useState<null | string>(null);
  const [isSwitch, setIsSwitch] = useState(false);
  const handleCircle = () => {
    setIsSwitch((prev) => !prev);
  };

  return (
    <Wrapper>
      <Grid>
        {["1", "2", "3", "4"].map((num) => (
          <Box
            onClick={() => {
              setId(num)
              
            }}
            key={num}
            layoutId={num}
            whileHover={{ scale: 1.5 }}
          >
            {!isSwitch ? num === "2" && <Circle layoutId="circleStat" /> : null}
            {!isSwitch ? null : num === "3" && <Circle layoutId="circleStat" />}
          </Box>
        ))}
      </Grid>
      <Button onClick={handleCircle} isSwitch={isSwitch}>
        Move Circle
      </Button>
      <AnimatePresence>
        {id ? (
          <Overlay
            onClick={() => setId(null)}
            variants={overlayVariant}
            initial={"start"}
            animate={"ing"}
            exit={"end"}
          >
            <Box layoutId={id} style={{ width: 400, height: 200 }} />
          </Overlay>
        ) : null}
      </AnimatePresence>
    </Wrapper>
  );
}

export default App;
