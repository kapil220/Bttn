function Dropdown() {
  return (
    <div>
      <details className="dropdown">
        <summary className="m-1 btn">Account</summary>
        <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
          <li>
            <a>Item 1</a>
          </li>
          <li>
            <a>Item 2</a>
          </li>
        </ul>
      </details>
    </div>
  );
}

export default Dropdown;
