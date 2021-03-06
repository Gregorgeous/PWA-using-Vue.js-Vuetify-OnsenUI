import Vue from 'vue'
import Router from 'vue-router'
import signin from '@/components/signin'
import signup from '@/components/signup'
import HomePage from '@/components/HomePage'
import keysFinder from '@/components/keysFinder'
import venueEvents from '@/components/venueEvents'
import eventDetails from '@/components/VenueEventsComponents/eventDetails'
import editEvent from '@/components/VenueEventsComponents/editEvent'
import bookVenue from '@/components/bookVenue'
import venueCalendar from '@/components/venueCalendar'
import meetWithDCS from '@/components/meetWithDCS'
import userProfile from '@/components/userProfile'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/signin',
    },
    {
      path: '/homepage',
      name: 'HomePage',
      component: HomePage
    },
    {
      path: '/user-profile',
      name: 'userProfile',
      component: userProfile
    },
    {
      path: '/signin',
      name: 'signin',
      component:signin
    },
    {
      path: '/signup',
      name: 'signup',
      component: signup
    },
    {
      path: '/keysfinder',
      name: 'keysFinder',
      component: keysFinder
    },
    {
      path: '/venueevents',
      name: 'venueEvents',
      component: venueEvents
    },
    {
      path: '/venueevents/:event_id',
      name: 'eventDetails',
      component: eventDetails,
    },
    {
      path: '/venueevents/:editedEvent_id',
      name: 'editEvent',
      component: editEvent
    },
    {
      path: '/bookvenue',
      name: 'bookVenue',
      component: bookVenue
    },
    {
      path: '/venuecalendar',
      name: 'venueCalendar',
      component: venueCalendar
    },
    {
      path: '/meetwithdcs',
      name: 'meetWithDCS',
      component: meetWithDCS
    }
  ],

})
