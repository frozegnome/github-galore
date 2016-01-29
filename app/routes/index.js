import Ember from 'ember';

let devs = [ 
  {
    "login": "frozegnome",
    "avatar_url": "https://avatars.githubusercontent.com/u/10196533?v=3",
    "name": "Patrick Caron"
  },
  {
    "login": "AFigueroa",
    "avatar_url": "https://avatars.githubusercontent.com/u/5385756?v=3",
    "name": "Antonio Figueroa"
  },
  {
    "login": "Rodrigo33024",
    "avatar_url": "https://avatars.githubusercontent.com/u/5258838?v=3",
    "name": "Rodrigo Gonzales"
  },
  {
    "login": "djamalfitano",
    "avatar_url": "https://avatars.githubusercontent.com/u/5420079?v=3",
    "name": "David Amalfitano"
  },
  {
    "login": "p-dilla",
    "avatar_url": "https://avatars.githubusercontent.com/u/10062499?v=3",
    "name": "Patrice Dillard"
  },
  {
    "login": "Mcmillianj94",
    "avatar_url": "https://avatars.githubusercontent.com/u/5806489?v=3",
    "name": "Joshua Mcmillian"
  },
  {
    "login": "carlosdanna",
    "avatar_url": "https://avatars.githubusercontent.com/u/3019518?v=3",
    "name": "Carlos Danna"
  },
  {
    "login": "hansel0691",
    "avatar_url": "https://avatars.githubusercontent.com/u/12420575?v=3",
    "name": "Hansel Garcia"
  }
];

export default Ember.Route.extend({
	model: function() {
		return devs;
	}
});
