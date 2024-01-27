const userList = document.getElementById("userList");
const updateFormContainer = document.getElementById("updateFormContainer");

// Função para buscar e exibir a lista de usuários
async function UpdateUserById() {
  try {
    users = await getUser();

    users.forEach((user) => {
      const listItem = document.createElement("div");
      listItem.classList.add("userItem");

      const userText = document.createElement("p");
      userText.innerHTML = `<span>Nome:</span> ${user.name} <br> <span>E-mail:</span> ${user.email} <br><span>Telefone:<\span> ${user.telefone} <br> <span>Setor:<\span> ${user.setor}`;

      const SendButton = document.createElement("button");
      SendButton.textContent = "Atualizar";
      SendButton.classList.add("updateButton");
      SendButton.addEventListener("click", () => {
        const modal = document.getElementById("demo-modal"); // Access the first element with the "modal" class
        modal.style.visibility = "visible"; // Set the "visibility" style property to "visible"
        modal.style.opacity = "1"; // Set the "opacity" style property to "1"
        openUpdateForm(user.id, user.email, user.name, user.telefone, user.setor);
      });

      listItem.appendChild(userText);
      listItem.appendChild(SendButton);
      userList.appendChild(listItem);
    });
  } catch (error) {
    console.error("Erro ao obter a lista de usuários:", error);
  }
}

async function openUpdateForm(userId, email, name, telefone, setor) {
  const updateFormHTML = `
    <form id="updateForm" class="formUpdate">
      <h2>Atualizar Usuário</h2>
      <label for="email">E-mail</label>
      <input type="email" placeholder="Digite o novo e-mail" id="email" value="${email}" required>
      <label for="name">Nome</label>
      <input type="text" placeholder="Digite o novo nome" id="name" value="${name}" required>
      <label for = "telefone">Telefone</label>
      <input type="text" placeholder="Digite seu telefone" id="telefone" valeu=${telefone} required />
      <label for= "setor">Setor</label>
      <input type="text" placeholder="Digite o setor" id="setor" value="${setor}" required />
      <button type="submit" class="btn">Atualizar</button>
    </form>
  `;

  updateFormContainer.innerHTML = updateFormHTML;

  const updateForm = document.getElementById("updateForm");

  updateForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const name = document.getElementById("name").value;
    const telefone = document.getElementById("telefone").value;
    const setor = document.getElementById("setor").value;
    

    const newUser = {
      email,
      name,
      telefone,
      setor,
      
    };

    await updateUser(userId, newUser);
  });
}

// Chama a função para buscar e exibir os usuários ao carregar a página
UpdateUserById();
