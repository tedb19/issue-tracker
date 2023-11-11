import { Box } from "@radix-ui/themes";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Loading = () => {
  return (
    <Box className="max-w-xl">
      <Skeleton />
      <Skeleton height="10rem" />
    </Box>
  );
};

export default Loading;
