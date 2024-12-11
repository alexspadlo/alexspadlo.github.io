            // Prototypes:

            // Numbers

            // Values:
            4
            4.6
            NaN
            Infinity
                - Infinity
            Number.MAX_VALUE
            Number.MIN_VALUE
            Number.POSITIVE_INFINITY
            Number.NEGATIVE_INFINITY

            // Methods(Functions):
            //return num
            Number.parseInt()
            Number.parseFloat()
            // return boolean
            Number.isNaN()
            Number.isFinite()
            Number.isInteger()
            //return string
            Number.toLocaleString()
            Number.toFixed()
            Number.toString()

            typeof 2345 === 'number' // true or false



            //  Boolean:

            // Values:
            true
            false
            0 = false
            Number(false)
            // output 0
            1 = true
            Number(true)
            // output 1

            // methods:
            Boolean.toString()// tranform into string
            Boolean.valueOf() // print back/show the value
            // creating a custom prototype to check if is boolean
            Boolean.prototype.isBoolean = function () {
                // 'this' is the OBJECT Boolean... so we need to print the ACTUAL value and check the typeof
                return typeof this.valueOf() === 'boolean'
            }



            const arroz = false
            arroz.isBoolean()
            // output: true



            // Function
            // Values:
            const myFn = () => 'your value'

            // methods:
            Function.toString()// tranform into string
            Function.valueOf() // print back/show the value
            // creating a custom prototype to check if is function type
            Function.prototype.isFunction = function () {
                return typeof this.valueOf() === 'function'
            }

            myFn.isFunction()
            // output: true

    // STRINGS
            'asdda' // regular string
            `sada'sda` // literal string
            'asdasda\'asdasda' // escaping string
            '{"key":"value"}' // json string
            'true' // boolean string
            '34' // number in a string
            '() => console.log("Hey")' // function in a string

            //  MOSTLY ALL PROTOTYPES has a .toString() or String(null) that will transform any data into a string
        
            // BOM(Browser Objec Model/Manipulation) eval function
            // UNSAFE DO NOT USE AT ALL

            eval('567')
            567
            eval('true')
            true
            eval('false')
            false
            eval('undefined')
            undefined

            // DO NOT USE EVAL..... DANGEROUS SHIT
            const otherFun = eval('() => console.log("hey")')
            otherFun()
            output = 'hey'


            // SAME THING
                'asdasda'.includes('da')
                true
                'asdasda'.contains('da')
                true
            
                'cristian'.charAt(0)
                'c'
                'cristian'.at(0)
                'c'
                'cristian'[0]
                'c'


                // CUSTOM AT imitating what AT does
                // charAt do not do negative numbers, AT is ECMA2022 and does....

                String.prototype.myAt = function(index) {
                    const myString = this.valueOf()
                    if(index >= 0){
                        return myString[index]
                    } else {
                        return myString[myString.length + index]
                    }
                }


                'cristian'.startsWith('cr')
                true

                'cristian'.endsWith('an')
                true
            

                'cristian'.indexOf('tian')
                4

                'cristian'.indexOf('batata')
                -1 // THIS MEAN THAT IS NOT THERE

                'cristian'.indexOf('i')
                2
                'cristian'.lastIndexOf('i')
                5

                'cristian'.length
                8


                'cristian'.replace('i', 'H')
                'crHstian'

                'cristian'.replaceAll('i', 'H')
                'crHstHan'

                'cristian'.repeat(5)
                'cristiancristiancristiancristiancristian'


                // slice(startIndex, endIndex)
                'cristian'.slice(0, 'cristian'.indexOf('tian'))
                'cris'

                'Cristian Derick Paulino Rosario'.split(' ')
                ['Cristian', 'Derick', 'Paulino', 'Rosario']


                'CRISTIAN'.toLowerCase()
                'cristian'

                'cristian'.toUpperCase()
                'CRISTIAN'

                '     cri        stian     '.trimStart()
                'cri        stian     '
                
                '     cri        stian     '.trimEnd()
                '     cri        stian'
                
                '     cri        stian     '.trim()
                'cri        stian'

                '     cri        stian     '.replaceAll(' ', '')
                'cristian'

                'cristian'.split('tian')
                ['cris', '']
                
                'cristian'.split('tian')[0]
                'cris'


                // sum of strings
                'cristian' + ' ' + 'derick'
                'cristian derick'

                'cristian' + ' derick'
                'cristian derick'

                'cristian'.concat(' derick')

                const varCris = 'cristian'
                const varDer = 'derick'

                `${varCris} ${varDer}`
                'cristian derick'

                1 + '1'
                '11'


                .valueOf()
                .toString()



    



                







    // Objects
            // Values:

            // old days
            const moreOld = Object.create({})
            const oldObj = new Object()

            // now:
            const obj = {}

            // Objects has KEY (representation name) and VALUES

            const person = {
                height: 185,
                weight: 77,
                eyes: 'black'
            }

    // Objects supposedly to be a CHARACTERISTIC of a model.

    // methods:

        // JSON Methods

            // DO NOT TRANSFOR INTO A STRING THAT WAY
            `${person}`
            output = '[object Object]'

            // USE JSON stringify
            JSON.stringify(person)

                // output
                `{"height":185,"weight":77,"eyes":"black"}`

            // Transform a OBJECT string into a JS OBJECT
            JSON.parse('{"height":185,"weight":77,"eyes":"black"}')

            var output = { height: 185, weight: 77, eyes: 'black' }

            // HOWEVER JSON parse MIGHT broke if you pass something that is not a json string

            JSON.parse('{"height":185,"weight":77,"eyes":"black}')

            // throw 
            // VM1273:1 Uncaught SyntaxError: Unterminated string in JSON at position 40
            //     at JSON.parse (<anonymous>)
            //     at <anonymous>:1:6

            const JsonObject = (obj) => {
                try {
                    return JSON.parse(obj)
                } catch (e) {
                    console.log(e)
                    return null
                }
            }
        
        // OBJECT Methods:
            // Objects are a group of key and value so basically that's all you can do.

            // You can get a list of keys
            Object.keys(person)
            // output
            ['height', 'weight', 'eyes']

            // You can get a list of values
            Object.values(person)
            // output
            [185, 77, 'black']

            // You can get a list of both (entries)
            Object.entries(person)
            // output
            [
                ["height", 185], 
                ["weight", 77], 
                ["eyes", "black"]
            ]

            // You can also transform a ENTRIES list into an Object
            Object.fromEntries([
                ["height", 185], 
                ["weight", 77], 
                ["eyes", "black"]
            ])

            output = {height: 185, weight: 77, eyes: 'black'}

        // MANIPULATION OF OBJECT:

            // Access
                // Access height
                var dynamicVar = 'height'
                var personHeight = person.height
                var personHeight = person['height']
                var personHeight = person[dynamicVar]
                // Deconstruction
                var { height } = person || {}
                // Assigning Deconstruction
                var { height: personHeight } = person || {}
            
            // Exclude

                // Definitively:
                
                delete person.eyes
                output = {height: 185, weight: 77}


                // recreate of the object

                // MANUAL
                const newPerson = {
                    height: person.height,
                    weight: person.weight
                }

                output = {height: 185, weight: 77}

                const newPerson2 = {
                    ...person,
                    eyes: null
                }

                output = {height: 185, weight: 77, eyes: 'banana'}

                Object.fromEntries(
                    Object.entries({...person, eyes: undefined}).filter(([_, val]) => val !== 'banana')
                )

                output = {height: 185, weight: 77}



                Object.prototype.excludeEntries = function (keys) {
                    // array of keys ['eyes', 'height']
                    const mainObject = this.valueOf()
                    if(!keys?.length) return mainObject
                    const randoKey = `deleteControl${Math.random() * 1000}`
                    const deletedObj = keys?.reduce?.((acc, val) => ({...acc, [val]: randoKey }), {})
                    // will transform to { eyes: 'deleteControl345678', height: 'deleteControl345678'}
                    return Object.fromEntries(
                        Object.entries({...mainObject, ...deletedObj}).filter(([_, val]) => val !== randoKey)
                    )
                }

                output = { weight: 77 }
                

            // Include

                // THE VALUE AGE do not exist and we want to include it

                // This will modify the previous object.
                    
                    // OLD WAY
                    const dynamicAge = 'age'
                    person.age = 45
                    person['age'] = 45
                    person[dynamicAge] = 45

                    // ES5
                    Object.assign(person, { age: 67})

                    
                // RECREATION

                    let agedPerson = { 
                        ...person, 
                        age: 33
                    }

                    agedPerson = {
                        ...person,
                        ['age']: 45
                    }

                    agedPerson = {
                        ...person,
                        "age": 45
                    }

                    agedPerson = {
                        ...person,
                        [dynamicAge]: 45
                    }

            // Modify

                // EXACTLY THE SAME WAY FROM INCLUDES

                // This will modify the previous object.
                    
                    // OLD WAY
                    const dynamicWeight = 'weight'
                    person.weight = 45
                    person['weight'] = 45
                    person[dynamicWeight] = 45

                    // ES5
                    Object.assign(person, { weight: 67})

                    
                // RECREATION

                    let weightdPerson = { 
                        ...person, 
                        weight: 33
                    }

                    weightdPerson = {
                        ...person,
                        ['weight']: 45
                    }

                    weightdPerson = {
                        ...person,
                        "weight": 45
                    }

                    weightdPerson = {
                        ...person,
                        [dynamicWeight]: 45
                    }



                    import { useState, useEffect } from 'react'

                    export const MyCOmp = () => {
                        const [obj, setObj] = useState({})

                        const person = {}

                        useEffect(() => {
                            // CORRECT
                            setObj({ ...obj, age: 56})
                            // WRONG AS FUCK
                            obj.age = 56
                            
                            
                            // THIS IS FINE
                            person.age = 56
                        },[])

                        return null
                    }



                    // CIRCULAR STRUCTURE:

                    person.people = person

                    output = {
                        height: 185,
                        weight: 77,
                        eyes: 'black',
                        people: {
                            height: 185,
                            weight: 77,
                            eyes: 'black',
                            people: {
                                height: 185,
                                weight: 77,
                                eyes: 'black',
                                people: {
                                    // INFINITY TIMES
                                }   
                            }
                        }
                    }

                    // If you try to copy or convert to JSON it will throw an error

                    JSON.stringify(person)

                    // VM3837:1 Uncaught TypeError: Converting circular structure to JSON
                    //     --> starting at object with constructor 'Object'
                    //     --- property 'people' closes the circle
                    //     at JSON.stringify (<anonymous>)
                    //     at <anonymous>:1:6
    
    // ARRAY OR LISTS

    // ARRAY IS A LIST OF WHATEVER THAT YOU WANT TO PUT INSIDE

        // Array of strings:
        ['Batata', 'Banana']

        // Array of number:
        [4, 5]

        // Array of object:
        [
            {
                name: 'Cristian',
                lastName: 'Derick'
            },
            {
                name: 'Alex',
                lastName: 'Spadlo'
            } 
        ]

        // Array of null:
        [null, null]

        // Array of undefined:
        [undefined, undefined]

        // Array of functions:
        [alert, alert]

        // Array of mix:
        [4, 'banana', alert, { name: 'Cristian' }, [], new Date()]


        // SETS:
        // LIST for DUPLICATION REMOVAL
        // ONLY WORKS WITH SINGLE VALUES (EG: string, boolean, undefined, null, numbers)
        new Set([5, 5, 6, undefined, undefined, null, null, 6, 'batata', 'banana', 'batata', true, true, false])
        // output = {5, 6, undefined, null, 'batata', 'banana', true, false}
        // YOU WILL NEED TO GET THE ENTRIES BY CONVERT TO A LIST BACK AGAIN
        newListNoduplication = [...new Set([5, 5, 6, undefined, undefined, null, null, 6, 'batata', 'banana', 'batata', true, true, false])]
        output = [5, 6, undefined, null, 'batata', 'banana', true, false]


        //HTMLCOLLECTION
            //LIST of html usually doing by getElements....
            // const myVar = document.getElementsByClassName('compensation-amount__text')
            // HTMLCollection(3)[span, span, span] // literal the element inside a complex html object

            // HTML COLLECTION DO NOT HAVE prototypes of Array: map, filter, forEach, find, some, reduce....
            // Looping must be done using for 

            // OR convert it to list by spreading inside of an empty ARRAY

            // [...myVar]
            // (3)[span, span, span] <--- HTmlcollection transformed to an Array list of elements inside.

        
        
        // NODEList

            //LIST of html usually doing by querySelectorAll()....
            // const myVar = document.querySelectorAll('.col-12') // must disclose the type of selector, class, tag, id, dataset
            // NODEList(3)[div, div, div] // literal the element inside a complex html object

            // NODEList DO NOT HAVE prototypes of Array: map, filter, find, some, reduce.... EXCEPT to forEach

            // OR convert it to list by spreading inside of an empty ARRAY

            // [...myVar]
            // (3)[div, div, div] <--- NODEList transformed to an Array list of elements inside.
        
        // IF YOU GET A ODD TYPE OF LIST PROBABLY THAT IS SPREADABLE
        // FOR YOU TO USE THE PROTOYPES OF ARRAY
        // MAKE SURE TO SPREAD THAT INTO AN EMPTY ARRAY --- < THAT WAY YOU ARE CONVERT YOUR ODD TYPE OF LIST INTO AN ARRAY

    // VALUES

        // old way
            Array()
            new Array
            new Array()

            output = []
        // correct way
        let myVal = []



    // METHODS

    
    // ACCESS

    // INCLUDE

    // EXCLUDE

    // MODIFY

    // ---------------------------------------------------------------------
