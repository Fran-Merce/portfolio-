export interface FormValues {
  user_name: string;
  from_name: string;
  message: string;
}

export type HandleChangeType = React.ChangeEvent<
  HTMLInputElement | HTMLTextAreaElement
>;
