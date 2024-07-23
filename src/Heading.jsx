import "./Heading.css";
export default function Heading({ name, url }) {
  return (
    <div className="heading">
      <img src={url} alt="" className="logo" />
      <h1 className="head">{name}</h1>
    </div>
  );
}
