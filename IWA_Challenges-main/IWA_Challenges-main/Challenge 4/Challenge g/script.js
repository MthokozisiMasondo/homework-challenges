const FREE_WARNING = 'Free shipping only applies to single customer orders'
const BANNED_WARNING = 'Unfortunately we do not ship to your country of residence'
const NONE_SELECTED = '0'

let customers = 1
let userLocation = 'RSA'
let currency = null
let shipping = null

if (userLocation === 'RSA') { shipping = 400, currency = 'R' }

if (userLocation === 'NAM') { shipping = 600, currency = '$'} else { shipping = 800, currency = '$'}

const shoes = 300 * 1
const toys = 100 * 5
const shirts = 150 * NONE_SELECTED
const batteries = 35 * 2
const pens = 5 * NONE_SELECTED 

if (shoes + batteries + pens + shirts > 1000 && currency === 'R' ||
	shoes + batteries + pens + shirts > 60 && currency === '$') {
	if (userLocation === 'NAM' && customers < 2) {
			if (userLocation === 'RSA')
		    shipping = 0 || calcShipping
		}
	}

if (shipping === 0 && customers !== 1) { console.log(WARNING) }

if(userLocation === 'NK') {
	console.log(FREE_WARNING)
} else {
	console.log('price', currency, shoes + batteries + pens + shirts + shipping)
}
