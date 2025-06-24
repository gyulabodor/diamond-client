import {Page} from "./page.model";

export const ACTUAL_PAGES_DATA : Page[] = [
  {
    url: 'home',
    navButtonText: "Home",
    oldUrl: "actual",
    oldParams: [],
    adminOnly: false
  },
  {
    url: 'about',
    navButtonText: "About Us",
    oldUrl: "about",
    oldParams: [],
    adminOnly: false
  },
  {
    url: 'listing',
    navButtonText: "Listing",
    oldUrl: "properties",
    oldParams: [],
    adminOnly: false
  },
  {
    url: 'contact-us',
    navButtonText: "Contact",
    oldUrl: "contact",
    oldParams: [],
    adminOnly: false
  },
  {
    url: 'not-found',
    navButtonText: "",
    oldUrl: "notfound",
    oldParams: [],
    adminOnly: false
  }
]
