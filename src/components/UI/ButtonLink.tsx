type ButtonType = "btn-primary" | "btn-secondary";
interface Props {
  text: string;
  href?: string;
  type: ButtonType;
  target?: string;
  disabled?: boolean;
  customClass?: string;
}

export const ButtonLink = ({
  text,
  href,
  type,
  target,
  disabled = false,
  customClass = "",
}: Props) => {
  return (
    <a className="max-w-fit " target={target} href={href}>
      <button
        className={`custom-btn  ${type} ${customClass} ${
          disabled && "opacity-50 cursor-not-allowed bg-white/20"
        }`}
      >
        <span>{text}</span>
      </button>
    </a>
  );
};
