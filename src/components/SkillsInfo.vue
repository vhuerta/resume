<style lang="scss">
  @import './../assets/sass/colors';
  .progress {
    overflow: hidden;
    height: 20px;
    margin-bottom: 5px;
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

  .skills-ul {
    ul {
      padding-left: 0;
      padding-right: 0;
      padding-bottom: 0;
      li {
        padding-bottom: 10px;
      }
    }
  }

</style>

<template>
  <div class="col-xs-12">
    <div class="col-xs-6 sentence comment">
      {{$t('skills.js')}}:
    </div>
    <div class="col-xs-6 sentence comment">
      {{$t('skills.java')}}:
    </div>
    <div class="col-xs-6 sentence comment">
      <div class="progress">
        <div ref="js" class="progress-bar progress-bar-success" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"
          style="width: 0%">
        </div>
      </div>
    </div>
    <div class="col-xs-6 sentence comment">
      <div class="progress">
        <div ref="java" class="progress-bar progress-bar-success" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"
          style="width: 0%">
        </div>
      </div>
    </div>

    <div class="col-xs-6 sentence comment">
      {{$t('skills.php')}}:
    </div>
    <div class="col-xs-6 sentence comment">
      {{$t('skills.python')}}:
    </div>

    <div class="col-xs-6 sentence comment">
      <div class="progress">
        <div ref="php" class="progress-bar progress-bar-success" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"
          style="width: 0%">
        </div>
      </div>
    </div>
    <div class="col-xs-6 sentence comment">
      <div class="progress">
        <div ref="python" class="progress-bar progress-bar-warn" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"
          style="width: 0%">
        </div>
      </div>
    </div>

    <div class="col-xs-6 sentence comment">
      {{$t('skills.ruby')}}:
    </div>
    <div class="col-xs-6 sentence comment">
      {{$t('skills.nosql')}}:
    </div>

    <div class="col-xs-6 sentence comment">
      <div class="progress">
        <div ref="ruby" class="progress-bar progress-bar-warn" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"
          style="width: 0%">
        </div>
      </div>
    </div>
    <div class="col-xs-6 sentence comment">
      <div class="progress">
        <div ref="nosql" class="progress-bar progress-bar-success" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"
          style="width: 0%">
        </div>
      </div>
    </div>

    <div class="col-xs-6 sentence comment">
      {{$t('skills.sql')}}:
    </div>
    <div class="col-xs-6 sentence comment">
      {{$t('skills.devops')}}:
    </div>

    <div class="col-xs-6 sentence comment">
      <div class="progress">
        <div ref="sql" class="progress-bar progress-bar-success" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"
          style="width: 0%">
        </div>
      </div>
    </div>
    <div class="col-xs-6 sentence comment">
      <div class="progress">
        <div ref="devops" class="progress-bar progress-bar-info" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"
          style="width: 0%">
        </div>
      </div>
    </div>
    <div class="col-xs-12">
      <div class="col-xs-12 col-sm-6 sentence skills-ul">
        
          <ul>
            <li>
              Langs: 
              <br>&nbsp;&nbsp;JS, Java, PHP, Python, Ruby, GoLang
              <br>
            </li>
            <li>
              Backend Frameworks: 
                <br>&nbsp;&nbsp;JS: Node, Express, Sails, Meteor
                <br>&nbsp;&nbsp;Java: Spring, JSF, Hibernate, JSP, EJB
                <br>&nbsp;&nbsp;PHP: Codeigniter
                <br>
            </li>
            <li>
              SO's: 
              <br>&nbsp;&nbsp;MacOs, Windows, Linux
              <br>
            </li>
            <li>
              DevOps:
              <br>&nbsp;&nbsp;Docker
              <br>&nbsp;&nbsp;AWS (Lambdas, Kinesis, S3 Etc)
              <br>&nbsp;&nbsp;Rackspace, Softlayer, Heroku
              <br>&nbsp;&nbsp;Linux Servers (Centos, Ubuntu)
            </li>
          </ul>
        
      </div>
      <div class="col-xs-12 col-sm-6 sentence skills-ul">
        <p>
          <ul>
            <li>
              Frontend Frameworks: 
              <br>&nbsp;&nbsp;Vue JS, React JS, AngularJS, Aurelia, JQuery.
            </li>
            <li>
              Mobile: 
              <br>&nbsp;&nbsp;React Native, Cordova, Swift.
            </li>
            <li>
              Webservers & Other tools: 
              <br>&nbsp;&nbsp;Apache, NGINX, Tomcat, JBoss
              <br>&nbsp;&nbsp;RabbitMQ, Maven, Webpack, Yeoman, Gulp, Grunt
            </li>
            <li>
              NoSQL:
              <br>&nbsp;&nbsp;MongoDb, Redis, Neo4j, ElasticSearch
            </li>
            <li>
              SQL:
              <br>&nbsp;&nbsp;MySQL, Postgres, Oracle, Firebird
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
        this.$refs.java.style.width = '95%';
        this.$refs.php.style.width = '95%';
        this.$refs.python.style.width = '50%';
        this.$refs.ruby.style.width = '50%';
        this.$refs.sql.style.width = '90%';
        this.$refs.nosql.style.width = '95%';
        this.$refs.devops.style.width = '90%';
      }
    }
  }

</script>
