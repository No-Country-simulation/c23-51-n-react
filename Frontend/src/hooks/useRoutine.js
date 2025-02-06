import useAuthStore from "@/store/authStore";
import { fetchData } from "@/utils/fetchData";
import { useQuery } from "@tanstack/react-query";

export const useRoutine = () => {
  const { token } = useAuthStore();

  return useQuery({
    queryKey: ["routines"],
    queryFn: async () => {
      const response = await fetchData("/routines", "GET", null, token);
      return response.data;
    },
    onError: (error) => {
      console.error("Error fetching routines:", error);
    },
    staleTime: 1000 * 60 * 5,
    cacheTime: 1000 * 60 * 30,
  });
};
