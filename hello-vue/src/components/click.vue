<template>
  <div id="click">
    <button v-on:click="counter += 1">Add 1</button>
    <p>The button above has been clicked {{ counter }} times.</p>

    <input v-model="message" placeholder="edit me">
    <p>Message is: {{ message }}</p>checkbox:
    <div>
      <input type="checkbox" id="jack" v-model="checkedName" value="jack">
      <label for="jack">jojo</label>
      <input type="checkbox" id="lee" v-model="checkedName" value="lee">
      <label for="lee">lee</label>
      <input type="checkbox" id="qin" v-model="checkedName" value="qin">
      <label for="qin">qin</label>
      <br>
      <span>Checked names:{{ checkedName }}</span>
    </div>

    <div>
      <select v-model="selected">
        <option v-for="option in options" v-bind="option.value">{{ option.text }}</option>
      </select>
      <span>Selected: {{ selected }}</span>
    </div>

    <div id="app">
      <svg width="200" height="200">
        <polygon :points="points"></polygon>
        <circle cx="100" cy="100" r="90"></circle>
      </svg>
      <label>Sides: {{ sides }}</label>
      <input type="range" min="3" max="500" v-model.number="sides">
      <label>Minimum Radius: {{ minRadius }}%</label>
      <input type="range" min="0" max="90" v-model.number="minRadius">
      <label>Update Interval: {{ updateInterval }} milliseconds</label>
      <input type="range" min="10" max="2000" v-model.number="updateInterval">
    </div>
    <ul id="example">
      <li v-for="item in items">
        {{ item.message }}
      </li>
    </ul>
    <div>
      <span>Message is: {{ msg }}</span>
      <input type="text" v-model="msg" placeholder="email address" number> 
    </div>
    
  </div>
</template>

<script>
export default {
  name: "Click",
  props: {
    conter: Number,
    message: String
  },
  data: () => {
    return {
      counter: 0,
      checkedName: [],
      selected: "A",
      options: [
        { text: "No1", value: "A" },
        { text: "No2", value: "B" },
        { text: "No3", value: "C" }
      ],
      items:[
        {message:'one'},
        {message:'two'}
      ],
      message:'hello world'
    };
  }
};

</script>

<style>
svg {
  display: block;
}
polygon {
  fill: #41b883;
}
circle {
  fill: transparent;
  stroke: #35495e;
}
input[type="range"] {
  display: block;
  width: 100%;
  margin-bottom: 15px;
}
</style>
