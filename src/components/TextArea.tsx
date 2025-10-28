type TextAreaProps = {
  id: string;
  rows: number;
  value: string;
  onChangeHandler: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  disabled: boolean;
};

export const TextArea = (props: TextAreaProps) => {
  return (
    <textarea
      id={props.id}
      rows={props.rows}
      value={props.value}
      onChange={props.onChangeHandler}
      disabled={props.disabled}
      className="w-full p-4 border border-[#ccc] rounded-md"
    />
  );
};
