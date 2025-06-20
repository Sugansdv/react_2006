const Sidebar = () => {
  return (
    <div className="col-3 bg-light border-end" style={{ minHeight: "50vh" }}>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">Dashboard</li>
        <li className="list-group-item">Reports</li>
        <li className="list-group-item">Settings</li>
      </ul>
    </div>
  );
};

export default Sidebar;
