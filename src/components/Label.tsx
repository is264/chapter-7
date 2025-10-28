type LabelProps = {
  htmlFor: string;
  text: string;
};

export const Label = (props: LabelProps) => {
  return (
    <label htmlFor={props.htmlFor} className="w-[200px]">
      {props.text}
    </label>
  );
};
