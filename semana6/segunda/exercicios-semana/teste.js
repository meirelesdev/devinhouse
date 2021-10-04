function digaOlaPara(quem) {
    console.log("Ola, "+ quem+ "!!")
}
digaOlaPara("1º")
digaOlaPara("2º")
setTimeout(digaOlaPara, 0, "3º")
digaOlaPara("4º")
setTimeout(digaOlaPara, 1, "5º")
digaOlaPara("6º")