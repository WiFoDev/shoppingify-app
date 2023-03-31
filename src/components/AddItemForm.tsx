/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-misused-promises */
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import CreatableSelect from "react-select/creatable";
import { useState } from "react";
import { api } from "~/utils/api";

interface Option {
  readonly label: string;
  readonly value: string;
}

const schema = z.object({
  name: z
    .string({
      required_error: "Name is required",
      invalid_type_error: "Name must be a string",
    })
    .min(1, { message: "Name must be at least 1 character long" })
    .max(50),
  note: z.string().max(255).optional(),
  image: z.string().optional(),
  category: z.object(
    {
      label: z.string(),
      value: z.string(),
    },
    { required_error: "Category is required" }
  ),
});

const createOption = (label: string) => ({
  label,
  value: label.toLowerCase().replace(/\W/g, ""),
});

export const AddItemForm = () => {
  const [value, setValue] = useState<Option | null>(null);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({ resolver: zodResolver(schema), mode: "onTouched" });

  const { data } = api.categories.getAll.useQuery();
  // const { mutate } = useCategoryMutation();

  const onSubmit = (data: any) => console.log(data);

  const options = data?.map(({ name }) => createOption(name)) ?? [];

  const handleCreateOption = (inputValue: string) => {
    // mutate(
    //   { name: inputValue },
    //   {
    //     onSuccess: () => {
    //       setValue(createOption(inputValue));
    //       trigger("category");
    //     },
    //   }
    // );
  };

  console.log(value);

  return (
    <section className="flex flex-col gap-3">
      <h2 className="text-lg font-medium">Add a new Item</h2>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
        <label className="flex flex-col gap-1">
          Name
          <input
            {...register("name")}
            className="rounded-xl border-2 border-[#BDBDBD] px-3 py-4"
            placeholder="Enter a Name"
            type="text"
          />
          <span
            className={`${
              !errors.name ? "invisible" : ""
            } h-3 pl-3 text-sm text-red-500`}
          >
            {errors.name?.message as string}
          </span>
        </label>
        <label className="flex flex-col gap-1">
          Note (optional)
          <textarea
            className="resize-none rounded-xl border-2 border-[#BDBDBD] px-3 py-4"
            placeholder="Enter a Note"
            rows={4}
            {...register("note")}
          />
        </label>
        <label className="flex flex-col gap-1">
          Image (optional)
          <input
            className="rounded-xl border-2 border-[#BDBDBD] px-3 py-4"
            placeholder="Enter a image url"
            type="text"
            {...register("image")}
          />
          <span
            className={`${
              !errors.image ? "invisible" : ""
            } h-3 pl-3 text-sm text-red-500`}
          >
            {errors.image?.message as string}
          </span>
        </label>
        <label className="flex flex-col gap-1">
          Category
          <Controller
            control={control}
            name="category"
            render={({ field }) => (
              <CreatableSelect
                {...field}
                options={options}
                styles={{
                  container: (provided) => ({
                    ...provided,
                    border: "2px solid #BDBDBD",
                    borderRadius: "0.75rem",
                  }),
                  control: (provided) => ({
                    ...provided,
                    border: "none",
                    borderRadius: "0.75rem",
                    padding: "0.75rem 0",
                  }),
                  menu: (provided) => ({
                    ...provided,
                    borderRadius: "0.75rem",
                  }),
                  option: (provided) => ({
                    ...provided,
                    borderRadius: "0.75rem",
                    padding: "0.75rem",
                  }),
                }}
                value={value}
                onChange={(newValue) => {
                  field.onChange(newValue);
                  setValue(newValue as Option);
                }}
                onCreateOption={handleCreateOption}
              />
            )}
          />
          <span
            className={`${
              !errors.category ? "invisible" : ""
            } h-3 pl-3 text-sm text-red-500`}
          >
            {errors.category?.message as string}
          </span>
        </label>
        <div className="mt-4 flex items-center gap-8 place-self-center">
          <button type="button">Cancel</button>
          <button
            className="rounded-xl bg-primary px-5 py-4 font-bold text-white"
            type="submit"
          >
            Save
          </button>
        </div>
      </form>
    </section>
  );
};
