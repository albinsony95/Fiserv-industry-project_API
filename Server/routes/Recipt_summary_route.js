const express = require("express");
const router = express.Router();
const data = require('../data/fiserv_table_receipt.json')
const fs =require("fs");
const uniqid = require("uuid");
const path = require('path');
const filePath = path.join(__dirname, '..', 'data', 'fiserv_table_receipt.json');

function readReciept() {
    const recieptData = fs.readFileSync(filePath, 'utf8');
    const parsedData =JSON.parse(recieptData);
    return parsedData;
}
function userTotal(price, quantity) {
    return price * quantity;
}
router.get("/",(req,res) => {
    res.status(200).json(data);
})

router.get("/:id", (req,res) => {
    const id = req.params.id;
    const reciepts = readReciept();
    const singleTable = reciepts.find((tableOrder) => tableOrder.id ===id);
    
    if(singleTable) {
        res.status(200).json(singleTable);
    }
    else{console.log("table is empty or not found")};
})

module.exports = router;