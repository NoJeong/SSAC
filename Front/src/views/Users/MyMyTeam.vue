<template>
  <div>
    <br>
    <b-card-group columns deck>
        <b-card
          v-b-modal.modal-1
          v-for="(team, idx) in myteams"
          :key = "idx"
          :team="team"
          :src = "team.img"
          border-variant="success"
          tag="article"
          style="max-width: 15rem;"
          class="mb-2"
        >
          <b-container>

              
            <b-avatar 
            :src="team.img" 
            size="6rem"
            class="d-flex"
            >
            </b-avatar>

            <br>
            <b-card-title>
            <div v-if="team.nickname.length === 0">{{ team.name }}</div>
            <div v-else>{{ team.nickname }}</div>
            </b-card-title>

              <b-card-text>
                {{ team.followers }} 명이 좋아합니다.
              </b-card-text>
            <b-button pill variant="danger" size="sm">내 팀 제거</b-button>
          </b-container>
        </b-card>
        
    </b-card-group>


    
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'MyMyTeam',

  computed: {
   ...mapState({
     myteams: 'myTeams'
   })
  },
  methods: {
  }
}
</script>

<style>

.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
}
</style>