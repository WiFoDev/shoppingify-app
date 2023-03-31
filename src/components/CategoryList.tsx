import { SuperBalls } from "@uiball/loaders";
import { api } from "~/utils/api";
import { Category } from "./Category";

export const CategoryList = () => {
  const { data, isLoading } = api.categories.getAll.useQuery();

  if (isLoading)
    return (
      <div className="grid place-content-center pt-6">
        <SuperBalls color="black" size={45} speed={1.4} />
      </div>
    );
  if (data && data.length === 0)
    return <p>Nothing here yet. Add some items...</p>;

  return (
    <ul className="flex flex-col gap-7">
      {data &&
        data.map((category) => {
          return <Category {...category} key={category.id} />;
        })}
    </ul>
  );
};
