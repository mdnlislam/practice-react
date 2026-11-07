import Props from "@/component/props";

export default function TestPage() {
  const name = {
    firstName: "John",
    lastName: "Doe",
    id: 12345,
  };

  return (
    <div>
      <h1>Test Page</h1>
      <Props name={name} />
      <p>This is a test page for the application.</p>
    </div>
  );
}
