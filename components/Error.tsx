import { Text } from "@radix-ui/themes";
import { PropsWithChildren } from "react";

const Error = ({ children }: PropsWithChildren) => {
  if (!children) return null;
  return (
    <Text color="red" as="p">
      {children}
    </Text>
  );
};

export default Error;
