const BotaoConverter = document.querySelector(".Botao-Converter")
const SelecionarMoeda = document.querySelector(".Selecionar-Valor")


//function formatarMoeda(event) {
//const input = event.target;
//let valor = input.value;

// Remove todos os caracteres que não são números
//valor = valor.replace(/\D/g, "");

// Converte para um número de ponto flutuante
//valor = (valor / 100).toFixed(2);

// Substitui o ponto por vírgula para o padrão brasileiro
//valor = valor.replace(".", ",");

// Adiciona pontos como separador de milhar
//valor = valor.replace(/\B(?=(\d{3})+(?!\d))/g, ".");

// Define o valor formatado de volta no input
//input.value = valor;

//código comentado para futura solução.

function ConverterValores() {
  const ValorDoInput = document.querySelector(".ValorInput").value
  const ValorParaConverter = document.querySelector(".Moeda-para-converter")
  const ValorFoiConvertido = document.querySelector(".Moeda-convertida")





  const BRL = 1.00   //Real Brasileiro
  const USD = 5.49   //Dólar Americano
  const EUR = 6.15   //Euro
  const GBP = 7.31   //Libra Esterlina
  const JPY = 0.038  //Iene   
  const AUD = 3.75   //Dólar Australiano
  const CHF = 6.56   //Franco Suíço
  const CAD = 4.11   //Dólar Canadense
  const CNH = 0.78   //Renminbi Hong Kong
  const ARS = 0.0058 //Peso Argentino
  const TRY = 0.16   //Lira Turca
  const KRW = 0.0041 //Won Coréia do Sul

  ValorParaConverter.innerHTML = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL"
  }).format(ValorDoInput / BRL)

  if (SelecionarMoeda.value == "USD") {
    ValorFoiConvertido.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD"
    }).format(ValorDoInput / USD)
  }

  if (SelecionarMoeda.value == "EUR") {
    ValorFoiConvertido.innerHTML = new Intl.NumberFormat("fr-FR", {
      style: "currency",
      currency: "EUR"
    }).format(ValorDoInput / EUR)
  }

  if (SelecionarMoeda.value == "GBP") {
    ValorFoiConvertido.innerHTML = new Intl.NumberFormat("fr-FR", {
      style: "currency",
      currency: "GBP"
    }).format(ValorDoInput / GBP)
  }

  if (SelecionarMoeda.value == "JPY") {
    ValorFoiConvertido.innerHTML = new Intl.NumberFormat("fr-FR", {
      style: "currency",
      currency: "JPY"
    }).format(ValorDoInput / JPY)
  }

  if (SelecionarMoeda.value == "AUD") {
    ValorFoiConvertido.innerHTML = new Intl.NumberFormat("fr-FR", {
      style: "currency",
      currency: "AUD"
    }).format(ValorDoInput / AUD)
  }

  if (SelecionarMoeda.value == "CHF") {
    ValorFoiConvertido.innerHTML = new Intl.NumberFormat("fr-FR", {
      style: "currency",
      currency: "CHF"
    }).format(ValorDoInput / CHF)
  }

  if (SelecionarMoeda.value == "CAD") {
    ValorFoiConvertido.innerHTML = new Intl.NumberFormat("fr-FR", {
      style: "currency",
      currency: "CAD"
    }).format(ValorDoInput / CAD)
  }

  if (SelecionarMoeda.value == "CNH") {
    ValorFoiConvertido.innerHTML = new Intl.NumberFormat("fr-FR", {
      style: "currency",
      currency: "CNH"
    }).format(ValorDoInput / CNH)
  }

  if (SelecionarMoeda.value == "ARS") {
    ValorFoiConvertido.innerHTML = new Intl.NumberFormat("fr-FR", {
      style: "currency",
      currency: "ARS"
    }).format(ValorDoInput / ARS)
  }

  if (SelecionarMoeda.value == "TRY") {
    ValorFoiConvertido.innerHTML = new Intl.NumberFormat("fr-FR", {
      style: "currency",
      currency: "TRY"
    }).format(ValorDoInput / TRY)
  }

  if (SelecionarMoeda.value == "KRW") {
    ValorFoiConvertido.innerHTML = new Intl.NumberFormat("fr-FR", {
      style: "currency",
      currency: "KRW"
    }).format(ValorDoInput / KRW)
  }



}

function TrocaValor() {
  const MoedaNome = document.getElementById("Moeda-Nome")
  const MoedaImagem = document.querySelector(".Moeda-Imagem")


  if (SelecionarMoeda.value == "BRL") {
    MoedaNome.innerHTML = "Real Brasileiro"
    MoedaImagem.src = "./assets/brasil.png"
  }

  if (SelecionarMoeda.value == "USD") {
    MoedaNome.innerHTML = "Dólar Americano"
    MoedaImagem.src = "./assets/Estados Unidos.png"
  }
  if (SelecionarMoeda.value == "EUR") {
    MoedaNome.innerHTML = "Euro"
    MoedaImagem.src = "./assets/Euro.png"
  }
  if (SelecionarMoeda.value == "GBP") {
    MoedaNome.innerHTML = "Libra Esterlina"
    MoedaImagem.src = "./assets/Libra.png"
  }
  if (SelecionarMoeda.value == "JPY") {
    MoedaNome.innerHTML = "Iene Japão "
    MoedaImagem.src = "./assets/Japao2.png"
  }
  if (SelecionarMoeda.value == "AUD") {
    MoedaNome.innerHTML = "Dólar Australiano"
    MoedaImagem.src = "./assets/Australia.png"
  }
  if (SelecionarMoeda.value == "CHF") {
    MoedaNome.innerHTML = "Franco Suíço"
    MoedaImagem.src = "./assets/Franco Suíço2.png"
  }
  if (SelecionarMoeda.value == "CAD") {
    MoedaNome.innerHTML = "Dólar Canadense"
    MoedaImagem.src = "./assets/Canada.png"
  }
  if (SelecionarMoeda.value == "CNH") {
    MoedaNome.innerHTML = "Renminbi China"
    MoedaImagem.src = "./assets/China.png"
  }
  if (SelecionarMoeda.value == "ARS") {
    MoedaNome.innerHTML = "Peso Argentino"
    MoedaImagem.src = "./assets/Argentina.png"
  }
  if (SelecionarMoeda.value == "TRY") {
    MoedaNome.innerHTML = "Lira Turca"
    MoedaImagem.src = "./assets/Turquia2.png"
  }
  if (SelecionarMoeda.value == "KRW") {
    MoedaNome.innerHTML = "Won Coréia do Sul"
    MoedaImagem.src = "./assets/CoreiaSul2.png"
  }

  ConverterValores()
}

SelecionarMoeda.addEventListener("change", TrocaValor)

BotaoConverter.addEventListener("click", ConverterValores)


