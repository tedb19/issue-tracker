import { Skeleton } from "@/app/components";
import { Box, Flex, Card } from "@radix-ui/themes";

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
