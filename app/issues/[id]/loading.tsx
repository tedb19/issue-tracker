import { Box, Flex, Card } from "@radix-ui/themes";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Loading = () => {
  return (
    <Box className="space-y-5">
      <Skeleton />
      <Flex className="space-x-3" my="3">
        <Skeleton width="3rem" />
        <Skeleton width="5rem" />
      </Flex>
      <Card className="prose">
        <Skeleton count={5} />
      </Card>
    </Box>
  );
};

export default Loading;
