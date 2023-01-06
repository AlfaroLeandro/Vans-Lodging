(function(window, undefined) {
  var dictionary = {
    "8ca64b53-2569-47b6-b107-7e6f907f5ea7": "Cargando",
    "78660893-b1c8-4512-86e9-24740016471e": "Calendario",
    "fdaa7f8d-b5d9-4a89-8665-8147440a5d8b": "Home1",
    "a2861469-1db5-4618-ad0b-860a323d5444": "LogIn",
    "05947f0d-e1f6-474e-bc8c-d0d1d43b46f3": "Reporte_Avería",
    "b235d145-bd90-4ec5-b170-8930282c6f15": "recuperar",
    "96864c05-2ce7-4f56-b85b-83cf39aa4a77": "Buscando_Pasajeros",
    "2d9ea01b-9c01-41fe-8822-70505bf47b74": "Pasajero_en_Viaje",
    "03abe346-9c73-4c72-8cc6-974007b87579": "Perfil",
    "9a82dd17-af12-48bc-9f77-4020dab258f3": "Detalle fecha 21",
    "dcaa4ef6-90d1-43b6-8f81-70459c373323": "Historial_de_Viajes",
    "36f09d13-c869-41de-aad8-e2f742a2b2dc": "Detalle fecha 10",
    "cf4a22cb-2976-42a8-bb5b-c6de71aa7ee1": "Salida",
    "2b129e08-adce-485e-bfd6-475c5309a495": "Pasajero_Ausente",
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