<template>
  <div class="row mt-5">
    <div class="col col-sm-6 offset-3">
      <div class="card shadow-lg p-5 border-2 border-primary">
        <div class="card-body p-lg-5">
          <h1 class="text-primary">Admin Panel</h1>
          <table class="table table-striped table-bordered table-responsive">
            <thead>
              <tr>
                <th class="fw-bold">Products</th>
                <th class="fw-bold">Users</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <RouterLink class="link-primary fw-bold" to="/list-product"
                    >List Product &#10148;</RouterLink
                  >
                </td>
                <td>
                  <RouterLink class="link-primary fw-bold" to="/users"
                    >List User &#10148;</RouterLink
                  >
                </td>
              </tr>
              <tr>
                <td>
                  <RouterLink class="link-secondary fw-bold" to="/list-product/create"
                    >Create Product &#10148;</RouterLink
                  >
                </td>
                <td>
                  <RouterLink class="link-secondary fw-bold" to="/users/create" exact
                    >Create User &#10148;</RouterLink
                  >
                </td>
              </tr>
              <tr>
                <td>
                  <RouterLink class="link-success fw-bold" to="/list-product"
                    >Update Feature &#10148;</RouterLink
                  >
                </td>
                <td>
                  <RouterLink class="link-success fw-bold" to="/users"
                    >Update Role &#10146;</RouterLink
                  >
                </td>
              </tr>              
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>
