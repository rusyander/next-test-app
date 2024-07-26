import { createId } from "@/shared/lib/id";
import { CourseEntity } from "../_domain/types";
import { coursesRepository } from "../_repositories/courses";
import { privateConfig } from "@/shared/config/private";

type GetCoursesList = {};

export class GetCoursesListServices {
  async exec(data?: GetCoursesList) {
    return coursesRepository.getCoursesList();
  }
}

export const getCoursesListServices = new GetCoursesListServices();
