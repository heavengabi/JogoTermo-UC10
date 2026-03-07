
//aqui são as palavras que vao ser sorteadas pro cara que ta jogando :P

const palavrasSorteio = ["arcar", "artes", "atriz", "atras", "avós", "bolas", "basta",
    "briga", "beijo", "bicar", "corte", "casar", "carro", "casca", "cerca", "caldo",
    "dedar", "dores","raios",
    "doida", "falar", "festa", "fazer", "facil", "fugir", "gente", "gosto", "garra",
    "girar", "gordo", "habil", "haver", "hifen", "heroi", "haste", "harpa", "iscas",
    "indio", "irmao", "ideal", "inicio", "jeito", "jogar", "jaspe", "jarra", "junto",
    "kombi", "kendo", "karma", "kilos", "kites", "louro", "lavar", "linda", "lacre",
    "lista", "morte", "masca", "mente", "minto", "mosca", "navio", "nozes", "nuvem",
    "ninho", "noite", "ostra", "outro", "ovulo", "ontem", "orgao", "parar", "pasto",
    "poste", "pomba", "quase", "quero", "quilo", "queda", "quota", "ratos", "rosto",
    "resto", "rival", "rodar", "sorte", "sair", "susto", "sabor", "sacar", "tarde",
    "tocar", "tigre", "torta", "tenso", "unico", "urrar", "untar", "vacas", "viver",
    "vazio", "vagar", "venda", "xucro", "xampu", "xenon", "xerox", "xingo", "ziper",
    "zumba", "zinco", "zelar", "zebra"]


//aqui fica as palavras que o usuario pode chutar, incluindo as do sorteio 

const palavrasChute = 
[
    "arcar", "artes", "atriz", "atras", "avós", "bolas", "basta", "briga",
    "beijo", "bicar", "corte", "casar", "carro", "casca", "cerca", "caldo", "dedar", "dores",
    "doida", "falar", "festa", "fazer", "facil", "fugir", "gente", "gosto", "garra",
    "girar", "gordo", "habil", "haver", "hifen", "heroi", "haste", "harpa", "iscas", "indio",
    "irmao", "ideal", "inicio", "jeito", "jogar", "jaspe", "jarra", "junto", "kombi", "kendo",
    "karma", "kilos", "kites", "louro", "lavar", "linda", "lacre", "lista", "morte", "masca",
    "mente", "minto", "mosca", "navio", "nozes", "nuvem", "ninho", "noite", "ostra", "outro",
    "ovulo", "ontem", "orgao", "parar", "pasto", "poste", "pomba", "quase", "quero", "quilo",
    "queda", "quota", "ratos", "rosto", "resto", "rival", "rodar", "sorte", "sair", "susto",
    "sabor", "sacar", "tarde", "tocar", "tigre", "torta", "tenso", "unico", "urrar", "untar",
    "vacas", "viver", "vazio", "vagar", "venda", "xucro", "xampu", "xenon", "xerox", "xingo",
    "ziper", "zumba", "zinco", "zelar", "zebra", "afago", "agora", "alado", "amigo", "anexo",
    "banco", "barro", "bicho", "bocal", "bruto", "caber", "calma", "cesta", "campo", "cesta",
    "claro", "dardo", "denso", "deter", "doces", "drops", "ecoar", "elite", "entes", "ereto",
    "exato", "facho", "gasto", "germe", "golpe", "gruta", "ganso", "haras", "harem", "hecta",
    "horta", "humor", "imune", "inata", "inter", "irado", "isola", "janta", "jarda", "judeu",
    "justo", "junta", "kayak", "lapis", "lutar", "lesao", "leigo", "lento", "magro", "malho",
    "manto", "mocho", "molho", "mural", "nariz", "ninar", "nobre", "nuvem", "obeso", "obrar",
    "otica", "oxida", "pardo", "pavor", "pilar", "pobre", "pular", "quiz", "quipa", "raiar",
    "reler", "rigor", "rimel", "roseo", "sabia", "sadio", "salmo", "salmo", "sapos", "sogra",
    "sogro", "tacho", "tempo", "tonto", "tonto", "truco", "troca", "troco", "ulema", "umbral",
    "urano", "ursos", "xibiu", "xingu", "zanga", "zumbi","raios"]


    //isso aqui é pra mim poder usar esse dicionario em outros arquivos
    module.exports = {palavrasChute, palavrasSorteio}