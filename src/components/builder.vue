
<template>
  <v-app id="inspire" class="scroll-y" >

    <!-- Left menu -->
    <v-navigation-drawer
    height="500px"
    disable-resize-watcher
     stateless permanent
    hide-overlay
    persistent
      :mini-variant="miniVariant"
      :clipped="clipped_left"
      v-model="drawer_left"
      absolute
      app
    >
      <v-list>
        <v-list-tile
          value="true"
          v-for="(item, i) in items_left"
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
    <v-expansion-panel-content ripple >
      <div slot="header">Аудіо</div>
        <v-layout row wrap>




          <v-flex xs6 v-on:click="addCard()">
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




          <v-flex xs6 >
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
    <!-- End left menu -->





 <!-- Right menu -->
<v-navigation-drawer
 height="500px"


    hide-overlay

      :mini-variant="miniVariant_right"
      :clipped="clipped_right"
      v-model="drawer_rigth"
      absolute
      right
      app
    >
      <v-list>
        <v-list-tile
          value="true"
          v-for="(item, i) in items_right"
          :key="i"
        >
          <v-list-tile-action>
            <v-icon v-html="item.icon"></v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="item.title"></v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

   <v-expansion-panel expand >
    <v-expansion-panel-content ripple >
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
<!-- End rightDrawer -->


<!-- toolbar -->
    <v-toolbar
      fixed
      app
      :clipped-left="clipped_left"

    >
      <v-toolbar-side-icon @click.stop="drawer_left = !drawer_left"></v-toolbar-side-icon>
      <v-btn icon @click.stop="miniVariant = !miniVariant">
        <v-icon v-html="miniVariant ? 'chevron_right' : 'chevron_left'"></v-icon>
      </v-btn>
      <v-btn icon @click.stop="clipped_left = !clipped_left, clipped_right = !clipped_right">
        <v-icon>web</v-icon>
      </v-btn>
      <v-btn icon @click.stop="fixed = !fixed">
        <v-icon>remove</v-icon>
      </v-btn>
      <v-btn color="primary" dark @click.stop="dialog = true">Профіль</v-btn>
      <v-btn color="primary" dark v-on:click="clickButtonTest('Test')">Test socket.io</v-btn>
      <v-toolbar-title v-text="title"></v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-side-icon @click.stop="drawer_rigth = !drawer_rigth"></v-toolbar-side-icon>
    </v-toolbar>
    <!-- end Toolbar -->



      <!-- <v-content md12  class="scroll-y"  id="content">
        <v-expansion-panel expand app>
    <v-expansion-panel-content v-for="(item,i) in 8" :key="i" v-bind:value="item === 2">
      <div slot="header">Item</div>
      <v-card>
        <v-card-text class="grey lighten-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</v-card-text>
      </v-card>
    </v-expansion-panel-content>
  </v-expansion-panel>
      </v-content> -->

