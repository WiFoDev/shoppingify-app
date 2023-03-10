import {useQuery} from "@tanstack/react-query";

import {getCategories} from "@/querys";

export const useCategories = () => {
  const {data, isLoading} = useQuery({
    queryFn: getCategories,
    queryKey: ["categories"],
  });

  return {
    data,
    isLoading,
  };
};
