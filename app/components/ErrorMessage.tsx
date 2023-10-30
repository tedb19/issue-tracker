import { PropsWithChildren } from "react";
import { Text } from "@radix-ui/themes";

const ErrorMessage = ({ children }: PropsWithChildren) => {
  return (
    <>
      {children && (
        <Text color="red" as="p">
          {children}
        </Text>
      )}
    </>
  );
};

export default ErrorMessage;
