db.voos.find({
    "empresa.nome": "GOL",
    ano: 2017,
  }, 
  {
    _id: 0,
    vooId: 1,
    "empresa.nome": 1,
    "aeroportoOrigem.nome": 1,
    "aeroportoDestino.nome": 1,
    ano: 2016,
    mes: 1,
  }); 