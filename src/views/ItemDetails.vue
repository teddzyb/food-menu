<template>
  <div class="container my-5">
    <div class="card mx-5">
      <h4 class="card-header">{{ $route.query.n }}</h4>
      <div class="container-fluid">
        <div class="card-body row flex-row-reverse">
          <div class="col-md-4">
            <img :src="$route.query.i" class="img-fluid rounded-3" />
          </div>
          <div class="col-sm d-flex flex-column justify-content-between">
            <div class="row">
              <h6>Category: {{ $route.query.c }}</h6>
              <p class="card-text">
                {{ $route.query.d }}
              </p>
              <h5 class="card-title">P{{ $route.query.p }}.00</h5>
            </div>
            <div class="row">
              <div class="col-auto">
                <div class="col-auto row">
                  <div class="col-auto px-0">
                    <h3><i class="bi bi-file-minus-fill text-warning"></i></h3>
                  </div>
                  <div class="col-4">
                    <input
                      class="form-control text-center"
                      type="text"
                      value="0"
                    />
                  </div>
                  <div class="col-auto px-0 me-3">
                    <h3><i class="bi bi-file-plus-fill text-warning"></i></h3>
                  </div>
                  <div class="col-auto">
                    <button class="btn btn-warning">Add to Cart</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// Img, Price, Category, and a short Description, edit the Items Array to add a short Description of the Item
export default {
  name: "ItemDetails",
};
</script>
