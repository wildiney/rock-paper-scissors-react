type Header = {
  title: string
}
const Header: React.FC<Header> = ({ title }) => {
  return (
    <header className="flex bg-primary">
      <h1 className="font-sriracha font-bold  text-2xl text-center p-2 text-white w-full">{title}</h1>
    </header>
  );
};
export default Header;
