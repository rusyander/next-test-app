import { cache } from "react";
import { CourseEntity } from "../_domain/types";
import { contentApi } from "@/shared/api/content";

class CoursesRepository {
  getCoursesList = cache(async (): Promise<CourseEntity[]> => {
    const manifest = await contentApi.fetchManifest();

    const fetchCourse = async (courseSlug: string): Promise<CourseEntity> => {
      const course = await contentApi.fetchCourse(courseSlug);

      return {
        id: course.id,
        title: course.title,
        description: course.description,
        slug: courseSlug,
      };
    };

    const settledCourse = await Promise.allSettled(
      manifest.courses.map(fetchCourse),
    );

    settledCourse.forEach((promise) => {
      if (promise.status === "rejected") {
        console.error(promise.reason);
      }
    });

    return settledCourse
      .filter((promise) => promise.status === "fulfilled")
      .map((course) => course.value);
  });
}

export const coursesRepository = new CoursesRepository();
