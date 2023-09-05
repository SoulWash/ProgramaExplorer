import { GithubUser } from "./githubUser.js";

export class Favorites {
  constructor(root) {
    this.root = document.querySelector(root);
    this.load();

    GithubUser.search("maykbrito").then((user) => console.log(user));
  }

  load() {
    this.entries = JSON.parse(localStorage.getItem("@github-favorites:")) || [];
  }

  save() {
    localStorage.setItem("@github-favorites:", JSON.stringify(this.entries));
  }

  async add(username) {
    try {
      const userExist = this.entries.find(
        (entry) => entry.login.toLowerCase() === username.toLowerCase()
      );

      if (userExist) {
        throw new Error("Usuário já cadastrado");
      }

      const user = await GithubUser.search(username);

      if (user.login === undefined) {
        throw new Error("Usuário não encontrado!");
      }
      this.entries = [user, ...this.entries];
      this.update();
      this.save();
    } catch (error) {
      alert(error.message);
    }
  }

  delete(user) {
    const filteredEntries = this.entries.filter(
      (entry) => entry.login !== user.login
    );

    this.entries = filteredEntries;
    this.update();
    this.save();
  }
}

export class FavoritesView extends Favorites {
  constructor(root) {
    super(root);

    this.tbody = this.root.querySelector("table tbody");
    this.bgTable = this.root.querySelector(".bg-table");
    this.update();
    this.onadd();
  }

  onadd() {
    const addbutton = this.root.querySelector(".search button");
    addbutton.addEventListener("click", () => {
      const { value } = this.root.querySelector(".search input");
      this.add(value);
    });
  }

  emptySearch(){
    const cont = document.querySelector(".cont");
    const isEmpty = this.entries.length === 0

    if (isEmpty){
      cont.classList.remove('sr-only')
      document.querySelector(".bg-table").style.border = "1px solid #4A808C"
      document.querySelector(".bg-table").style.borderRadius = "12px"
      document.querySelector(".border").style.border = "none"
    } else {
      cont.classList.add('sr-only')
      document.querySelector(".bg-table").style.border = "none"
      document.querySelector(".border").style.border = "1px solid #4A808C"
      document.querySelector(".border").style.borderRadius = "12px"
    }

  }

  update() {
    this.removeAlltr();

    this.entries.forEach((user) => {
      const row = this.createRow();
      row.querySelector(
        ".user img"
      ).src = `https://github.com/${user.login}.png`;
      row.querySelector(".user img").alt = `Imagem de ${user.name}`;
      row.querySelector(".user p").textContent = user.name;
      row.querySelector(".user a").href = `https://github.com/${user.login}`;
      row.querySelector(".user span").textContent = user.login;
      row.querySelector(".repositories").textContent = user.public_repos;
      row.querySelector(".followers").textContent = user.followers;

      row.querySelector(".remove").onclick = () => {
        const isOK = confirm("Are you sure you want to remove?");

        if (isOK) {
          this.delete(user);
        }
      };
      this.tbody.append(row);
      this.emptySearch()
    });
  }

  createRow() {
    const tr = document.createElement("tr");
    tr.innerHTML = `
        <td class="user">
            <img src="https://github.com/soulwash.png" alt="">
            <a href="" target="_blank">
                <p>Washington luiz</p>
                <span>soulwash</span>
            </a>
        </td>
        <td class="repositories">123</td>
        <td class="followers">546546</td>
        <td>
            <button class="remove">Remover</button>
        </td>
        `;
    return tr;
  }

  removeAlltr() {
    this.tbody.querySelectorAll("tr").forEach((tr) => {
      tr.remove();
      this.emptySearch()
    });
  }
}
