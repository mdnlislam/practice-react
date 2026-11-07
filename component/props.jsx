export default function Props({ name }) {
  return (
    <div>
      <p>
        Hello, {name.firstName} {name.lastName}!
      </p>
      <h1> {name.id}</h1>

      <p>This is a simple component that accepts props.</p>
    </div>
  );
}
