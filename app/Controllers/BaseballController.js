import { ProxyState } from "../AppState.js";
import { getBaseballForm } from "../Forms/BaseballForm.js";
import { baseballService } from "../Services/BaseballService.js";

function _drawBaseball() {
    const base = ProxyState.baseball
    let template = ''
    base.forEach(b => template += b.Template)
    document.getElementById('base').innerHTML = template
}


export class BaseballController {
    constructor(data) {

    }

    drawBaseball() {
        _drawBaseball()
        document.getElementById('createItem').innerHTML = getBaseballForm()
        this.drawBaseballItem()
    }

    createBaseItem() {
        window.event.preventDefault()
        const form = window.event.target
        const baseballdata = {
            type: form.type.value,
            brand: form.brand.value,
            quantity: form.quantity.value,
        }
        baseballService.creatBaseItem(baseballdata)
        form.reset()
        bootstrap.Modal.getOrCreateInstance(document.getElementById('createItem')).hide()
    }

    drawBaseballItem() {
        document.getElementById('createItem').innerHTML = getBaseballForm()
        console.log('testing')
    }
}