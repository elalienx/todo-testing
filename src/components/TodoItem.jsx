export default function TodoItem({ item }) {
  const { name, checked } = item;

  return (
    <li>
      <input type="checkbox" value={checked} />
      {name}
    </li>
  );
}
