var mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/test')

var schema = mongoose.Schema({ name: String })

schema.methods.meow = function(){
    console.log(this.get("name") + " done 'Strufustfu' ")
}

var Car = mongoose.model('Car', schema)

var jdm = new Car({ name: 'SupraA80' })
jdm.save(function (err) {
    jdm.meow()
})