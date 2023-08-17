class CaixaDaLanchonete {

  calcularValorDaCompra(metodoDePagamento, itens) {

    //itens = ["cafe,3","sanduiche,1","combo1,2"] 
    //metodoDePagamento = "credito"
    if (itens.length == 0) {
      return "Não há itens no carrinho de compra!"
    }

    let cardapio = {
      cafe: 3.00,
      chantily: 1.50,
      suco: 6.20,
      sanduiche: 6.50,
      queijo: 2.00,
      salgado: 7.25,
      combo1: 9.50,
      combo2: 7.50
    }

    let sanduiche = false
    let queijo = false
    let chantily = false
    let cafe = false



    let totalDaCompra = 0



    for (let item of itens) {
      let CodigoQuantidade = item.split(",")

      if (!(CodigoQuantidade[0] in cardapio)){
        return "Item inválido!"
      }
      
      if (CodigoQuantidade[1] <= 0) {
        return "Quantidade inválida!"
      }
      
      totalDaCompra = cardapio[CodigoQuantidade[0]] * CodigoQuantidade[1] + totalDaCompra


      if (CodigoQuantidade[0] == "sanduiche") {
        sanduiche = true
      }

      if (CodigoQuantidade[0] == "queijo") {
        queijo = true
      }

      if (CodigoQuantidade[0] == "chantily") {
        chantily = true
      }

      if (CodigoQuantidade[0] == "cafe") {
        cafe = true
      }
    }

    if (queijo) {
      if (!sanduiche) {
        return "Item extra não pode ser pedido sem o principal"
      }
    }
    if (chantily) {
      if (!cafe) {
        return "Item extra não pode ser pedido sem o principal"
      }
    }

    if (metodoDePagamento == "dinheiro") {
      totalDaCompra = 0.95 * totalDaCompra
    }

    if (metodoDePagamento == "credito") {
      totalDaCompra = 0.03 * totalDaCompra + totalDaCompra
    }

    if (metodoDePagamento != "debito" && metodoDePagamento != "credito" && metodoDePagamento != "dinheiro") {
      return "Forma de pagamento inválida!";
    }

    let valorFinal = "R$ " + totalDaCompra.toFixed(2)
    valorFinal = valorFinal.replace(".", ",")


    return valorFinal;
  }

}

export { CaixaDaLanchonete };
