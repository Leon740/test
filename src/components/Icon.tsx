interface IconPropsI {
  className: string;
}

export function Icon({ className = '' }: IconPropsI) {
  return <i className={`icon-${className}`} />;
}
