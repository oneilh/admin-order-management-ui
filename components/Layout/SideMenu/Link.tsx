type LinkProps = Readonly<{
  href: string;
  iconComponent: React.ReactNode;
  active?:boolean;
}>;
const Link = ({ href, iconComponent, active=false }: LinkProps) => {
  return (
    <section className={`flex gap-4 items-center ${active ? 'bg-blue-700/10' : ''} p-4 rounded-xl cursor-pointer`}>
      {iconComponent}
      {href}
    </section>
  );
};

export default Link;
