import { Button } from "@/shared/ui/button";
import { useMutation } from "@tanstack/react-query";
// import { selectFile } from "@/shared/lib/file";
import { Spinner } from "@/shared/ui/spinner";
import { Profile, ProfileAvatar } from "@/entities/user/profile";
import { useUploadAvatar } from "../_vm/use-upload-avatar";
// import { uploadProfileImageAction } from "../_actions";
// import { ProfileAvatar } from "@/entities/profile/ui/profile-avatar";

export function AvatarField({
  value,
  onChange,
  profile,
}: {
  value?: string;
  onChange: (value?: string) => void;
  profile: Profile;
}) {
  //   const uploadImage = useMutation({
  //     mutationFn: (file: File) => {
  //       const formData = new FormData();
  //       formData.append("image", file);
  //       return uploadProfileImageAction(formData);
  //     },
  //     onSuccess: (data) => {
  //       if (data) {
  //         onChange(data);
  //       }
  //     },
  //   });

  //   const handleClick = () => {
  //     selectFile("image/*").then((file) => {
  //       if (file) {
  //         uploadImage.mutate(file);
  //       }
  //     });
  //   };

  const { handleFileSelect, isPending } = useUploadAvatar();

  const handleClick = () => {
    handleFileSelect({
      onError: (type?: "big-size") => {
        console.log("Error: ", type);
      },
    });
  };

  return (
    <Button
      variant="ghost"
      className="w-[84px] h-[84px] p-0.5 rounded-full relative block"
      disabled={isPending}
      onClick={handleClick}
      type="button"
    >
      {isPending && (
        <div className="inset-0 absolute flex items-center justify-center z-10">
          <Spinner className="w-10 h-10" aria-label="Загрузка новой аватарки" />
        </div>
      )}

      <ProfileAvatar
        className="w-full h-full"
        profile={{ ...profile, image: value }}
        // profile={{ email: "test@mail.ru", image: value }}
      />
    </Button>
  );
}
