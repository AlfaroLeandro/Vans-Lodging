jQuery("#simulation")
  .on("click", ".s-03abe346-9c73-4c72-8cc6-974007b87579 .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Path_4")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/fdaa7f8d-b5d9-4a89-8665-8147440a5d8b",
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
    } else if(jFirer.is("#s-Path_101")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimEnable",
                  "parameter": {
                    "target": [ "#s-Input_4" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-03abe346-9c73-4c72-8cc6-974007b87579 #s-Rectangle_4 > .borderLayer" ],
                    "attributes": {
                      "border-top-color": "#434343",
                      "border-right-color": "#434343",
                      "border-bottom-color": "#434343",
                      "border-left-color": "#434343"
                    }
                  },{
                    "effect": {
                      "type": "none",
                      "easing": "easeOutQuad",
                      "duration": 100
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Path_101" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Path_99" ]
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
    } else if(jFirer.is("#s-Path_99")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimDisable",
                  "parameter": {
                    "target": [ "#s-Input_4" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-03abe346-9c73-4c72-8cc6-974007b87579 #s-Rectangle_4 > .borderLayer" ],
                    "attributes": {
                      "border-top-color": "#FFFFFF",
                      "border-right-color": "#FFFFFF",
                      "border-bottom-color": "#FFFFFF",
                      "border-left-color": "#FFFFFF"
                    }
                  },{
                    "effect": {
                      "type": "none",
                      "easing": "easeInQuad",
                      "duration": 200
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Path_99" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Path_101" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimUpdateData",
                  "parameter": {
                    "action": "jimFilterData",
                    "parameter": {
                      "datatype": "datamaster",
                      "datamaster": "Conductor",
                      "value": {
                        "action": "jimEquals",
                        "parameter": [ {
                          "field": "dae29102-35d0-4fa2-8d93-dc3e5a2b1fe1"
                        },{
                          "datatype": "variable",
                          "element": "Token"
                        } ]
                      }
                    },
                    "fields": {
                      "c5b6dd13-2ec1-4b1d-937f-6703c28a1ad0": null,
                      "ffbbbf01-259b-4297-93c7-31a5ebf570a4": null,
                      "e62a3505-f8f6-42fc-a782-eb5c9564cd90": null,
                      "30134775-5a04-43ab-8aaf-fe152cbbcaa8": null,
                      "d0b99b60-4f5f-4e79-995c-ecefde541b80": null,
                      "2a098214-62c8-47f4-bb92-6dbd1434887f": {
                        "datatype": "property",
                        "target": "#s-Input_4",
                        "property": "jimGetValue"
                      },
                      "d4891ba3-71cb-4d82-9bdb-e7177184b1e9": null,
                      "ee2fa193-1abb-4041-afd3-12041ee9425c": null,
                      "dae29102-35d0-4fa2-8d93-dc3e5a2b1fe1": null
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
    } else if(jFirer.is("#s-Path_11")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimEnable",
                  "parameter": {
                    "target": [ "#s-Input_6" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-03abe346-9c73-4c72-8cc6-974007b87579 #s-Rectangle_7 > .borderLayer" ],
                    "attributes": {
                      "border-top-color": "#404040",
                      "border-right-color": "#404040",
                      "border-bottom-color": "#404040",
                      "border-left-color": "#404040"
                    }
                  },{
                    "effect": {
                      "type": "none",
                      "easing": "easeOutQuad",
                      "duration": 100
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Path_11" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Path_12" ]
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
    } else if(jFirer.is("#s-Path_12")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimDisable",
                  "parameter": {
                    "target": [ "#s-Input_6" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-03abe346-9c73-4c72-8cc6-974007b87579 #s-Rectangle_7 > .borderLayer" ],
                    "attributes": {
                      "border-top-color": "#FFFFFF",
                      "border-right-color": "#FFFFFF",
                      "border-bottom-color": "#FFFFFF",
                      "border-left-color": "#FFFFFF"
                    }
                  },{
                    "effect": {
                      "type": "none",
                      "easing": "easeInQuad",
                      "duration": 200
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Path_12" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Path_11" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimUpdateData",
                  "parameter": {
                    "action": "jimFilterData",
                    "parameter": {
                      "datatype": "datamaster",
                      "datamaster": "Conductor",
                      "value": {
                        "action": "jimEquals",
                        "parameter": [ {
                          "field": "dae29102-35d0-4fa2-8d93-dc3e5a2b1fe1"
                        },{
                          "datatype": "variable",
                          "element": "Token"
                        } ]
                      }
                    },
                    "fields": {
                      "c5b6dd13-2ec1-4b1d-937f-6703c28a1ad0": null,
                      "ffbbbf01-259b-4297-93c7-31a5ebf570a4": null,
                      "e62a3505-f8f6-42fc-a782-eb5c9564cd90": null,
                      "30134775-5a04-43ab-8aaf-fe152cbbcaa8": null,
                      "d0b99b60-4f5f-4e79-995c-ecefde541b80": null,
                      "2a098214-62c8-47f4-bb92-6dbd1434887f": null,
                      "d4891ba3-71cb-4d82-9bdb-e7177184b1e9": {
                        "datatype": "property",
                        "target": "#s-Input_6",
                        "property": "jimGetValue"
                      },
                      "ee2fa193-1abb-4041-afd3-12041ee9425c": null,
                      "dae29102-35d0-4fa2-8d93-dc3e5a2b1fe1": null
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
    } else if(jFirer.is("#s-Path_13")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimEnable",
                  "parameter": {
                    "target": [ "#s-Input_7" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-03abe346-9c73-4c72-8cc6-974007b87579 #s-Rectangle_8 > .borderLayer" ],
                    "attributes": {
                      "border-top-color": "#404040",
                      "border-right-color": "#404040",
                      "border-bottom-color": "#404040",
                      "border-left-color": "#404040"
                    }
                  },{
                    "effect": {
                      "type": "none",
                      "easing": "easeOutQuad",
                      "duration": 100
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Path_13" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Path_14" ]
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
    } else if(jFirer.is("#s-Path_14")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimDisable",
                  "parameter": {
                    "target": [ "#s-Input_7" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-03abe346-9c73-4c72-8cc6-974007b87579 #s-Rectangle_8 > .borderLayer" ],
                    "attributes": {
                      "border-top-color": "#FFFFFF",
                      "border-right-color": "#FFFFFF",
                      "border-bottom-color": "#FFFFFF",
                      "border-left-color": "#FFFFFF"
                    }
                  },{
                    "effect": {
                      "type": "none",
                      "easing": "easeInQuad",
                      "duration": 200
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Path_14" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Path_13" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimUpdateData",
                  "parameter": {
                    "action": "jimFilterData",
                    "parameter": {
                      "datatype": "datamaster",
                      "datamaster": "Conductor",
                      "value": {
                        "action": "jimEquals",
                        "parameter": [ {
                          "field": "dae29102-35d0-4fa2-8d93-dc3e5a2b1fe1"
                        },{
                          "datatype": "variable",
                          "element": "Token"
                        } ]
                      }
                    },
                    "fields": {
                      "c5b6dd13-2ec1-4b1d-937f-6703c28a1ad0": null,
                      "ffbbbf01-259b-4297-93c7-31a5ebf570a4": null,
                      "e62a3505-f8f6-42fc-a782-eb5c9564cd90": null,
                      "30134775-5a04-43ab-8aaf-fe152cbbcaa8": null,
                      "d0b99b60-4f5f-4e79-995c-ecefde541b80": null,
                      "2a098214-62c8-47f4-bb92-6dbd1434887f": null,
                      "d4891ba3-71cb-4d82-9bdb-e7177184b1e9": null,
                      "ee2fa193-1abb-4041-afd3-12041ee9425c": {
                        "datatype": "property",
                        "target": "#s-Input_7",
                        "property": "jimGetValue"
                      },
                      "dae29102-35d0-4fa2-8d93-dc3e5a2b1fe1": null
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
  .on("pageload", ".s-03abe346-9c73-4c72-8cc6-974007b87579 .pageload", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Paragraph_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Paragraph_1" ],
                    "value": {
                      "action": "jimSubstring",
                      "parameter": [ {
                        "action": "jimSystemTime"
                      },"0","5" ]
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
                          "datamaster": "Conductor",
                          "value": {
                            "datatype": "variable",
                            "element": "Token"
                          }
                        },
                        "value": {
                          "field": "ffbbbf01-259b-4297-93c7-31a5ebf570a4"
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
    } else if(jFirer.is("#s-Input_2")) {
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
                          "datamaster": "Conductor",
                          "value": {
                            "datatype": "variable",
                            "element": "Token"
                          }
                        },
                        "value": {
                          "field": "e62a3505-f8f6-42fc-a782-eb5c9564cd90"
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
                          "datamaster": "Conductor",
                          "value": {
                            "datatype": "variable",
                            "element": "Token"
                          }
                        },
                        "value": {
                          "field": "30134775-5a04-43ab-8aaf-fe152cbbcaa8"
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
                          "datamaster": "Conductor",
                          "value": {
                            "datatype": "variable",
                            "element": "Token"
                          }
                        },
                        "value": {
                          "field": "2a098214-62c8-47f4-bb92-6dbd1434887f"
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
    } else if(jFirer.is("#s-Input_5")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Input_5" ],
                    "value": {
                      "action": "jimSelectData",
                      "parameter": {
                        "action": "jimFilterData",
                        "parameter": {
                          "datatype": "datamaster",
                          "datamaster": "Conductor",
                          "value": {
                            "datatype": "variable",
                            "element": "Token"
                          }
                        },
                        "value": {
                          "field": "d0b99b60-4f5f-4e79-995c-ecefde541b80"
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
    } else if(jFirer.is("#s-Input_6")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Input_6" ],
                    "value": {
                      "action": "jimSelectData",
                      "parameter": {
                        "action": "jimFilterData",
                        "parameter": {
                          "datatype": "datamaster",
                          "datamaster": "Conductor",
                          "value": {
                            "datatype": "variable",
                            "element": "Token"
                          }
                        },
                        "value": {
                          "field": "d4891ba3-71cb-4d82-9bdb-e7177184b1e9"
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
    } else if(jFirer.is("#s-Input_7")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Input_7" ],
                    "value": {
                      "action": "jimSelectData",
                      "parameter": {
                        "action": "jimFilterData",
                        "parameter": {
                          "datatype": "datamaster",
                          "datamaster": "Conductor",
                          "value": {
                            "datatype": "variable",
                            "element": "Token"
                          }
                        },
                        "value": {
                          "field": "ee2fa193-1abb-4041-afd3-12041ee9425c"
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