export const environment = {
  production: false,
  http      : {
    // server: "http://192.168.100.93:8080",
    server: "http://localhost:8080",
    distribuidor  : {
      listar            : "/tienda/ordenaris/api/distribuidor/listar",
      informacion       : "/tienda/ordenaris/api/distribuidor/#uuid#/informacion"
    },
    producto: {
      listar          : "/tienda/ordenaris/api/producto/#uuid#/listaFiltradaDistribuidor"
    }
  }
};
