import { dbClient } from "@/shared/lib/db";
import { cache } from "react";
import { CourseEntity } from "../_domain/types";
import { fetchManifest } from "@/shared/api/content";
import { privateConfig } from "@/shared/config/private";

class CoursesRepository {
  getCoursesList = cache(async (): Promise<CourseEntity[]> => {
    const manifest = await fetchManifest();
    console.log("***********************", manifest);

    return [
      {
        id: "1",
        name: "Course 1",
        description: "Description 1",
        slug: "course-1",
      },
      {
        id: "2",
        name: "Course 2",
        description: "Description 2",
        slug: "course-2",
      },
      {
        id: "3",
        name: "Course 3",
        description: "Description 3",
        slug: "course-3",
      },
    ];
  });
}

export const coursesRepository = new CoursesRepository();
