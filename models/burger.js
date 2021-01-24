const orm = require("./config/orm.js");

const UseOrm = {
    selectAll: function () {
        orm.selectAll()
    },
    editBurger: function(newBurgName, newDevBoo, burgerID, ){
        orm.editBurger(newBurgName, newDevBoo, burgerID,  function(result){
            console.log(result)
        })
    },
    
    addBurger: function(burgerName, isDevoured){
        orm.burgerInsert(burgerName, isDevoured, function(result){
            console.log(result)
        })
    },    
};
module.exports = UseOrm;