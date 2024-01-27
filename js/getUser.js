const userList = document.getElementById("userList");

// Função para buscar e exibir a lista de usuários
async function getAllUser() {
  users = await getUser();
  try {
    users.forEach((user) => {
      const listItem = document.createElement("div");
      listItem.classList.add("userItem");

      const userText = document.createElement("p");
      userText.innerHTML = `<span>Nome:</span> ${user.name} <br> <span>E-mail:</span> ${user.email} <br> 
      <span>Telefone:<\span> ${user.telefone} <br> <span>Setor:</span> ${user.setor}`;

      listItem.appendChild(userText);
      userList.appendChild(listItem);
    });
  } catch (error) {
    console.error("Erro ao obter a lista de usuários:", error);
  }
}
getAllUser();
