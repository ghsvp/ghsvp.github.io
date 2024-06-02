export type MarkerProps = {
  title: string;
  icon: string;
  id: string;
  children?: React.ReactNode;
};

export default function Marker({ title, id, icon, children }: MarkerProps) {
  return (
    <a id={id} data-title={title} data-icon={icon}>
      {children}
    </a>
  );
}
