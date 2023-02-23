function Navigation() {
  return (
    <div className="Navigation">
      <nav>
        <ul>
          <li>
            <a href="/login">Login</a>
          </li>
          <li>
            <a href="/posts">Post list</a>
          </li>
          <li>
            <a href="/logout">Disconnect</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navigation;
