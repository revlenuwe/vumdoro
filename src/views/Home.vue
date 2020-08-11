<template>
    <section class="home d-flex align-items-center">
      <div class="container">
        <div class="rounded text-white padding-30 bg-grey">
          <div class="row">
            <div class="col-md-4 d-flex">
              <div class="btn-control pt-5 pb-5 p-3">
                <div class="btn-group-vertical">
                  <button class="btn btn-success btn-sm"><i class="fas fa-cog"></i></button>
                  <button class="btn btn-success btn-sm"><i class="fas fa-forward"></i></button>
                </div>
              </div>
              <h1 class="text-white display-1 p-3 text-center"><b>14:53</b></h1>
            </div>
            <div class="col-md-8 text-white">
              <div class="d-flex p-5 float-right">
                <div class="btn-control p-3">
                  <button class="btn btn-lg btn-primary font-weight-bold f-22">START</button>
                </div>
                <div class="btn-control p-3">
                  <button class="btn btn-lg btn-default font-weight-bold f-22">RESET</button>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
</template>

<script>

export default {
  name: 'Home',

}
</script>
