/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { type FieldValues, useForm } from "react-hook-form";
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

type FormValues = z.infer<typeof schema>;

const createOption = (label: string) => ({
  label,
  value: label,
});

export const AddItemForm = () => {
  const [value, setValue] = useState<Option | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    setValue: setValueForm,
    formState: { errors },
  } = useForm({ resolver: zodResolver(schema), mode: "onTouched" });

  const { data: categoryData, refetch } = api.categories.getAll.useQuery();
  const { mutate } = api.categories.create.useMutation();

  const onSubmit = ({ name, category }: FieldValues) => {
    const selectedCategory = categoryData?.find(
      ({ name }) => category.value === name
    );
    const item = {
      name,
      categoryId: selectedCategory?.id,
    };
    console.log(item);
  };

  const options = categoryData?.map(({ name }) => createOption(name)) ?? [];

  const handleCreateOption = (inputValue: string) => {
    setIsLoading(true);
    mutate(inputValue, {
      onSuccess: () => {
        setValue(createOption(inputValue));
        setValueForm("category", createOption(inputValue));
        setIsLoading(false);
        void refetch();
      },
    });
  };

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
          <CreatableSelect
            {...register("category")}
            options={options}
            isDisabled={isLoading}
            placeholder={
              isLoading ? "Creating..." : "Select or create a category"
            }
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
              setValue(newValue as Option);
              setValueForm("category", newValue);
            }}
            onCreateOption={handleCreateOption}
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