// Array methods:

    // Remove duplications of an array string
    let myArr = [...new Set(['batata', 'bacon', 'batata', 'banana', 'arroz', 'bacon', 'batata'])]
    // ['batata', 'bacon', 'banana', 'arroz']
    
    // .sort
    // String comparison:
    myArr =  [{ obj: 'Batata'}, { obj: 'Arroz'}].sort((a, b) => (b.obj).localeCompare(a.obj))

    // Number comparison
    myArr = [1, 22, 4, 9].sort((a, b) => a - b)
    // Sort results must be a number that's why a - b You can invert the result by:
    // (A - B) or (B - A)

    // .slice
    // Cutting your array in a specific start and end....
    myArr = ['batata', 'bacon', 'banana', 'arroz'].slice(1, 2)
    // ['bacon']

    // join
    // Transform the array in a string you can declare a separator,
    // Ideally, you use in an ARRAY OF STRING
    myArr = ['batata', 'bacon', 'banana', 'arroz'].join(' - ')
    // 'batata - bacon - banana - arroz'

    // reverse
    // Invert the order of the array
    [myArr = 'batata', 'bacon', 'banana', 'arroz'].reverse()
    // ['arroz', 'banana', 'bacon', 'batata']

    // flat
    myArr = [[[[[[[[[[[[[['batata']]]]]]]]]]]]]].flat(Infinity)
    // ['batata']

    // isArray
    // Check if an array is a valid array.
    myArr = Array.isArray([])
    // true
    myArr = Array.isArray(true)
    // false

    // includes
    // Check if has exactly the value inside of an Array
    // Usually you will do this in an ARRAY OF STRING
    myArr =  ['batata', 'bacon', 'banana', 'arroz'].includes('ban')
    // false
    myArr =  ['batata', 'bacon', 'banana', 'arroz'].includes('banana')
    // true

    // fill
    // Create an array from N numbers, and fill with some content
    myArr = Array(5).fill('batata')
    // ['batata', 'batata', 'batata', 'batata', 'batata']

    // length
    // Check the length of the array.
    myArr = ['batata', 'batata', 'batata', 'batata', 'batata'].length
    // 5
    // Get the first element
    myArr = ['batata', 'bacon', 'banana', 'arroz'] 
    const [firstElement] = myArr || [] 
    console.log(firstElement)
    // 'batata'
    
    // Get the last element
    const lastElem = myArray[myArray.length - 1] 
    console.log(lastElem)
    // 'arroz’


    // LOOP ITERATION


    // map
    // Modify the array
    // Will always return an array of the same size You can modify the content freely
    myArr = ['ele1', 'ele2', 'ele3']
    const mynewArray = myArr.map((ele, ind) => { 
        if(ind === 0) return 'first_element' 
        if(myArr.length - 1 === ind) return 'last_element' 
        return ele
    })
    // output
    // ['first_element', 'ele2', 'last_element']
    // Change a single specific element only in a object
    myArr = [{ refer: 'ele1'}, { refer: 'ele2'}, { refer: 'ele3'}] 
    myArr.map(cv => cv?.refer === 'ele2' ? ({...cv, text: 'anothertext'}) : cv) 
    // output
    // [{ refer: 'ele1'}, { refer: 'ele2', text: 'anothertext'}, { refer: 'ele3'}]

    // forEach
    // Iterate / loop only
    // Don't return any value.
    // Ideal to do an operation while looping.
    myArr = ['ele1', 'ele2', 'ele3']
    myArr.forEach(cv => console.log(cv))
    // output // ele1 // ele2 // ele3
    // DON'T DO THIS - FOREACH DON'T RETURN VALUE const wrongWay = myArray.forEach(cv => cv)
    // wrongWay ---> undefined
    
    // filter
    // Return the value based on criteria
    // criteria - must be a Boolean (true or false)
    // Will not modify the array!!!
    // Is useful to delete/exclude some element on the array
    myArr = [{ refer: 'ele1'}, { refer: 'ele2'}, { refer: 'ele3'}, { refer: null }] // myArray?.filter(cv => cv.refer)
    // output

    myArr = [{ refer: 'ele1'}, { refer: 'ele2'}, { refer: 'ele3'}]
    // PAY ATTENTION.... is not returning refer only as strings.
    // It's returning all elements that contain refer WITHOUT modifying the array.

    // some
    // Return true or false
    // Good to check if something is inside of an array (Object, Or complex structure) If is STRING... use Includes --- UNLESS you must lowercase.... so, then Some is
    // better.

    // BAD
    // if(myobj.filter(cv => cv.email === 'asdas@globechain.com').length > 0) {
    // }
    // if(myobj.map(cv => cv.email).includes('asdas@globechain.com')) { // }
    
    // GOOD
    // if(myobj.some(cv => cv.email === 'asdas@globechain.com')) { // }


    // find
    // Find and pop out the element if exist. Will not modify your array.
    
    // BAD
    // const [firstObj] = myobj.filter(cv => cv.email === 'asdas@globechain.com')
    
    // GOOD
    // const firstObj = myobj.find(cv => cv.email === 'asdas@globechain.com')