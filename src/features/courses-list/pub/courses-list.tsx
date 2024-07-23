import React from "react";
import { coursesRepository } from "../courses.repository";
import CourseItem from "../ui/course-item";
import { revalidatePath } from "next/cache";

export default async function CoursesList({
  revalidatePagePath,
}: {
  revalidatePagePath: string;
}) {
  const coursesList = await coursesRepository.getCoursesList();
  const handleDelete = async (courseId: string) => {
    "use server";
    await coursesRepository.deleteCourse({ id: courseId });
    revalidatePath(revalidatePagePath);
  };

  return (
    <div className="flex flex-col gap-3">
      {coursesList.map((course) => (
        <CourseItem
          course={course}
          onDelete={handleDelete.bind(null, course.id)}
          key={course.id}
        />
      ))}
    </div>
  );
}
