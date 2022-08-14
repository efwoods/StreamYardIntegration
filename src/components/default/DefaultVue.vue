<template>
  <div>
    <h1>Create an event</h1>
    <form @submit.prevent="sendForm">
      <BaseSelect
        :options="categories"
        v-model="event.category"
        label="Select a category"
      />
      <fieldset>
        <legend>Name & describe your event</legend>

        <BaseInput v-model="event.title" label="Title" type="text" error="" />
        <BaseInput
          v-model="event.description"
          label="Description"
          type="text"
          error=""
        />
      </fieldset>
      <fieldset>
        <legend>Where is your event?</legend>
        <BaseInput v-model="event.location" label="Location" type="text" />
      </fieldset>

      <fieldset>
        <legend>Pets</legend>
        <p>Are Pets Allowed?</p>
        <BaseRadioGroup
          v-model="event.pets"
          :vertical="false"
          name="pets"
          :options="petOptions"
        />
      </fieldset>

      <fieldset>
        <legend>Extras</legend>
        <div>
          <BaseCheckbox v-model="event.extras.catering" label="Catering" />
        </div>
        <div>
          <BaseRadio
            v-model="event.radio"
            :value="0"
            label="Radio Toggle Button"
            name="unique"
          />
        </div>
      </fieldset>

      <BaseButton type="submit" class="-fill-gradient">Submit</BaseButton>
    </form>
  </div>
</template>

<script>
import BaseInput from './BaseInput.vue'
import BaseCheckbox from './BaseCheckbox.vue'
import BaseRadio from './BaseRadio.vue'
import DefaultService from '@/services/DefaultService'
import BaseButton from './BaseButton.vue'

export default {
  name: 'DefaultVue',
  components: {
    BaseCheckbox,
    BaseInput,
    BaseRadio,
    BaseButton,
  },
  created() {},
  data() {
    return {
      categories: [
        'sustainability',
        'nature',
        'animal welfare',
        'housing',
        'education',
        'food',
        'community',
      ],
      event: {
        category: '',
        title: '',
        description: '',
        location: '',
        pets: 1,
        radio: 1,
        extras: {
          catering: false,
          music: false,
        },
      },
      petOptions: [
        { label: 'Yes', value: 1 },
        { label: 'No', value: 0 },
      ],
    }
  },
  props: {},
  methods: {
    sendForm(e) {
      DefaultService.sendForm(e)
      // best practice will be to validate submission in the service before sending
      // even if the receiving server also has form validation
    },
  },
}
</script>

<style scoped>
fieldset {
  border: 0;
  margin: 0;
  padding: 0;
}

legend {
  font-size: 28px;
  font-weight: 700;
  margin-top: 20px;
}
</style>
