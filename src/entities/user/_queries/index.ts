import { getUserProfileAction } from "../_actions/get-user-profile";

const baseKey = "user";

export const getProfileQuery = (userId: string) => ({
  queryKey: [baseKey, "getProfileById", userId],
  queryFn: async () => getUserProfileAction({ userId }),
});
