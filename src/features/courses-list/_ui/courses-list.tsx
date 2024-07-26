"use client";
import { CourseEntity } from "@/entities/course/course";
import { CourseItem } from "./course-item";
import { coursesListApi } from "../api";

export default function CoursesListClient({
  coursesList,
}: {
  coursesList: CourseEntity[];
}) {
  const { data: coursesLists } = coursesListApi.coursesListRouter.get.useQuery(
    undefined,
    {
      initialData: coursesList,
    },
  );

  return (
    <div className="flex flex-col gap-3">
      {coursesLists.map((course: any) => (
        <CourseItem key={course.id} course={course} />
      ))}
    </div>
  );
}
