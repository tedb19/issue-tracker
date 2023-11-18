"use client";
import { ErrorMessage, Spinner } from "@/app/components";
import { createIssueSchema } from "@/app/validationSchemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { Issue } from "@prisma/client";
import { Box, Button, Callout, Grid, TextField } from "@radix-ui/themes";
import axios from "axios";
import "easymde/dist/easymde.min.css";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { AiOutlineInfoCircle } from "react-icons/ai";
import SimpleMDE from "react-simplemde-editor";
import { z } from "zod";

type IssueFormData = z.infer<typeof createIssueSchema>;

interface Props {
  issue?: Issue;
}
const IssueForm = ({ issue }: Props) => {
  const router = useRouter();
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IssueFormData>({
    resolver: zodResolver(createIssueSchema),
  });
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmitIssue = async (data: IssueFormData) => {
    setIsSubmitting(true);
    try {
      await axios.post("/api/issues", data);
      router.push("/issues");
    } catch (error) {
      setError("An error occured!");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Grid gap="4" columns={{ initial: "1", md: "2" }}>
      <Box className="space-y-3">
        {error && (
          <Callout.Root color="red">
            <Callout.Icon>
              <AiOutlineInfoCircle />
            </Callout.Icon>
            <Callout.Text>{error}</Callout.Text>
          </Callout.Root>
        )}
        <form className="space-y-3" onSubmit={handleSubmit(handleSubmitIssue)}>
          <TextField.Root>
            <TextField.Input
              placeholder="Title"
              defaultValue={issue?.title}
              {...register("title")}
            />
          </TextField.Root>
          <ErrorMessage>{errors.title?.message}</ErrorMessage>
          <Controller
            name="description"
            control={control}
            defaultValue={issue?.description}
            render={({ field }) => (
              <SimpleMDE placeholder="Description" {...field} />
            )}
          />
          <ErrorMessage>{errors.description?.message}</ErrorMessage>
          <Button disabled={isSubmitting}>
            {issue ? "Edit" : "Create"} Issue {isSubmitting && <Spinner />}
          </Button>
        </form>
      </Box>
    </Grid>
  );
};

export default IssueForm;
