jQuery("#simulation")
  .on("click", ".s-3df00100-9f44-4710-9231-36acf193c3c0 .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Path_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/80c2f224-f237-4fb8-bf16-24a842008216",
                    "transition": {
                      "type": "slideleft",
                      "duration": 700
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
    } else if(jFirer.is("#s-Hotspot_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimDeleteData",
                  "parameter": {
                    "action": "jimFilterData",
                    "parameter": {
                      "datatype": "datamaster",
                      "datamaster": "tarjetas_pago",
                      "value": {
                        "action": "jimEquals",
                        "parameter": [ {
                          "field": "d37548b0-1358-438f-98dd-ae3a61d4cf85"
                        },{
                          "datatype": "variable",
                          "element": "1"
                        } ]
                      }
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
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/80c2f224-f237-4fb8-bf16-24a842008216",
                    "transition": {
                      "type": "slideright",
                      "duration": 700
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
    }
  })
  .on("pageload", ".s-3df00100-9f44-4710-9231-36acf193c3c0 .pageload", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Input_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Input_2" ],
                    "value": {
                      "action": "jimSelectData",
                      "parameter": {
                        "action": "jimFilterData",
                        "parameter": {
                          "datatype": "datamaster",
                          "datamaster": "tarjetas_pago",
                          "value": {
                            "action": "jimEquals",
                            "parameter": [ {
                              "field": "d37548b0-1358-438f-98dd-ae3a61d4cf85"
                            },{
                              "datatype": "variable",
                              "element": "1"
                            } ]
                          }
                        },
                        "value": {
                          "field": "648cb4e9-c62e-4901-8378-f898826a129c"
                        }
                      }
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
    } else if(jFirer.is("#s-Input_3")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Input_3" ],
                    "value": {
                      "action": "jimSelectData",
                      "parameter": {
                        "action": "jimFilterData",
                        "parameter": {
                          "datatype": "datamaster",
                          "datamaster": "tarjetas_pago",
                          "value": {
                            "action": "jimEquals",
                            "parameter": [ {
                              "field": "d37548b0-1358-438f-98dd-ae3a61d4cf85"
                            },{
                              "datatype": "variable",
                              "element": "1"
                            } ]
                          }
                        },
                        "value": {
                          "field": "d37548b0-1358-438f-98dd-ae3a61d4cf85"
                        }
                      }
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
    } else if(jFirer.is("#s-Input_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Input_1" ],
                    "value": {
                      "action": "jimSelectData",
                      "parameter": {
                        "action": "jimFilterData",
                        "parameter": {
                          "datatype": "datamaster",
                          "datamaster": "tarjetas_pago",
                          "value": {
                            "action": "jimEquals",
                            "parameter": [ {
                              "field": "d37548b0-1358-438f-98dd-ae3a61d4cf85"
                            },{
                              "datatype": "variable",
                              "element": "1"
                            } ]
                          }
                        },
                        "value": {
                          "field": "a6b4109c-cfc6-485b-8043-12ed989c2179"
                        }
                      }
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
    } else if(jFirer.is("#s-Input_4")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Input_4" ],
                    "value": {
                      "action": "jimSelectData",
                      "parameter": {
                        "action": "jimFilterData",
                        "parameter": {
                          "datatype": "datamaster",
                          "datamaster": "tarjetas_pago",
                          "value": {
                            "action": "jimEquals",
                            "parameter": [ {
                              "field": "d37548b0-1358-438f-98dd-ae3a61d4cf85"
                            },{
                              "datatype": "variable",
                              "element": "1"
                            } ]
                          }
                        },
                        "value": {
                          "field": "f61007c0-0e15-44b4-8602-197083513ade"
                        }
                      }
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
    }
  });