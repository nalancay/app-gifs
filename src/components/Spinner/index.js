import React from "react";
import { LoadingRingContainer } from "./Spinner.styles";

export default function Spinner() {
  return (
    <LoadingRingContainer data-testid="LoadingComponent">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </LoadingRingContainer>
  );
}
