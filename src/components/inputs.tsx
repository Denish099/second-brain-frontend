// Input field component
export function Input({
  onChange = () => {},
  placeholder,
}: {
  onChange?: () => void;
  placeholder: string;
}) {
  return (
    <div>
      <input
        placeholder={placeholder}
        type="text"
        className="px-4 py-2 border rounded-2xl my-2 w-full"
        onChange={onChange}
      />
    </div>
  );
}
