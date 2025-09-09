// ------------------- Part 1 -------------------
async function loadUsers() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    if (!res.ok) throw new Error("Failed to fetch users");
    const data = await res.json();
    renderUsers(data);
  } catch (err) {
    document.getElementById("usersError").textContent = err.message;
  }
}

function renderUsers(users) {
  const tbody = document.querySelector("#usersTable tbody");
  //一次性插入
  tbody.innerHTML = users
    .map(
      (u) => `
  <tr>
    <td>${u.id}</td>
    <td>${u.name}</td>
    <td>${u.username}</td>
    <td>${u.email}</td>
    <td>${u.address.city}</td>
    <td>${u.company.name}</td>
  </tr>
`
    )
    .join("");
  //逐行加入
  //   tbody.innerHTML = "";
  //   users.forEach(u => {
  //     const row = `<tr>
  //       <td>${u.id}</td>
  //       <td>${u.name}</td>
  //       <td>${u.username}</td>
  //       <td>${u.email}</td>
  //       <td>${u.address.city}</td>
  //       <td>${u.company.name}</td>
  //     </tr>`;
  //     tbody.insertAdjacentHTML("beforeend", row);
  //   });
}

// ------------------- Part 2 -------------------
async function searchUser() {
  const id = document.getElementById("userIdInput").value.trim();
  const errorEl = document.getElementById("searchError");

  // reset error
  errorEl.textContent = "";

  if (!id) return;

  try {
    const [userRes, postsRes, todosRes] = await Promise.all([
      fetch(`https://jsonplaceholder.typicode.com/users/${id}`),
      fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`),
      fetch(`https://jsonplaceholder.typicode.com/todos?userId=${id}`),
    ]);

    if (!userRes.ok) throw new Error("User not found");

    const user = await userRes.json();
    if (Object.keys(user).length === 0) throw new Error("User not found");

    const posts = await postsRes.json();
    const todos = await todosRes.json();

    renderUser(user, posts, todos);
  } catch (err) {
    errorEl.textContent = "User was not found. Please try another user ID";
    document.getElementById("userIdInput").value = "";
    clearUserData();
  }
}

function renderUser(user, posts, todos) {
  // ===== User Info（关键字段） =====
  const infoList = document.getElementById("userInfo");
  infoList.innerHTML = "";

  const userInfoItems = [
    `id: ${user.id}`,
    `name: ${user.name}`,
    `username: ${user.username}`,
    `email: ${user.email}`,
    `city: ${user.address.city}`,
    `company: ${user.company.name}`,
  ];

  userInfoItems.forEach((item) => {
    infoList.insertAdjacentHTML("beforeend", `<li>${item}</li>`);
  });

  // ===== User Posts（去掉冗余 userId） =====
  const postList = document.getElementById("userPosts");
  postList.innerHTML = "";
  posts.forEach((p) => {
    const li = `
      <li>
        id: ${p.id}<br>
        title: ${p.title}<br>
        body: ${p.body}
      </li>
    `;
    postList.insertAdjacentHTML("beforeend", li);
  });

  // ===== User Todos（去掉冗余 userId） =====
  const todoList = document.getElementById("userTodos");
  todoList.innerHTML = "";
  todos.forEach((t) => {
    const li = `
      <li>
        id: ${t.id}<br>
        title: ${t.title}<br>
        completed: ${t.completed}
      </li>
    `;
    todoList.insertAdjacentHTML("beforeend", li);
  });
}

function clearUserData() {
  document.getElementById("userInfo").innerHTML = "";
  document.getElementById("userPosts").innerHTML = "";
  document.getElementById("userTodos").innerHTML = "";
}

// ------------------- Part 3 -------------------
async function delayedRequest(
  url = "https://jsonplaceholder.typicode.com/users/1"
) {
  const msg = document.getElementById("delayedMessage");
  msg.textContent = "Waiting ...";

  setTimeout(async () => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      console.log(JSON.stringify(data, null, " "));
      msg.textContent = "Check console for the data";
    } catch (err) {
      msg.textContent = "Request failed.";
    }
  }, 2000);
}

// ------------------- Event Binding -------------------
document.getElementById("loadUsersBtn").addEventListener("click", loadUsers);
document.getElementById("searchBtn").addEventListener("click", searchUser);
// 默认用 users/1，如果想测试别的 URL，可以传参数，例如：
// () => delayedRequest("https://jsonplaceholder.typicode.com/users/5")
document.getElementById("delayedBtn").addEventListener("click", () => delayedRequest());
