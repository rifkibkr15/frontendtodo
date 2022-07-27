<template>
  <div class="container my-5">
    <div class="row justify-content-center">
      <div class="col-10">
        <router-link
          :to="{ name: 'transaction.create' }"
          class="btn btn-primary btn-sm rounded shadow"
        >
          Add</router-link
        >
        <div class="card mt-1 rounded shadow">
          <div class="card-header">Transaction List</div>
          <div class="card-body">
            <table class="table table-sm">
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Amount</th>
                  <th>Type</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr
                  v-for="(transaction, index) in transactions.data"
                  :key="index"
                >
                  <td>{{ transaction.title }}</td>
                  <td>Rp.{{ transaction.amount }}</td>
                  <td>{{ transaction.type }}</td>
                  <td>
                    <div class="btn-group">
                      <router-link
                        :to="{
                          name: 'transaction.edit',
                          params: { id: transaction.id },
                        }"
                        class="btn btn-outline-info btn-sm rounded shadow"
                      >
                        Edit
                      </router-link>
                      <button
                        class="btn btn-outline-danger btn-sm rounded shadow ms-2"
                        @click.prevent="destroy(transaction.id, index)"
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import { onMounted, ref } from "vue";
// import { useRoute } from "vue-router";

export default {
  setup() {
    // reactive state
    let transactions = ref([]);

    // const route = useRoute();
    onMounted(() => {
      //get data from api endpoint
      axios
        .get("http://127.0.0.1:8000/api/transaction/")
        .then((result) => {
          transactions.value = result.data;
        })
        .catch((err) => {
          console.log(err.response);
        });
    });

    function destroy(id, index) {
      axios
        .delete("http://127.0.0.1:8000/api/transaction/" + id)
        .then(() => {
          transactions.value.data.spilce(index, 1);
        })
        .catch((err) => {
          console.log(err.response.data);
        });
    }

    return {
      transactions,
      destroy,
    };
  },
};
</script>
<style lang="scss" scoped></style>
