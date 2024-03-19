import { useFormContext } from "react-hook-form";
type TTextArea = {
  name: string;
  placeholder: string;
  label: string;
};
const TextArea = ({ name, placeholder, label }: TTextArea) => {
  const { register } = useFormContext();
  return (
    <div className="flex flex-col">
      <h1>{label}:</h1>
      <textarea
        rows={5}
        cols={5}
        className="w-full mt-1 border-2 dark:bg-black border-gray-300 px-3 py-2 rounded-md focus:ring-2 ring-gray-300 outline-none dark:text-white"
        {...register(name, { required: true })}
        placeholder={placeholder}
      ></textarea>
    </div>
  );
};
export default TextArea;
