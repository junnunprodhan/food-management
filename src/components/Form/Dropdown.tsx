import { useFormContext } from "react-hook-form";
type TDropdown = {
  name: string;
  items: string[];
  label: string;
};
const Dropdown = ({ name, items, label }: TDropdown) => {
  const { register } = useFormContext();
  return (
    <div className="flex flex-col">
      <h1>{label}:</h1>
      <select
        className="w-full mt-1 border-2 border-gray-300 px-3 py-2.5 rounded-md focus:ring-2 ring-gray-300 outline-none dark:text-white dark:bg-black"
        {...register(name, { required: true })}
      >
        {items?.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
};
export default Dropdown;
