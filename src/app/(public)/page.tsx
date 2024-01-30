import { CoursesList } from "@/features/courses-list/pub/courses-list";
import { CreateCourseForm } from "@/features/courses-list/pub/create-course-form";

export default async function Home() {
  return (
    <main className="flex min-h-screen flex-col p-8">
      <h1 className="text-5xl mb-4">Next setup</h1>
      <CreateCourseForm revalidatePagePath="/" className="max-w-xs mb-10" />
      <CoursesList revalidatePagePath="/" />
    </main>
  );
}
