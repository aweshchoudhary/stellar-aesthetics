import React from "react";
import Bar from "./Bar";
import Container from "./Container";
import Spinner from "./Spinner";
import { useNProgress } from "@tanem/react-nprogress";

const Progress = ({ isAnimating }) => {
  const { animationDuration, isFinished, progress } = useNProgress({
    isAnimating,
  });
  return (
    <Container animationDuration={animationDuration} isFinished={isFinished}>
      <Bar animationDuration={animationDuration} progress={progress} />
      <Spinner />
    </Container>
  );
};

export default Progress;
