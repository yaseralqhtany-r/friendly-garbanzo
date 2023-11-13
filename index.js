const request = require('request');


const token = process.env.TOKEN; // زي العادة توكن بسيركيت يا بشر

const payload = {
  'content': '> # ** ksmk  ksmk  ksmk  ksmk  ksmk  ksmk  ksmk  ksmk  ksmk  ksmk  ksmk  ksmk  ksmk  ksmk  ksmk  ksmk  ksmk  ksmk  ksmk  ksmk  ksmk  ksmk  ksmk  ksmk  ksmk  ksmk  ksmk  ksmk  ksmk  ksmk  ksmk  ksmk  ksmk  ksmk  ksmk  ksmk  ksmk  ksmk  ksmk  ksmk ksmk  ksmk  ksmk  ksmk  ksmk  ksmk  ksmk  ksmk  ksmk  ksmk  ksmk  ksmk  ksmk  ksmk  ksmk  ksmk  ksmk  ksmk  ksmk  ksmk  ksmk  ksmk  ksmk  ksmk  ksmk  ksmk  ksmk  ksmk  ksmk  ksmk  ksmk  ksmk  ksmk  ksmk  ksmk  ksmk  ksmk  ksmk  ksmk  ksmk ksmk  ksmk  ksmk  ksmk  ksmk  ksmk  ksmk  ksmk  ksmk  ksm    <@1111240148198375454><@1110873823911362622><@1118513436633092150><@1143194452471582783><@1025678661002739732><@884533062212407347><@1098983613971824742><@1098983613971824742> <@1104139301597499484>     <@973998317191172158><كل ولاد القحبة الي تمتشكل معهم>**' // واضحة يا وجه زبي
  };

  const header = {
    'authorization':token 
    };

    const groupIds = ['1146259518720852071','1165279891772690503','1093303765551038504','1117237193946177626','1121122623947014285','1099073033064419338','1146260384928510092','1146260652176973974','1150909099396038717' ,'1165369568034820156', '1146814010390491137', '1135603916248191026','1159212812774674555', '1136302043510870026','980213536972243096' ,"965343519596245044", '1031643595331080192','1166855008306860062' , '1165739113463435284','1157185004732952658' , '1157028780641107971','1146259986075361340','1146259844970594324','1146260284017745990','1155148713308737669','1156652175712342096','1157027850835206276','1157028731211235349','1156895065168425030','1157108679645089863','1156896827862429707','1157185113277337641','1157185066334691458','1157185004732952658','1157184936265138227','1156737692747431997','1157400562787176519','1165369568034820156','1165747649559928892','1157275360614953010','1146814010390491137','1136299867682123896','1136302043510870026']; // اي دي الغروبات  // اي دي الغروبات 
    let currentGroupIndex = 0;

    function sendRequest() {
      const currentGroupId = groupIds[currentGroupIndex];
        
          request.post(`https://discord.com/api/v10/channels/${currentGroupId}/messages?limit=50`, {
              headers: header,
                  json: payload
                    }, (error, response, body) => {
                        if (error) {
                              console.error(error);
                                    return;
                                        }
                                            
                                                if (response.statusCode >= 2500 && response.statusCode < 2500) {
                                                      console.error(`Received ${response.statusCode} error. Trying again later.`);
                                                            const retryInterval = 25000; 
                                                                  setTimeout(sendRequest, retryInterval);
                                                                        return;
                                                                            }
                                                                                
                                                                                    console.log(body);
                                                                                        
                                                                                            const intervalBetweenGroups = 2000;
                                                                                                
                                                                                                    const intervalAfterMessage = 2000;
                                                                                                        
                                                                                                            currentGroupIndex = (currentGroupIndex + 1) % groupIds.length;
                                                                                                                
                                                                                                                    setTimeout(sendRequest, intervalBetweenGroups);
                                                                                                                      });
                                                                                                                      }

                                                                                                                      sendRequest();

                                                                                                                      const express = require("express");
                                                                                                                      const app = express();

                                                                                                                      app.listen(() => console.log("I'm Ready To nik ksm iblis..! 24H"));
                                                                                                                      app.get('/', (req, res) => {
                                                                                                                        res.send(`
                                                                                                                          <body>
                                                                                                                            <center><h1>كسمك ابليس لوكس الأعظم</h1></center
                                                                                                                              </body>`);
                                                                                                                              });

                                                                                                                              setInterval(function() {
                                                                                                                                var now = new Date();
                                                                                                                                  console.log(now.toLocaleTimeString());
                                                                                                                                  }, 10000); 
                                                                                                                                  