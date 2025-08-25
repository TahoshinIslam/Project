document.getElementById("loadUsers").addEventListener("click", fetchUsers);

async function fetchUsers() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await response.json();
    displayUsers(users);
  } catch (error) {
    console.error("Error fetching users:", error);
    document.getElementById(
      "userList"
    ).innerHTML = `<p style="color:red;">Failed to load users.</p>`;
  }
}

function displayUsers(users) {
  const userList = document.getElementById("userList");
  userList.innerHTML = ""; // clear before adding new data

  users.forEach((user) => {
    const card = document.createElement("div");
    card.className = "user-card";
    card.innerHTML = `
      <h3>${user.name}</h3>
      <p><strong>Email:</strong> ${user.email}</p>
      <p><strong>Phone:</strong> ${user.phone}</p>
      <p><strong>Company:</strong> ${user.company.name}</p>
    `;
    userList.appendChild(card);
  });
}