<!-- main field  -->
    <v-content>
       <v-layout md12>
      <v-card class="e4" md12 height="500px" width="700px">
    <vue-draggable-resizable :parent="true"

              v-for="card in cards"
              :key="card.title"
            >
              <v-card>
                <v-card-media
                  :src="card.src"
                  height="100px"
                >
                  <v-container fill-height fluid>
                    <v-layout fill-height>
                      <v-flex xs12 align-end flexbox>
                        <span class="headline white--text" v-text="card.title"/>
                      </v-flex>
                    </v-layout>
                  </v-container>
                </v-card-media>
                <!-- <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn icon>
                    <v-icon>favorite</v-icon>
                  </v-btn>
                  <v-btn icon>
                    <v-icon>bookmark</v-icon>
                  </v-btn>
                  <v-btn icon>
                    <v-icon>share</v-icon>
                  </v-btn>
                </v-card-actions> -->
              </v-card>
            </vue-draggable-resizable>


        <v-card-title>Drop zone</v-card-title>
      </v-card>

    </v-layout>
    </v-content>
    <!-- end main field -->


    <v-layout>

         <v-expansion-panel expand md12>
    <v-expansion-panel-content ripple >
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

    </v-layout>

 <v-footer class="pa-3">
    <v-spacer></v-spacer>
    <div>&copy; {{ new Date().getFullYear() }}</div>
  </v-footer>









    <v-dialog
        v-model="dialog"
        transition="slide-y-transition"
        :overlay="false"
        scrollable
      >
        <v-card tile>
          <v-toolbar card dark color="primary">
            <v-btn icon @click.native="dialog = false" dark>
              <v-icon>close</v-icon>
            </v-btn>
            <v-toolbar-title>Settings</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-toolbar-items>
              <v-btn dark flat @click.native="dialog = false">Save</v-btn>
            </v-toolbar-items>
            <v-menu bottom right offset-y>
              <v-btn slot="activator" dark icon>
                <v-icon>more_vert</v-icon>
              </v-btn>
            </v-menu>
          </v-toolbar>
          <v-card-text>
            <v-btn color="primary" dark @click.stop="dialog2 = !dialog2">Open Dialog 2</v-btn>
            <v-tooltip right>
              <v-btn slot="activator">Tool Tip Activator</v-btn>
              Tool Tip
            </v-tooltip>
            <v-list three-line subheader>
              <v-subheader>User Controls</v-subheader>
              <v-list-tile avatar>
                <v-list-tile-content>
                  <v-list-tile-title>Content filtering</v-list-tile-title>
                  <v-list-tile-sub-title>Set the content filtering level to restrict apps that can be downloaded</v-list-tile-sub-title>
                </v-list-tile-content>
              </v-list-tile>
              <v-list-tile avatar>
                <v-list-tile-content>
                  <v-list-tile-title>Password</v-list-tile-title>
                  <v-list-tile-sub-title>Require password for purchase or use password to restrict purchase</v-list-tile-sub-title>
                </v-list-tile-content>
              </v-list-tile>
            </v-list>
            <v-divider></v-divider>
            <v-list three-line subheader>
              <v-subheader>General</v-subheader>
              <v-list-tile avatar>
                <v-list-tile-action>
                  <v-checkbox v-model="notifications"></v-checkbox>
                </v-list-tile-action>
                <v-list-tile-content>
                  <v-list-tile-title>Notifications</v-list-tile-title>
                  <v-list-tile-sub-title>Notify me about updates to apps or games that I downloaded</v-list-tile-sub-title>
                </v-list-tile-content>
              </v-list-tile>
              <v-list-tile avatar>
                <v-list-tile-action>
                  <v-checkbox v-model="sound"></v-checkbox>
                </v-list-tile-action>
                <v-list-tile-content>
                  <v-list-tile-title>Sound</v-list-tile-title>
                  <v-list-tile-sub-title>Auto-update apps at any time. Data charges may apply</v-list-tile-sub-title>
                </v-list-tile-content>
              </v-list-tile>
              <v-list-tile avatar>
                <v-list-tile-action>
                  <v-checkbox v-model="widgets"></v-checkbox>
                </v-list-tile-action>
                <v-list-tile-content>
                  <v-list-tile-title>Auto-add widgets</v-list-tile-title>
                  <v-list-tile-sub-title>Automatically add home screen widgets</v-list-tile-sub-title>
                </v-list-tile-content>
              </v-list-tile>
            </v-list>
          </v-card-text>

          <div style="flex: 1 1 auto;"/>
        </v-card>
      </v-dialog>

  </v-app>
</template>

<script>
export default {
  data () {
    return {
      dialog: false,
      notifications: false,
      sound: true,
      widgets: false,
      clipped_left: false,
      drawer_left: true,
      fixed: false,

      clipped_right: false,
      drawer_rigth: true,
      miniVariant_right: false,

      items_left: [
        {
          icon: 'bubble_chart',
          title: 'Елементи'
        }
      ],
      items_right: [
        {
          icon: 'bubble_chart',
          title: 'Питання'
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Quest builder',
      cards: [
        {
          title: 'Pre-fab homes',
          src: '/static/img/icons_app/music.png'
        }
      ]
    }
  },

  sockets: {
    connect: function () {
      console.log('socket connected')
    },
    news: function (cards) {
      console.log(cards)
      this.cards.push(cards)
    }
  },
  methods: {
    addCard: function () {
      this.cards.push({
        title: 'New',
        src: '/static/img/icons_app/music.png'
      })
    },
    clickButtonTest: function (val) {
      // $socket is socket.io-client instance
      console.log('click')
      this.$socket.emit('save', this.cards)
      this.cards = []
    }
  }
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#inspire {
  min-width: 1000px;
}
#main {
  height: 500px;
  min-width: 500px;
}
#content {
  min-width: 500px;
  max-height: 100%;
}
.e4 {
  width: 600px;
  margin: auto;
}
</style>

