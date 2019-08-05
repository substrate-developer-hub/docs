/**
 * Copyright 2019 Parity Technologies
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at

 *     http://www.apache.org/licenses/LICENSE-2.0

 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// List of projects listed on the "presentations" page.

// INSTRUCTIONS:
// If you would like to add a presentation to this list, please open a Pull Request.
// Must include a YouTube videos and a presentation slide deck.
// Presentations are ordered first by weight, and then by date.
//
// "name": Presenter Name.
// "company": Presenter Company
// "homepage": Homepage link for company
// "title": Title of the presentation
// "summary": Summary of the presentation content.
// "youtube": A YouTube **embed** link
// "link": Link to access presentation. Should be saved in `website/static/presentations/`.
// "date": Date of presentation
// "location": Location of presentation
// "weight": Set to 100 by default. Videos with weight less than 0 will be "featured".

const presentationList = [
  {
    name: "Shawn Tabrizi",
    company: "Parity Technologies",
    homepage: "https://parity.io",
    title: "Enabling Forkless Upgrades with Substrate",
    summary: "Learn how the Substrate framework is built to enable forkless runtime upgrades.",
    youtube: "https://www.youtube.com/embed/0aTnxHrV_j4",
    link: "/presentations/Shawn Tabrizi - Substrate - Forkless Upgrades.pdf",
    date: Date.parse("Feb 3, 2019"),
    location: "DOT Day: Seoul, Korea",
    weight: -1
  }
];

function weight_then_date(a, b) {
  // First sort by weight
  if (a.weight < b.weight) {
    return -1;
  }
  if (a.weight > b.weight) {
    return 1;
  }
  // Then sort by date
  if (a.date < b.date) {
    return -1;
  }
  if (a.date > b.date) {
    return 1;
  }
  return 0;
}

module.exports = presentationList.sort(weight_then_date);
