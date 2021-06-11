const test = document.getAnimations(Animation);
const number1=Math.floor(Math.random()*9999+1);//id generator
var user = {
    name:"user",
    balance:1000,
    Password:"user",
    number:number1,
    E_account = {
        E_balance:0,
        coins={
            number_owned_All:0,
            saadCoin={
                number_owned:0,
                shares:0
            },
            piCoin={
                number_owned:0,
                shares:0
            },
            byteCoin={
                number_owned:0,
                shares:0
            },
            tobiCoin={
                number_owned:0,
                shares:0
            },
            hashBrown={
                number_owned:0,
                shares:0
            }
        },
        stocks={
            number_owned_All:0,
            GMR={
                number_owned:0,
                shares:0
            },
            muve={
                number_owned:0,
                shares:0
            },
            blkBucks={
                number_owned:0,
                shares:0
            },
            zaitco={
                number_owned:0,
                shares:0
            },
            gst={
                number_owned:0,
                shares:0
            },
        }
    }
}

var htmlS = `<tr class="text-center bg-gray-500 hover:bg-gray-300 transition-all ease-in"><td class="pb-2 font-semibold">${name}</td><td class="pb-2">${SYM}</td><td class="pb-2">${price}</td><td class="pb-2">${percentage}</td><td class="pb-2">${netchange}</td><td class="pb-2">${shares}</td><td class="pb-2"><button class="bg-red-400 rounded-md w-16 hover:bg-red-500 sell" ><i class="fas fa-dollar-sign"></i></button></td></tr>`