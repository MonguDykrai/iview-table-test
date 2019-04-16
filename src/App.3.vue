<template>
  <div style="width: 1000px; overflow: auto; border: 1px solid #666; margin: 20px auto 0;">
    <table class="users reset_table">
      <thead>
        <tr>
          <th
            class="row-1 row-ID"
          >IfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffD</th>
          <th class="row-2 row-name">Name</th>
          <th class="row-3 row-job">Job</th>
          <th class="row-4 row-email">Email</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="row-ID">0001</td>
          <td class="row-name">Johnny Five</td>
          <td class="row-job">Robofffffffffffffffffffffffffffffffffffffffffffffffffffftin'</td>
          <td class="row-email">need@input.com</td>
        </tr>
        <tr>
          <td class="row-ID">0002</td>
          <td
            class="row-name"
          >Super Superlonglastnamesmithsdfaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</td>
          <td class="row-job">Doin' stuff</td>
          <td
            class="row-email"
          >doinffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffg@stuff.com</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {};
</script>

<style>
* {
  box-sizing: border-box;
}

.reset_table,
.reset_table table tr,
.reset_table tr td,
.reset_table table tbody,
.reset_table table thead,
.reset_table table tfoot,
.reset_table table tr th,
.reset_table table tfoot tr tf {
  margin: 0;
  padding: 0;
  background: none;
  border: none;
  border-collapse: collapse;
  border-spacing: 0;
  background-image: none;
}

div {
  overflow: auto;
}

.users {
  table-layout: fixed;
  width: 100%;
  white-space: nowrap;
}

.users th,
.users td {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

/* Column widths are based on these cells */
/* td,
.row-ID th {
  width: 250px;
}
td,
.row-name th {
  width: 250px;
}
td,
.row-job th {
  width: 250px;
}
td,
.row-email th {
  width: 250px;
} */

th, td{
  width: 250px;
}
</style>
