import { useReadContract } from "wagmi";

import resourcesAbi from "../abi/resources.json";
import { useResourcesStore } from "../stores/resources";

export const useResources = () => {
  const { resourcesAddress } = useResourcesStore();
  const {
    data: resources,
    isLoading: resourcesLoading,
    isError: resourcesError,
  } = useReadContract({
    address: resourcesAddress,
    abi: resourcesAbi,
    functionName: "getPlayerResources",
  }) as {
    data: number[];
    isLoading: boolean;
    isError: boolean;
  };

  return {
    resources,
    resourcesLoading,
    resourcesError,
  };
};
