import { selectFile, validateFileSize } from "@/shared/lib/file";
import { useMutation } from "@tanstack/react-query";
import { AVATAR_FILE_KEY, MAX_AVATAR_SIZE } from "../_constants";
import { uploadAvatarAction } from "../_actions/upload-avatar";

export const useUploadAvatar = () => {
  const { mutateAsync, isPending } = useMutation({
    mutationFn: uploadAvatarAction,
  });

  const handleFileSelect = async ({
    onError,
  }: {
    onError?: (type?: "big-size") => void;
  }) => {
    const file = await selectFile("image/*");
    if (!validateFileSize(file, MAX_AVATAR_SIZE)) {
      return onError?.("big-size");
    }

    const formData = new FormData();
    formData.set(AVATAR_FILE_KEY, file);

    await mutateAsync(formData);
  };

  return {
    isPending,
    handleFileSelect,
  };
};
