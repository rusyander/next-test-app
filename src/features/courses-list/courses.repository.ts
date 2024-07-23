import { dbClient } from "@/shared/lib/db";
import { cache } from "react";
import {
  CourseListElement,
  CreateListElementCommand,
  DeleteCourseListElementCommand,
} from "./model/types";

class CoursesRepository {
  getCoursesList = cache(
    (): Promise<CourseListElement[]> => dbClient.course.findMany(),
  );

  createCourse = async (
    command: CreateListElementCommand,
  ): Promise<CourseListElement> => {
    return dbClient.course.create({ data: command });
  };

  deleteCourse = async (command: DeleteCourseListElementCommand) => {
    return dbClient.course.delete({ where: { id: command.id } });
  };
}

export const coursesRepository = new CoursesRepository();
