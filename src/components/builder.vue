<template>
  <v-app md12>
    <v-navigation-drawer

      :mini-variant="miniVariant"
      :clipped="clipped"
      v-model="drawer"
      enable-resize-watcher
      fixed
      app
    >
      <v-list>
        <v-list-tile
          value="true"
          v-for="(item, i) in items"
          :key="i"
        >
          <v-list-tile-action>
            <v-icon v-html="item.icon"></v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="item.title"></v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

   <v-expansion-panel expand>
    <v-expansion-panel-content ripple="true">
      <div slot="header">Аудіо</div>
        <v-layout row wrap>

          <v-flex xs6>
            <v-card>
                <v-card-media
                  src='/static/img/icons_app/music.png'
                  height="100px"
                 >
                </v-card-media>
              <v-card-title primary-title>
              <div class="headline">Music</div>
              </v-card-title>
            </v-card>
          </v-flex>

          <v-flex xs6>
            <v-card>
                <v-card-media
                  src='/static/img/icons_app/music.png'
                  height="100px"
                 >
                </v-card-media>
              <v-card-title primary-title>
              <div class="headline">Music</div>
              </v-card-title>
            </v-card>
          </v-flex>
        </v-layout>
    </v-expansion-panel-content >

    <v-expansion-panel-content >
      <div slot="header">Аудіо</div>
      <v-layout row wrap>
        <v-flex xs6>
          <v-card>
            <v-card-media
              src='/static/img/icons_app/music.png'
              height="100px"
            >
            </v-card-media>
            <v-card-title primary-title>
            <div class="headline">Music</div>
            </v-card-title>
          </v-card>
        </v-flex>

         <v-flex xs6>
        <v-card>
        <v-card-media
          src='/static/img/icons_app/music.png'
          height="100px"
        >
        </v-card-media>
        <v-card-title primary-title>
            <div class="headline">Music</div>
        </v-card-title>
        </v-card>
        </v-flex>
      </v-layout>
    </v-expansion-panel-content >
   </v-expansion-panel>


      </v-list>
    </v-navigation-drawer>

    <v-toolbar
      app
      :clipped-left="clipped"
    >
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-btn icon @click.stop="miniVariant = !miniVariant">
        <v-icon v-html="miniVariant ? 'chevron_right' : 'chevron_left'"></v-icon>
      </v-btn>
      <v-btn icon @click.stop="clipped = !clipped">
        <v-icon>web</v-icon>
      </v-btn>
      <v-btn icon @click.stop="fixed = !fixed">
        <v-icon>remove</v-icon>
      </v-btn>
      <v-toolbar-title v-text="title"></v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>
    <v-content>
       <v-layout md12>
      <v-expansion-panel  expand>
    <v-expansion-panel-content >
      <div slot="header">Аудіо</div>
      </v-expansion-panel-content >
      </v-expansion-panel>
    </v-layout>
    </v-content>

    <v-footer :fixed="fixed" app>
      <span>&copy; 2017</span>
    </v-footer>
  </v-app>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
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

<script>
export default {
  data () {
    return {
      clipped: false,
      drawer: true,
      fixed: false,
      items: [
        {
          icon: 'bubble_chart',
          title: 'Елементи'
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js',
      cards: [
        {
          title: 'Pre-fab homes',
          src: '/static/img/icons_app/music.png',
          flex: 6
        },
        {
          title: 'Favorite road trips',
          src: '/static/img/icons_app/music.png',
          flex: 6
        },
        {
          title: 'Best airlines',
          src: '/static/img/icons_app/music.png',
          flex: 6
        }
      ]
    }
  },
  name: 'App'
}
</script>
