import React from "react";
import { CourseItem } from "./_ui/course-item";
import { coursesRepository } from "../../entities/course/_repositories/courses";
import { compileMDX } from "@/shared/lib/mdx/server";

export default async function CoursesList() {
  const coursesList = await coursesRepository.getCoursesList();

  const compiledCourses = await Promise.all(
    coursesList.map(async (course) => ({
      ...course,
      description: await compileMDX(course.description).then((r) => r.code),
    })),
  );

  return (
    <div className="flex flex-col gap-3">
      {compiledCourses.map((course) => (
        <CourseItem key={course.id} course={course} />
      ))}
    </div>
  );
}
