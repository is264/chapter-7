type InputProps = {
  type: string;
  id: string;
  value: string;
  onChangeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled: boolean;
};

export const Input = (props: InputProps) => {
  return (
    <input
      type={props.type}
      id={props.id}
      value={props.value}
      onChange={props.onChangeHandler}
      disabled={props.disabled}
      className="w-full p-4 border border-[#ccc] rounded-md"
    />
  );
};
