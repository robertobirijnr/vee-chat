<template>
  <div class="chat container">
    <h2 class="center white-text">Vee chat</h2>
    <div class="card">
      <div class="card-content">
        <ul class="message">
          <li>
            <span class="teal-text">Name</span>
            <span class="grey-text text-darken-3"> message</span>
            <div class="grey-text time">time</div>
          </li>
        </ul>
      </div>
      <div class="card-action">
        <newMessage :name="name" />
      </div>
    </div>
  </div>
</template>

<script>
import newMessage from "@/components/newMessage";
export default {
  name: "chat",
  props: ["name"],
  components: {
    newMessage,
  },
  data() {
    return {};
  },
};
</script>
<style scoped>
h2 {
  font-size: 2.6em;
  margin-bottom: 40px;
}
span {
  font-size: 1.4em;
}

.time {
  display: block;
  font-size: 1.2em;
}
</style>
