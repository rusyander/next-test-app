"use client";
import React, { useTransition } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/shared/ui/card";
import { Button } from "@/shared/ui/button";
import { CourseEntity } from "@/entities/course/course";

export default function CourseItem({ course }: { course: CourseEntity }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{course.title}</CardTitle>
        <CardDescription>{course.description}</CardDescription>
      </CardHeader>
    </Card>
  );
}
