(function(window, undefined) {
  var dictionary = {
    "f420e4ef-60a8-467f-a2d4-285ebd85cc69": "Detalle",
    "9a0315af-db55-4ba9-a96c-c1f4392eb2b8": "LogIn",
    "c2b5acc0-7c08-46fb-81c0-4745cda23714": "Recibo",
    "7e8caab1-b88c-40c0-bd49-27906cb022da": "Filtro",
    "853f1b3c-08ab-46b6-8e05-e21b919639cd": "gestion_tarjetas_agregar",
    "b580119b-c119-4ce0-b18c-612d3a13b66f": "Detalle with menu",
    "7039ddf3-b6fd-48f9-a207-006468e745f3": "RegistrarViajero2",
    "4d70f526-7fa5-4819-bdcc-bb6aa2d77497": "Perfil",
    "0fcc96a7-2332-4057-9c4c-f566f7138565": "loadScreen",
    "7b51f7df-04e9-4c48-befd-d85d513a996b": "habitaciones",
    "ffe6c059-b262-42d7-b6d7-40a397de123b": "Reserva_confirmada",
    "3df00100-9f44-4710-9231-36acf193c3c0": "gestion_tarjetas_detalle",
    "a6b869e2-2688-4946-8329-8f52d58f2246": "Boton_reservar",
    "538d83dc-4fe7-45d8-902a-fff77e5e9c17": "Resultados_busqueda",
    "0f3b92ae-5567-40ad-a1ab-bceaf748bb7d": "menu",
    "80c2f224-f237-4fb8-bf16-24a842008216": "gestion_tarjetas",
    "fa694501-ba0a-48a3-9e73-9cb32cd01635": "Home",
    "7b9c6bf2-a5f9-4da5-8313-e5705ad8bcd5": "Home Con Menu",
    "1040f7e4-536f-4bc9-8c4c-3f9e9eb438cf": "puntos_origen",
    "1582feba-1257-4ccf-858d-e7bb8ae200f9": "Resultados_busqueda Con Menu",
    "16fe3630-3d1f-4192-8865-804180ae3e3c": "viaje_buscarReserva",
    "4d58454c-206b-4647-867d-530dfe8edc9c": "Historial With Menu",
    "22eef7c5-9d3c-401a-a013-db6e81ee1cc4": "Historial",
    "cbada341-247e-4b9e-a6f2-0183df91ba54": "RegistrarViajero",
    "45d104d9-bb08-4280-959b-e3e7d8ed1a7b": "Recibo with menu",
    "f39803f7-df02-4169-93eb-7547fb8c961a": "Template 1",
    "bb8abf58-f55e-472d-af05-a7d1bb0cc014": "default"
  };

  var uriRE = /^(\/#)?(screens|templates|masters|scenarios)\/(.*)(\.html)?/;
  window.lookUpURL = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, url;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      url = folder + "/" + canvas;
    }
    return url;
  };

  window.lookUpName = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, canvasName;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      canvasName = dictionary[canvas];
    }
    return canvasName;
  };
})(window);