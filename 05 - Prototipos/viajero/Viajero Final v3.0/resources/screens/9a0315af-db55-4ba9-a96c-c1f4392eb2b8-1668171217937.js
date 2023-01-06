jQuery("#simulation")
  .on("click", ".s-9a0315af-db55-4ba9-a96c-c1f4392eb2b8 .click", function(event, data) {
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
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "user" ],
                    "value": ""
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
                    "variable": [ "pass" ],
                    "value": ""
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
    } else if(jFirer.is("#s-Button_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-9a0315af-db55-4ba9-a96c-c1f4392eb2b8 #s-Button_1" ],
                    "attributes": {
                      "opacity": "0.7"
                    }
                  },{
                    "effect": {
                      "type": "none",
                      "easing": "linear",
                      "duration": 100
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-9a0315af-db55-4ba9-a96c-c1f4392eb2b8 #s-Button_1" ],
                    "attributes": {
                      "opacity": "1.0"
                    }
                  },{
                    "effect": {
                      "type": "none",
                      "easing": "linear",
                      "duration": 100
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
                        "action": "jimAnd",
                        "parameter": [ {
                          "action": "jimOr",
                          "parameter": [ {
                            "action": "jimEquals",
                            "parameter": [ {
                              "field": "0d260fcb-2bf1-4614-9c13-c66644535812"
                            },{
                              "datatype": "property",
                              "target": "#s-Input_1",
                              "property": "jimGetValue"
                            } ]
                          },{
                            "action": "jimEquals",
                            "parameter": [ {
                              "field": "dfa90976-9af4-4eb5-90f5-eba0765a8d0a"
                            },{
                              "datatype": "property",
                              "target": "#s-Input_1",
                              "property": "jimGetValue"
                            } ]
                          } ]
                        },{
                          "action": "jimEquals",
                          "parameter": [ {
                            "field": "68332e9b-73ad-4161-8a5d-f98bd468bfbd"
                          },{
                            "datatype": "property",
                            "target": "#s-Input_2",
                            "property": "jimGetValue"
                          } ]
                        } ]
                      }
                    }
                  } ]
                },"1" ]
              },
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "user" ],
                    "value": {
                      "datatype": "property",
                      "target": "#s-Input_1",
                      "property": "jimGetValue"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/0fcc96a7-2332-4057-9c4c-f566f7138565"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            },
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-9a0315af-db55-4ba9-a96c-c1f4392eb2b8 #s-Input_1 > .borderLayer" ],
                    "attributes": {
                      "border-top-color": "#FF0000",
                      "border-right-color": "#FF0000",
                      "border-bottom-color": "#FF0000",
                      "border-left-color": "#FF0000"
                    }
                  },{
                    "target": [ "#s-9a0315af-db55-4ba9-a96c-c1f4392eb2b8 #s-Input_2 > .borderLayer" ],
                    "attributes": {
                      "border-top-color": "#FF0000",
                      "border-right-color": "#FF0000",
                      "border-bottom-color": "#FF0000",
                      "border-left-color": "#FF0000"
                    }
                  },{
                    "effect": {
                      "type": "none",
                      "easing": "linear",
                      "duration": 500
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
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Button_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-9a0315af-db55-4ba9-a96c-c1f4392eb2b8 #s-Button_2" ],
                    "attributes": {
                      "opacity": "0.7"
                    }
                  },{
                    "effect": {
                      "type": "none",
                      "easing": "linear",
                      "duration": 100
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-9a0315af-db55-4ba9-a96c-c1f4392eb2b8 #s-Button_2" ],
                    "attributes": {
                      "opacity": "1.0"
                    }
                  },{
                    "effect": {
                      "type": "none",
                      "easing": "linear",
                      "duration": 100
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
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
  });