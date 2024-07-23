"use server";

import { revalidatePath } from "next/cache";
import { CreateListElementCommand } from "./model/types";
import { coursesRepository } from "./courses.repository";

export const createCourseAction = async (
  command: CreateListElementCommand,
  revalidatePagePath: string,
) => {
  await coursesRepository.createCourse(command);
  revalidatePath(revalidatePagePath);
};
