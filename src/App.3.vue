<template>
  <div id="table-wrapper">
    <table class="users reset_table">
      <colgroup>
        <col width="200">
        <col width="220">
        <col width="230">
        <col width="240">
        <col width="250">
      </colgroup>
      <thead>
        <tr>
          <th>
            IfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffD</th>
          <th>Name</th>
          <th>Job</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>0001</td>
          <td>Johnny Five</td>
          <td>Robofffffffffffffffffffffffffffffffffffffffffffffffffffftin'</td>
          <td>need@input.com</td>
        </tr>
        <tr>
          <td>0002</td>
          <td>Super Superlonglastnamesmithsdfaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</td>
          <td>Doin' stuff</td>
          <td>doinffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffg@stuff.com
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  export default {};
</script>

<style>
  #table-wrapper {
    width: 1000px;
    height: 476px;
    overflow: auto;
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
</style>