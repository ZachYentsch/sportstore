import { generateId } from "../Utils/generateId.js"



export class Baseball {
    constructor(baseballdata) {
        this.type = baseballdata.type
        this.quantity = baseballdata.quantity
        this.brand = baseballdata.brand
        this.price = 150
        this.id = generateId()
    }


    get Template() {
        return `
        <div id="products" class="row">
          <div class="col-md-4 mt-3 text-center">
            <div class="bg-primary rounded shadow">
              <h4>${this.type}</h4>
              <h5>${this.brand}</h5>
              <div class="row">
              <div class="col-12 justify-content-between containter-fluid">
                <p class="text-center">QTY :${this.quantity} - $${this.price} </p>
                </div>
              </div>
            </div>
          </div>
        </div>
    `
    }
}