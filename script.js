// ?? --> nullish coalescing
// ?. --> optional chaining


/*-------------optional chaining----------------*/

const user={
    name:"Emre",
    surName:"Demir"
}


const a=user.name
console.log(a)

//const b=user.name.getName()//böyle bir fonksiyon olmadığı için userın içinde hata veriyor. 
//console.log(b)



// Hata vermek yerine işlemi çalıştırmaya devam edip eğer öyle bir değer bulamadıysa bize direk undifuend  değerini döndürmesi için bu işlei şu şekilde yaparız

const c=user?.name?.getName?.()
console.log(c)


const user2={
    name:"Emre",
    surName:"Demir",
    age:23,

fonksiyon:{    getName(){
        return "Seni Seviyorum"
    }}
}

const d=user2.fonksiyon.getName()
console.log(d)

/*----------------------------------*/

function sayHello(msg,callback){
    console.log("Msg",msg)

    callback?.()
}

sayHello("Gurbet Polat")

sayHello("Emre Demir",()=>{
  console.log  ( "Callback çalıştı!")
})

/*--------------------------------------*/

const user3={
    name:"Poyraz"
}

let key="ad"

console.log(user3.info?.[key])

/*------------------nullish coalescing--------------------*/

const user4={
    name:"Tayfun",
    cat:{
        name:"paşa"
    },
    dog:{
        name:"monti"
    }
}



console.log(("Köpek adı",user4?.dog?.name ?? "Bilinmiyor"))


