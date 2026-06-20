import { useState, useMemo, useDeferredValue } from "react";

// 1. Helper function to generate a massive list of mock users
const generateBigUserList = (count) => {
  const firstNames = [
    "John",
    "Jane",
    "Alex",
    "Emily",
    "Michael",
    "Sarah",
    "David",
    "Jessica",
    "Chris",
    "Ashley",
  ];
  const lastNames = [
    "Smith",
    "Doe",
    "Johnson",
    "Williams",
    "Brown",
    "Jones",
    "Miller",
    "Davis",
    "Garcia",
    "Rodriguez",
  ];

  return Array.from({ length: count }, (_, index) => {
    const firstName = firstNames[Math.floor(Math.random() * firstNames.length)];
    const lastName = lastNames[Math.floor(Math.random() * lastNames.length)];

    return {
      id: index + 1,
      name: `${firstName} ${lastName}`,
      email: `${firstName.toLowerCase()}.${lastName.toLowerCase()}${index}@example.com`,
      role: index % 5 === 0 ? "Admin" : "User",
    };
  });
};

const MOCK_USERS = generateBigUserList(10000);

const SearchUsers = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const deferredSearchTerm = useDeferredValue(searchTerm);

  const filteredUsers = useMemo(() => {
    if (!deferredSearchTerm) return MOCK_USERS;
    return MOCK_USERS.filter((user) =>
      user.name.toLowerCase().includes(deferredSearchTerm.toLowerCase()),
    );
  }, [deferredSearchTerm]);

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <h2>User Search Simulator (useDeferredValue)</h2>
      <p>
        Simulating <strong>{MOCK_USERS.length}</strong> total users.
      </p>

      <input
        type="text"
        placeholder="Search by name..."
        value={searchTerm}
        onChange={handleChange}
        style={{ padding: "8px", width: "300px", marginBottom: "20px" }}
      />

      <div
        style={{
          maxHeight: "400px",
          overflowY: "auto",
          border: "1px solid #ccc",
        }}
      >
        {filteredUsers.length > 0 ? (
          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            {filteredUsers.map((user) => (
              <li
                key={user.id}
                style={{ padding: "10px", borderBottom: "1px solid #eee" }}
              >
                <strong>{user.name}</strong> ({user.role}) —{" "}
                <span style={{ color: "#666" }}>{user.email}</span>
              </li>
            ))}
          </ul>
        ) : (
          <div style={{ textAlign: "center" }}>
            {">>>"}RENDERING{"<<<"}
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchUsers;
