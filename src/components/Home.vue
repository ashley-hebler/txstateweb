<template>
  <div class="home">
    <h1 class="page-title">
      <div class="container">
        <span>Welcome to Online Media Design</span>
      </div>
    </h1>
    <div class="container content">
      <p>This course is designed to instruct students in website construction and design. Students will learn HTML/CSS coding and then be introduced to graphics programs and introductory programming techniques, as well as the multimedia program iMovie. The course will cover the usage of graphics, sound and video and discuss the appropriateness of multimedia on Web sites for journalism, advertising, public relations, and e-commerce. Students will work on several small Web projects that will lead to a final multimedia project using WordPress as a content management system. The goal is to emphasize more than just the skills associated with individual programs, but the integration of several skills into designing effective and attractive Web sites.</p>
      <p>In addition, the class will address social and theoretical implications of technology, such as the digital divide, social media and data journalism.</p>
      <p>The course time on most weeks includes lecture and discussion on the first half of class and lab time during the second half. Students will be expected to attend open lab hours to complete projects.</p>
      <p>I look forward to a <span class="highlight">fun</span> and <span class="highlight highlight--alt">creative</span> semester.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      msg: 'Homepage'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
