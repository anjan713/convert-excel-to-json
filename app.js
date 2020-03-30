const express=require('express');

const app=express();

app.listen(7000,()=>{
    console.log('app listening on port 7000!');
})

app.get('/get_data',(req,res)=>{
    'use strict';
    const excelToJson = require('convert-excel-to-json');
    const result = excelToJson({
        sourceFile: 'AasPaas.xlsx',
        sheets:[{
          name: 'FRUITS AND VEGETABLES',
          header:{
              rows: 1
          },
          columnToKey: { 
            '*': '{{columnHeader}}' 
        }
         },
         ]
});

res.send(result);
        });

        app.get('/get_data2',(req,res)=>{
            'use strict';
            const excelToJson = require('convert-excel-to-json');
            const result = excelToJson({
                sourceFile: 'AasPaas.xlsx',
                sheets:[{
                  name: 'FOODGRAINS,OIL AND MASALA',
                  header:{
                      rows: 1
                  },
                  columnToKey: { 
                    '*': '{{columnHeader}}' 
                }
                 },
                 ]
        });
        
        res.send(result);
                });


                