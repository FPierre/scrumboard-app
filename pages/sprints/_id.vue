<template>
  <div class='sprint-page'>
    <div class='tabs is-centered'>
      <ul>
        <li :class='{ "is-active": isSprint }'><a @click='currentTab = "sprint"'>Sprint</a></li>
        <li :class='{ "is-active": isStats }'><a @click='currentTab = "stats"'>Stats</a></li>
      </ul>
    </div>

    <div class='container'>
      <div class='tabs-content'>
        <template v-if='isSprint'>
          <h1 class='title'>Sprint #{{ sprint.id }}</h1>

          <template v-if='selectedIsCurrentSprint'>
            <h2 class='subtitle'>Day {{ sprint.day }}/{{ sprint.days }}</h2>

            <div class='field'>
              <label class='label'>How many points were done yesterday?</label>

              <div class='control'>
                <input class='input' type='text' placeholder='3, 4, 5, ...' v-model='pointsDone'>
              </div>
            </div>

            <button class='button is-medium is-success'>Save</button>
          </template>
          <template v-else>
            <h2 class='subtitle'>Done</h2>
          </template>
        </template>

        <template v-else-if='isStats'>
          <burndown-chart v-if='showLine' :data='burndownData' :options='options' />
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  data () {
    return {
      currentTab: 'sprint',
      pointsDone: 0,
      showLine: false
    }
  },
  computed: {
    ...mapGetters({
      sprint: 'scrum/selectedSprint',
      selectedIsCurrentSprint: 'scrum/selectedIsCurrentSprint'
    }),
    isSprint () {
      return this.currentTab === 'sprint'
    },
    isStats () {
      return this.currentTab === 'stats'
    },
    labels () {
      return this.sprint.progress.map(d => d.day)
    },
    actuallyDone () {
      let donePoints = this.sprint.points.done

      return this.sprint.progress.reduce((memo, p, index) => {
        donePoints = memo[index] - p.done
        memo.push(donePoints)

        return memo
      }, [this.sprint.points.done])
    },
    supposedlyDone () {
      const donePoints = this.sprint.points.done
      const t = [donePoints]
      const div = donePoints / (this.sprint.days - 1)
      let rest = donePoints

      for (let i = 0; i < this.sprint.days; i++) {
        t[i] = rest - div
        rest = t[i]
      }

      return t
    },
    burndownData () {
      return {
        labels: this.labels,
        datasets: [
          {
            borderColor: '#bbb',
            data: this.supposedlyDone,
            fill: false,
            label: 'Points supposedly done',
            lineTension: 0,
            pointRadius: 0
          },
          {
            borderColor: '#ce473f',
            data: this.actuallyDone,
            fill: false,
            label: 'Points actually done',
            lineTension: 0,
            pointRadius: 0
          }
        ]
      }
    },
    options () {
      return {
        responsive: false
      }
    }
  },
  created () {
    const selectedSprintId = parseInt(this.$route.params.id)
    this.setCurrentSprintId(selectedSprintId)

    // showLine will only be set to true on the client. This keeps the DOM-tree in sync.
    this.showLine = true
  },
  methods: mapActions({
    setCurrentSprintId: 'scrum/setCurrentSprintId'
  })
}
</script>
