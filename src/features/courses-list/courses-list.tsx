import React from "react";
import CoursesListClient from "./_ui/courses-list";
import { coursesListServerApi } from "./controller";

export default async function CoursesList() {
  const coursesList = await coursesListServerApi.coursesListRouter.get.fetch();
  return <CoursesListClient coursesList={coursesList} />;
}
