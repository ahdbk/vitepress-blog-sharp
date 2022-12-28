<template>
    <div class="container">
  <div class="card">
    <div class="card-header">
      <img src="https://images.unsplash.com/photo-1470723710355-95304d8aece4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=100" alt="" />
    </div>
    <div class="card-body">
      <span class="tag tag-teal">Hardware</span>
      <h4>PCIe Gen4 is faster than lightning!</h4>
      <p>Since each new implementation of the spec has doubled the data throughput of the PCIe lanes, it's no surprise that we're looking at 30GB/s speeds now.</p>
      <div class="user">
        <img src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=100" alt="" />
        <div class="user-info">
          <h5>Stateless Actor</h5>
          <small>2h ago</small>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Roboto&display=swap");
* {
  box-sizing: border-box;
}

.card {
  margin: 10px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  width: 300px;
  transform: scale(1);
  filter: grayscale(1);
  transition: transform 0.2s cubic-bezier(.65,.05,.36,1), box-shadow 0.2s cubic-bezier(.65,.05,.36,1), filter 0.4s cubic-bezier(.65,.05,.36,1);
}
.card:hover {
  cursor: pointer;
  filter: none;
  transform: scale(1.15);
  box-shadow: 0 3px 25px rgba(0, 0, 0, 0.3);
}
.card-header img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}
.card-body {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 20px;
  min-height: 250px;
}

.tag {
  background: #cccccc;
  border-radius: 50px;
  font-size: 12px;
  margin: 0;
  color: #fff;
  padding: 2px 10px;
  text-transform: uppercase;
  cursor: pointer;
}
.tag-teal {
  background-color: #47bcd4;
}

.card-body p {
  font-size: 13px;
  margin: 0 0 40px;
}
.user {
  display: flex;
  margin-top: auto;
}

.user img {
  border-radius: 50%;
  width: 40px;
  height: 40px;
  margin-right: 10px;
  transform: scalex(-1);
}
.user-info h5 {
  margin: 0;
}
.user-info small {
  color: #545d7a;
}
</style>