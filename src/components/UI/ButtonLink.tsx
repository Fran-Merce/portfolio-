type ButtonType = 'btn-primary' | 'btn-secondary';
interface Props {
  text: string;
  href?: string;
  type: ButtonType;
  target?: string;
}

export const ButtonLink = ({ text, href, type, target }: Props) => {
  return (
    <a className='max-w-fit ' target={target} href={href}>
      <button className={`custom-btn  ${type} `}>
        <span>{text}</span>
      </button>
    </a>
  );
};
