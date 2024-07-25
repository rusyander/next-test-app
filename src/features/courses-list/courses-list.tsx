import React from "react";
import { revalidatePath } from "next/cache";
import CourseItem from "./_ui/course-item";
import { coursesRepository } from "../../entities/course/_repositories/courses";

export default async function CoursesList() {
  const coursesList = await coursesRepository.getCoursesList();

  return (
    <div className="flex flex-col gap-3">
      {coursesList.map((course) => (
        <CourseItem course={course} key={course.id} />
      ))}
    </div>
  );
}
