type Header = {
  title: string
}
const Header: React.FC<Header> = ({ title }) => {
  return (
    <header>
      <h1>{title}</h1>
    </header>
  );
};
export default Header;
