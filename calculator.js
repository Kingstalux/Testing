class Calculate {

    add () {
        let count = 0
        for (var i=0; i<arguments.length; i++) {
            count = count + arguments[i]
        }
        return count
    }
    
    subtract () {
        let count = arguments[0]
        for (var i=1; i<arguments.length; i++) {
            count = count - arguments[i]
        }
        return count 
    }
    
     multiply () {
        let count = 1
        for (var i=0; i<arguments.length; i++) {
            count = count * arguments[i]
        }
        return count
    }
    
    divide () {
        let count = arguments[0]
        for (var i=1; i<arguments.length; i++) {
            count = count / arguments[i]
        }
        return count 
    }

}

let output = new Calculate

module.exports = Calculate