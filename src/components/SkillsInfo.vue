<style lang="scss">
  @import './../assets/sass/colors';
  .progress {
    overflow: hidden;
    height: 20px;
    margin-bottom: 20px;
    background-color: transparent;
    border-radius: 0px;
    /* box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1); */
    border: dotted 1px;
    .progress-bar-success {
      background-color: $color-code-3;
    }
    .progress-bar-info {
      background-color: $color-code-4;
    }
    .progress-bar-warn {
      background-color: $color-code-5;
    }
    .progress-bar-danger {
      background-color: $color-code-3;
    }
  }

</style>

<template>
  <div class="col-xs-12">
    <div class="col-xs-12">
      <div class="col-xs-12 col-sm-5 comment">
        {{$t('skills.js')}}:
      </div>
      <div class="col-xs-12 col-sm-7 comment">
        <div class="progress">
          <div ref="js" class="progress-bar progress-bar-success" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"
            style="width: 0%">
          </div>
        </div>
      </div>
    </div>
    <div class="col-xs-12 ">
      <div class="col-xs-12 col-sm-5 comment">
        {{$t('skills.java')}}:
      </div>
      <div class="col-xs-12 col-sm-7 comment">
        <div class="progress">
          <div ref="java" class="progress-bar progress-bar-success" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"
            style="width: 0%">
          </div>
        </div>
      </div>
    </div>
    <div class="col-xs-12 ">
      <div class="col-xs-12 col-sm-5 comment">
        {{$t('skills.php')}}:
      </div>
      <div class="col-xs-12 col-sm-7 comment">
        <div class="progress">
          <div ref="php" class="progress-bar progress-bar-success" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"
            style="width: 0%">
          </div>
        </div>
      </div>
    </div>
    <div class="col-xs-12 ">
      <div class="col-xs-12 col-sm-5 comment">
        {{$t('skills.python')}}:
      </div>
      <div class="col-xs-12 col-sm-7 comment">
        <div class="progress">
          <div ref="python" class="progress-bar progress-bar-warn" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"
            style="width: 0%">
          </div>
        </div>
      </div>
    </div>
    <div class="col-xs-12 ">
      <div class="col-xs-12 col-sm-5 comment">
        {{$t('skills.ruby')}}:
      </div>
      <div class="col-xs-12 col-sm-7 comment">
        <div class="progress">
          <div ref="ruby" class="progress-bar progress-bar-warn" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"
            style="width: 0%">
          </div>
        </div>
      </div>
    </div>
    <div class="col-xs-12 ">
      <div class="col-xs-12 col-sm-5 comment">
        {{$t('skills.nosql')}}:
      </div>
      <div class="col-xs-12 col-sm-7 comment">
        <div class="progress">
          <div ref="nosql" class="progress-bar progress-bar-success" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"
            style="width: 0%">
          </div>
        </div>
      </div>
    </div>
    <div class="col-xs-12 ">
      <div class="col-xs-12 col-sm-5 comment">
        {{$t('skills.sql')}}:
      </div>
      <div class="col-xs-12 col-sm-7 comment">
        <div class="progress">
          <div ref="sql" class="progress-bar progress-bar-success" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"
            style="width: 0%">
          </div>
        </div>
      </div>
    </div>
    <div class="col-xs-12 ">
      <div class="col-xs-12 col-sm-5 comment">
        {{$t('skills.devops')}}:
      </div>
      <div class="col-xs-12 col-sm-7 comment">
        <div class="progress">
          <div ref="devops" class="progress-bar progress-bar-info" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"
            style="width: 0%">
          </div>
        </div>
      </div>
    </div>
    <div class="col-xs-12 comment">
      <div class="col-xs-12 ">
        Detalle:
      </div>
    </div>
    <div class="col-xs-12">
      <div class="col-xs-12 col-md-6 comment">
        <p>
          <ul>
            <li>
              Frontend: HTML, CSS, Bootstrap, Foundation, Yeoman, Gulp, Bower, Grunt, JSPM.
            </li>
            <li>
              Js (Frontend): Angular, VueJS, Aurelia, JQuery, M&oacute;vil con Apache Cordova.
            </li>
            <li>
              Js (Backend): Node, Sails, Express, Meteor.
            </li>
            <li>
              Swift (Apps): Cocoapods.
            </li>
            <li>
              NoSQL: MongoDb, Neo4j
            </li>
            <li>
              Webservers: Apache Nginx
            </li>
            <li>
              Usuario experto: MacOs, Windows, Linux
            </li>
          </ul>
        </p>
      </div>
      <div class="col-xs-12 col-md-6 comment">
        <p>
          <ul>
            <li>
              PHP: Codeigniter, Laravel.
            </li>
            <li>
              Java: JSF, Spring, JSP, Hibernate, JPA, EJB, JSTL, Maven.
            </li>
            <li>
              Java Servers: Tomcat, JBoss.
            </li>
            <li>
              SQL: MySQL, Oracle, Firebird
            </li>
            <li>
              Syadmin: Ubuntu, Centos.
            </li>
          </ul>
        </p>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'SkillsInfo',
    props: {
      start: {
        type: Boolean,
        default: false
      }
    },
    watch: {
      start() {
        setTimeout(this.animate, 200);
      }
    },
    methods: {
      animate() {
        this.$refs.js.style.width = '100%';
        this.$refs.java.style.width = '90%';
        this.$refs.php.style.width = '90%';
        this.$refs.python.style.width = '50%';
        this.$refs.ruby.style.width = '50%';
        this.$refs.sql.style.width = '90%';
        this.$refs.nosql.style.width = '95%';
        this.$refs.devops.style.width = '70%';
      }
    }
  }

</script>
