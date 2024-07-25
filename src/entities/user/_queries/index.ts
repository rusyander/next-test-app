import { useQueryClient } from "@tanstack/react-query";
import { getUserProfileAction } from "../_actions/get-user-profile";
import { UserId } from "../user";

const baseKey = "user";

export const getProfileQuery = (userId: string) => ({
  queryKey: [baseKey, "getProfileById", userId],
  queryFn: async () => getUserProfileAction({ userId }),
});

export const useInvalidateProfileQuery = () => {
  const queryClient = useQueryClient();

  return (userId: UserId) => {
    queryClient.invalidateQueries({
      queryKey: [baseKey, "getProfileById", userId],
    });
  };
};
