"use server";
import prisma from "@/lib/prisma";
import { getUserId } from "@/lib/utils";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";
import { CreatePost } from "./schemas";

export async function createPost(values: z.infer<typeof CreatePost>) {
  const userId = await getUserId();
  const validatedFields = CreatePost.safeParse(values);
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Missing fields. Failed to Create Post",
    };
  }
  const { fileUrl, caption } = validatedFields.data;
  try {
    // await prisma
  } catch (error) {}
}
