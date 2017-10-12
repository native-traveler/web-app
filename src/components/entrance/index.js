import article from '@/widgets/article/article';
import Vue from 'vue';

Vue.component('widget-article', article);

export default {
  name: 'entrance',
  data: function () {
    return {
      languageId: 1,
      languageTitle: null,
      showLanguageSelect: true,
      showChosenLanguage: null,
      hotelId: null,
      hotelTitle: null,
      showHotelSelect: true,
      showChosenHotel: null,
      cityId: null,
      cityTitle: null,
      showCitySelect: false,
      showChosenCity: null,
      showCitySearching: false,
      showButtonChat: false,
      showButtonNext: true,
      showHotel: false,
      showCity: false,
      showSelect: false,
      showCityApplying: false,
      chooseCityTitle: 'Выбор города',
      showCityTitle: false,
      languages: [
        {
          id: 1,
          title: 'English'
        },
        {
          id: 2,
          title: 'Clyngonish1'
        },
        {
          id: 3,
          title: 'Clyngonish2'
        },
        {
          id: 4,
          title: '12Clyngonish2'
        },
        {
          id: 5,
          title: '12Clyngonish2'
        },
        {
          id: 6,
          title: 'Clyngonish'
        }
      ],
      hotels: [
        {
          id: 1,
          title: 'Albuzina'
        },
        {
          id: 2,
          title: 'Ferrishow'
        }
      ],
      cities: [
        {
          id: 1,
          title: 'Город1'
        },
        {
          id: 2,
          title: 'Город 2'
        }
      ]
    };
  },
  watch: {
    languageId: function (languageId) {
      this.setLanguage(languageId);
    },
    hotelId: function (hotelId) {
      this.setHotel(hotelId);
    }
  },
  methods: {
    nextStep () {
      if (!this.cityId) {
        this.setLanguage(this.languageId);
        this.getCity();
      } else if (!this.hotelId) {
        this.setCity(this.cityId);
        this.showHotel = true;
        this.showButtonNext = false;
      } else {
        this.showButtonChat = true;
        this.showButtonNext = false;
      }
    },
    setLanguage (languageId) {
      const language = this.languages.find(language => language.id === languageId);
      this.languageTitle = language.title;
      this.showLanguageSelect = false;
      this.showChosenLanguage = true;

      if (!this.cityId) {
          this.getCity();
      }
    },
    chooseLanguage () {
      this.showLanguageSelect = true;
      this.showChosenLanguage = false;
    },
    setHotel (hotelId) {
      const hotel = this.hotels.find(hotel => hotel.id === hotelId);
      this.hotelTitle = hotel.title;
      this.showHotelSelect = false;
      this.showChosenHotel = true;
      if (this.languageId && this.cityId && this.hotelId) {
        this.showButtonChat = true;
        this.showButtonNext = false;
      }
    },
    chooseHotel () {
      this.showHotelSelect = true;
      this.showChosenHotel = false;
    },
    setCity (cityId) {
      const city = this.cities.find(city => city.id === cityId);
      this.cityTitle = city.title;
      this.showCitySelect = false;
      this.showChosenCity = true;
      this.showHotel = true;
      this.chooseCityTitle = 'Город';
    },
    chooseCity () {
      this.showCitySelect = true;
      this.showChosenCity = false;
    },
    getCity () {
      this.showCityTitle = true;
      this.showCitySearching = true;
      this.showButtonNext = false;
      setTimeout(() => {
        const cityId = 1;
        this.cityId = cityId;
        const city = this.cities.find(city => city.id === cityId);
        this.cityTitle = city.title;
        this.showCityApplying = true;
        this.showCitySearching = false;
        this.chooseCityTitle = 'Город';
      }, 2000);
    },
    cityApply () {
      this.setCity(this.cityId);
      this.showCityApplying = false;
      this.chooseCityTitle = 'Город';
    },
    cityDecline () {
      this.showCityApplying = false;
      this.showCitySelect = true;
      this.showButtonNext = true;
    }
  }
};
