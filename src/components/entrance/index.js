import article from '@/widgets/article/article';
import Vue from 'vue';

Vue.component('widget-article', article);

export default {
  name: 'entrance',
  data: function () {
    return {
      showSelect: false,
      languages: [],
      language: 1
    };
  },
  methods: {
    getPosition: function () {
      if (navigator.geolocation) {
        this.handleLanguagesList();
      }
    },
    handleLanguagesList() {
      this.languages = [
        {
          id: 1,
          title: 'English'
        },
        {
          id: 2,
          title: 'Catalonish'
        }
      ];
    }
  },
  mounted: function() {
    this.getPosition();
  }
};
