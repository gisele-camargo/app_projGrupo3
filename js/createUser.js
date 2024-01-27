const form = document.querySelector(".formCreate");
const submitButton = form.querySelector(".btn");

function create() {
  form.addEventListener("submit", async (event) => {
    event.preventDefault(); // Impede o envio do formulário

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

    try {
      const user = await createUser(newUser);
      console.log("Funcionário cadastrado com sucesso", user);
    } catch (error) {
      console.error("Erro:", error);
    }
  });
}

create();
