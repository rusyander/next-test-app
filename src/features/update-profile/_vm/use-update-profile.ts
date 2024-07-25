import { useMutation } from "@tanstack/react-query";
import { updateProfileAction } from "../_actions/update-profile";
import { useAppSession } from "@/entities/user/_vm/use-app-session";
import { useInvalidateProfileQuery } from "@/entities/user/profile";

export const useUpdateProfile = () => {
  const { update: updateSession } = useAppSession();
  const invalidateProfileQuery = useInvalidateProfileQuery();

  const { mutateAsync, isPending } = useMutation({
    mutationFn: updateProfileAction,
    async onSuccess({ profile }, { userId }) {
      invalidateProfileQuery(userId);
      await updateSession({
        user: profile,
      });
    },
  });

  return {
    updateProfile: mutateAsync,
    isPending,
  };
};
