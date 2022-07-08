export default function App({ user: { id, email, username } }) {
  return (
    <div>
      <p>id: {id}</p>
      <p>email: {email}</p>
      <p>username: {username}</p>
    </div>
  );
}
