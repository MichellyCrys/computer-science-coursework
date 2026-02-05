// Classe base
class Unidade {
    constructor(nome, docentes) {
      this.nome = nome;
      this.docentes = docentes;
    }
  
    descricao() {
      return `Unidade: ${this.nome}, Docentes: ${this.docentes}`;
    }
  }
  
  // Classe derivada com herança
  class GrupoDePesquisa extends Unidade {
    constructor(nome, docentes, papers) {
      super(nome, docentes); // chama o construtor da classe base
      this.papers = papers;
    }
  
    publica(qtd) {
      this.papers += qtd;
      console.log(`Publicações atualizadas: ${this.papers}`);
    }
  
    infoCompleta() {
      return `${this.descricao()}, Papers: ${this.papers}`;
    }
  }
  
  // Teste
  const bdri = new GrupoDePesquisa("BDRI", 6, 100);
  console.log(bdri.infoCompleta());
  bdri.publica(2);
  