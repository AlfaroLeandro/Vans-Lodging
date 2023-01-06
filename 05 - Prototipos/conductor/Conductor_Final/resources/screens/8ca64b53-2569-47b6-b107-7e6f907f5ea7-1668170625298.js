jQuery("#simulation")
  .on("pageload", ".s-8ca64b53-2569-47b6-b107-7e6f907f5ea7 .pageload", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-8ca64b53-2569-47b6-b107-7e6f907f5ea7")) {
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
                      "type": "slideleft",
                      "duration": 1200
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