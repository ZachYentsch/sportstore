export function getBaseballForm() {
    return `
    <form onsubmit="app.BaseballController.createBaseballOrder()">
    <div class="mb-3 d-flex justify-content-between">
      <div class="mx-2">
        <label for="type" class="form-label">Category:</label>
        <input type="text" class="form-control" name="type" id="type" aria-describedby="type"
          placeholder="Category..." required>
      </div>
      <div class="mx-2">
      <label for="brand" class="form-label">Brand:</label>
      <input type="text" class="form-control" name="brand" id="brand" aria-describedby="brand"
        placeholder="Brand..." required>
    </div>
    <div class="mx-2">
      <label for="quantity" class="form-label">Qty:</label>
      <input type="value" class="form-control" name="quantity" id="quantity" aria-describedby="quantity"
        placeholder="QTY..." required min='1'>
    </div>
      </div>
      </form>
    `
}