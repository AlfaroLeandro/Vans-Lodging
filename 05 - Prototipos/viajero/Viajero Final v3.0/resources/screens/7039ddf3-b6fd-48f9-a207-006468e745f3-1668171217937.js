jQuery("#simulation")
  .on("click", ".s-7039ddf3-b6fd-48f9-a207-006468e745f3 .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Button_1")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimAnd",
                "parameter": [ {
                  "action": "jimAnd",
                  "parameter": [ {
                    "action": "jimGreaterOrEquals",
                    "parameter": [ {
                      "action": "jimCount",
                      "parameter": [ {
                        "datatype": "property",
                        "target": "#s-Input_1",
                        "property": "jimGetValue"
                      } ]
                    },"8" ]
                  },{
                    "action": "jimEquals",
                    "parameter": [ {
                      "action": "jimCount",
                      "parameter": [ {
                        "action": "jimFilterData",
                        "parameter": {
                          "datatype": "datamaster",
                          "datamaster": "Viajero",
                          "value": {
                            "action": "jimEquals",
                            "parameter": [ {
                              "field": "0d260fcb-2bf1-4614-9c13-c66644535812"
                            },{
                              "datatype": "property",
                              "target": "#s-Input_1",
                              "property": "jimGetValue"
                            } ]
                          }
                        }
                      } ]
                    },"0" ]
                  } ]
                },{
                  "action": "jimEquals",
                  "parameter": [ {
                    "datatype": "property",
                    "target": "#s-Input_2",
                    "property": "jimGetValue"
                  },{
                    "datatype": "property",
                    "target": "#s-Input_4",
                    "property": "jimGetValue"
                  } ]
                } ]
              },
              "actions": [
                {
                  "action": "jimCreateData",
                  "parameter": {
                    "datatype": "datamaster",
                    "datamaster": "Viajero",
                    "fields": {
                      "0d260fcb-2bf1-4614-9c13-c66644535812": {
                        "datatype": "variable",
                        "element": "registro_usuario"
                      },
                      "68332e9b-73ad-4161-8a5d-f98bd468bfbd": {
                        "datatype": "variable",
                        "element": "registro_contrasenia"
                      },
                      "dfa90976-9af4-4eb5-90f5-eba0765a8d0a": {
                        "datatype": "variable",
                        "element": "registro_email"
                      },
                      "bbc56da7-c053-4824-b291-5a0a2d94e5b9": {
                        "datatype": "variable",
                        "element": "registro_nombre"
                      },
                      "583e380f-64cd-4bc5-abc5-a67add22be62": {
                        "datatype": "variable",
                        "element": "registro_apellido"
                      },
                      "f92ca78a-1b52-4f40-904f-27cd6bbfc435": {
                        "datatype": "variable",
                        "element": "registro_dni"
                      },
                      "6ef3fd4b-48ff-4307-a8a5-92d15f0c0725": {
                        "datatype": "variable",
                        "element": "registro_ubicacion"
                      },
                      "2292a227-74df-40ee-aa48-918f0091ae00": {
                        "datatype": "variable",
                        "element": "registro_telefono"
                      },
                      "90758704-1df5-429b-8d07-99372cc07597": ""
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/9a0315af-db55-4ba9-a96c-c1f4392eb2b8"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Path_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/cbada341-247e-4b9e-a6f2-0183df91ba54"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  })
  .on("focusout", ".s-7039ddf3-b6fd-48f9-a207-006468e745f3 .focusout", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Input_1")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimLess",
                "parameter": [ {
                  "action": "jimCount",
                  "parameter": [ {
                    "datatype": "property",
                    "target": "#s-Input_1",
                    "property": "jimGetValue"
                  } ]
                },"8" ]
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Paragraph_2" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-7039ddf3-b6fd-48f9-a207-006468e745f3 #s-Input_1 > .borderLayer" ],
                    "attributes": {
                      "border-top-color": "#FF0000",
                      "border-right-color": "#FF0000",
                      "border-bottom-color": "#FF0000",
                      "border-left-color": "#FF0000"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "action": "jimCount",
                  "parameter": [ {
                    "action": "jimFilterData",
                    "parameter": {
                      "datatype": "datamaster",
                      "datamaster": "Viajero",
                      "value": {
                        "action": "jimEquals",
                        "parameter": [ {
                          "field": "0d260fcb-2bf1-4614-9c13-c66644535812"
                        },{
                          "datatype": "property",
                          "target": "#s-Input_1",
                          "property": "jimGetValue"
                        } ]
                      }
                    }
                  } ]
                },"1" ]
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Paragraph_1" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-7039ddf3-b6fd-48f9-a207-006468e745f3 #s-Input_1 > .borderLayer" ],
                    "attributes": {
                      "border-top-color": "#FF0000",
                      "border-right-color": "#FF0000",
                      "border-bottom-color": "#FF0000",
                      "border-left-color": "#FF0000"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "registro_usuario" ],
                    "value": {
                      "datatype": "property",
                      "target": "#s-Input_1",
                      "property": "jimGetValue"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "registro_contrasenia" ],
                    "value": {
                      "datatype": "property",
                      "target": "#s-Input_2",
                      "property": "jimGetValue"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "condition": {
                "action": "jimLess",
                "parameter": [ {
                  "action": "jimCount",
                  "parameter": [ {
                    "datatype": "property",
                    "target": "#s-Input_2",
                    "property": "jimGetValue"
                  } ]
                },"10" ]
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Paragraph_5" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_4")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimNotEquals",
                "parameter": [ {
                  "datatype": "property",
                  "target": "#s-Input_2",
                  "property": "jimGetValue"
                },{
                  "datatype": "property",
                  "target": "#s-Input_4",
                  "property": "jimGetValue"
                } ]
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Paragraph_3" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  });