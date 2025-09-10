const catalogo = [
    { id: 1, titulo: "Matrix", ano: 1999, nota: 8.7, genero: "Ficção Científica" },
    { id: 2, titulo: "O Poderoso Chefão", ano: 1972, nota: 9.2, genero: "Drama" },
    { id: 3, titulo: "A Origem", ano: 2010, nota: 8.8, genero: "Ficção Científica" },
    { id: 4, titulo: "Interestelar", ano: 2014, nota: 8.6, genero: "Ficção Científica" },
    { id: 5, titulo: "Pulp Fiction", ano: 1994, nota: 8.9, genero: "Crime" },
  ];
// função 1--
  const ListarFilmesGenero=(genero)=>{
    return catalogo.filter(filme=>filme.genero==genero);
  };

// função 2--
const titulosFilmes = (filmes)=>{
    return filmes.map(filme=>{
        return filme.titulo
    })
}

// função 3--
const gerarRelatorioDeFilmes= catalogo.filter(filme=>filme.ano<2000);

//função 4--
console.log(ListarFilmesGenero("Drama"));
console.log(titulosFilmes(catalogo));
console.log(gerarRelatorioDeFilmes);