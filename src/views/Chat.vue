<template>
  <div class="chat container">
    <h2 class="center white-text">Vee chat</h2>
    <div class="card">
      <div class="card-content">
        <ul class="messages" v-chat-scroll>
          <li v-for="(message, index) in messages" :key="index">
            <span class="teal-text">{{ message.name }}</span>
            <span class="grey-text text-darken-3"> {{ message.content }}</span>
            <div class="grey-text time">{{ message.timestamp }}</div>
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
import db from "@/firebase/init";
import moment from "moment";
export default {
  name: "chat",
  props: ["name"],
  components: {
    newMessage,
  },
  data() {
    return {
      messages: [],
    };
  },
  created() {
    let ref = db.collection("vee-chat-messages").orderBy("timestamp");

    ref.onSnapshot((snapshot) => {
      snapshot.docChanges().forEach((change) => {
        if (change.type == "added") {
          let doc = change.doc;
          this.messages.push({
            id: doc.id,
            name: doc.data().name,
            content: doc.data().content,
            timestamp: moment(doc.data().timestamp).format("lll"),
          });
        }
      });
    });
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
  font-size: 0.8em;
}
.messages {
  max-height: 300px;
  overflow: auto;
}
.messages::-webkit-scrollbar {
  width: 3px;
}
.messages::-webkit-scrollbar-track {
  background: #ddd;
}
.messages::-webkit-scrollbar-thumb {
  background: #ddd;
}
</style>
