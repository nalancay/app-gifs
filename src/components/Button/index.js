import React from "react";
import { Button, Link } from "./Button.styles";

export default function ButtonComponent({
  children,
  href,
  size = "jkhdfgsjkfghsdsjkldfgdljk",
}) {
  return href ? (
    <Link size={size} to={href}>
      {children}
    </Link>
  ) : (
    <Button size={size}>{children}</Button>
  );
}
